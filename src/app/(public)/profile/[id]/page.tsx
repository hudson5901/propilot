"use client";

import Link from "next/link";
import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Star, Check, Heart, MapPin, Lock } from "lucide-react";
import { fetchExpertById, type Expert } from "@/lib/data-fetcher";
import { useAuth } from "@/lib/auth-context";
import SmsAuthModal from "@/components/SmsAuthModal";

export default function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { verified } = useAuth();
  const [showAuth, setShowAuth] = useState(!verified);
  const [expert, setExpert] = useState<Expert | null>(null);

  useEffect(() => {
    fetchExpertById(id).then(setExpert);
  }, [id]);

  // Show auth gate if not verified
  if (!verified) {
    return (
      <div className="min-h-screen bg-surface-secondary">
        <header className="bg-white border-b border-border">
          <div className="mx-auto max-w-4xl px-6 py-8">
            <Link href="/results" className="text-sm text-accent hover:underline mb-4 inline-block">
              &larr; マッチング結果に戻る
            </Link>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="bg-white rounded-2xl border border-border p-12 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-accent-light flex items-center justify-center mb-6">
              <Lock className="h-7 w-7 text-accent" />
            </div>
            <h2 className="text-xl font-bold text-fg-primary">
              専門家の詳細を見るには認証が必要です
            </h2>
            <p className="text-sm text-fg-secondary mt-2 max-w-md mx-auto">
              マッチングの品質を保つため、SMS認証をお願いしています。電話番号が専門家に公開されることはありません。
            </p>
            <button
              onClick={() => setShowAuth(true)}
              className="mt-6 inline-flex items-center rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
            >
              電話番号で認証する
            </button>
          </div>
        </div>

        <SmsAuthModal
          open={showAuth}
          onClose={() => router.push("/results")}
          onSuccess={() => setShowAuth(false)}
        />
      </div>
    );
  }

  if (!expert) {
    return (
      <div className="min-h-screen bg-surface-secondary flex items-center justify-center">
        <p className="text-fg-muted">読み込み中...</p>
      </div>
    );
  }

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
              <expert.Icon className={`h-9 w-9 ${expert.iconColor}`} />
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

        {expert.stats && (
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
        )}

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

        {expert.reviews_list && expert.reviews_list.length > 0 && (
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
        )}

        <span className="hidden">{id}</span>
      </div>
    </div>
  );
}
