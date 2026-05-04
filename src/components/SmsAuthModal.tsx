"use client";

import { useState, useRef, useEffect } from "react";
import { X, Phone, ShieldCheck } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

type Step = "phone" | "code" | "done";

export default function SmsAuthModal({
  open,
  onClose,
  onSuccess,
}: {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const { setVerified } = useAuth();
  const [step, setStep] = useState<Step>("phone");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (open) {
      setStep("phone");
      setPhone("");
      setCode(["", "", "", "", "", ""]);
      setError("");
    }
  }, [open]);

  if (!open) return null;

  const handleSendCode = () => {
    if (!/^0\d{9,10}$/.test(phone)) {
      setError("正しい電話番号を入力してください（例: 09012345678）");
      return;
    }
    setError("");
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setStep("code");
    }, 800);
  };

  const handleCodeChange = (idx: number, val: string) => {
    if (!/^\d*$/.test(val)) return;
    const next = [...code];
    next[idx] = val.slice(-1);
    setCode(next);
    if (val && idx < 5) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleCodeKeyDown = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const full = code.join("");
    if (full.length !== 6) {
      setError("6桁のコードを入力してください");
      return;
    }
    setError("");
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setStep("done");
      setVerified(phone);
      setTimeout(() => {
        onSuccess();
      }, 600);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-xl border border-border w-full max-w-md mx-4 p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-surface-secondary transition-colors"
        >
          <X className="h-5 w-5 text-fg-muted" />
        </button>

        {step === "phone" && (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-accent-light flex items-center justify-center">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-fg-primary">
                  電話番号認証
                </h2>
                <p className="text-xs text-fg-muted">
                  専門家の詳細を閲覧するには認証が必要です
                </p>
              </div>
            </div>

            <label className="block text-sm font-medium text-fg-primary mb-2">
              電話番号
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSendCode()}
              placeholder="09012345678"
              className="w-full rounded-xl border border-border px-4 py-3 text-sm text-fg-primary placeholder:text-fg-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none"
            />
            {error && (
              <p className="text-xs text-danger mt-2">{error}</p>
            )}
            <button
              onClick={handleSendCode}
              disabled={sending}
              className="w-full mt-4 rounded-xl bg-accent py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors disabled:opacity-50"
            >
              {sending ? "送信中..." : "認証コードを送信"}
            </button>
            <p className="text-[10px] text-fg-muted mt-3 text-center">
              SMSで6桁の認証コードが届きます
            </p>
          </>
        )}

        {step === "code" && (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-accent-light flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-fg-primary">
                  認証コード入力
                </h2>
                <p className="text-xs text-fg-muted">
                  {phone} に送信されたコードを入力
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-2 mb-4">
              {code.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => { inputRefs.current[i] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(i, e.target.value)}
                  onKeyDown={(e) => handleCodeKeyDown(i, e)}
                  className="h-12 w-12 rounded-lg border border-border text-center text-lg font-bold text-fg-primary focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                />
              ))}
            </div>
            {error && (
              <p className="text-xs text-danger text-center mb-2">{error}</p>
            )}
            <button
              onClick={handleVerify}
              disabled={sending}
              className="w-full rounded-xl bg-accent py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-colors disabled:opacity-50"
            >
              {sending ? "確認中..." : "認証する"}
            </button>
            <button
              onClick={() => setStep("phone")}
              className="w-full mt-2 text-sm text-accent hover:underline"
            >
              電話番号を変更する
            </button>
            <p className="text-[10px] text-fg-muted mt-3 text-center">
              デモ環境: 任意の6桁の数字で認証できます
            </p>
          </>
        )}

        {step === "done" && (
          <div className="text-center py-4">
            <div className="mx-auto h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
              <ShieldCheck className="h-8 w-8 text-success" />
            </div>
            <h2 className="text-lg font-bold text-fg-primary">認証完了</h2>
            <p className="text-sm text-fg-muted mt-1">
              専門家の詳細を閲覧できます
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
