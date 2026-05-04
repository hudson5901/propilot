import { ClipboardList, RefreshCw, DollarSign, Star, type LucideIcon } from "lucide-react";

/* ── Dashboard ── */
export const EXPERT_STAT_CARDS: { label: string; value: string; change: string; Icon: LucideIcon }[] = [
  { label: "今月の案件数", value: "12", change: "+3", Icon: ClipboardList },
  { label: "進行中", value: "5", change: "", Icon: RefreshCw },
  { label: "今月の売上", value: "¥480,000", change: "+12%", Icon: DollarSign },
  { label: "評価", value: "4.9", change: "★", Icon: Star },
];

export const RECENT_CLIENTS = [
  { name: "田中 太郎", service: "確定申告", status: "進行中", date: "2025/01/15" },
  { name: "佐藤 花子", service: "会社設立", status: "完了", date: "2025/01/12" },
  { name: "鈴木 一郎", service: "労務相談", status: "レビュー中", date: "2025/01/10" },
  { name: "高橋 美咲", service: "契約書作成", status: "進行中", date: "2025/01/08" },
];

export const EXPERT_TASKS = [
  { text: "田中様の確定申告書類を確認", urgent: true },
  { text: "佐藤様への見積書を送付", urgent: false },
  { text: "鈴木様の就業規則を最終レビュー", urgent: false },
  { text: "高橋様との面談スケジュール調整", urgent: true },
];

/* ── Clients ── */
export const CLIENTS = [
  { name: "田中 太郎", service: "確定申告 2024年度", status: "進行中", since: "2024/06", projects: 3 },
  { name: "佐藤 花子", service: "会社設立", status: "完了", since: "2024/08", projects: 1 },
  { name: "鈴木 一郎", service: "労務相談", status: "レビュー中", since: "2024/10", projects: 2 },
  { name: "高橋 美咲", service: "契約書作成", status: "進行中", since: "2024/11", projects: 1 },
  { name: "伊藤 健一", service: "法人税申告", status: "完了", since: "2024/03", projects: 5 },
  { name: "渡辺 さくら", service: "相続税申告", status: "進行中", since: "2025/01", projects: 1 },
];

/* ── Schedule ── */
export const TODAY_SCHEDULE = [
  { time: "10:00", client: "田中 太郎", title: "確定申告 打ち合わせ", type: "オンライン", duration: "30分" },
  { time: "13:00", client: "高橋 美咲", title: "契約書レビュー 初回面談", type: "オンライン", duration: "60分" },
  { time: "16:00", client: "渡辺 さくら", title: "相続税 ヒアリング", type: "対面", duration: "60分" },
];

export const UPCOMING_SCHEDULE = [
  { date: "明日", time: "11:00", client: "鈴木 一郎", title: "就業規則 最終確認" },
  { date: "1/20", time: "14:00", client: "佐藤 花子", title: "会社設立 書類確認" },
  { date: "1/22", time: "10:00", client: "伊藤 健一", title: "法人税 月次報告" },
];

/* ── Earnings ── */
export const EARNINGS_SUMMARY = [
  { label: "今月の売上", value: "¥480,000", change: "+12%", up: true },
  { label: "先月の売上", value: "¥428,000", change: "", up: true },
  { label: "未入金", value: "¥150,000", change: "2件", up: false },
  { label: "今月の案件数", value: "12", change: "+3", up: true },
];

export const TRANSACTIONS = [
  { date: "2025/01/15", client: "田中 太郎", desc: "確定申告 報酬", amount: "¥80,000", status: "入金済" },
  { date: "2025/01/12", client: "佐藤 花子", desc: "会社設立 報酬", amount: "¥120,000", status: "入金済" },
  { date: "2025/01/10", client: "鈴木 一郎", desc: "就業規則作成 報酬", amount: "¥60,000", status: "未入金" },
  { date: "2025/01/08", client: "高橋 美咲", desc: "契約書作成 報酬", amount: "¥50,000", status: "入金済" },
  { date: "2025/01/05", client: "伊藤 健一", desc: "法人税申告 報酬", amount: "¥90,000", status: "未入金" },
];
