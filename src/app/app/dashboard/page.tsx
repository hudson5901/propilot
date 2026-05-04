"use client";

import DashboardSidebar from "../components/DashboardSidebar";
import { ClipboardList, RefreshCw, DollarSign, Star, AlertTriangle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const STAT_CARDS: { label: string; value: string; change: string; Icon: LucideIcon }[] = [
  { label: "今月の案件数", value: "12", change: "+3", Icon: ClipboardList },
  { label: "進行中", value: "5", change: "", Icon: RefreshCw },
  { label: "今月の売上", value: "¥480,000", change: "+12%", Icon: DollarSign },
  { label: "評価", value: "4.9", change: "★", Icon: Star },
];

const RECENT_CLIENTS = [
  { name: "田中 太郎", service: "確定申告", status: "進行中", date: "2025/01/15" },
  { name: "佐藤 花子", service: "会社設立", status: "完了", date: "2025/01/12" },
  { name: "鈴木 一郎", service: "労務相談", status: "レビュー中", date: "2025/01/10" },
  { name: "高橋 美咲", service: "契約書作成", status: "進行中", date: "2025/01/08" },
];

const TASKS = [
  { text: "田中様の確定申告書類を確認", urgent: true },
  { text: "佐藤様への見積書を送付", urgent: false },
  { text: "鈴木様の就業規則を最終レビュー", urgent: false },
  { text: "高橋様との面談スケジュール調整", urgent: true },
];

export default function ExpertDashboardPage() {
  return (
    <div className="flex min-h-screen bg-surface-secondary">
      <DashboardSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-fg-primary">ダッシュボード</h1>
          <p className="text-sm text-fg-muted mt-1">おかえりなさい、山田先生</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {STAT_CARDS.map((s) => (
              <div key={s.label} className="bg-white rounded-xl border border-border p-5">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-accent-light flex items-center justify-center">
                    <s.Icon className="h-5 w-5 text-accent" />
                  </div>
                  {s.change && (
                    <span className="text-xs font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
                      {s.change}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-2xl font-bold text-fg-primary">{s.value}</p>
                <p className="text-xs text-fg-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-xl border border-border p-6">
              <h2 className="text-lg font-bold text-fg-primary mb-4">最近のクライアント</h2>
              <div className="space-y-3">
                {RECENT_CLIENTS.map((c) => (
                  <div key={c.name} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-accent-light flex items-center justify-center text-accent font-bold text-sm">
                        {c.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-fg-primary">{c.name}</p>
                        <p className="text-xs text-fg-muted">{c.service}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        c.status === "完了"
                          ? "bg-success/10 text-success"
                          : c.status === "進行中"
                          ? "bg-accent/10 text-accent"
                          : "bg-warning/10 text-warning"
                      }`}>
                        {c.status}
                      </span>
                      <p className="text-xs text-fg-muted mt-1">{c.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border p-6">
              <h2 className="text-lg font-bold text-fg-primary mb-4">タスク</h2>
              <div className="space-y-3">
                {TASKS.map((t) => (
                  <label key={t.text} className="flex items-start gap-3 py-2 cursor-pointer">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent" />
                    <span className="text-sm text-fg-primary flex-1">{t.text}</span>
                    {t.urgent && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-danger bg-danger/10 px-2 py-0.5 rounded-full">
                        <AlertTriangle className="h-3 w-3" />
                        急ぎ
                      </span>
                    )}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
