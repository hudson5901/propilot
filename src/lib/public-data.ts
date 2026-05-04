import {
  Calculator,
  Building,
  Scale,
  ShieldCheck,
  FilePen,
  type LucideIcon,
} from "lucide-react";

/* ── Service ── */
export const SERVICES: {
  id: string;
  Icon: LucideIcon;
  iconColor: string;
  title: string;
  desc: string;
  experts: { label: string; color: string }[];
  examples: string[];
}[] = [
  {
    id: "tax",
    Icon: Calculator,
    iconColor: "text-accent",
    title: "確定申告・税務",
    desc: "個人・法人の確定申告、節税対策、税務調査対応",
    experts: [{ label: "税理士", color: "text-accent" }],
    examples: ["確定申告", "節税相談", "税務調査", "記帳代行"],
  },
  {
    id: "registration",
    Icon: Building,
    iconColor: "text-success",
    title: "法人設立・登記",
    desc: "会社設立、役員変更、本店移転、各種登記手続き",
    experts: [{ label: "司法書士", color: "text-success" }],
    examples: ["会社設立", "役員変更", "商業登記", "不動産登記"],
  },
  {
    id: "legal",
    Icon: Scale,
    iconColor: "text-warning",
    title: "契約・法務",
    desc: "契約書作成・レビュー、紛争解決、法律相談",
    experts: [{ label: "弁護士", color: "text-warning" }],
    examples: ["契約書レビュー", "紛争解決", "企業法務", "債権回収"],
  },
  {
    id: "labor",
    Icon: ShieldCheck,
    iconColor: "text-[#DB2777]",
    title: "労務・社会保険",
    desc: "就業規則、給与計算、社会保険手続き、助成金",
    experts: [{ label: "社労士", color: "text-[#DB2777]" }],
    examples: ["就業規則", "給与計算", "助成金申請", "労務相談"],
  },
  {
    id: "permit",
    Icon: FilePen,
    iconColor: "text-[#7C3AED]",
    title: "許認可・届出",
    desc: "建設業許可、飲食店営業許可、各種届出書類",
    experts: [{ label: "行政書士", color: "text-[#7C3AED]" }],
    examples: ["建設業許可", "飲食店許可", "在留資格", "届出書類"],
  },
  {
    id: "inheritance",
    Icon: Calculator,
    iconColor: "text-accent",
    title: "相続・遺産",
    desc: "相続税申告、遺産分割、遺言書作成、名義変更",
    experts: [
      { label: "税理士", color: "text-accent" },
      { label: "司法書士", color: "text-success" },
      { label: "弁護士", color: "text-warning" },
    ],
    examples: ["相続税申告", "遺産分割", "遺言書", "名義変更"],
  },
];

/* ── Preferences ── */
export const BUDGET_OPTIONS = ["〜5万円", "5〜10万円", "10〜30万円", "30〜50万円", "50万円〜", "相談して決めたい"];
export const URGENCY_OPTIONS = ["急ぎ（1週間以内）", "2〜4週間", "1〜3ヶ月", "急いでいない"];
export const PREFERENCE_TAGS = [
  "オンライン対応", "対面希望", "土日対応", "女性専門家", "英語対応",
  "業界経験あり", "若手", "ベテラン", "チャット重視", "コスパ重視",
];

/* ── Results ── */
export const EXPERT_RESULTS: {
  id: string;
  name: string;
  role: string;
  Icon: LucideIcon;
  iconColor: string;
  rating: number;
  reviews: number;
  experience: string;
  specialties: string[];
  price: string;
  match: number;
  badges: string[];
}[] = [
  {
    id: "1",
    name: "山田 一郎",
    role: "税理士",
    Icon: Calculator,
    iconColor: "text-accent",
    rating: 4.9,
    reviews: 128,
    experience: "15年",
    specialties: ["確定申告", "節税対策", "法人税務"],
    price: "¥30,000〜",
    match: 98,
    badges: ["レスポンス◎", "リピーター多数"],
  },
  {
    id: "2",
    name: "佐藤 美咲",
    role: "司法書士",
    Icon: Building,
    iconColor: "text-success",
    rating: 4.8,
    reviews: 96,
    experience: "12年",
    specialties: ["会社設立", "商業登記", "相続手続き"],
    price: "¥50,000〜",
    match: 95,
    badges: ["女性専門家", "オンライン対応"],
  },
  {
    id: "3",
    name: "鈴木 健太",
    role: "弁護士",
    Icon: Scale,
    iconColor: "text-warning",
    rating: 4.7,
    reviews: 84,
    experience: "10年",
    specialties: ["企業法務", "契約書", "紛争解決"],
    price: "¥50,000〜",
    match: 92,
    badges: ["英語対応", "業界経験豊富"],
  },
  {
    id: "4",
    name: "高橋 裕子",
    role: "社労士",
    Icon: ShieldCheck,
    iconColor: "text-[#DB2777]",
    rating: 4.9,
    reviews: 72,
    experience: "8年",
    specialties: ["就業規則", "助成金", "労務管理"],
    price: "¥25,000〜",
    match: 90,
    badges: ["土日対応", "チャット重視"],
  },
];

/* ── Profile ── */
export const DEMO_EXPERT = {
  name: "山田 一郎",
  role: "税理士",
  rating: 4.9,
  reviews: 128,
  experience: "15年",
  location: "東京都千代田区",
  price: "¥30,000〜",
  bio: "大手税理士法人での10年の経験を経て独立。個人事業主から中小企業まで幅広くサポートしています。特に確定申告と節税対策に強みがあり、クライアント一人ひとりに合わせた丁寧な対応を心がけています。",
  specialties: ["確定申告", "節税対策", "法人税務", "記帳代行", "税務調査対応"],
  qualifications: ["税理士", "CFP\u00AE", "日商簿記1級"],
  stats: { cases: 500, repeatRate: "85%", avgResponse: "2時間以内" },
  reviews_list: [
    { name: "A.T.", rating: 5, text: "初めての確定申告で不安でしたが、丁寧に教えていただきました。来年もお願いしたいです。", date: "2025/01" },
    { name: "K.S.", rating: 5, text: "節税のアドバイスが的確で、思った以上に還付を受けられました。レスポンスも早く助かりました。", date: "2024/12" },
    { name: "M.Y.", rating: 4, text: "法人化の際の税務まわりを全て対応いただきました。説明もわかりやすかったです。", date: "2024/11" },
  ],
};
