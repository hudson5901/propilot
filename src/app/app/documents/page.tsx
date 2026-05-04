"use client";

import UserSidebar from "../components/UserSidebar";
import { FileText, Download, Upload, Eye } from "lucide-react";

const DOCUMENTS = [
  { name: "確定申告書_2024年度.pdf", type: "PDF", size: "1.2MB", date: "2025/01/15", from: "山田先生", status: "確認待ち" },
  { name: "収支内訳書.xlsx", type: "Excel", size: "340KB", date: "2025/01/12", from: "自分", status: "提出済" },
  { name: "就業規則_改定案_v3.docx", type: "Word", size: "580KB", date: "2025/01/10", from: "鈴木先生", status: "レビュー中" },
  { name: "登記簿謄本.pdf", type: "PDF", size: "890KB", date: "2025/01/08", from: "佐藤先生", status: "完了" },
  { name: "源泉徴収票.pdf", type: "PDF", size: "220KB", date: "2025/01/05", from: "自分", status: "提出済" },
];

export default function DocumentsPage() {
  return (
    <div className="flex min-h-screen bg-surface-secondary">
      <UserSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-fg-primary">書類</h1>
            <button className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors">
              <Upload className="h-4 w-4" />
              アップロード
            </button>
          </div>

          <div className="bg-white rounded-xl border border-border mt-6 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-secondary">
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">ファイル名</th>
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">送信元</th>
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">日付</th>
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">サイズ</th>
                  <th className="py-3 px-6 text-left font-medium text-fg-secondary">ステータス</th>
                  <th className="py-3 px-6 text-right font-medium text-fg-secondary">操作</th>
                </tr>
              </thead>
              <tbody>
                {DOCUMENTS.map((d) => (
                  <tr key={d.name} className="border-b border-border last:border-0 hover:bg-surface-secondary/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-accent shrink-0" />
                        <div>
                          <p className="font-medium text-fg-primary">{d.name}</p>
                          <p className="text-xs text-fg-muted">{d.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-fg-secondary">{d.from}</td>
                    <td className="py-4 px-6 text-fg-muted">{d.date}</td>
                    <td className="py-4 px-6 text-fg-muted">{d.size}</td>
                    <td className="py-4 px-6">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        d.status === "完了" || d.status === "提出済" ? "bg-success/10 text-success"
                        : d.status === "確認待ち" ? "bg-warning/10 text-warning"
                        : "bg-accent/10 text-accent"
                      }`}>{d.status}</span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 rounded hover:bg-surface-secondary transition-colors">
                          <Eye className="h-4 w-4 text-fg-muted" />
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-secondary transition-colors">
                          <Download className="h-4 w-4 text-fg-muted" />
                        </button>
                      </div>
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
