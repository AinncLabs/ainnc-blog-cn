import type { CollectionEntry } from 'astro:content';

export type Locale = 'zh' | 'en';

export const SITE_COPY = {
	zh: {
		title: 'Ainnc 麦芽营销',
		description: '分享 Ainnc 麦芽营销的产品更新、社媒账号运营、素材管理和批量任务发布实践。',
		home: '首页',
		blog: '博客',
		about: '关于',
		officialSite: '进入官网',
		telegram: '加入 Telegram',
	},
	en: {
		title: 'Ainnc',
		description:
			'Product updates, social account operations, asset management, and bulk publishing workflows from Ainnc.',
		home: 'Home',
		blog: 'Blog',
		about: 'About',
		officialSite: 'Official Site',
		telegram: 'Join Telegram',
	},
} as const;

const EN_POSTS = {
	'ainnc-start': {
		title: 'The Ainnc Blog Is Live',
		description:
			'Product updates, social account operations, asset management, and bulk publishing practices from Ainnc.',
		category: 'Product Updates',
		tags: ['Ainnc', 'Product', 'Blog'],
		sections: [
			{
				paragraphs: [
					'Welcome to the Ainnc Blog.',
					'Here we will share product updates, social media operations guides, bulk task publishing practices, and lessons from building a scalable operations console.',
				],
			},
			{
				heading: 'What We Will Cover',
				paragraphs: [
					'Ainnc product updates and release notes.',
					'Account importing, grouping, device binding, and proxy IP setup.',
					'Video, image, and document asset management workflows.',
					'Bulk publishing practices for TikTok, Instagram, Reddit, X, and other social platforms.',
					'Usage limits, task status tracking, and execution review.',
				],
			},
		],
	},
	'account-device-proxy-guide': {
		title: 'Accounts, Devices, and Proxy IPs: Three Things to Prepare Before Bulk Operations',
		description:
			'Organize account groups, device bindings, and proxy IPs before entering the task center.',
		category: 'Tutorials',
		tags: ['Accounts', 'Proxy IP', 'Device Binding'],
		sections: [
			{
				paragraphs: [
					'Before publishing bulk tasks in Ainnc, it is worth organizing accounts, devices, and proxy IP resources first.',
					'Accounts define the task targets, devices define the execution environment, and proxy IPs affect login stability and platform access.',
				],
			},
			{
				heading: 'Recommended Preparation Flow',
				paragraphs: [
					'Import accounts and group them by region, platform, or business line.',
					'Bind devices so accounts can be scheduled by tasks.',
					'Configure proxy IPs and check abnormal proxies regularly.',
					'Once these relationships are stable, publishing tasks for TikTok, Instagram, Reddit, X, and other platforms becomes easier to manage and troubleshoot.',
				],
			},
		],
	},
	'task-files-publishing': {
		title: 'Turning Task Files Into Reusable Publishing Assets',
		description:
			'How to upload, group, and reuse video, image, and document assets in Ainnc.',
		category: 'Operations',
		tags: ['Assets', 'Task Publishing', 'Content Operations'],
		sections: [
			{
				paragraphs: [
					'Ainnc lets teams manage images, videos, and documents in one file module. After upload, these assets can be selected directly in task parameters.',
					'For bulk publishing, asset management is not just storage. It is the foundation for repeatable publishing workflows.',
				],
			},
			{
				heading: 'Recommended Grouping Methods',
				paragraphs: [
					'Group by platform, such as TikTok, Instagram, Reddit, and X.',
					'Group by content theme, such as product demos, campaign assets, and customer stories.',
					'Group by publishing cycle, such as weekly campaigns, test assets, and final assets.',
					'When assets, accounts, and task batches are aligned, reviewing task status and execution results becomes much clearer.',
				],
			},
		],
	},
	'spreadsheets-break-50': {
		title: 'Why Spreadsheets Break After 50 Social Accounts',
		description:
			'The hidden cost of tracking accounts, logins, and content in sheets, plus what a living account record should contain.',
		category: 'Operations Playbook',
		tags: ['Spreadsheets', 'Account Operations', 'Operations Systems'],
		sections: [
			{
				paragraphs: [
					'Most social media teams start with spreadsheets. With a small account pool, that feels practical: username, password, platform, status, owner, and notes.',
					'The problem rarely appears with the first account. It appears once the account pool passes 50 and the spreadsheet stops being a system. It becomes a record that is always slightly out of date.',
				],
			},
			{
				heading: 'Where Spreadsheets Fail First',
				paragraphs: [
					'Status updates lag behind reality. Whether an account logged in, which device it used, which proxy was abnormal, and whether the latest task succeeded are all hard to keep fresh by hand.',
					'Context also becomes scattered. Credentials live in a sheet, assets live in a drive, task progress lives in chat, and error screenshots live on someone’s desktop.',
					'As the team grows, access control becomes another problem. A spreadsheet is not a safe place for everyone to copy full account details.',
				],
			},
			{
				heading: 'Accounts Need Living Records',
				paragraphs: [
					'A useful account record should show which device the account uses, which proxy is assigned, which tasks were executed, which assets were published, and what failed last time.',
					'When those events are captured automatically, the team no longer has to reconstruct the truth from memory and chat messages.',
				],
			},
			{
				heading: 'When to Move Beyond Sheets',
				paragraphs: [
					'Sheets can work for a few accounts. Once the workflow includes many operators, multiple platforms, proxies, devices, and repeated publishing tasks, account management needs to become an operating system.',
					'Ainnc turns accounts into operational objects that can be grouped, bound to devices, assigned resources, scheduled into tasks, and traced over time.',
				],
			},
		],
	},
	'real-social-ops-platform': {
		title: 'What a Real Social Media Operations Platform Should Look Like',
		description:
			'How teams move from scattered tools to one shared operating layer for accounts, assets, tasks, and data.',
		category: 'Operations Playbook',
		tags: ['Operations Platform', 'Team Workflow', 'Bulk Operations'],
		sections: [
			{
				paragraphs: [
					'Many teams think they already have a social media operations system because they use spreadsheets, cloud drives, proxy tools, browser environments, chat apps, and task boards.',
					'But having many tools is not the same as having one system. If the data does not connect, the team spends its day copying, checking, and explaining status.',
				],
			},
			{
				heading: 'A Platform Connects the Core Objects',
				paragraphs: [
					'The main objects in social operations are simple: accounts, devices, proxies, assets, tasks, and results.',
					'A real platform should let these objects reference each other. Accounts should know which device they run on. Tasks should know which assets they used. Results should flow back to the accounts and assets involved.',
				],
			},
			{
				heading: 'Teams Need One Shared View',
				paragraphs: [
					'Managers need to know which tasks succeeded, which accounts are abnormal, which assets have been used, and which clients need a review.',
					'Operators need to know what to do next and how to respond when a task fails. A shared operating view reduces repeated meetings and chat-based status checks.',
				],
			},
			{
				heading: 'Automation Is Only One Part',
				paragraphs: [
					'The larger value is stable records, clear ownership, traceable execution, and fast issue location.',
					'Ainnc gives teams a reliable layer where accounts, assets, and tasks are managed together instead of scattered across separate tools.',
				],
			},
		],
	},
	'mcn-prove-value-with-data': {
		title: 'How MCN Agencies Prove Value to Clients With Data',
		description:
			'Turning execution records into review-ready reports is one of the most underrated renewal tools for agency teams.',
		category: 'Operations Playbook',
		tags: ['MCN', 'Agency Operations', 'Client Reporting'],
		sections: [
			{
				paragraphs: [
					'For agency teams, the hardest part is not always doing the work. It is making the client clearly see what was done.',
					'Teams log in, organize assets, publish content, fix abnormal accounts, and follow up on results every day. But if the monthly review is only a few screenshots and a hand-built sheet, clients may not feel the value behind the work.',
				],
			},
			{
				heading: 'What Clients Actually Want to Know',
				paragraphs: [
					'Clients care about more than how many posts were published. They want to know whether accounts are healthy, whether publishing happened on schedule, whether issues were found in time, and whether the team can keep delivering at a larger scale.',
					'Those answers need execution data, not only verbal updates.',
				],
			},
			{
				heading: 'Turn Operations Into Review Assets',
				paragraphs: [
					'Every login task, publishing task, asset upload, and issue fix should leave a record.',
					'An agency can report on account pool status, task completion rate, failure reasons, asset usage, publishing rhythm, and abnormal account handling.',
				],
			},
			{
				heading: 'Data Makes Renewals Easier',
				paragraphs: [
					'Renewals are built before the renewal conversation. Each stable task and each resolved issue adds trust.',
					'Ainnc helps teams keep accounts, assets, tasks, and execution results in one workflow, turning internal operations into client-facing proof.',
				],
			},
		],
	},
	'cloud-phone-vs-browser': {
		title: 'Cloud Phones vs. Browsers: Which Is Safer for Accounts?',
		description:
			'Browser fingerprinting and cloud-phone isolation solve different problems. The right choice depends on account scale.',
		category: 'Product Capabilities',
		tags: ['Cloud Phones', 'Browser Fingerprints', 'Account Safety'],
		sections: [
			{
				paragraphs: [
					'Social account operators often ask whether they should use browser environments or cloud phones.',
					'The answer depends on the type of task and the risk layer you need to control. These two approaches are not interchangeable.',
				],
			},
			{
				heading: 'Browsers Are Better for Lightweight Work',
				paragraphs: [
					'Browser environments are fast to launch and useful for web-based management, login checks, and light operations.',
					'They mainly address session and fingerprint separation. They do not fully reproduce a mobile app environment.',
				],
			},
			{
				heading: 'Cloud Phones Are Closer to Real Devices',
				paragraphs: [
					'Cloud phones provide device-level isolation. Each account can run inside a more independent mobile environment, which is useful for app login, warming, publishing, and long-term account work.',
					'As the account pool grows, device relationships, proxy relationships, and task history become critical.',
				],
			},
			{
				heading: 'Choose Based on Scale and Task Type',
				paragraphs: [
					'For a few accounts and mostly web-based work, browsers may be enough. For multi-account, multi-platform, long-term mobile operations, cloud phones are usually a stronger foundation.',
					'Ainnc focuses on managing accounts, devices, proxies, and tasks together, because account safety comes from the whole operating environment.',
				],
			},
		],
	},
	'proxy-ip-types': {
		title: 'Static, Dynamic, and Mobile IPs: How to Choose a Proxy',
		description:
			'There is no single best proxy type. The right setup depends on account volume, market coverage, and risk tolerance.',
		category: 'Product Capabilities',
		tags: ['Proxy IP', 'Static IP', 'Mobile IP'],
		sections: [
			{
				paragraphs: [
					'Proxy IPs are often treated as a basic access tool, but for social account operations they are infrastructure.',
					'The long-term risk depends on IP type, location, reuse rules, and how clearly proxies are mapped to accounts and devices.',
				],
			},
			{
				heading: 'Static IPs Support Stable Account Relationships',
				paragraphs: [
					'Static IPs are useful when an account needs a consistent access environment. This is often better for long-term accounts and client-owned accounts.',
					'The risk is concentration: a low-quality IP or excessive sharing can affect multiple accounts.',
				],
			},
			{
				heading: 'Dynamic IPs Support Flexible Scheduling',
				paragraphs: [
					'Dynamic IPs are useful for testing, coverage, and flexible task allocation. But frequent changes in location and network pattern can also look abnormal.',
					'Dynamic does not mean random. It still needs operating rules.',
				],
			},
			{
				heading: 'Mobile IPs Fit Some Mobile-First Scenarios',
				paragraphs: [
					'Mobile IPs can be closer to real mobile traffic and may fit higher-risk mobile scenarios, but they often cost more and need stricter allocation.',
					'Ainnc treats proxies as trackable resources that can be assigned, checked, and connected to account and task records.',
				],
			},
		],
	},
	'one-workflow-five-tools': {
		title: 'From Content Creation to Publishing: One Workflow Instead of Five Tools',
		description:
			'A practical look at how one content asset moves from idea to publication across four platforms with less handoff friction.',
		category: 'Product Capabilities',
		tags: ['Content Workflow', 'Asset Management', 'Bulk Publishing'],
		sections: [
			{
				paragraphs: [
					'Content operations rarely fail because teams cannot create content. They fail because content has to pass through too many disconnected steps before it is published.',
					'A video may move from an editing tool to a drive, then into a spreadsheet, then to an operator, then into each platform manually.',
				],
			},
			{
				heading: 'More Tools Mean More Handoffs',
				paragraphs: [
					'Storage tools, account sheets, task chats, and publishing environments all have value. But when they do not share records, the team repeats the same questions: is this the final asset, which account should publish it, and did the task succeed?',
				],
			},
			{
				heading: 'A Workflow Should Cover the Full Path',
				paragraphs: [
					'A better flow starts with a shared asset library. Operators can select assets directly in task parameters, run publishing batches, and review results from the same workflow.',
					'Assets, accounts, and task results stay connected.',
				],
			},
			{
				heading: 'Less Handoff Means Fewer Errors',
				paragraphs: [
					'Many mistakes come from handoffs: wrong file versions, wrong accounts, missed platforms, and failures no one noticed.',
					'Ainnc connects content assets, account resources, and task execution so teams spend less time copying information and more time improving operations.',
				],
			},
		],
	},
	'tiktok-risk-guide': {
		title: 'How to Avoid Common Risk-Control Issues in Bulk TikTok Operations',
		description:
			'Account safety comes down to believable independence, natural operating rhythm, and a baseline of content originality.',
		category: 'Platform Guides',
		tags: ['TikTok', 'Risk Control', 'Account Safety'],
		sections: [
			{
				paragraphs: [
					'The biggest risk in bulk TikTok operations is not one account failing. It is a pattern that affects the whole account pool.',
					'A shared device, shared IP, or repeated behavior pattern can make many accounts unstable at the same time.',
				],
			},
			{
				heading: 'Keep Environments Independent',
				paragraphs: [
					'Accounts should avoid sharing too much environment context. Devices, proxy IPs, login habits, and usage patterns should be managed carefully.',
					'Long-term accounts are usually safer with more consistent device and proxy relationships.',
				],
			},
			{
				heading: 'Control the Operating Rhythm',
				paragraphs: [
					'Bulk operations should not mean every account does the same thing at the same time.',
					'Split tasks into batches, vary time windows, and avoid highly repetitive behavior across the account pool.',
				],
			},
			{
				heading: 'Avoid Over-Repeated Content',
				paragraphs: [
					'Even with good environment isolation, repeated content can reduce distribution and increase risk.',
					'Ainnc helps teams manage accounts, assets, devices, and tasks, but stable TikTok operations also need thoughtful content planning and execution rhythm.',
				],
			},
		],
	},
	'global-brand-scale': {
		title: 'Building Scalable Social Operations for Global Brands',
		description:
			'The common localization traps brands face when entering new markets, and the four layers scalable operations require.',
		category: 'Global Growth',
		tags: ['Global Brands', 'Global Growth', 'Localization'],
		sections: [
			{
				paragraphs: [
					'When a global brand enters a new market, social media operations are more complex than translating headquarters content.',
					'Accounts, content, publishing rhythm, and team collaboration all need to fit the local market.',
				],
			},
			{
				heading: 'Layer One: Account Infrastructure',
				paragraphs: [
					'Each market may need its own accounts, device environments, proxy strategy, and access rules.',
					'If ownership and device relationships are unclear early, scaling later becomes difficult.',
				],
			},
			{
				heading: 'Layer Two: Content Asset Management',
				paragraphs: [
					'Global brands often use headquarters assets, local assets, campaign assets, and test assets at the same time.',
					'Assets should be organized by market, platform, theme, and cycle so local teams can reuse them safely.',
				],
			},
			{
				heading: 'Layer Three and Four: Execution and Learning',
				paragraphs: [
					'Localized publishing depends on local holidays, active hours, platform habits, and review risk. Tasks need batch management, status tracking, and issue review.',
					'Ainnc helps brands manage accounts, assets, and tasks in one framework so local operations become repeatable instead of improvised.',
				],
			},
		],
	},
	'localization-how-deep': {
		title: 'How Deep Should Localization Go for Global Social Media?',
		description:
			'Translation helps audiences understand you. Localization makes them want to keep watching. Those are different jobs.',
		category: 'Global Growth',
		tags: ['Localization', 'Global Brands', 'Social Content'],
		sections: [
			{
				paragraphs: [
					'Many global teams treat localization as translation. Translation matters, but in social media it is only the first layer.',
					'Real localization adapts to local language habits, platform culture, buying psychology, and interaction style.',
				],
			},
			{
				heading: 'Language Is Only the First Layer',
				paragraphs: [
					'Translating copy helps people understand the message. It does not guarantee they will stop, watch, comment, or share.',
					'The same product benefit may need a direct functional angle in one market and a trust-building scenario in another.',
				],
			},
			{
				heading: 'Platform Habits Need Localization Too',
				paragraphs: [
					'TikTok, Instagram, Reddit, and X have different content cultures. A video hook that works on TikTok may feel unnatural on Reddit.',
					'Localization means adapting the format, not only the words.',
				],
			},
			{
				heading: 'Execution Should Match the Market',
				paragraphs: [
					'Publishing time, account persona, interaction rhythm, asset selection, and comment handling all need local context.',
					'Ainnc helps teams group accounts, assets, and tasks by market so localization can become a repeatable operating process.',
				],
			},
		],
	},
	'scaling-social-account-operations': {
		title: 'How Agencies Manage Hundreds of Social Accounts Without Losing Control',
		description:
			'Most agency teams hit the same wall between 20 and 50 accounts. Here is where things break and what a real operations system should look like.',
		category: 'Operations Playbook',
		tags: ['Scale', 'Social Accounts', 'Agencies', 'MCN', 'Global Brands'],
		sections: [
			{
				paragraphs: [
					'If you run a social media agency, MCN, or global brand team, the hard part is rarely publishing one post. The hard part is keeping hundreds or thousands of accounts logged in, healthy, traceable, and publishing consistently across TikTok, Instagram, Reddit, and X.',
					'When a team manages only a small number of accounts, spreadsheets, reminders, and spare devices can work for a while. Once the account pool reaches 50, 100, or more, the old workflow starts to break: logins get messy, devices and IPs overlap, assets are hard to find, tasks are missed, and abnormal accounts are discovered too late.',
				],
			},
			{
				heading: 'Where Operations Start to Break',
				paragraphs: [
					'Many teams begin with spreadsheets for usernames, passwords, platforms, and client ownership.',
					'They use multiple phones or browser environments to separate accounts, manually purchase and rotate proxy IPs, store creative assets in local folders, and track progress through chat messages or shared sheets.',
					'This can work for 10 accounts. At 50 accounts, maintaining the system itself becomes a job. At 100 or more, it becomes a risk to account safety, delivery stability, and team collaboration.',
				],
			},
			{
				heading: 'What a Real Operations System Needs',
				paragraphs: [
					'Each account needs an isolated operating environment so one account does not easily affect the rest of the pool.',
					'Proxy IPs should be centrally managed and assigned to accounts, devices, and tasks instead of being copied from another tool by hand.',
					'Assets should live in a shared file library so videos, images, copy, and task parameters can be reused.',
					'Repetitive actions such as login, warming, publishing, and status checks should become batch tasks that can be tracked from one dashboard.',
				],
			},
			{
				heading: 'Predictability Matters More Than Time Savings',
				paragraphs: [
					'Automation is often described as a time-saving story. For agencies, MCNs, and global teams, the larger value is predictability.',
					'Clients are not only paying someone to post content. They are paying for stable execution: active accounts, scheduled publishing, timely issue detection, and a team that can keep delivering as the account count grows.',
				],
			},
			{
				heading: 'How Ainnc Fits In',
				paragraphs: [
					'Ainnc brings social accounts, cloud environments, proxy IPs, content assets, bulk publishing, and execution results into one workflow.',
					'Teams can import and group accounts, bind devices, configure proxies, upload assets, and use the task center to run login, warming, and publishing workflows across TikTok, Instagram, Reddit, X, and other platforms.',
				],
			},
		],
	},
} as const;

export function isEnglishPath(pathname: string) {
	return pathname === '/en' || pathname.startsWith('/en/');
}

export function localizedPath(pathname: string, locale: Locale) {
	const cleanPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
	const withoutEnglish = isEnglishPath(cleanPath) ? cleanPath.replace(/^\/en/, '') || '/' : cleanPath;

	if (locale === 'zh') {
		return withoutEnglish === '/' ? '/' : `${withoutEnglish}/`;
	}

	return withoutEnglish === '/' ? '/en/' : `/en${withoutEnglish}/`;
}

export function getPostMeta(post: CollectionEntry<'blog'>, locale: Locale) {
	if (locale === 'en') {
		const english = EN_POSTS[post.id as keyof typeof EN_POSTS];
		if (english) {
			return {
				title: english.title,
				description: english.description,
				category: english.category,
				tags: [...english.tags],
			};
		}
	}

	return {
		title: post.data.title,
		description: post.data.description,
		category: post.data.category,
		tags: post.data.tags,
	};
}

export function getEnglishSections(postId: string) {
	return EN_POSTS[postId as keyof typeof EN_POSTS]?.sections ?? [];
}
