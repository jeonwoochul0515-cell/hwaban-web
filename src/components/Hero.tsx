// Hero — i18n 적용
import { useEffect, useState } from "react";
import { LuArrowDown as ArrowDown } from "react-icons/lu";
import { HERO_SLIDES } from "../data/hero";
import { useT } from "../i18n/locale";
import { MESSAGES } from "../i18n/messages";

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const t = useT();
  const m = t(MESSAGES);

  useEffect(() => {
    const tid = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 5400);
    return () => clearInterval(tid);
  }, []);

  return (
    <section id="top" className="relative min-h-screen bg-paper overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 pt-32 sm:pt-36 pb-16 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-screen">
        <div className="lg:col-span-6 z-10">
          <div className="flex items-center gap-4 mb-10">
            <span className="seal text-base">花</span>
            <div>
              <p className="text-[10px] tracking-[0.45em] text-(--color-brand) font-semibold">
                {m.hero.eyebrow1}
              </p>
              <p className="text-[10px] tracking-[0.35em] text-(--color-ink-soft) mt-0.5">
                {m.hero.eyebrow2}
              </p>
            </div>
          </div>

          <h1 className="font-serif font-bold leading-[1.1] tracking-tight text-(--color-ink) text-[clamp(2.25rem,6vw,5.2rem)]">
            {m.hero.title_l1}
            <br />
            {m.hero.title_l2}
            <br />
            <span className="text-(--color-brand)">{m.hero.title_l3}</span>.
          </h1>

          <div className="divider-line mt-2"></div>

          <p className="mt-8 max-w-md text-base text-(--color-ink-soft) leading-loose whitespace-pre-line">
            {m.hero.desc}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="brand-gradient text-(--color-paper) px-7 py-3.5 rounded-sm font-medium text-sm tracking-wider hover:opacity-90 transition"
            >
              {m.hero.cta_menu}
            </a>
            <a
              href="#stores"
              className="border border-(--color-ink)/30 text-(--color-ink) px-7 py-3.5 rounded-sm text-sm tracking-wider hover:border-(--color-brand) hover:text-(--color-brand) transition"
            >
              {m.hero.cta_stores}
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md pt-8 border-t border-(--color-line)">
            <Stat n="十" label={m.hero.stat1} />
            <Stat n="五" label={m.hero.stat2} />
            <Stat n="三" label={m.hero.stat3} />
          </div>
        </div>

        <div className="lg:col-span-6 relative h-[58vh] lg:h-[78vh]">
          <div className="absolute inset-0 overflow-hidden rounded-sm shadow-2xl shadow-black/15">
            {HERO_SLIDES.map((s, i) => (
              <div
                key={s.src}
                className={`absolute inset-0 transition-opacity duration-[1400ms] ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={s.src}
                  alt={t(s.label)}
                  className={`w-full h-full object-cover ${i === idx ? "slow-zoom" : ""}`}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-(--color-ink)/45 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs bg-(--color-paper) text-(--color-ink) px-6 py-5 rounded-sm border border-(--color-line) shadow-xl">
            <p className="text-[10px] tracking-[0.35em] text-(--color-brand) mb-1.5">
              {m.hero.today}
            </p>
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-serif text-lg font-bold leading-tight">
                {t(HERO_SLIDES[idx].label)}
              </span>
              <span className="text-xs text-(--color-ink-soft) tabular-nums">
                {String(idx + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-3 flex gap-1">
              {HERO_SLIDES.map((_, i) => (
                <span
                  key={i}
                  className={`h-0.5 flex-1 transition-all duration-500 ${
                    i === idx ? "bg-(--color-brand)" : "bg-(--color-line)"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-(--color-ink-soft) text-[10px] tracking-[0.4em]"
      >
        {m.hero.scroll}
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-3xl font-bold text-(--color-brand) leading-none">{n}</div>
      <div className="mt-2 text-[10px] tracking-widest text-(--color-ink-soft) uppercase">
        {label}
      </div>
    </div>
  );
}
