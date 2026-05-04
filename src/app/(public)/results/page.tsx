"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Bot, Star } from "lucide-react";
import { fetchExperts, type Expert } from "@/lib/data-fetcher";
import { useAuth } from "@/lib/auth-context";
import SmsAuthModal from "@/components/SmsAuthModal";

export default function ResultsPage() {
  const router = useRouter();
  const { verified } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [pendingTarget, setPendingTarget] = useState("");
  const [experts, setExperts] = useState<Expert[]>([]);

  useEffect(() => {
    fetchExperts().then(setExperts);
  }, []);

  const handleProtectedAction = (href: string) => {
    if (verified) {
      router.push(href);
    } else {
      setPendingTarget(href);
      setShowAuth(true);
    }
  };

  return (
    <div className="min-h-screen bg-surface-secondary">
      <header className="bg-white border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <Link href="/preferences" className="text-sm text-accent hover:underline mb-4 inline-block">
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
          <button
            onClick={() => handleProtectedAction("/chat")}
            className="mt-4 inline-flex items-center rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
          >
            このチームに相談する
          </button>
        </div>

        <div className="space-y-4">
          {experts.map((e) => (
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
                <button
                  onClick={() => handleProtectedAction(`/profile/${e.id}`)}
                  className="shrink-0 inline-flex items-center rounded-lg border border-accent text-accent px-4 py-2 text-sm font-medium hover:bg-accent hover:text-white transition-colors"
                >
                  詳細を見る
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SmsAuthModal
        open={showAuth}
        onClose={() => setShowAuth(false)}
        onSuccess={() => {
          setShowAuth(false);
          if (pendingTarget) {
            router.push(pendingTarget);
          }
        }}
      />
    </div>
  );
}
