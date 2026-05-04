"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/app/context";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  CreditCard,
  Bot,
  Settings,
  type LucideIcon,
} from "lucide-react";

const NAV_ITEMS: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: "/user-dashboard", label: "ダッシュボード", Icon: LayoutDashboard },
  { href: "/chat", label: "チャット", Icon: MessageSquare },
  { href: "/documents", label: "書類", Icon: FileText },
  { href: "/payments", label: "お支払い", Icon: CreditCard },
  { href: "/ai-consultation", label: "AI相談", Icon: Bot },
  { href: "/settings", label: "設定", Icon: Settings },
];

export default function UserSidebar() {
  const pathname = usePathname();
  const { user } = useApp();

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-white h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <Link href="/" className="text-xl font-bold text-accent">
          ProPilot
        </Link>
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
            {user.name[0]}
          </div>
          <div className="text-sm">
            <p className="font-medium text-fg-primary">{user.name}</p>
            <p className="text-xs text-fg-muted">{user.plan} プラン</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
