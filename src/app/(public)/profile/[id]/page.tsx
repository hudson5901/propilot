"use client";

import Link from "next/link";
import { use } from "react";
import { Calculator, Star, Check, Heart, MapPin } from "lucide-react";
import { DEMO_EXPERT } from "@/lib/public-data";

export default function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const expert = DEMO_EXPERT;

  return (
    <div className="min-h-screen bg-surface-secondary">
      <header className="bg-white border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <Link href="/results" className="text-sm text-accent hover:underline mb-4 inline-block">
            &larr; マッチング結果に戻る
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="bg-white rounded-xl border border-border p-8">
          <div className="flex items-start gap-6">
            <div className="h-20 w-20 rounded-2xl bg-accent-light flex items-center justify-center shrink-0">
              <Calculator className="h-9 w-9 text-accent" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl font-bold text-fg-primary">{expert.name}</h1>
                <span className="text-sm font-medium bg-accent/10 text-accent px-3 py-0.5 rounded-full">{expert.role}</span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-fg-muted">
                <span className="inline-flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 text-warning fill-current" />
                  {expert.rating} ({expert.reviews}件のレビュー)
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {expert.location}
                </span>
                <span>経験 {expert.experience}</span>
              </div>
              <p className="mt-4 text-sm text-fg-secondary leading-relaxed">{expert.bio}</p>
              <div className="mt-4 flex gap-3">
                <Link href="/chat" className="inline-flex items-center rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors">
                  この専門家に相談する
                </Link>
                <button className="inline-flex items-center gap-1.5 rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-fg-secondary hover:bg-surface-secondary transition-colors">
                  <Heart className="h-4 w-4" />
                  お気に入り
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-xl border border-border p-6 text-center">
            <p className="text-2xl font-bold text-accent">{expert.stats.cases}+</p>
            <p className="text-xs text-fg-muted mt-1">対応実績</p>
          </div>
          <div className="bg-white rounded-xl border border-border p-6 text-center">
            <p className="text-2xl font-bold text-accent">{expert.stats.repeatRate}</p>
            <p className="text-xs text-fg-muted mt-1">リピート率</p>
          </div>
          <div className="bg-white rounded-xl border border-border p-6 text-center">
            <p className="text-2xl font-bold text-accent">{expert.stats.avgResponse}</p>
            <p className="text-xs text-fg-muted mt-1">平均レスポンス</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white rounded-xl border border-border p-6">
            <h2 className="text-base font-bold text-fg-primary mb-3">専門分野</h2>
            <div className="flex flex-wrap gap-2">
              {expert.specialties.map((s) => (
                <span key={s} className="text-sm bg-accent-light text-accent px-3 py-1 rounded-full">{s}</span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl border border-border p-6">
            <h2 className="text-base font-bold text-fg-primary mb-3">保有資格</h2>
            <div className="space-y-2">
              {expert.qualifications.map((q) => (
                <div key={q} className="flex items-center gap-2 text-sm text-fg-secondary">
                  <Check className="h-4 w-4 text-success" />
                  {q}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-border p-6 mt-6">
          <h2 className="text-base font-bold text-fg-primary mb-4">レビュー</h2>
          <div className="space-y-4">
            {expert.reviews_list.map((r, i) => (
              <div key={i} className="py-4 border-b border-border last:border-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex gap-0.5 text-warning">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-fg-muted">{r.name}</span>
                  <span className="text-xs text-fg-muted">{r.date}</span>
                </div>
                <p className="text-sm text-fg-secondary leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>

        <span className="hidden">{id}</span>
      </div>
    </div>
  );
}
