import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export default function StatCard({
  icon,
  iconBg = "bg-accent-light",
  label,
  value,
  extra,
}: {
  icon: ReactNode;
  iconBg?: string;
  label: string;
  value: string;
  extra?: ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-border p-5">
      <div className="flex items-center justify-between">
        <div className={`h-10 w-10 rounded-lg ${iconBg} flex items-center justify-center`}>
          {icon}
        </div>
        {extra}
      </div>
      <p className="mt-3 text-2xl font-bold text-fg-primary">{value}</p>
      <p className="text-xs text-fg-muted mt-1">{label}</p>
    </div>
  );
}
