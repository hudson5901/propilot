import { AppProvider } from "../context";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}
