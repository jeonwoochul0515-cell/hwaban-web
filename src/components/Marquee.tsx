// 차분한 마퀴 — 가는 라인 + 작은 텍스트, 한식 분위기에 맞게 절제
type Props = {
  items: string[];
  variant?: "dark" | "light" | "brand";
  className?: string;
};

export default function Marquee({ items, variant = "light", className = "" }: Props) {
  const doubled = [...items, ...items];
  const palette = {
    dark: "bg-(--color-ink) text-(--color-cream) border-y border-(--color-ink-soft)/40",
    light: "bg-(--color-cream) text-(--color-ink) border-y border-(--color-line)",
    brand: "bg-(--color-brand) text-(--color-paper)",
  }[variant];

  return (
    <div className={`overflow-hidden ${palette} ${className}`}>
      <div className="flex whitespace-nowrap animate-marquee py-3.5">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="font-serif text-base sm:text-lg tracking-[0.2em] px-7 flex items-center gap-7 shrink-0"
          >
            <span className="text-(--color-brand) opacity-60 text-xs">◆</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
