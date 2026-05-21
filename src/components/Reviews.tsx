// 후기 — i18n
import { LuQuote as Quote, LuStar as Star } from "react-icons/lu";
import { REVIEWS } from "../data/reviews";
import { useT } from "../i18n/locale";
import { MESSAGES } from "../i18n/messages";

export default function Reviews() {
  const t = useT();
  const m = t(MESSAGES).reviews;

  return (
    <section className="bg-hanji py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.4em] text-(--color-brand) font-semibold mb-3">
            {m.eyebrow}
          </p>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl tracking-tight">
            "<span className="text-(--color-brand)">{m.title}</span>"
          </h2>
          <div className="divider-line center mt-2 mx-auto inline-block"></div>
          <p className="mt-6 text-sm text-(--color-ink-soft) max-w-xl mx-auto">{m.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              className="bg-(--color-paper) border border-(--color-line) rounded-sm p-7 sm:p-8 flex flex-col"
            >
              <Quote className="w-7 h-7 text-(--color-brand)/35 mb-4" />
              <p className="text-(--color-ink) leading-loose text-[15px] flex-1 font-serif">
                {t(r.text)}
              </p>
              <div className="mt-6 pt-4 border-t border-(--color-line) flex justify-between items-center">
                <span className="text-[11px] tracking-wider text-(--color-brand) font-bold">
                  {t(r.store)}
                </span>
                <div className="flex items-center gap-2 text-[11px] text-(--color-ink-soft)">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star
                        key={k}
                        className="w-3 h-3 fill-(--color-brand) text-(--color-brand)"
                      />
                    ))}
                  </div>
                  <span>{t(r.source)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
