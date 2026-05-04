import { AppProvider } from "../context";
import { AuthProvider } from "@/lib/auth-context";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <AuthProvider>{children}</AuthProvider>
    </AppProvider>
  );
}
