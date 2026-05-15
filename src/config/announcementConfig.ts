import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "遇见更好的自己",

	// 公告内容
	content: "不必追赶别人的脚步,\
	只专注自己的节奏。\
	好好吃饭,规律训练,\
	戒掉内耗,稳住作息。\
	把身材练得挺拔,把心态养得从容,\
	不焦虑身高,不纠结过往,\
	在日复一日的自律里,\
	慢慢沉淀、悄悄蜕变。\
	慢慢来,坚持下去,\
	你终会遇见干净、自律、闪闪发光的自己✨",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
