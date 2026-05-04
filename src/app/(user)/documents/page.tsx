"use client";

import { FileText, Download, Upload, Eye } from "lucide-react";
import { DOCUMENTS } from "@/lib/user-data";
import StatusBadge from "@/components/StatusBadge";

export default function DocumentsPage() {
  return (
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
                      <StatusBadge status={d.status} />
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
  );
}
