"use client";

import UserSidebar from "../components/UserSidebar";

const PROJECTS = [
  {
    title: "確定申告 2024年度",
    status: "進行中",
    progress: 65,
    team: [
      { name: "山田先生", role: "税理士" },
      { name: "佐藤先生", role: "司法書士" },
    ],
    tasks: [
      { text: "必要書類の提出", done: true },
      { text: "収支内訳書の作成", done: true },
      { text: "申告書の確認", done: false },
      { text: "電子申告の実行", done: false },
    ],
    deadline: "2025/03/15",
  },
  {
    title: "就業規則の改定",
    status: "レビュー中",
    progress: 80,
    team: [{ name: "鈴木先生", role: "社労士" }],
    tasks: [
      { text: "現行規則の確認", done: true },
      { text: "改定案の作成", done: true },
      { text: "最終レビュー", done: false },
    ],
    deadline: "2025/02/28",
  },
  {
    title: "飲食店営業許可申請",
    status: "完了",
    progress: 100,
    team: [{ name: "高橋先生", role: "行政書士" }],
    tasks: [
      { text: "書類準備", done: true },
      { text: "申請書提出", done: true },
      { text: "許可証受領", done: true },
    ],
    deadline: "2025/01/10",
  },
];

export default function UserDashboardPage() {
  return (
    <div className="flex min-h-screen bg-surface-secondary">
      <UserSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-fg-primary">マイダッシュボード</h1>
              <p className="text-sm text-fg-muted mt-1">プロジェクトの進捗を確認</p>
            </div>
            <a
              href="/app/service"
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
                      <span
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                          p.status === "完了"
                            ? "bg-success/10 text-success"
                            : p.status === "進行中"
                            ? "bg-accent/10 text-accent"
                            : "bg-warning/10 text-warning"
                        }`}
                      >
                        {p.status}
                      </span>
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
                          <div className="h-7 w-7 rounded-full bg-accent-light flex items-center justify-center text-accent font-bold text-xs">
                            {t.name[0]}
                          </div>
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
    </div>
  );
}
