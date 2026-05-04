import { getSupabase } from "./supabase";
import {
  Calculator,
  Building,
  Scale,
  ShieldCheck,
  FilePen,
  type LucideIcon,
} from "lucide-react";

// Icon resolver
const ICON_MAP: Record<string, LucideIcon> = {
  Calculator,
  Building,
  Scale,
  ShieldCheck,
  FilePen,
};

function resolveIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Calculator;
}

function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  return !!url && url !== "your-supabase-url-here";
}

// ─── Experts ───
export interface Expert {
  id: string;
  name: string;
  role: string;
  Icon: LucideIcon;
  iconColor: string;
  rating: number;
  reviews: number;
  experience: string;
  location?: string;
  price: string;
  bio?: string;
  match: number;
  specialties: string[];
  qualifications: string[];
  badges: string[];
  stats?: { cases: number; repeatRate: string; avgResponse: string };
  reviews_list?: { name: string; rating: number; text: string; date: string }[];
}

export async function fetchExperts(): Promise<Expert[]> {
  if (!isSupabaseConfigured()) {
    const { EXPERT_RESULTS } = await import("./public-data");
    return EXPERT_RESULTS.map((e) => ({
      ...e,
      qualifications: [],
      location: undefined,
      bio: undefined,
      stats: undefined,
      reviews_list: undefined,
    }));
  }

  const { data, error } = await getSupabase()
    .from("experts")
    .select("*")
    .order("match_score", { ascending: false });

  if (error || !data) return [];

  return data.map((e) => ({
    id: e.id,
    name: e.name,
    role: e.role,
    Icon: resolveIcon(e.icon_name),
    iconColor: e.icon_color,
    rating: Number(e.rating),
    reviews: e.reviews_count,
    experience: e.experience,
    location: e.location,
    price: e.price,
    bio: e.bio,
    match: e.match_score,
    specialties: e.specialties || [],
    qualifications: e.qualifications || [],
    badges: e.badges || [],
    stats: e.stats_cases
      ? { cases: e.stats_cases, repeatRate: e.stats_repeat_rate, avgResponse: e.stats_avg_response }
      : undefined,
  }));
}

export async function fetchExpertById(id: string): Promise<Expert | null> {
  if (!isSupabaseConfigured()) {
    const { DEMO_EXPERT } = await import("./public-data");
    return {
      id,
      name: DEMO_EXPERT.name,
      role: DEMO_EXPERT.role,
      Icon: Calculator,
      iconColor: "text-accent",
      rating: DEMO_EXPERT.rating,
      reviews: DEMO_EXPERT.reviews,
      experience: DEMO_EXPERT.experience,
      location: DEMO_EXPERT.location,
      price: DEMO_EXPERT.price,
      bio: DEMO_EXPERT.bio,
      match: 98,
      specialties: DEMO_EXPERT.specialties,
      qualifications: DEMO_EXPERT.qualifications,
      badges: [],
      stats: DEMO_EXPERT.stats,
      reviews_list: DEMO_EXPERT.reviews_list,
    };
  }

  const { data: expert, error } = await getSupabase()
    .from("experts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !expert) return null;

  const { data: reviews } = await getSupabase()
    .from("expert_reviews")
    .select("*")
    .eq("expert_id", id)
    .order("created_at", { ascending: false });

  return {
    id: expert.id,
    name: expert.name,
    role: expert.role,
    Icon: resolveIcon(expert.icon_name),
    iconColor: expert.icon_color,
    rating: Number(expert.rating),
    reviews: expert.reviews_count,
    experience: expert.experience,
    location: expert.location,
    price: expert.price,
    bio: expert.bio,
    match: expert.match_score,
    specialties: expert.specialties || [],
    qualifications: expert.qualifications || [],
    badges: expert.badges || [],
    stats: expert.stats_cases
      ? { cases: expert.stats_cases, repeatRate: expert.stats_repeat_rate, avgResponse: expert.stats_avg_response }
      : undefined,
    reviews_list: (reviews || []).map((r) => ({
      name: r.reviewer_name,
      rating: r.rating,
      text: r.text,
      date: r.review_date,
    })),
  };
}

// ─── Services ───
export interface Service {
  id: string;
  Icon: LucideIcon;
  iconColor: string;
  title: string;
  desc: string;
  experts: { label: string; color: string }[];
  examples: string[];
}

export async function fetchServices(): Promise<Service[]> {
  if (!isSupabaseConfigured()) {
    const { SERVICES } = await import("./public-data");
    return SERVICES;
  }

  const { data: services, error } = await getSupabase()
    .from("services")
    .select("*, service_experts(*)")
    .order("sort_order");

  if (error || !services) return [];

  return services.map((s) => ({
    id: s.id,
    Icon: resolveIcon(s.icon_name),
    iconColor: s.icon_color,
    title: s.title,
    desc: s.description,
    experts: (s.service_experts || []).map((se: { expert_role: string; role_color: string }) => ({
      label: se.expert_role,
      color: se.role_color,
    })),
    examples: s.examples || [],
  }));
}
