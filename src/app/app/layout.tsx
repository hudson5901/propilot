import { AppProvider } from "./context";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}
