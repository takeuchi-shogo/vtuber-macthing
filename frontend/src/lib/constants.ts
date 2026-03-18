import {
	ContentType,
	PersonalityType,
	StreamingStyle,
	TimeSlot,
} from "@/types";

// === 推薦理由向け（長い表記） ===

export const CONTENT_TYPE_LABELS: Record<ContentType, string> = {
	gaming: "ゲーム実況",
	chatting: "雑談配信",
	singing: "歌配信",
	asmr: "ASMR",
	drawing: "お絵描き配信",
	collab: "コラボ配信",
	educational: "教育系配信",
	music_creation: "音楽制作",
};

export const PERSONALITY_LABELS: Record<PersonalityType, string> = {
	energetic: "元気いっぱい",
	calm: "落ち着いた癒し系",
	witty: "ツッコミ上手",
	natural: "天然キャラ",
	cool: "クールな大人",
	motherly: "母性的",
	mischievous: "いたずら好き",
};

export const STREAMING_STYLE_LABELS: Record<StreamingStyle, string> = {
	chat_interactive: "リスナーとの交流重視",
	performance_focused: "パフォーマンス重視",
	laid_back: "まったりした配信",
	professional: "プロフェッショナル",
};

export const TIME_SLOT_LABELS: Record<TimeSlot, string> = {
	morning: "朝",
	afternoon: "昼",
	evening: "夜",
	late_night: "深夜",
};

export const STREAM_LENGTH_LABELS: Record<string, string> = {
	short: "短時間配信",
	medium: "中時間配信",
	long: "長時間配信",
	varied: "様々",
};

// === UI Chip 向け（短い表記） ===

export const CONTENT_TYPE_SHORT_LABELS: Record<ContentType, string> = {
	gaming: "ゲーム",
	chatting: "雑談",
	singing: "歌",
	asmr: "ASMR",
	drawing: "お絵描き",
	collab: "コラボ",
	educational: "教育",
	music_creation: "音楽制作",
};

export const PERSONALITY_SHORT_LABELS: Record<PersonalityType, string> = {
	energetic: "元気",
	calm: "癒し系",
	witty: "ツッコミ上手",
	natural: "天然",
	cool: "クール",
	motherly: "母性的",
	mischievous: "いたずら好き",
};

export const STREAMING_STYLE_SHORT_LABELS: Record<StreamingStyle, string> = {
	chat_interactive: "チャット重視",
	performance_focused: "パフォーマンス重視",
	laid_back: "まったり",
	professional: "プロフェッショナル",
};

export const STREAM_LENGTH_SHORT_LABELS: Record<string, string> = {
	short: "短時間",
	medium: "中時間",
	long: "長時間",
	varied: "様々",
};

// === 共通 ===

export const BRANCH_LABELS: Record<string, string> = {
	JP: "ホロライブJP",
	EN: "ホロライブEN",
	ID: "ホロライブID",
};

export const BRANCH_COLORS: Record<
	string,
	"primary" | "secondary" | "success"
> = {
	JP: "primary",
	EN: "secondary",
	ID: "success",
};
