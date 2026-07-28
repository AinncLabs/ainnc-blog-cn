#!/usr/bin/env python3
"""Run the blog quality gate only for articles changed by the current commit."""

from __future__ import annotations

import subprocess
import os
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BLOG_ROOT = ROOT / "src/content/blog"
VERIFIER = ROOT / "scripts/verify_blog_length.py"


def changed_articles() -> list[Path]:
    if os.environ.get("BLOG_VERIFY_WORKTREE") == "1":
        commands = [
            ["git", "diff", "--name-only", "--diff-filter=ACMR", "HEAD", "--", "src/content/blog"],
            ["git", "ls-files", "--others", "--exclude-standard", "--", "src/content/blog"],
        ]
    else:
        commands = [[
            "git",
            "diff-tree",
            "--no-commit-id",
            "--name-only",
            "--diff-filter=ACMR",
            "-r",
            "HEAD",
            "--",
            "src/content/blog",
        ]]

    changed: set[str] = set()
    for command in commands:
        result = subprocess.run(
            command,
            cwd=ROOT,
            check=True,
            capture_output=True,
            text=True,
        )
        changed.update(line.strip() for line in result.stdout.splitlines() if line.strip())

    articles: list[Path] = []
    for line in sorted(changed):
        path = ROOT / line
        if path.parent == BLOG_ROOT and path.suffix in {".md", ".mdx"} and path.is_file():
            articles.append(path)
    return sorted(articles)


def main() -> int:
    articles = changed_articles()
    if not articles:
        source = "working tree" if os.environ.get("BLOG_VERIFY_WORKTREE") == "1" else "HEAD"
        print(f"[verify:blog:changed] No Blog files changed in {source}; skipping article gate.")
        return 0

    relative = [str(path.relative_to(ROOT)) for path in articles]
    print(f"[verify:blog:changed] Validating {len(relative)} changed article(s).")
    return subprocess.call([sys.executable, str(VERIFIER), *relative], cwd=ROOT)


if __name__ == "__main__":
    raise SystemExit(main())
