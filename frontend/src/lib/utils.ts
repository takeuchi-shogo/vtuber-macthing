import { HoloMember } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { iconMapping } from "./icon-mapping";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const ICON_SUBDIRS: Record<string, string> = {
	JP: "",
	EN: "en/",
	ID: "id/",
	DEV_IS: "devis/",
};

/**
 * メンバーIDとブランチキーからアイコン画像パスを取得する。
 * @param memberId メンバーID（snake_case）
 * @param branchKey 'JP' | 'EN' | 'ID' | 'DEV_IS'
 */
export function getIconPath(
	memberId: string,
	branchKey: string = "JP",
): string {
	const subdir = ICON_SUBDIRS[branchKey] ?? "";
	const fileName = iconMapping[memberId];
	if (fileName) {
		return `/images/hololive/icon/${subdir}${fileName}`;
	}
	if (branchKey === "ID") {
		return "/images/fallback-avatar.svg";
	}
	return `/images/hololive/icon/${subdir}${memberId}.png`;
}

/**
 * メンバーデータからチームスラグ（URLパス用）を決定する。
 * DEV_IS メンバーは branch='JP' だが generation で判別。
 */
export function getTeamSlug(member: HoloMember): string {
	if (member.branch === "EN") return "hololive-en";
	if (member.branch === "ID") return "hololive-id";
	if (member.generation === "ReGLOSS" || member.generation === "FLOW GLOW") {
		return "devis";
	}
	return "hololive-jp";
}
