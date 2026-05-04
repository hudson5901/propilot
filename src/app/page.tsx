import Link from "next/link";
import { Check, Star, ArrowRight, ArrowDown } from "lucide-react";
import { PROF } from "@/lib/professionals";
import {
  PAIN_CARDS,
  STATS,
  CATEGORIES,
  STEPS,
  COMPARISON,
  TESTIMONIALS,
  FAQ_ITEMS,
  PRICING_PLANS,
  TRUST_ITEMS,
  SECURITY_CARDS,
} from "@/lib/landing-data";

/* ─── data ─── */
const PROFESSIONALS = PROF.map((p, i) => ({
  ...p,
  desc: [
    "確定申告・法人税\n相続税・節税対策",
    "法人登記・不動産登記\n名義変更・定款作成",
    "契約書作成・紛争解決\n遺産分割・債務整理",
    "社会保険・労務管理\n就業規則・助成金申請",
    "許認可申請・届出\nビザ申請・事業許可",
  ][i],
}));

/* ─── page ─── */
export default function Home() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 h-16">
          <Link href="/" className="text-xl font-bold text-accent">
            ProPilot
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-fg-secondary">
            <a href="#features" className="hover:text-fg-primary transition-colors">特徴</a>
            <a href="#how" className="hover:text-fg-primary transition-colors">使い方</a>
            <a href="#professionals" className="hover:text-fg-primary transition-colors">専門家</a>
            <a href="#pricing" className="hover:text-fg-primary transition-colors">料金</a>
            <a href="#faq" className="hover:text-fg-primary transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="hidden sm:inline-flex text-sm text-fg-secondary hover:text-fg-primary transition-colors">
              ログイン
            </Link>
            <Link href="/service" className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-hover transition-colors">
              無料で始める
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative bg-hero-bg pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,98,255,0.15),_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-blue-200 mb-8">
            <span className="inline-block h-2 w-2 rounded-full bg-success animate-pulse" />
            3,200件以上のプロジェクトが ProPilot で完了しています
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            専門家チーム編成を、
            <br />
            <span className="text-accent">AIにおまかせ。</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            AIがあなたの課題に最適な専門家チームを自動編成。
            <br className="hidden md:block" />
            税理士・司法書士・弁護士・社労士をワンストップで。
          </p>

          {/* expert badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {PROF.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm text-white border border-white/10"
              >
                <p.Icon className={`h-3.5 w-3.5 ${p.color}`} />
                {p.label}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/service"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-hover transition-all hover:-translate-y-0.5"
            >
              無料で専門家チームを編成する
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#how"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-base font-medium text-white hover:bg-white/5 transition-colors"
            >
              使い方を見る
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            完全無料 · AIが最適チーム編成 · 個別契約で安心
          </p>
        </div>
      </section>

      {/* ── Pain / 困った完結セクション ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-accent tracking-widest uppercase mb-3">Problem & Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-fg-primary">
              こんな「困った」ありませんか？
            </h2>
            <p className="mt-4 text-fg-secondary max-w-xl mx-auto">
              複数の専門家が必要な課題こそ、ProPilotの出番です
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PAIN_CARDS.map((c) => (
              <div key={c.quote} className="rounded-2xl border border-border overflow-hidden">
                <div className="bg-surface-secondary p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent text-xs font-bold">Q</span>
                    </div>
                    <span className="text-xs text-fg-muted font-medium">お客様のお悩み</span>
                  </div>
                  <p className="text-lg font-bold text-fg-primary whitespace-pre-line leading-snug">
                    {c.quote}
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-accent text-xs font-semibold mb-3">
                    <ArrowDown className="h-3.5 w-3.5" />
                    ProPilotが解決
                  </div>
                  <p className="text-sm font-semibold text-fg-primary whitespace-pre-line leading-snug">
                    {c.solution}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {c.tags.map((t) => (
                      <span key={t.label} className="inline-flex items-center gap-1 text-xs font-medium bg-surface-secondary px-2.5 py-1 rounded-full">
                        <t.Icon className={`h-3 w-3 ${t.color}`} />
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-hero-bg">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-bold text-accent tracking-widest uppercase text-center mb-3">Numbers</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">数字で見るProPilot</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent">{s.value}</p>
                <p className="mt-1 text-sm text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              対応<span className="text-accent">サービス</span>
            </h2>
            <p className="mt-4 text-fg-secondary">6つの専門分野をワンストップでカバー</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((c) => (
              <div key={c.title} className="group rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-lg transition-all">
                <c.Icon className={`h-7 w-7 ${c.iconColor}`} />
                <h3 className="mt-3 text-lg font-bold text-fg-primary group-hover:text-accent transition-colors">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-fg-secondary leading-relaxed">{c.desc}</p>
                <span className="mt-4 inline-block text-xs font-medium text-accent bg-accent-light rounded-full px-3 py-1">
                  {c.experts}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="py-5 bg-surface-secondary border-y border-border">
        <div className="mx-auto max-w-5xl px-6 flex flex-wrap items-center justify-center gap-10 text-sm text-fg-muted">
          {TRUST_ITEMS.map((t) => (
            <span key={t.text} className="flex items-center gap-2.5">
              <t.Icon className="h-5 w-5 text-accent" />
              {t.text}
            </span>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-accent tracking-widest uppercase mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold">4ステップで完了。</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 px-0 md:px-12">
            {STEPS.map((s) => (
              <div key={s.num} className="relative text-center bg-surface-secondary rounded-2xl p-8">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white text-xl font-bold">
                  {s.num}
                </div>
                <h3 className="mt-5 text-lg font-bold text-fg-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-fg-secondary leading-relaxed whitespace-pre-line">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 Professionals ── */}
      <section id="professionals" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-accent tracking-widest uppercase mb-3">Professionals</p>
            <h2 className="text-3xl md:text-4xl font-bold">5職種の専門家がワンストップで対応</h2>
            <p className="mt-4 text-fg-secondary">あなたの課題に必要な専門家を、AIが自動で組み合わせます</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {PROFESSIONALS.map((p) => (
              <div key={p.label} className="bg-surface-secondary rounded-2xl p-6 text-center">
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${p.bg}`}>
                  <p.Icon className={`h-6 w-6 ${p.color}`} />
                </div>
                <h3 className="mt-4 text-base font-bold text-fg-primary">{p.label}</h3>
                <p className="mt-2 text-xs text-fg-secondary leading-relaxed whitespace-pre-line">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-surface-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-accent tracking-widest uppercase mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold">利用者の声。</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-border">
                <div className="flex gap-0.5 text-warning mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-fg-secondary leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent-light flex items-center justify-center text-accent font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-fg-primary">{t.name}</p>
                    <p className="text-xs text-fg-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section className="py-20 bg-surface-secondary">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-accent tracking-widest uppercase mb-3">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-bold">従来の方法と何が違う？</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-accent bg-surface-secondary">
                  <th className="py-4 px-6 text-left text-fg-secondary font-medium">比較項目</th>
                  <th className="py-4 px-6 text-center font-bold text-accent">ProPilot</th>
                  <th className="py-4 px-6 text-center font-medium text-fg-muted">従来の方法</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((r) => (
                  <tr key={r.feature} className="border-b border-border last:border-0">
                    <td className="py-4 px-6 text-fg-primary font-medium">{r.feature}</td>
                    <td className="py-4 px-6 text-center font-semibold text-accent">{r.propilot}</td>
                    <td className="py-4 px-6 text-center text-fg-muted">{r.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 bg-surface-secondary">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-accent tracking-widest uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold">よくある質問</h2>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-fg-primary font-medium">
                  {f.q}
                  <span className="ml-4 text-fg-muted transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-fg-secondary leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-hero-bg">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            面倒な手続き、今日終わらせよう。
          </h2>
          <p className="mt-4 text-[#BFDBFE] text-lg">
            AIが最適な専門家チームを自動編成。複雑な手続きもワンストップで。
          </p>
          <Link
            href="/service"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-accent shadow-lg hover:bg-blue-50 transition-colors"
          >
            無料で専門家チームを編成する
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-[#93C5FD]">完全無料 · 最短30秒 · 個別契約で安心</p>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-accent tracking-widest uppercase mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold">ご利用者様は完全無料</h2>
            <p className="mt-4 text-fg-secondary max-w-xl mx-auto">
              ProPilotは専門家側から掲載料をいただく仕組みです。ご利用者様の費用は一切かかりません。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING_PLANS.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-8 border-2 flex flex-col ${
                  p.highlighted ? "border-accent shadow-lg shadow-accent/10 relative" : "border-border"
                }`}
              >
                {p.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                    おすすめ
                  </span>
                )}
                <h3 className="text-lg font-bold text-fg-primary">{p.name}</h3>
                <p className="text-sm text-fg-muted mt-1">{p.desc}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-fg-primary">{p.price}</span>
                  {p.period && <span className="text-sm text-fg-muted">{p.period}</span>}
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-fg-secondary">
                      <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/service"
                  className={`mt-8 block text-center rounded-xl py-3 text-sm font-semibold transition-colors ${
                    p.highlighted
                      ? "bg-accent text-white hover:bg-accent-hover"
                      : "bg-surface-secondary text-fg-primary hover:bg-border"
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security ── */}
      <section className="py-20 bg-hero-bg">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-accent tracking-widest uppercase mb-3">Security & Trust</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">安心してご利用いただくために</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SECURITY_CARDS.map((s) => (
              <div key={s.title} className={`${s.cardBg} rounded-2xl p-8`}>
                <div className={`h-12 w-12 rounded-xl ${s.iconBg} flex items-center justify-center`}>
                  <s.Icon className={`h-5.5 w-5.5 ${s.iconColor}`} />
                </div>
                <h3 className="mt-4 text-base font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 bg-[#0A1628] text-gray-400">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-xl font-bold text-white">ProPilot</p>
              <p className="mt-2 text-sm leading-relaxed">
                AIが最適な専門家チームを
                <br />
                自動編成するプラットフォーム
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-3">サービス</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">対応サービス</a></li>
                <li><a href="#how" className="hover:text-white transition-colors">使い方</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">料金プラン</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-3">サポート</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#faq" className="hover:text-white transition-colors">よくある質問</a></li>
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-3">専門家の方へ</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">専門家登録</a></li>
                <li><a href="#" className="hover:text-white transition-colors">パートナー制度</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p>&copy; 2025 ProPilot Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
