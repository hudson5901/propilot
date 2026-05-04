"use client";

import Link from "next/link";
import { useState } from "react";

const BUDGET_OPTIONS = ["〜5万円", "5〜10万円", "10〜30万円", "30〜50万円", "50万円〜", "相談して決めたい"];
const URGENCY_OPTIONS = ["急ぎ（1週間以内）", "2〜4週間", "1〜3ヶ月", "急いでいない"];
const PREFERENCE_TAGS = [
  "オンライン対応", "対面希望", "土日対応", "女性専門家", "英語対応",
  "業界経験あり", "若手", "ベテラン", "チャット重視", "コスパ重視",
];

export default function PreferencesPage() {
  const [budget, setBudget] = useState("");
  const [urgency, setUrgency] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [description, setDescription] = useState("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-surface-secondary">
      <header className="bg-white border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-8">
          <Link
            href="/app/service"
            className="text-sm text-accent hover:underline mb-4 inline-block"
          >
            ← サービス選択に戻る
          </Link>
          <h1 className="text-2xl font-bold text-fg-primary">
            詳細・ご希望を入力
          </h1>
          <p className="text-sm text-fg-secondary mt-2">
            より正確なマッチングのため、できるだけ詳しくお聞かせください。
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-8 space-y-8">
        {/* Description */}
        <div className="bg-white rounded-xl border border-border p-6">
          <label className="block text-sm font-semibold text-fg-primary mb-2">
            ご相談内容
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="w-full rounded-lg border border-border px-4 py-3 text-sm text-fg-primary placeholder:text-fg-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none resize-none"
            placeholder="例: 来年3月までに確定申告を済ませたい。副業収入があり、経費の計上方法に不安がある。できれば節税のアドバイスもほしい。"
          />
        </div>

        {/* Budget */}
        <div className="bg-white rounded-xl border border-border p-6">
          <h3 className="text-sm font-semibold text-fg-primary mb-3">
            ご予算
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {BUDGET_OPTIONS.map((b) => (
              <button
                key={b}
                onClick={() => setBudget(b)}
                className={`rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                  budget === b
                    ? "border-accent bg-accent-light text-accent font-medium"
                    : "border-border text-fg-secondary hover:border-accent/30"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Urgency */}
        <div className="bg-white rounded-xl border border-border p-6">
          <h3 className="text-sm font-semibold text-fg-primary mb-3">
            ご希望の対応スピード
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {URGENCY_OPTIONS.map((u) => (
              <button
                key={u}
                onClick={() => setUrgency(u)}
                className={`rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                  urgency === u
                    ? "border-accent bg-accent-light text-accent font-medium"
                    : "border-border text-fg-secondary hover:border-accent/30"
                }`}
              >
                {u}
              </button>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="bg-white rounded-xl border border-border p-6">
          <h3 className="text-sm font-semibold text-fg-primary mb-3">
            こだわり条件（複数選択可）
          </h3>
          <div className="flex flex-wrap gap-2">
            {PREFERENCE_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  selectedTags.includes(tag)
                    ? "border-accent bg-accent text-white"
                    : "border-border text-fg-secondary hover:border-accent/30"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="text-center pb-8">
          <Link
            href="/app/results"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-hover transition-all"
          >
            AIマッチングを開始する →
          </Link>
          <p className="text-xs text-fg-muted mt-3">
            完全無料・最短30秒で結果が表示されます
          </p>
        </div>
      </div>
    </div>
  );
}
