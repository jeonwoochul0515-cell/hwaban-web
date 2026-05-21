// 브랜드 이야기 — i18n
import Marquee from "./Marquee";
import { useReveal } from "../hooks/useReveal";
import { useT } from "../i18n/locale";
import { MESSAGES } from "../i18n/messages";

export default function About() {
  const ref = useReveal<HTMLDivElement>();
  const t = useT();
  const m = t(MESSAGES).about;

  return (
    <section id="about" className="bg-hanji">
      <Marquee items={m.marquee} />
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 sm:px-10 py-24 sm:py-36 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <p className="text-[10px] tracking-[0.4em] text-(--color-brand) font-semibold mb-5">
            {m.eyebrow}
          </p>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl leading-[1.2] tracking-tight text-(--color-ink)">
            {m.title_l1}
            <br />
            {m.title_l2}
            <br />
            <span className="text-(--color-brand)">{m.title_brand}</span>.
          </h2>
          <div className="divider-line mt-2"></div>

          <div className="mt-10 space-y-6 text-(--color-ink-soft) leading-loose text-[15px] max-w-xl">
            <p>{m.body1}</p>
            <p>{m.body2}</p>
            <p className="font-serif italic text-(--color-ink) border-l-2 border-(--color-brand) pl-5">
              {m.body3}
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <div className="aspect-[3/4] rounded-sm overflow-hidden relative shadow-2xl shadow-black/15">
            <img
              src="/images/menu/bibimbap-kimchi-dark.png"
              alt="HWABAN"
              className="w-full h-full object-cover slow-zoom"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 sm:-left-8 bg-(--color-paper) text-(--color-ink) px-7 py-5 rounded-sm shadow-xl border border-(--color-line) max-w-[260px]">
            <p className="text-[10px] tracking-[0.35em] text-(--color-brand) mb-1">
              {m.signature_label}
            </p>
            <p className="font-serif text-lg font-bold leading-snug">
              {m.signature_title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
