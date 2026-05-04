"use client";

import { Search, Filter } from "lucide-react";
import { CLIENTS } from "@/lib/expert-data";
import StatusBadge from "@/components/StatusBadge";
import Avatar from "@/components/Avatar";

export default function ClientsPage() {
  return (
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
                        <Avatar>{c.name[0]}</Avatar>
                        <span className="font-medium text-fg-primary">{c.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-fg-secondary">{c.service}</td>
                    <td className="py-4 px-6">
                      <StatusBadge status={c.status} />
                    </td>
                    <td className="py-4 px-6 text-fg-muted">{c.since}</td>
                    <td className="py-4 px-6 text-right font-medium text-fg-primary">{c.projects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  );
}
