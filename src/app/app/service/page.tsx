"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Calculator,
  Building,
  Scale,
  ShieldCheck,
  FilePen,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const SERVICES: {
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

export default function ServicePage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-surface-secondary">
      <header className="bg-white border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <Link href="/" className="text-sm text-accent hover:underline mb-4 inline-block">
            &larr; トップに戻る
          </Link>
          <h1 className="text-2xl font-bold text-fg-primary">サービスを選択</h1>
          <p className="text-sm text-fg-secondary mt-2">
            お困りの分野を選択してください。複数分野にまたがる場合はAIが最適なチームを自動編成します。
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelected(selected === s.id ? null : s.id)}
              className={`text-left rounded-xl border-2 p-5 transition-all ${
                selected === s.id
                  ? "border-accent bg-accent-light shadow-md"
                  : "border-border bg-white hover:border-accent/30 hover:shadow-sm"
              }`}
            >
              <s.Icon className={`h-7 w-7 ${s.iconColor}`} />
              <h3 className="mt-3 text-base font-bold text-fg-primary">{s.title}</h3>
              <p className="mt-1 text-xs text-fg-secondary leading-relaxed">{s.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.experts.map((e) => (
                  <span key={e.label} className={`text-[10px] font-medium bg-accent/10 ${e.color} px-2 py-0.5 rounded-full`}>
                    {e.label}
                  </span>
                ))}
              </div>
              {selected === s.id && (
                <div className="mt-4 pt-3 border-t border-accent/20">
                  <p className="text-xs text-fg-muted mb-2">対応例:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.examples.map((ex) => (
                      <span key={ex} className="text-xs bg-white border border-border px-2 py-0.5 rounded">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {selected && (
          <div className="mt-8 text-center">
            <Link
              href="/app/preferences"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-hover transition-all"
            >
              次へ: 詳細を入力する
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
