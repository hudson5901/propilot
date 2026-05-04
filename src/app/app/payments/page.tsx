"use client";

import UserSidebar from "../components/UserSidebar";
import { CreditCard, Receipt, Check } from "lucide-react";

const INVOICES = [
  { id: "INV-001", expert: "山田 一郎", role: "税理士", desc: "確定申告 報酬", amount: "¥80,000", date: "2025/01/15", status: "支払済" },
  { id: "INV-002", expert: "鈴木 健太", role: "弁護士", desc: "契約書レビュー", amount: "¥50,000", date: "2025/01/20", status: "未払い" },
  { id: "INV-003", expert: "佐藤 美咲", role: "司法書士", desc: "会社設立 登記費用", amount: "¥120,000", date: "2025/01/08", status: "支払済" },
  { id: "INV-004", expert: "高橋 裕子", role: "社労士", desc: "就業規則作成", amount: "¥60,000", date: "2025/01/25", status: "未払い" },
];

export default function PaymentsPage() {
  const totalPaid = "¥200,000";
  const totalPending = "¥110,000";

  return (
    <div className="flex min-h-screen bg-surface-secondary">
      <UserSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-fg-primary">お支払い</h1>

          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-white rounded-xl border border-border p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent-light flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-fg-muted">今月の支払い合計</p>
                  <p className="text-xl font-bold text-fg-primary">¥310,000</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-border p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Check className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-xs text-fg-muted">支払済</p>
                  <p className="text-xl font-bold text-success">{totalPaid}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-border p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Receipt className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <p className="text-xs text-fg-muted">未払い</p>
                  <p className="text-xl font-bold text-warning">{totalPending}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-border mt-8 overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="text-lg font-bold text-fg-primary">請求一覧</h2>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-secondary">
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">請求書番号</th>
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">専門家</th>
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">内容</th>
                  <th className="py-3 px-6 text-right font-medium text-fg-secondary">金額</th>
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">日付</th>
                  <th className="py-3 px-6 text-right font-medium text-fg-secondary">ステータス</th>
                </tr>
              </thead>
              <tbody>
                {INVOICES.map((inv) => (
                  <tr key={inv.id} className="border-b border-border last:border-0">
                    <td className="py-4 px-6 font-medium text-accent">{inv.id}</td>
                    <td className="py-4 px-6">
                      <p className="text-fg-primary font-medium">{inv.expert}</p>
                      <p className="text-xs text-fg-muted">{inv.role}</p>
                    </td>
                    <td className="py-4 px-6 text-fg-secondary">{inv.desc}</td>
                    <td className="py-4 px-6 text-right font-semibold text-fg-primary">{inv.amount}</td>
                    <td className="py-4 px-6 text-fg-muted">{inv.date}</td>
                    <td className="py-4 px-6 text-right">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        inv.status === "支払済" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                      }`}>{inv.status}</span>
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
