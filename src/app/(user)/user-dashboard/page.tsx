"use client";

import { PROJECTS } from "@/lib/user-data";
import StatusBadge from "@/components/StatusBadge";
import Avatar from "@/components/Avatar";

export default function UserDashboardPage() {
  return (
    <main className="flex-1 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-fg-primary">マイダッシュボード</h1>
            <p className="text-sm text-fg-muted mt-1">プロジェクトの進捗を確認</p>
          </div>
          <a
            href="/service"
            className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
          >
            + 新しい相談
          </a>
        </div>

          {/* Project cards */}
          <div className="grid gap-6 mt-8">
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl border border-border p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg font-bold text-fg-primary">
                        {p.title}
                      </h2>
                      <StatusBadge status={p.status} />
                    </div>
                    <p className="text-xs text-fg-muted mt-1">
                      期限: {p.deadline}
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-fg-secondary">進捗</span>
                    <span className="font-medium text-fg-primary">
                      {p.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-surface-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        p.progress === 100 ? "bg-success" : "bg-accent"
                      }`}
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-5">
                  {/* Team */}
                  <div>
                    <h3 className="text-xs font-semibold text-fg-muted uppercase tracking-wider mb-3">
                      担当チーム
                    </h3>
                    <div className="space-y-2">
                      {p.team.map((t) => (
                        <div
                          key={t.name}
                          className="flex items-center gap-2"
                        >
                          <Avatar size="sm">{t.name[0]}</Avatar>
                          <span className="text-sm text-fg-primary">
                            {t.name}
                          </span>
                          <span className="text-xs text-fg-muted">
                            ({t.role})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tasks */}
                  <div>
                    <h3 className="text-xs font-semibold text-fg-muted uppercase tracking-wider mb-3">
                      タスク
                    </h3>
                    <div className="space-y-2">
                      {p.tasks.map((t) => (
                        <div
                          key={t.text}
                          className="flex items-center gap-2 text-sm"
                        >
                          <span
                            className={`inline-block h-4 w-4 rounded border text-center text-[10px] leading-4 ${
                              t.done
                                ? "bg-success border-success text-white"
                                : "border-border"
                            }`}
                          >
                            {t.done ? "✓" : ""}
                          </span>
                          <span
                            className={
                              t.done
                                ? "text-fg-muted line-through"
                                : "text-fg-primary"
                            }
                          >
                            {t.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </main>
  );
}
