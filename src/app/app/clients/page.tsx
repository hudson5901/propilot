"use client";

import DashboardSidebar from "../components/DashboardSidebar";
import { Search, Filter } from "lucide-react";

const CLIENTS = [
  { name: "田中 太郎", service: "確定申告 2024年度", status: "進行中", since: "2024/06", projects: 3 },
  { name: "佐藤 花子", service: "会社設立", status: "完了", since: "2024/08", projects: 1 },
  { name: "鈴木 一郎", service: "労務相談", status: "レビュー中", since: "2024/10", projects: 2 },
  { name: "高橋 美咲", service: "契約書作成", status: "進行中", since: "2024/11", projects: 1 },
  { name: "伊藤 健一", service: "法人税申告", status: "完了", since: "2024/03", projects: 5 },
  { name: "渡辺 さくら", service: "相続税申告", status: "進行中", since: "2025/01", projects: 1 },
];

export default function ClientsPage() {
  return (
    <div className="flex min-h-screen bg-surface-secondary">
      <DashboardSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-fg-primary">クライアント</h1>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-fg-muted" />
                <input
                  type="text"
                  placeholder="クライアントを検索..."
                  className="rounded-lg border border-border pl-9 pr-4 py-2 text-sm text-fg-primary placeholder:text-fg-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none w-64"
                />
              </div>
              <button className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm text-fg-secondary hover:bg-surface-secondary transition-colors">
                <Filter className="h-4 w-4" />
                フィルター
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-border mt-6 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-secondary">
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">クライアント</th>
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">現在の案件</th>
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">ステータス</th>
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">取引開始</th>
                  <th className="py-3 px-6 text-right font-medium text-fg-secondary">累計案件数</th>
                </tr>
              </thead>
              <tbody>
                {CLIENTS.map((c) => (
                  <tr key={c.name} className="border-b border-border last:border-0 hover:bg-surface-secondary/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-accent-light flex items-center justify-center text-accent font-bold text-sm">
                          {c.name[0]}
                        </div>
                        <span className="font-medium text-fg-primary">{c.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-fg-secondary">{c.service}</td>
                    <td className="py-4 px-6">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        c.status === "完了" ? "bg-success/10 text-success"
                        : c.status === "進行中" ? "bg-accent/10 text-accent"
                        : "bg-warning/10 text-warning"
                      }`}>{c.status}</span>
                    </td>
                    <td className="py-4 px-6 text-fg-muted">{c.since}</td>
                    <td className="py-4 px-6 text-right font-medium text-fg-primary">{c.projects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
