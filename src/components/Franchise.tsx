// 가맹 — i18n
import { STEPS, COSTS, COST_TOTAL, COST_EXTRAS, STRENGTHS } from "../data/franchise";
import { useReveal } from "../hooks/useReveal";
import { useT } from "../i18n/locale";
import { MESSAGES } from "../i18n/messages";

const fmt = (n: number) => n.toLocaleString("en-US");

export default function Franchise() {
  const ref = useReveal<HTMLDivElement>();
  const t = useT();
  const m = t(MESSAGES).franchise;

  return (
    <section id="franchise" className="bg-paper py-24 sm:py-32">
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
          <p className="mt-6 text-(--color-ink-soft) max-w-xl mx-auto leading-relaxed text-sm">
            {m.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-(--color-line) mb-20">
          {STRENGTHS.map((s, i) => (
            <div key={i} className="bg-paper p-7">
              <p className="font-serif text-2xl font-bold text-(--color-brand) mb-3 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-base font-bold text-(--color-ink) mb-2 leading-snug">
                {t(s.title)}
              </h3>
              <p className="text-xs text-(--color-ink-soft) leading-relaxed">{t(s.desc)}</p>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl font-bold tracking-tight">{m.steps_title}</h3>
            <p className="mt-3 text-sm text-(--color-ink-soft)">{m.steps_subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-(--color-line)">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="bg-paper p-6 hover:bg-(--color-cream)/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-(--color-brand) text-lg font-bold tabular-nums">
                    {step.num}
                  </span>
                  <step.icon className="w-5 h-5 text-(--color-brand)/70" />
                </div>
                <h4 className="font-serif text-base font-bold mb-2 leading-tight text-(--color-ink)">
                  {t(step.title)}
                </h4>
                <p className="text-[11px] text-(--color-ink-soft) leading-relaxed">
                  {t(step.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-hanji border border-(--color-line) rounded-sm overflow-hidden">
            <div className="px-7 sm:px-10 py-8 flex flex-wrap items-end justify-between gap-5 border-b border-(--color-line)">
              <div>
                <p className="text-[10px] tracking-[0.35em] text-(--color-brand) font-semibold mb-2">
                  {m.cost_eyebrow}
                </p>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-(--color-ink)">
                  {m.cost_title}
                </h3>
              </div>
              <div className="text-right">
                <p className="text-[10px] tracking-widest text-(--color-ink-soft)">
                  {m.cost_total_label}
                </p>
                <p className="font-serif text-4xl sm:text-5xl font-bold text-(--color-brand) tabular-nums leading-none">
                  {fmt(COST_TOTAL)}
                  <span className="text-xl ml-2">{m.cost_total_unit}</span>
                </p>
              </div>
            </div>

            <div className="px-7 sm:px-10 py-3 bg-(--color-cream) text-(--color-brand) text-xs tracking-widest font-bold text-center border-b border-(--color-line)">
              {m.cost_promo}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-(--color-cream)/40">
                  <tr>
                    <th className="text-left px-5 py-4 font-medium text-xs tracking-widest text-(--color-ink-soft)">
                      {m.cost_th_item}
                    </th>
                    <th className="text-left px-5 py-4 font-medium text-xs tracking-widest text-(--color-ink-soft)">
                      {m.cost_th_detail}
                    </th>
                    <th className="text-right px-5 py-4 font-medium text-xs tracking-widest text-(--color-ink-soft)">
                      {m.cost_th_cost}
                    </th>
                    <th className="text-left px-5 py-4 font-medium hidden sm:table-cell text-xs tracking-widest text-(--color-ink-soft)">
                      {m.cost_th_note}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-(--color-ink-soft)">
                  {COSTS.map((c, i) => (
                    <tr key={i} className="border-t border-(--color-line)/60">
                      <td className="px-5 py-4 font-bold text-(--color-ink) font-serif whitespace-nowrap">
                        {t(c.label)}
                      </td>
                      <td className="px-5 py-4">{t(c.detail)}</td>
                      <td className="px-5 py-4 text-right font-serif font-bold text-(--color-ink) tabular-nums text-base">
                        {fmt(c.cost)}
                      </td>
                      <td className="px-5 py-4 text-xs hidden sm:table-cell">
                        {c.note ? t(c.note) : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-7 sm:px-10 py-4 text-xs text-(--color-ink-soft) bg-(--color-cream)/30 border-t border-(--color-line)">
              {m.cost_extras_label} — {t(COST_EXTRAS)}
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-block brand-gradient text-(--color-paper) px-10 py-4 rounded-sm font-medium tracking-wider text-sm hover:opacity-90 transition"
          >
            {m.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
