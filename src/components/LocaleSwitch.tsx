// 언어 전환 — KO / EN / JA 토글
import { useLocale, LOCALES, type Locale } from "../i18n/locale";

type Props = { variant?: "header" | "inline" };

export default function LocaleSwitch({ variant = "header" }: Props) {
  const { locale, setLocale } = useLocale();

  if (variant === "inline") {
    return (
      <div className="flex flex-wrap gap-2">
        {LOCALES.map((l) => (
          <button
            key={l.code}
            onClick={() => setLocale(l.code as Locale)}
            className={`px-4 py-2 rounded-sm text-xs tracking-widest border transition ${
              locale === l.code
                ? "bg-(--color-ink) text-(--color-paper) border-(--color-ink)"
                : "border-(--color-line) text-(--color-ink) hover:border-(--color-ink)"
            }`}
          >
            {l.label} <span className="opacity-60 ml-1">{l.native}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 border border-(--color-ink)/20 rounded-sm overflow-hidden">
      {LOCALES.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code as Locale)}
          aria-label={l.native}
          className={`px-2.5 py-1 text-[10px] tracking-widest font-semibold transition ${
            locale === l.code
              ? "bg-(--color-ink) text-(--color-paper)"
              : "text-(--color-ink-soft) hover:text-(--color-ink)"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
