"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Calendar,
  Wallet,
  User,
  Settings,
  type LucideIcon,
} from "lucide-react";

const NAV_ITEMS: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: "/app/dashboard", label: "ダッシュボード", Icon: LayoutDashboard },
  { href: "/app/chat", label: "チャット", Icon: MessageSquare },
  { href: "/app/clients", label: "クライアント", Icon: Users },
  { href: "/app/schedule", label: "スケジュール", Icon: Calendar },
  { href: "/app/earnings", label: "売上・支払い", Icon: Wallet },
  { href: "/app/profile/me", label: "プロフィール", Icon: User },
  { href: "/app/settings", label: "設定", Icon: Settings },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-white h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <Link href="/" className="text-xl font-bold text-accent">
          ProPilot
        </Link>
        <span className="ml-2 text-[10px] font-semibold bg-accent/10 text-accent px-2 py-0.5 rounded-full">
          専門家
        </span>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-accent-light text-accent"
                  : "text-fg-secondary hover:bg-surface-secondary hover:text-fg-primary"
              }`}
            >
              <item.Icon className="h-4.5 w-4.5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-accent-light flex items-center justify-center text-accent font-bold text-sm">
            山
          </div>
          <div className="text-sm">
            <p className="font-medium text-fg-primary">山田 税理士事務所</p>
            <p className="text-xs text-fg-muted">税理士</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
