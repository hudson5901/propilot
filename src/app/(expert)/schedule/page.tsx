"use client";

import { Clock, Video, MapPin } from "lucide-react";
import { TODAY_SCHEDULE, UPCOMING_SCHEDULE } from "@/lib/expert-data";

export default function SchedulePage() {
  return (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-fg-primary">スケジュール</h1>
          <p className="text-sm text-fg-muted mt-1">今日の予定と今後のスケジュール</p>

          <div className="mt-8">
            <h2 className="text-lg font-bold text-fg-primary mb-4">今日のスケジュール</h2>
            <div className="space-y-3">
              {TODAY_SCHEDULE.map((t) => (
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
              {UPCOMING_SCHEDULE.map((u) => (
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
  );
}
