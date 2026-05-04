const STATUS_STYLES: Record<string, string> = {
  "完了": "bg-success/10 text-success",
  "入金済": "bg-success/10 text-success",
  "支払済": "bg-success/10 text-success",
  "提出済": "bg-success/10 text-success",
  "進行中": "bg-accent/10 text-accent",
  "レビュー中": "bg-warning/10 text-warning",
  "確認待ち": "bg-warning/10 text-warning",
  "未入金": "bg-warning/10 text-warning",
  "未払い": "bg-warning/10 text-warning",
};

export default function StatusBadge({ status }: { status: string }) {
  const style = STATUS_STYLES[status] ?? "bg-surface-secondary text-fg-muted";
  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${style}`}>
      {status}
    </span>
  );
}
