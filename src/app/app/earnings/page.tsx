"use client";

import DashboardSidebar from "../components/DashboardSidebar";
import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const SUMMARY = [
  { label: "今月の売上", value: "¥480,000", change: "+12%", up: true },
  { label: "先月の売上", value: "¥428,000", change: "", up: true },
  { label: "未入金", value: "¥150,000", change: "2件", up: false },
  { label: "今月の案件数", value: "12", change: "+3", up: true },
];

const TRANSACTIONS = [
  { date: "2025/01/15", client: "田中 太郎", desc: "確定申告 報酬", amount: "¥80,000", status: "入金済" },
  { date: "2025/01/12", client: "佐藤 花子", desc: "会社設立 報酬", amount: "¥120,000", status: "入金済" },
  { date: "2025/01/10", client: "鈴木 一郎", desc: "就業規則作成 報酬", amount: "¥60,000", status: "未入金" },
  { date: "2025/01/08", client: "高橋 美咲", desc: "契約書作成 報酬", amount: "¥50,000", status: "入金済" },
  { date: "2025/01/05", client: "伊藤 健一", desc: "法人税申告 報酬", amount: "¥90,000", status: "未入金" },
];

export default function EarningsPage() {
  return (
    <div className="flex min-h-screen bg-surface-secondary">
      <DashboardSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-fg-primary">売上・支払い</h1>
            <TrendingUp className="h-5 w-5 text-accent" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {SUMMARY.map((s) => (
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
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        t.status === "入金済" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                      }`}>{t.status}</span>
                    </td>
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
