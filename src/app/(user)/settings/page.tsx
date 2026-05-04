"use client";

import { useApp } from "@/app/context";
import { Bell, Lock, User, Globe } from "lucide-react";

export default function SettingsPage() {
  const { user } = useApp();

  return (
    <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-fg-primary">設定</h1>
          <p className="text-sm text-fg-muted mt-1">アカウントとアプリの設定を管理</p>

          <div className="space-y-6 mt-8">
            {/* Profile */}
            <div className="bg-white rounded-xl border border-border p-6">
              <div className="flex items-center gap-3 mb-5">
                <User className="h-5 w-5 text-accent" />
                <h2 className="text-base font-bold text-fg-primary">プロフィール</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-fg-muted mb-1">名前</label>
                  <input type="text" defaultValue={user.name} className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-fg-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-fg-muted mb-1">メールアドレス</label>
                  <input type="email" defaultValue={user.email} className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-fg-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none" />
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl border border-border p-6">
              <div className="flex items-center gap-3 mb-5">
                <Bell className="h-5 w-5 text-accent" />
                <h2 className="text-base font-bold text-fg-primary">通知設定</h2>
              </div>
              <div className="space-y-4">
                {[
                  { label: "メール通知", desc: "マッチング結果やメッセージを受信" },
                  { label: "プッシュ通知", desc: "ブラウザ通知を有効にする" },
                  { label: "マーケティング", desc: "新機能やキャンペーン情報を受信" },
                ].map((n) => (
                  <div key={n.label} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-fg-primary">{n.label}</p>
                      <p className="text-xs text-fg-muted">{n.desc}</p>
                    </div>
                    <button className="relative h-6 w-11 rounded-full bg-accent transition-colors">
                      <span className="absolute right-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Security */}
            <div className="bg-white rounded-xl border border-border p-6">
              <div className="flex items-center gap-3 mb-5">
                <Lock className="h-5 w-5 text-accent" />
                <h2 className="text-base font-bold text-fg-primary">セキュリティ</h2>
              </div>
              <div className="space-y-3">
                <button className="w-full text-left rounded-lg border border-border px-4 py-3 text-sm text-fg-primary hover:bg-surface-secondary transition-colors">
                  パスワードを変更
                </button>
                <button className="w-full text-left rounded-lg border border-border px-4 py-3 text-sm text-fg-primary hover:bg-surface-secondary transition-colors">
                  二要素認証を設定
                </button>
              </div>
            </div>

            {/* Language */}
            <div className="bg-white rounded-xl border border-border p-6">
              <div className="flex items-center gap-3 mb-5">
                <Globe className="h-5 w-5 text-accent" />
                <h2 className="text-base font-bold text-fg-primary">言語と地域</h2>
              </div>
              <select className="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-fg-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none">
                <option>日本語</option>
                <option>English</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors">
                保存する
              </button>
            </div>
          </div>
        </div>
    </main>
  );
}
