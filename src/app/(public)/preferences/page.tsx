"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Bot, Send, ArrowRight, Sparkles } from "lucide-react";
import { BUDGET_OPTIONS, URGENCY_OPTIONS } from "@/lib/public-data";

type Stage = "greeting" | "concern" | "budget" | "urgency" | "summary";

interface Message {
  from: "ai" | "user";
  text: string;
  choices?: string[];
  action?: "navigate";
}

const AI_GREETING: Message = {
  from: "ai",
  text: "こんにちは！ProPilot AIアドバイザーです。\n\nあなたのお悩みに最適な専門家チームを見つけるお手伝いをします。まずは、どんなことでお困りですか？気軽にお話しください。",
};

const QUICK_STARTERS = [
  "副業の確定申告が分からなくて…",
  "会社を設立したいのですが…",
  "契約書の内容が不安で…",
  "従業員の社会保険の手続きが…",
];

export default function PreferencesPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([AI_GREETING]);
  const [input, setInput] = useState("");
  const [stage, setStage] = useState<Stage>("greeting");
  const [isTyping, setIsTyping] = useState(false);
  const [concern, setConcern] = useState("");
  const [budget, setBudget] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const addAiMessage = (text: string, extras?: Partial<Message>) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { from: "ai", text, ...extras }]);
    }, 800);
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");

    if (stage === "greeting" || stage === "concern") {
      setConcern(text);
      setStage("budget");
      addAiMessage(
        `なるほど、「${text.length > 30 ? text.slice(0, 30) + "…" : text}」ですね。\n\nお力になれると思います。より正確にマッチングするために、いくつかお聞きしてもいいですか？\n\nまず、今回のご予算はどれくらいをお考えですか？`,
        { choices: BUDGET_OPTIONS }
      );
    } else if (stage === "budget") {
      setBudget(text);
      setStage("urgency");
      addAiMessage(
        "ありがとうございます。\n\nでは、対応のスピード感はどうでしょうか？ご希望に近いものを選んでください。",
        { choices: URGENCY_OPTIONS }
      );
    } else if (stage === "urgency") {
      setStage("summary");
      addAiMessage(
        `ありがとうございます！ヒアリングは以上です。\n\n📋 **ご相談内容のまとめ**\n・お悩み：${concern.length > 40 ? concern.slice(0, 40) + "…" : concern}\n・ご予算：${budget}\n・対応スピード：${text}\n\nこの内容をもとに、5,000名以上の専門家データベースからAIが最適なチームを編成します。`,
        { action: "navigate" }
      );
    }
  };

  const handleChoice = (choice: string) => {
    handleSend(choice);
  };

  return (
    <div className="min-h-screen bg-surface-secondary flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-border shrink-0">
        <div className="mx-auto max-w-3xl px-6 py-4">
          <Link
            href="/service"
            className="text-sm text-accent hover:underline mb-2 inline-block"
          >
            &larr; サービス選択に戻る
          </Link>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-accent-light flex items-center justify-center">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-fg-primary">
                AIヒアリング
              </h1>
              <p className="text-xs text-fg-muted">
                お悩みをAIが丁寧にヒアリングします
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-6 py-6 space-y-4">
          {messages.map((m, i) => (
            <div key={i}>
              <div
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.from === "ai" && (
                  <div className="h-8 w-8 rounded-lg bg-accent-light flex items-center justify-center mr-3 mt-1 shrink-0">
                    <Bot className="h-4 w-4 text-accent" />
                  </div>
                )}
                <div
                  className={`max-w-md rounded-2xl px-5 py-3.5 text-sm leading-relaxed whitespace-pre-line ${
                    m.from === "user"
                      ? "bg-accent text-white rounded-br-sm"
                      : "bg-white border border-border text-fg-primary rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>

              {/* Choice buttons */}
              {m.choices && i === messages.length - 1 && (
                <div className="ml-11 mt-3 flex flex-wrap gap-2">
                  {m.choices.map((c) => (
                    <button
                      key={c}
                      onClick={() => handleChoice(c)}
                      className="rounded-lg border border-border bg-white px-4 py-2 text-sm text-fg-secondary hover:border-accent hover:text-accent transition-colors"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}

              {/* Navigate button */}
              {m.action === "navigate" && i === messages.length - 1 && (
                <div className="ml-11 mt-4">
                  <button
                    onClick={() => router.push("/results")}
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-hover transition-all hover:-translate-y-0.5"
                  >
                    <Sparkles className="h-4 w-4" />
                    最適な専門家チームを提案します
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="h-8 w-8 rounded-lg bg-accent-light flex items-center justify-center mr-3 mt-1 shrink-0">
                <Bot className="h-4 w-4 text-accent" />
              </div>
              <div className="bg-white border border-border rounded-2xl rounded-bl-sm px-5 py-3.5">
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-fg-muted animate-bounce [animation-delay:0ms]" />
                  <span className="h-2 w-2 rounded-full bg-fg-muted animate-bounce [animation-delay:150ms]" />
                  <span className="h-2 w-2 rounded-full bg-fg-muted animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Quick starters (only on initial greeting) */}
      {stage === "greeting" && messages.length === 1 && (
        <div className="shrink-0 mx-auto max-w-3xl w-full px-6 pb-2">
          <p className="text-xs text-fg-muted mb-2">よくあるご相談:</p>
          <div className="flex flex-wrap gap-2">
            {QUICK_STARTERS.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-xs border border-border rounded-full px-3 py-1.5 text-fg-secondary hover:border-accent hover:text-accent transition-colors bg-white"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="shrink-0 border-t border-border bg-white">
        <div className="mx-auto max-w-3xl px-6 py-4">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.nativeEvent.isComposing && handleSend(input)}
              placeholder={
                stage === "greeting"
                  ? "お困りのことを入力してください…"
                  : stage === "summary"
                  ? "ヒアリング完了！上のボタンを押してください"
                  : "メッセージを入力…"
              }
              disabled={stage === "summary"}
              className="flex-1 rounded-xl border border-border px-4 py-3 text-sm text-fg-primary placeholder:text-fg-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none disabled:bg-surface-secondary disabled:cursor-not-allowed"
            />
            <button
              onClick={() => handleSend(input)}
              disabled={stage === "summary" || !input.trim()}
              className="rounded-xl bg-accent px-5 py-3 text-white hover:bg-accent-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </div>
          <p className="text-[10px] text-fg-muted mt-2 text-center">
            完全無料 &middot; 入力内容はAIマッチングにのみ使用されます
          </p>
        </div>
      </div>
    </div>
  );
}
