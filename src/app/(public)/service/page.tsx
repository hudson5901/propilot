"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/public-data";

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
              href="/preferences"
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
