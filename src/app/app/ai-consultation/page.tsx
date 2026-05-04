"use client";

import { useState } from "react";
import UserSidebar from "../components/UserSidebar";
import { Bot, Send } from "lucide-react";

interface Message {
  from: "ai" | "user";
  text: string;
}

const QUICK_QUESTIONS = [
  "確定申告の期限はいつですか？",
  "会社設立に必要な書類は？",
  "助成金の申請方法を教えて",
  "契約書の注意点は？",
];

export default function AiConsultationPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "ai",
      text: "こんにちは！ProPilot AIアシスタントです。税務・法務・労務・登記・許認可に関する一般的なご質問にお答えします。\n\n※ 個別具体的なアドバイスは専門家への相談をおすすめします。",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "ai",
          text: "ご質問ありがとうございます。こちらは一般的な情報としてお答えします。\n\n具体的なケースについては、ProPilotで最適な専門家をマッチングして直接ご相談されることをおすすめします。マッチングは無料ですので、お気軽にどうぞ。",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-surface-secondary">
      <UserSidebar />
      <main className="flex-1 flex flex-col">
        <div className="bg-white border-b border-border px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-accent-light flex items-center justify-center">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-fg-primary">AI相談</h1>
              <p className="text-xs text-fg-muted">一般的な質問にAIがお答えします</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-lg rounded-2xl px-5 py-3.5 text-sm leading-relaxed whitespace-pre-line ${
                  m.from === "user"
                    ? "bg-accent text-white rounded-br-sm"
                    : "bg-white border border-border text-fg-primary rounded-bl-sm"
                }`}
              >
                {m.from === "ai" && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent mb-1">
                    <Bot className="h-3 w-3" />
                    ProPilot AI
                  </span>
                )}
                {m.from === "ai" && <br />}
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 pb-2">
          <div className="flex flex-wrap gap-2">
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs border border-border rounded-full px-3 py-1.5 text-fg-secondary hover:border-accent hover:text-accent transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-border p-4 bg-white">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="質問を入力..."
              className="flex-1 rounded-xl border border-border px-4 py-3 text-sm text-fg-primary placeholder:text-fg-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none"
            />
            <button
              onClick={() => sendMessage(input)}
              className="rounded-xl bg-accent px-5 py-3 text-white hover:bg-accent-hover transition-colors"
            >
              <Send className="h-4.5 w-4.5" />
            </button>
          </div>
          <p className="text-[10px] text-fg-muted mt-2 text-center">
            AIの回答は一般的な情報です。個別のアドバイスは専門家にご相談ください。
          </p>
        </div>
      </main>
    </div>
  );
}
