// 가맹점 창업 — 검정 배경, 강렬한 숫자, 8단계 절차, 비용표
import { STEPS, COSTS, COST_TOTAL, COST_EXTRAS, STRENGTHS } from "../data/franchise";
import { useReveal } from "../hooks/useReveal";

const fmt = (n: number) => n.toLocaleString("ko-KR");

export default function Franchise() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="franchise" className="ink-gradient text-(--color-cream) py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      <div ref={ref} className="reveal relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-12 gap-6 items-end mb-14">
          <div className="sm:col-span-8">
            <p className="text-[11px] tracking-[0.4em] text-(--color-brand-flame) font-semibold mb-3">
              FRANCHISE · 가맹점 모집
            </p>
            <h2 className="font-serif font-black text-5xl sm:text-7xl leading-[0.92] tracking-tighter">
              합리적인 비용,<br />
              <span className="text-(--color-brand-flame)">검증된 마진</span>.
            </h2>
          </div>
          <div className="sm:col-span-4 text-(--color-cream)/70 text-sm leading-relaxed">
            2015년부터 직영 운영해 온 노하우로 예비 점주님의 안정적인 창업을 본사가 직접 돕습니다.
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-0 mb-20">
          {STRENGTHS.map((s, i) => (
            <div
              key={s.title}
              className="relative bg-white/[0.03] border border-white/10 p-6 hover:bg-(--color-brand)/15 hover:border-(--color-brand-flame) transition group"
              style={{ marginLeft: i > 0 ? "-1px" : undefined }}
            >
              <span className="font-serif text-5xl font-black text-(--color-brand-flame)/70 tabular-nums block mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-bold text-(--color-cream) text-base mb-2 leading-tight">
                {s.title}
              </h3>
              <p className="text-xs text-(--color-cream)/60 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="font-serif text-3xl sm:text-4xl font-black mb-3 tracking-tight">
            창업 절차 — <span className="text-(--color-brand-flame)">8단계</span>
          </h3>
          <p className="text-(--color-cream)/60 text-sm mb-10">
            상담부터 그랜드 오픈까지, 본사가 처음부터 끝까지 함께합니다.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="bg-(--color-ink) p-6 hover:bg-(--color-brand)/20 transition group"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-(--color-brand-flame) text-xl font-black tabular-nums">
                    {step.num}
                  </span>
                  <step.icon className="w-5 h-5 text-(--color-brand-flame)" />
                </div>
                <h4 className="font-bold mb-2 leading-tight">{step.title}</h4>
                <p className="text-[11px] text-(--color-cream)/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-(--color-paper) text-(--color-ink) rounded-(--radius-card) overflow-hidden">
            <div className="brand-gradient text-white p-7 sm:p-10 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-[11px] tracking-[0.4em] text-white/70 mb-2">
                  INVESTMENT · 20평 기준
                </p>
                <h3 className="font-serif text-4xl sm:text-5xl font-black tracking-tighter">
                  창업 비용
                </h3>
              </div>
              <div className="text-right">
                <p className="text-[10px] tracking-widest text-white/80">총 합계 (부가세 별도)</p>
                <p className="font-serif text-5xl sm:text-6xl font-black tabular-nums leading-none">
                  {fmt(COST_TOTAL)}<span className="text-2xl ml-2">만원</span>
                </p>
              </div>
            </div>

            <div className="px-7 py-3 bg-(--color-ink) text-(--color-brand-flame) text-xs tracking-widest font-bold flex items-center justify-center gap-3">
              <span>★</span>
              10호점까지 가맹비 · 교육비 · 보증금 면제
              <span>★</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-(--color-cream-deep)">
                  <tr>
                    <th className="text-left p-4 font-medium text-xs tracking-widest">항목</th>
                    <th className="text-left p-4 font-medium text-xs tracking-widest">내용</th>
                    <th className="text-right p-4 font-medium text-xs tracking-widest">비용 (만원)</th>
                    <th className="text-left p-4 font-medium hidden sm:table-cell text-xs tracking-widest">비고</th>
                  </tr>
                </thead>
                <tbody className="text-(--color-ink-soft)">
                  {COSTS.map((c, i) => (
                    <tr key={i} className="border-t border-(--color-line)">
                      <td className="p-4 font-bold text-(--color-ink) whitespace-nowrap">
                        {c.label}
                      </td>
                      <td className="p-4">{c.detail}</td>
                      <td className="p-4 text-right font-serif font-black text-(--color-ink) tabular-nums text-lg">
                        {fmt(c.cost)}
                      </td>
                      <td className="p-4 text-xs hidden sm:table-cell">{c.note ?? ""}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-5 text-xs text-(--color-ink-soft) bg-(--color-cream)">
              ※ 별도 사항 — {COST_EXTRAS}
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 brand-gradient text-white px-10 py-5 rounded-full font-medium hover:scale-[1.03] transition-transform shadow-2xl shadow-(--color-brand)/40"
          >
            <span className="text-[11px] tracking-widest opacity-80">START</span>
            <span className="text-base font-serif font-bold">가맹 문의하기 →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
