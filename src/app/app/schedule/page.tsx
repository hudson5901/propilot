"use client";

import DashboardSidebar from "../components/DashboardSidebar";
import { Clock, Video, MapPin } from "lucide-react";

const TODAY = [
  { time: "10:00", client: "田中 太郎", title: "確定申告 打ち合わせ", type: "オンライン", duration: "30分" },
  { time: "13:00", client: "高橋 美咲", title: "契約書レビュー 初回面談", type: "オンライン", duration: "60分" },
  { time: "16:00", client: "渡辺 さくら", title: "相続税 ヒアリング", type: "対面", duration: "60分" },
];

const UPCOMING = [
  { date: "明日", time: "11:00", client: "鈴木 一郎", title: "就業規則 最終確認" },
  { date: "1/20", time: "14:00", client: "佐藤 花子", title: "会社設立 書類確認" },
  { date: "1/22", time: "10:00", client: "伊藤 健一", title: "法人税 月次報告" },
];

export default function SchedulePage() {
  return (
    <div className="flex min-h-screen bg-surface-secondary">
      <DashboardSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-fg-primary">スケジュール</h1>
          <p className="text-sm text-fg-muted mt-1">今日の予定と今後のスケジュール</p>

          <div className="mt-8">
            <h2 className="text-lg font-bold text-fg-primary mb-4">今日のスケジュール</h2>
            <div className="space-y-3">
              {TODAY.map((t) => (
                <div key={t.time + t.client} className="bg-white rounded-xl border border-border p-5 flex items-center gap-5">
                  <div className="text-center shrink-0 w-16">
                    <p className="text-lg font-bold text-accent">{t.time}</p>
                    <p className="text-xs text-fg-muted">{t.duration}</p>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="flex-1">
                    <p className="font-semibold text-fg-primary">{t.title}</p>
                    <p className="text-sm text-fg-secondary mt-0.5">{t.client}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${
                    t.type === "オンライン" ? "bg-accent/10 text-accent" : "bg-success/10 text-success"
                  }`}>
                    {t.type === "オンライン" ? <Video className="h-3 w-3" /> : <MapPin className="h-3 w-3" />}
                    {t.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-bold text-fg-primary mb-4">今後の予定</h2>
            <div className="bg-white rounded-xl border border-border divide-y divide-border">
              {UPCOMING.map((u) => (
                <div key={u.date + u.client} className="flex items-center gap-5 px-5 py-4">
                  <div className="text-center shrink-0 w-16">
                    <p className="text-sm font-bold text-fg-primary">{u.date}</p>
                    <p className="text-xs text-fg-muted">{u.time}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-fg-primary">{u.title}</p>
                    <p className="text-xs text-fg-muted">{u.client}</p>
                  </div>
                  <Clock className="h-4 w-4 text-fg-muted" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
