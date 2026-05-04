"use client";

import Link from "next/link";
import {
  Calculator,
  Building,
  Scale,
  ShieldCheck,
  Bot,
  Star,
  type LucideIcon,
} from "lucide-react";

const EXPERT_RESULTS: {
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

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-surface-secondary">
      <header className="bg-white border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <Link href="/app/preferences" className="text-sm text-accent hover:underline mb-4 inline-block">
            &larr; 条件を変更する
          </Link>
          <h1 className="text-2xl font-bold text-fg-primary">マッチング結果</h1>
          <p className="text-sm text-fg-secondary mt-2">
            AIがあなたの課題に最適な専門家チームを提案しました
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="bg-accent-light border-2 border-accent/20 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Bot className="h-5 w-5 text-accent" />
            <h2 className="text-base font-bold text-accent">AIおすすめチーム編成</h2>
          </div>
          <p className="text-sm text-fg-secondary leading-relaxed">
            ご相談内容から、<strong>税理士</strong>と<strong>司法書士</strong>のチーム編成をおすすめします。
            確定申告と法人登記を並行して進めることで、効率的に対応できます。
          </p>
          <button className="mt-4 inline-flex items-center rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white hover:bg-accent-hover transition-colors">
            このチームに相談する
          </button>
        </div>

        <div className="space-y-4">
          {EXPERT_RESULTS.map((e) => (
            <div key={e.id} className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-xl bg-accent-light flex items-center justify-center shrink-0">
                  <e.Icon className={`h-6 w-6 ${e.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-bold text-fg-primary">{e.name}</h3>
                    <span className="text-xs font-medium bg-accent/10 text-accent px-2.5 py-0.5 rounded-full">{e.role}</span>
                    <span className="text-xs font-bold text-accent">{e.match}% マッチ</span>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-sm text-fg-muted">
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 text-warning fill-current" />
                      {e.rating} ({e.reviews}件)
                    </span>
                    <span>経験 {e.experience}</span>
                    <span>{e.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {e.specialties.map((s) => (
                      <span key={s} className="text-xs bg-surface-secondary text-fg-secondary px-2 py-0.5 rounded">{s}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {e.badges.map((b) => (
                      <span key={b} className="text-[10px] font-medium bg-success/10 text-success px-2 py-0.5 rounded-full">{b}</span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/app/profile/${e.id}`}
                  className="shrink-0 inline-flex items-center rounded-lg border border-accent text-accent px-4 py-2 text-sm font-medium hover:bg-accent hover:text-white transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
