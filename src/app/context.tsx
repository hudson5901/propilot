"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  plan: "free" | "standard" | "business";
}

interface AppState {
  user: UserProfile;
  setUser: (u: UserProfile) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
}

const DEMO_USER: UserProfile = {
  name: "田中 太郎",
  email: "tanaka@example.com",
  plan: "standard",
};

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile>(DEMO_USER);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AppContext.Provider value={{ user, setUser, sidebarOpen, setSidebarOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
}
