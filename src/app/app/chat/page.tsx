"use client";

import { useState } from "react";
import UserSidebar from "../components/UserSidebar";
import {
  Calculator,
  Building,
  Scale,
  ShieldCheck,
  Send,
  type LucideIcon,
} from "lucide-react";

interface Message {
  from: "user" | "expert";
  text: string;
  time: string;
}

const CONTACTS: {
  name: string;
  role: string;
  Icon: LucideIcon;
  iconColor: string;
  unread: number;
  lastMsg: string;
}[] = [
  { name: "山田 一郎", role: "税理士", Icon: Calculator, iconColor: "text-accent", unread: 2, lastMsg: "書類を確認しました" },
  { name: "佐藤 美咲", role: "司法書士", Icon: Building, iconColor: "text-success", unread: 0, lastMsg: "登記完了のご連絡です" },
  { name: "鈴木 健太", role: "弁護士", Icon: Scale, iconColor: "text-warning", unread: 1, lastMsg: "契約書の修正版をお送りします" },
  { name: "高橋 裕子", role: "社労士", Icon: ShieldCheck, iconColor: "text-[#DB2777]", unread: 0, lastMsg: "就業規則の件、承知しました" },
];

const INITIAL_MESSAGES: Message[] = [
  {
    from: "expert",
    text: "こんにちは、税理士の山田です。確定申告の件でご相談いただきありがとうございます。まずは現在の状況を教えていただけますか？",
    time: "10:00",
  },
  {
    from: "user",
    text: "よろしくお願いします。副業の収入があるのですが、経費としてどこまで計上できるか分からなくて…",
    time: "10:05",
  },
  {
    from: "expert",
    text: "副業の経費ですね。業種や主な支出内容を教えていただければ、計上可能な範囲をご案内いたします。領収書やレシートはお手元にありますか？",
    time: "10:08",
  },
];

export default function ChatPage() {
  const [selectedContact, setSelectedContact] = useState(0);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;
    setMessages((prev) => [...prev, { from: "user", text: input, time }]);
    setInput("");
  };

  const contact = CONTACTS[selectedContact];

  return (
    <div className="flex min-h-screen bg-surface-secondary">
      <UserSidebar />
      <div className="flex-1 flex">
        <div className="w-80 border-r border-border bg-white flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="text-lg font-bold text-fg-primary">チャット</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {CONTACTS.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setSelectedContact(i)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  selectedContact === i ? "bg-accent-light" : "hover:bg-surface-secondary"
                }`}
              >
                <div className="h-10 w-10 rounded-full bg-accent-light flex items-center justify-center shrink-0">
                  <c.Icon className={`h-5 w-5 ${c.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-fg-primary truncate">{c.name}</p>
                    {c.unread > 0 && (
                      <span className="ml-2 h-5 w-5 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center">
                        {c.unread}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-fg-muted truncate">{c.role}</p>
                  <p className="text-xs text-fg-muted truncate">{c.lastMsg}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-white">
          <div className="h-16 flex items-center gap-3 px-6 border-b border-border">
            <div className="h-9 w-9 rounded-full bg-accent-light flex items-center justify-center">
              <contact.Icon className={`h-4.5 w-4.5 ${contact.iconColor}`} />
            </div>
            <div>
              <p className="text-sm font-semibold text-fg-primary">{contact.name}</p>
              <p className="text-xs text-fg-muted">{contact.role}</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-md rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-accent text-white rounded-br-sm"
                      : "bg-surface-secondary text-fg-primary rounded-bl-sm"
                  }`}
                >
                  {m.text}
                  <p className={`text-[10px] mt-1 ${m.from === "user" ? "text-white/60" : "text-fg-muted"}`}>
                    {m.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="メッセージを入力..."
                className="flex-1 rounded-xl border border-border px-4 py-3 text-sm text-fg-primary placeholder:text-fg-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none"
              />
              <button
                onClick={sendMessage}
                className="rounded-xl bg-accent px-5 py-3 text-white hover:bg-accent-hover transition-colors"
              >
                <Send className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
