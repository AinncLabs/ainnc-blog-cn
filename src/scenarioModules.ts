import type { Locale } from './i18n';

type ScenarioModule = {
	scene: string;
	problem: string;
	solution: string;
	outcome: string;
};

const ZH_SCENARIOS: Record<string, ScenarioModule> = {
	'scaling-social-account-operations': {
		scene: '代运营机构、MCN 或出海品牌团队开始从几十个账号扩到上百个账号，需要同时管理 TikTok、Instagram、Reddit 和 X 的日常运营。',
		problem: '账号、设备、代理、素材和任务结果分散在不同工具里，团队很难判断哪一批账号健康、哪一批任务真正完成、哪些异常需要优先处理。',
		solution: 'Ainnc 把账号分组、设备绑定、代理 IP、素材库和任务中心放到同一套工作流里，让每个账号从准备到执行都有记录。',
		outcome: '团队可以从“靠表格记忆”转向“靠系统协作”，账号规模扩大后仍然能看清执行状态和问题来源。',
	},
	'spreadsheets-break-50': {
		scene: '团队最初用表格管理账号，但账号数量超过 50 个后，登录状态、设备关系、素材版本和任务进度开始频繁对不上。',
		problem: '表格只能记录静态信息，无法自动反映账号是否登录、设备是否可用、任务是否成功，也很难控制多人协作时的权限和版本。',
		solution: 'Ainnc 把账号变成可执行、可追踪的运营对象，账号可以关联设备、代理、素材和任务结果，不再只是表格里的一行文字。',
		outcome: '团队能更快识别异常账号，减少重复沟通和手动回填，让账号池从资料表变成可运营的资源池。',
	},
	'real-social-ops-platform': {
		scene: '运营团队已经有云手机、代理工具、网盘、表格和聊天群，但每天仍然要人工拼接信息才能知道任务有没有跑完。',
		problem: '工具很多，但数据没有连接。账号不知道用过哪些素材，任务不知道关联哪些设备，管理者也无法快速看到真实执行情况。',
		solution: 'Ainnc 提供统一的运营层，把账号、设备、代理、素材、任务和结果连接起来，让团队在同一个视图里推进工作。',
		outcome: '从“工具堆叠”变成“系统协作”，减少信息搬运，让管理者和执行同事看到同一套事实。',
	},
	'task-center': {
		scene: '团队每天需要给多个客户或市场批量执行登录、发布、养号和资料更新任务，并且每批任务涉及不同账号、素材和平台。',
		problem: '如果所有动作都藏在一个按钮里，失败后很难判断是账号、设备、素材、参数还是平台规则出了问题。',
		solution: 'Ainnc 任务中心把任务拆成清晰步骤，并在执行前检查账号和设备状态，执行后沉淀批次、账号、平台和结果记录。',
		outcome: '批量执行不再是黑箱，团队可以更快定位失败原因，也能把执行数据用于复盘和客户汇报。',
	},
	'mcn-prove-value-with-data': {
		scene: 'MCN 或代运营机构每月需要向客户证明账号运营、内容发布和异常处理的工作价值。',
		problem: '如果只有聊天记录、截图和人工表格，客户很难感知团队做了多少工作，也很难判断执行是否稳定。',
		solution: 'Ainnc 让登录、发布、素材使用和任务结果自动形成记录，把内部执行过程沉淀成可展示的数据。',
		outcome: '团队能用完成率、失败原因、账号状态和素材使用情况讲清楚服务价值，让续费沟通更有依据。',
	},
	'cloud-phone-vs-browser': {
		scene: '团队要为多个社媒账号选择运行环境，不确定应该用浏览器指纹环境，还是更接近移动端的云手机环境。',
		problem: '不同环境解决的问题不同。浏览器适合轻量管理，云手机更接近真实移动设备；如果混用不清，账号安全策略会很乱。',
		solution: 'Ainnc 以账号、设备、代理和任务的关系为核心，把运行环境作为可管理资源，而不是临时打开的工具。',
		outcome: '团队可以根据账号级别、平台类型和任务风险选择环境，减少因为环境混乱带来的账号异常。',
	},
	'proxy-ip-types': {
		scene: '团队需要给不同国家、不同平台、不同账号批次配置代理 IP，但不知道静态、动态、移动 IP 应该怎么分配。',
		problem: '代理 IP 如果只靠人工复制和临时记录，很容易出现账号共用、地区不一致、异常 IP 没有及时替换等问题。',
		solution: 'Ainnc 把代理作为可分配、可检查、可关联的资源，让代理和账号、设备、任务形成清晰关系。',
		outcome: '团队能更稳定地管理访问环境，减少 IP 配置混乱带来的登录失败和账号风险。',
	},
	'one-workflow-five-tools': {
		scene: '一条内容从制作、上传、分配账号到多平台发布，中间需要经过网盘、表格、聊天工具和多个平台后台。',
		problem: '每多一个工具，就多一次信息搬运和出错机会。素材版本、账号分配、任务状态很容易在交接中丢失。',
		solution: 'Ainnc 把素材库、账号资源和任务执行串成一条流程，让运营人员在任务参数里直接选择素材和账号。',
		outcome: '内容从资产到发布的路径更短，团队减少重复复制，也能更清楚地复盘每个素材被用到了哪里。',
	},
	'tiktok-risk-guide': {
		scene: '团队要在 TikTok 上批量运营多个账号，但又担心账号行为太一致、环境重叠或内容重复导致风控。',
		problem: '账号安全不只看单个动作，而是看设备、IP、登录节奏、发布内容和互动行为是否呈现异常模式。',
		solution: 'Ainnc 帮团队把账号、设备、代理、任务节奏和素材使用纳入统一管理，降低重复和混乱带来的风险。',
		outcome: '批量运营可以更接近真实账号行为，团队也能更早发现异常账号和异常批次。',
	},
	'global-brand-scale': {
		scene: '出海品牌进入多个市场，需要同时管理不同地区的账号、本地化内容、平台节奏和团队协作。',
		problem: '总部素材、当地素材、测试内容和正式内容混在一起，账号和市场关系不清，发布节奏也难以统一管理。',
		solution: 'Ainnc 支持按市场、平台、客户或项目组织账号和素材，并用任务中心执行不同市场的发布计划。',
		outcome: '品牌可以把本地化运营变成可复制流程，而不是每进入一个市场就重新搭一套临时协作方式。',
	},
	'localization-how-deep': {
		scene: '品牌在不同国家发布社媒内容时，已经完成翻译，但互动率、完播率或评论质量仍然不理想。',
		problem: '翻译只能解决看懂的问题，真正的本地化还涉及账号人设、平台语境、发布时间、内容角度和互动方式。',
		solution: 'Ainnc 让团队按市场管理账号、素材和任务，把本地化执行沉淀成可复用的运营流程。',
		outcome: '团队能更系统地测试不同市场的内容策略，而不是只把同一套内容换一种语言发布。',
	},
};

const EN_SCENARIOS: Record<string, ScenarioModule> = {
	'task-center': {
		scene: 'Agencies, MCNs, and global teams need to run login, publishing, warming, and profile-update tasks across many accounts and platforms.',
		problem: 'If every action is hidden behind one button, operators cannot tell whether a failure came from the account, device, asset, parameter, or platform rule.',
		solution: 'Ainnc separates work into task flows, checks account readiness before execution, and records batch, account, platform, device, and result data after execution.',
		outcome: 'Bulk execution becomes traceable instead of black-box, so teams can locate issues faster and use execution records for review.',
	},
};

const DEFAULT_ZH_SCENARIO: ScenarioModule = {
	scene: '团队正在规模化运营多个社媒账号，需要把账号、素材、设备、代理和任务结果放进同一个可协作流程。',
	problem: '当账号数量变多后，信息分散、状态不透明、异常难定位会让运营效率和账号稳定性同时下降。',
	solution: 'Ainnc 提供账号管理、代理 IP、文件素材、任务中心和执行记录，帮助团队把零散操作沉淀成标准流程。',
	outcome: '团队可以更稳定地扩展账号矩阵，也能更清楚地复盘每一次任务执行。',
};

const DEFAULT_EN_SCENARIO: ScenarioModule = {
	scene: 'Teams are scaling social account operations and need one workflow for accounts, assets, devices, proxies, and task results.',
	problem: 'As account volume grows, scattered tools make status unclear and failures harder to locate.',
	solution: 'Ainnc connects account management, proxy IPs, assets, task execution, and result records in one operating layer.',
	outcome: 'Teams can scale account operations with clearer execution visibility and stronger review data.',
};

export function getScenarioModule(postId: string | undefined, locale: Locale): ScenarioModule {
	if (locale === 'en') {
		return (postId && EN_SCENARIOS[postId]) || DEFAULT_EN_SCENARIO;
	}

	return (postId && ZH_SCENARIOS[postId]) || DEFAULT_ZH_SCENARIO;
}
