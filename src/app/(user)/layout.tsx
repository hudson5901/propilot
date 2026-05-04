"use client";

import UserSidebar from "@/components/UserSidebar";
import { AppProvider } from "../context";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <div className="flex min-h-screen bg-surface-secondary">
        <UserSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </AppProvider>
  );
}
