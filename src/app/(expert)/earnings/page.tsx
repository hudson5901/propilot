"use client";

import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { EARNINGS_SUMMARY, TRANSACTIONS } from "@/lib/expert-data";
import StatusBadge from "@/components/StatusBadge";

export default function EarningsPage() {
  return (
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-fg-primary">売上・支払い</h1>
            <TrendingUp className="h-5 w-5 text-accent" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {EARNINGS_SUMMARY.map((s) => (
              <div key={s.label} className="bg-white rounded-xl border border-border p-5">
                <p className="text-xs text-fg-muted">{s.label}</p>
                <p className="text-2xl font-bold text-fg-primary mt-2">{s.value}</p>
                {s.change && (
                  <span className={`inline-flex items-center gap-0.5 text-xs font-medium mt-1 ${s.up ? "text-success" : "text-warning"}`}>
                    {s.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {s.change}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-border mt-8 overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="text-lg font-bold text-fg-primary">取引履歴</h2>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-secondary">
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">日付</th>
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">クライアント</th>
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">内容</th>
                  <th className="py-3 px-6 text-right font-medium text-fg-secondary">金額</th>
                  <th className="py-3 px-6 text-right font-medium text-fg-secondary">ステータス</th>
                </tr>
              </thead>
              <tbody>
                {TRANSACTIONS.map((t) => (
                  <tr key={t.date + t.client} className="border-b border-border last:border-0">
                    <td className="py-4 px-6 text-fg-muted">{t.date}</td>
                    <td className="py-4 px-6 text-fg-primary font-medium">{t.client}</td>
                    <td className="py-4 px-6 text-fg-secondary">{t.desc}</td>
                    <td className="py-4 px-6 text-right font-semibold text-fg-primary">{t.amount}</td>
                    <td className="py-4 px-6 text-right">
                      <StatusBadge status={t.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  );
}
