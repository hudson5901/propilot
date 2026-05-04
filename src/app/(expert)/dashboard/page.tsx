"use client";

import { AlertTriangle } from "lucide-react";
import { EXPERT_STAT_CARDS, RECENT_CLIENTS, EXPERT_TASKS } from "@/lib/expert-data";
import StatCard from "@/components/StatCard";
import StatusBadge from "@/components/StatusBadge";
import Avatar from "@/components/Avatar";

export default function ExpertDashboardPage() {
  return (
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-fg-primary">ダッシュボード</h1>
          <p className="text-sm text-fg-muted mt-1">おかえりなさい、山田先生</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {EXPERT_STAT_CARDS.map((s) => (
              <StatCard
                key={s.label}
                icon={<s.Icon className="h-5 w-5 text-accent" />}
                label={s.label}
                value={s.value}
                extra={s.change ? (
                  <span className="text-xs font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
                    {s.change}
                  </span>
                ) : undefined}
              />
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-xl border border-border p-6">
              <h2 className="text-lg font-bold text-fg-primary mb-4">最近のクライアント</h2>
              <div className="space-y-3">
                {RECENT_CLIENTS.map((c) => (
                  <div key={c.name} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <Avatar>{c.name[0]}</Avatar>
                      <div>
                        <p className="text-sm font-medium text-fg-primary">{c.name}</p>
                        <p className="text-xs text-fg-muted">{c.service}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <StatusBadge status={c.status} />
                      <p className="text-xs text-fg-muted mt-1">{c.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border p-6">
              <h2 className="text-lg font-bold text-fg-primary mb-4">タスク</h2>
              <div className="space-y-3">
                {EXPERT_TASKS.map((t) => (
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
  );
}
