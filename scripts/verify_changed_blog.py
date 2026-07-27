#!/usr/bin/env python3
"""Run the blog quality gate only for articles changed by the current commit."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BLOG_ROOT = ROOT / "src/content/blog"
VERIFIER = ROOT / "scripts/verify_blog_length.py"


def changed_articles() -> list[Path]:
    result = subprocess.run(
        [
            "git",
            "diff-tree",
            "--no-commit-id",
            "--name-only",
            "--diff-filter=ACMR",
            "-r",
            "HEAD",
            "--",
            "src/content/blog",
        ],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    articles: list[Path] = []
    for line in result.stdout.splitlines():
        path = ROOT / line.strip()
        if path.parent == BLOG_ROOT and path.suffix in {".md", ".mdx"} and path.is_file():
            articles.append(path)
    return sorted(articles)


def main() -> int:
    articles = changed_articles()
    if not articles:
        print("[verify:blog:changed] No Blog files changed in HEAD; skipping article gate.")
        return 0

    relative = [str(path.relative_to(ROOT)) for path in articles]
    print(f"[verify:blog:changed] Validating {len(relative)} changed article(s).")
    return subprocess.call([sys.executable, str(VERIFIER), *relative], cwd=ROOT)


if __name__ == "__main__":
    raise SystemExit(main())
