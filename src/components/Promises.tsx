// 세 가지 약속 — i18n
import { LuSprout as Sprout, LuFlaskConical as FlaskConical, LuFlame as Flame } from "react-icons/lu";
import { useReveal } from "../hooks/useReveal";
import { useT } from "../i18n/locale";
import { MESSAGES } from "../i18n/messages";

const HAN = ["一", "二", "三"];
const ICONS = [Sprout, FlaskConical, Flame];

export default function Promises() {
  const ref = useReveal<HTMLDivElement>();
  const t = useT();
  const m = t(MESSAGES).promises;

  return (
    <section className="bg-paper py-24 sm:py-32">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 sm:px-10">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.4em] text-(--color-brand) font-semibold mb-3">
            {m.eyebrow}
          </p>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl tracking-tight leading-tight">
            {m.title_l1}
            <br />
            <span className="text-(--color-brand)">{m.title_l2}</span>
          </h2>
          <div className="divider-line center mt-2 mx-auto inline-block"></div>
        </div>

        <div className="grid sm:grid-cols-3 gap-px bg-(--color-line)">
          {m.items.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <article
                key={i}
                className="bg-paper px-7 py-12 text-center group hover:bg-(--color-cream)/60 transition-colors duration-700"
              >
                <p className="font-serif text-5xl font-bold text-(--color-brand) leading-none mb-6">
                  {HAN[i]}
                </p>
                <Icon className="w-6 h-6 text-(--color-brand)/70 mx-auto mb-3" />
                <p className="text-[10px] tracking-[0.35em] text-(--color-ink-soft) mb-3">
                  {p.eyebrow}
                </p>
                <h3 className="font-serif text-2xl font-bold mb-4 text-(--color-ink)">
                  {p.title}
                </h3>
                <p className="text-sm text-(--color-ink-soft) leading-loose max-w-[16rem] mx-auto">
                  {p.detail}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
