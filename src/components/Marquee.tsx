// 무한 흐름 마퀴 ribbon
type Props = {
  items: string[];
  speed?: "slow" | "fast";
  variant?: "dark" | "light" | "brand";
  className?: string;
};

export default function Marquee({
  items,
  speed = "slow",
  variant = "brand",
  className = "",
}: Props) {
  const doubled = [...items, ...items];
  const palette = {
    dark: "bg-(--color-ink) text-(--color-cream)",
    light: "bg-(--color-cream) text-(--color-ink)",
    brand: "bg-(--color-brand) text-white",
  }[variant];
  const speedClass = speed === "fast" ? "animate-marquee-fast" : "animate-marquee";

  return (
    <div className={`overflow-hidden ${palette} ${className}`}>
      <div className={`flex whitespace-nowrap ${speedClass} py-4`}>
        {doubled.map((t, i) => (
          <span
            key={i}
            className="font-serif text-3xl sm:text-5xl font-black px-8 flex items-center gap-8 shrink-0"
          >
            {t}
            <span className="opacity-50 text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
