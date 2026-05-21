// Hero — 풀스크린 split, 자동 슬라이드, 강렬한 타이포, 회전 라벨
import { useEffect, useState } from "react";
import { LuArrowDown as ArrowDown, LuPhone as Phone } from "react-icons/lu";
import { HERO_SLIDES } from "../data/hero";

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % HERO_SLIDES.length);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden ink-gradient text-(--color-cream)"
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-16 grid lg:grid-cols-12 gap-8 lg:gap-4 min-h-screen items-center">
        <div className="lg:col-span-7 z-10">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-12 h-px bg-(--color-brand-flame)" />
            <span className="text-[11px] tracking-[0.4em] text-(--color-brand-flame) font-semibold">
              SINCE 2015 · BUSAN
            </span>
          </div>

          <h1 className="font-serif font-black text-[14vw] sm:text-[10vw] lg:text-[8.5rem] leading-[0.92] tracking-tight">
            <span className="block">한국인의</span>
            <span className="block text-(--color-brand-flame) italic">
              한 끼,
            </span>
            <span className="block">
              <span className="text-stroke">화반</span>
              <span className="text-(--color-cream)">.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-md text-base sm:text-lg text-(--color-cream)/70 leading-relaxed">
            패스트푸드보다 빠르게 — 그러나 영양은 더 풍부하게.
            <br />
            2015년 부민동에서 시작된 비빔밥, 두루치기 한 그릇의 정직.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="brand-gradient text-white px-8 py-4 rounded-full font-medium hover:scale-[1.03] transition-transform shadow-2xl shadow-(--color-brand)/40"
            >
              메뉴 살펴보기 →
            </a>
            <a
              href="tel:051-255-8727"
              className="flex items-center gap-2 px-7 py-4 rounded-full border border-(--color-cream)/30 hover:bg-(--color-cream)/10 transition"
            >
              <Phone className="w-4 h-4" />
              본사 051-255-8727
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs">
            <Stat n="2015" label="부민동 첫 매장" />
            <Stat n="5" label="부산 전 지점" />
            <Stat n="9,900~" label="원 합리적 가격" />
            <Stat n="3" label="가지 약속" />
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[55vh] lg:h-[80vh]">
          <div className="absolute inset-0 rounded-(--radius-card) overflow-hidden">
            {HERO_SLIDES.map((s, i) => (
              <div
                key={s.src}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={s.src}
                  alt={s.label}
                  className="w-full h-full object-cover ken-burns"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-tr from-(--color-ink)/40 via-transparent to-transparent" />
          </div>

          <div className="absolute -top-6 -left-6 w-24 h-24 brand-gradient rounded-full flex items-center justify-center text-white text-xs font-bold tracking-widest animate-spin-slow shadow-2xl">
            <span className="absolute">FRESH · DAILY · HOT</span>
          </div>

          <div className="absolute -bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs bg-(--color-paper) text-(--color-ink) rounded-2xl px-5 py-4 shadow-2xl">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-serif text-lg font-bold">
                {HERO_SLIDES[idx].label}
              </span>
              <span className="text-xs text-(--color-ink-soft)">
                {String(idx + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-2 h-0.5 bg-(--color-line) rounded-full overflow-hidden">
              <div
                key={idx}
                className="h-full bg-(--color-brand)"
                style={{ animation: "fade-up 4.2s linear, marquee-fast 4.2s linear" }}
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-(--color-cream)/60 text-[10px] tracking-[0.4em]"
      >
        SCROLL DOWN
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-serif text-3xl font-black tabular-nums text-(--color-brand-flame)">
        {n}
      </span>
      <span className="text-(--color-cream)/60 tracking-wider uppercase">
        {label}
      </span>
    </div>
  );
}
