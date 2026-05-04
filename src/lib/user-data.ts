import {
  Calculator,
  Building,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/* ── User Dashboard ── */
export const PROJECTS = [
  {
    title: "確定申告 2024年度",
    status: "進行中",
    progress: 65,
    team: [
      { name: "山田先生", role: "税理士" },
      { name: "佐藤先生", role: "司法書士" },
    ],
    tasks: [
      { text: "必要書類の提出", done: true },
      { text: "収支内訳書の作成", done: true },
      { text: "申告書の確認", done: false },
      { text: "電子申告の実行", done: false },
    ],
    deadline: "2025/03/15",
  },
  {
    title: "就業規則の改定",
    status: "レビュー中",
    progress: 80,
    team: [{ name: "鈴木先生", role: "社労士" }],
    tasks: [
      { text: "現行規則の確認", done: true },
      { text: "改定案の作成", done: true },
      { text: "最終レビュー", done: false },
    ],
    deadline: "2025/02/28",
  },
  {
    title: "飲食店営業許可申請",
    status: "完了",
    progress: 100,
    team: [{ name: "高橋先生", role: "行政書士" }],
    tasks: [
      { text: "書類準備", done: true },
      { text: "申請書提出", done: true },
      { text: "許可証受領", done: true },
    ],
    deadline: "2025/01/10",
  },
];

/* ── Chat ── */
export const CONTACTS: {
  name: string;
  role: string;
  Icon: LucideIcon;
  iconColor: string;
  unread: number;
  lastMsg: string;
}[] = [
  { name: "山田 一郎", role: "税理士", Icon: Calculator, iconColor: "text-accent", unread: 2, lastMsg: "書類を確認しました" },
  { name: "佐藤 美咲", role: "司法書士", Icon: Building, iconColor: "text-success", unread: 0, lastMsg: "登記完了のご連絡です" },
  { name: "鈴木 健太", role: "弁護士", Icon: Scale, iconColor: "text-warning", unread: 1, lastMsg: "契約書の修正版をお送りします" },
  { name: "高橋 裕子", role: "社労士", Icon: ShieldCheck, iconColor: "text-[#DB2777]", unread: 0, lastMsg: "就業規則の件、承知しました" },
];

export interface ChatMessage {
  from: "user" | "expert";
  text: string;
  time: string;
}

export const INITIAL_MESSAGES: ChatMessage[] = [
  {
    from: "expert",
    text: "こんにちは、税理士の山田です。確定申告の件でご相談いただきありがとうございます。まずは現在の状況を教えていただけますか？",
    time: "10:00",
  },
  {
    from: "user",
    text: "よろしくお願いします。副業の収入があるのですが、経費としてどこまで計上できるか分からなくて…",
    time: "10:05",
  },
  {
    from: "expert",
    text: "副業の経費ですね。業種や主な支出内容を教えていただければ、計上可能な範囲をご案内いたします。領収書やレシートはお手元にありますか？",
    time: "10:08",
  },
];

/* ── Documents ── */
export const DOCUMENTS = [
  { name: "確定申告書_2024年度.pdf", type: "PDF", size: "1.2MB", date: "2025/01/15", from: "山田先生", status: "確認待ち" },
  { name: "収支内訳書.xlsx", type: "Excel", size: "340KB", date: "2025/01/12", from: "自分", status: "提出済" },
  { name: "就業規則_改定案_v3.docx", type: "Word", size: "580KB", date: "2025/01/10", from: "鈴木先生", status: "レビュー中" },
  { name: "登記簿謄本.pdf", type: "PDF", size: "890KB", date: "2025/01/08", from: "佐藤先生", status: "完了" },
  { name: "源泉徴収票.pdf", type: "PDF", size: "220KB", date: "2025/01/05", from: "自分", status: "提出済" },
];

/* ── Payments ── */
export const INVOICES = [
  { id: "INV-001", expert: "山田 一郎", role: "税理士", desc: "確定申告 報酬", amount: "¥80,000", date: "2025/01/15", status: "支払済" },
  { id: "INV-002", expert: "鈴木 健太", role: "弁護士", desc: "契約書レビュー", amount: "¥50,000", date: "2025/01/20", status: "未払い" },
  { id: "INV-003", expert: "佐藤 美咲", role: "司法書士", desc: "会社設立 登記費用", amount: "¥120,000", date: "2025/01/08", status: "支払済" },
  { id: "INV-004", expert: "高橋 裕子", role: "社労士", desc: "就業規則作成", amount: "¥60,000", date: "2025/01/25", status: "未払い" },
];

/* ── AI Consultation ── */
export const QUICK_QUESTIONS = [
  "確定申告の期限はいつですか？",
  "会社設立に必要な書類は？",
  "助成金の申請方法を教えて",
  "契約書の注意点は？",
];
