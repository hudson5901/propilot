import {
  Calculator,
  Building,
  Scale,
  ShieldCheck,
  FilePen,
  type LucideIcon,
} from "lucide-react";

export type ProfDef = {
  label: string;
  Icon: LucideIcon;
  color: string;
  bg: string;
};

export const PROF: ProfDef[] = [
  { label: "税理士", Icon: Calculator, color: "text-accent", bg: "bg-[#DBEAFE]" },
  { label: "司法書士", Icon: Building, color: "text-success", bg: "bg-[#F0FDF4]" },
  { label: "弁護士", Icon: Scale, color: "text-warning", bg: "bg-[#FEF3C7]" },
  { label: "社労士", Icon: ShieldCheck, color: "text-[#DB2777]", bg: "bg-[#FCE7F3]" },
  { label: "行政書士", Icon: FilePen, color: "text-[#7C3AED]", bg: "bg-[#EDE9FE]" },
];
