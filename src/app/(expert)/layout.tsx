"use client";

import DashboardSidebar from "@/components/DashboardSidebar";
import { AppProvider } from "../context";

export default function ExpertLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <div className="flex min-h-screen bg-surface-secondary">
        <DashboardSidebar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </AppProvider>
  );
}
