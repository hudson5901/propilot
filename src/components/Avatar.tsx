import type { ReactNode } from "react";

export default function Avatar({
  children,
  size = "md",
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass = {
    sm: "h-7 w-7 text-xs",
    md: "h-9 w-9 text-sm",
    lg: "h-10 w-10 text-sm",
  }[size];

  return (
    <div
      className={`${sizeClass} rounded-full bg-accent-light flex items-center justify-center text-accent font-bold`}
    >
      {children}
    </div>
  );
}
