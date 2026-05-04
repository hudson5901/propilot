import {
  Calculator,
  Building,
  Scale,
  ShieldCheck,
  FilePen,
  Lock,
  BadgeCheck,
  Shield,
  Phone,
  type LucideIcon,
} from "lucide-react";

export const PAIN_CARDS: {
  quote: string;
  solution: string;
  tags: { label: string; Icon: LucideIcon; color: string }[];
}[] = [
  {
    quote: "「会社を設立したいけど\n何から始めればいい？」",
    solution: "税理士 + 司法書士 + 社労士が\n連携してワンストップで対応",
    tags: [
      { label: "税理士", Icon: Calculator, color: "text-accent" },
      { label: "司法書士", Icon: Building, color: "text-success" },
      { label: "社労士", Icon: ShieldCheck, color: "text-[#DB2777]" },
    ],
  },
  {
    quote: "「確定申告の書類、\n何を出せばいいかわからない」",
    solution: "AIが状況をヒアリングし\n最適な税理士を即マッチング",
    tags: [{ label: "税理士", Icon: Calculator, color: "text-accent" }],
  },
  {
    quote: "「契約トラブル、\nどの専門家に相談すれば？」",
    solution: "弁護士 + 行政書士が連携し\nワンストップで解決",
    tags: [
      { label: "弁護士", Icon: Scale, color: "text-warning" },
      { label: "行政書士", Icon: FilePen, color: "text-[#7C3AED]" },
    ],
  },
];

export const STATS = [
  { value: "5,000+", label: "登録専門家" },
  { value: "3,200+", label: "マッチング実績" },
  { value: "98%", label: "満足度" },
  { value: "30秒", label: "平均マッチング" },
];

export const CATEGORIES: {
  Icon: LucideIcon;
  iconColor: string;
  title: string;
  desc: string;
  experts: string;
}[] = [
  {
    Icon: Calculator,
    iconColor: "text-accent",
    title: "確定申告・税務",
    desc: "個人・法人の確定申告、節税対策、税務調査対応",
    experts: "税理士",
  },
  {
    Icon: Building,
    iconColor: "text-success",
    title: "法人設立・登記",
    desc: "会社設立、役員変更、本店移転、各種登記手続き",
    experts: "司法書士",
  },
  {
    Icon: Scale,
    iconColor: "text-warning",
    title: "契約・法務",
    desc: "契約書作成・レビュー、紛争解決、法律相談",
    experts: "弁護士",
  },
  {
    Icon: ShieldCheck,
    iconColor: "text-[#DB2777]",
    title: "労務・社会保険",
    desc: "就業規則、給与計算、社会保険手続き、助成金",
    experts: "社労士",
  },
  {
    Icon: FilePen,
    iconColor: "text-[#7C3AED]",
    title: "許認可・届出",
    desc: "建設業許可、飲食店営業許可、各種届出書類",
    experts: "行政書士",
  },
  {
    Icon: Calculator,
    iconColor: "text-accent",
    title: "相続・遺産",
    desc: "相続税申告、遺産分割、遺言書作成、名義変更",
    experts: "税理士 × 司法書士",
  },
];

export const STEPS = [
  { num: "1", title: "AIにヒアリング", desc: "相談内容を入力するだけで\nAIが必要なタスクを自動分解" },
  { num: "2", title: "最適チーム編成", desc: "5,000名以上の専門家から\n最適なチームをAIが提案" },
  { num: "3", title: "個別に契約", desc: "各専門家と直接・個別に契約\n電子署名で簡単に締結" },
  { num: "4", title: "ダッシュボードで管理", desc: "全専門家の進捗を一元管理\nAIが次のアクションをリマインド" },
];

export const COMPARISON = [
  { feature: "対応可能な専門分野", propilot: "5職種対応", others: "1〜2職種" },
  { feature: "チーム編成", propilot: "AIが自動", others: "自分で探す" },
  { feature: "マッチング時間", propilot: "最短30秒", others: "数日〜数週間" },
  { feature: "専門家間の連携", propilot: "チームで一括", others: "個別にやり取り" },
  { feature: "進捗管理", propilot: "ダッシュボード", others: "メール/電話" },
  { feature: "料金", propilot: "マッチング無料", others: "紹介料あり" },
];

export const TESTIMONIALS = [
  {
    text: "起業時に税理士と司法書士を別々に探すつもりでしたが、ProPilotで同時にマッチング。連携もスムーズで、1ヶ月で会社設立が完了しました。",
    name: "田中 太郎",
    role: "IT企業 代表取締役",
    rating: 5,
  },
  {
    text: "相続で揉めていた案件を、弁護士と税理士のチームが見事に解決。専門家同士が直接やり取りしてくれるので、こちらの負担が激減しました。",
    name: "佐藤 花子",
    role: "個人事業主",
    rating: 5,
  },
  {
    text: "従業員10人の採用に伴う労務手続きを社労士と行政書士のチームに一括依頼。書類ミスもゼロで、本業に集中できました。",
    name: "鈴木 一郎",
    role: "飲食店オーナー",
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    q: "本当に無料ですか？",
    a: "マッチングは完全無料です。専門家への報酬は、ご依頼内容に応じて専門家から直接お見積りが提示されます。ProPilotが仲介手数料を上乗せすることはありません。",
  },
  {
    q: "どんな課題に対応できますか？",
    a: "税務・法務・労務・登記・許認可の5分野をカバー。複数の分野にまたがる複合的な課題（例：起業、相続、M&Aなど）にも、チーム編成で対応できます。",
  },
  {
    q: "AIがチームを組むって、大丈夫ですか？",
    a: "AIは過去のマッチングデータ・専門家の得意分野・評価をもとに最適な組み合わせを提案します。最終的な依頼はお客様ご自身で判断いただけます。",
  },
  {
    q: "専門家とのやり取りはどうしますか？",
    a: "ProPilot上のチャット機能で専門家チーム全員と一括でやり取りが可能です。書類の受け渡しもプラットフォーム上で完結します。",
  },
  {
    q: "途中でキャンセルできますか？",
    a: "正式な契約前であれば、いつでも無料でキャンセル可能です。専門家との相性が合わない場合は、再マッチングも承ります。",
  },
];

export const PRICING_PLANS = [
  {
    name: "フリー",
    price: "¥0",
    period: "",
    desc: "まずは気軽にお試し",
    features: ["AIマッチング 月3回", "基本チャット機能", "専門家プロフィール閲覧"],
    cta: "無料で始める",
    highlighted: false,
  },
  {
    name: "スタンダード",
    price: "¥2,980",
    period: "/月",
    desc: "個人事業主・フリーランスに",
    features: ["AIマッチング 無制限", "優先マッチング", "書類管理機能", "AI相談チャット", "進捗ダッシュボード"],
    cta: "14日間無料体験",
    highlighted: true,
  },
  {
    name: "ビジネス",
    price: "¥9,800",
    period: "/月",
    desc: "法人・複数案件の管理に",
    features: ["スタンダード全機能", "専任アカウントマネージャー", "複数プロジェクト管理", "チーム共有機能", "API連携", "優先サポート"],
    cta: "お問い合わせ",
    highlighted: false,
  },
];

export const TRUST_ITEMS: { Icon: LucideIcon; text: string }[] = [
  { Icon: ShieldCheck, text: "厳選された専門家のみ" },
  { Icon: BadgeCheck, text: "資格確認済み" },
  { Icon: Lock, text: "SSL暗号化通信" },
  { Icon: Shield, text: "個人情報保護方針準拠" },
  { Icon: Phone, text: "カスタマーサポート対応" },
];

export const SECURITY_CARDS: {
  Icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  cardBg: string;
  title: string;
  desc: string;
}[] = [
  {
    Icon: Lock,
    iconColor: "text-[#93C5FD]",
    iconBg: "bg-[#1E40AF]",
    cardBg: "bg-[#1E293B]",
    title: "SSL暗号化通信",
    desc: "全ての通信は256bit SSL暗号化で保護。個人情報は厳重に管理しています。",
  },
  {
    Icon: BadgeCheck,
    iconColor: "text-[#6EE7B7]",
    iconBg: "bg-[#065F46]",
    cardBg: "bg-[#1E293B]",
    title: "資格認証済み専門家",
    desc: "登録専門家は全員、資格証明書の提出と本人確認を完了。信頼できる専門家のみが参画しています。",
  },
  {
    Icon: Shield,
    iconColor: "text-[#FCA5A5]",
    iconBg: "bg-[#7C2D12]",
    cardBg: "bg-[#1E293B]",
    title: "個別直接契約",
    desc: "各専門家との契約はすべて直接個別契約。非弁行為に該当しない安心の仕組みです。",
  },
];
