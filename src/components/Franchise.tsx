// 가맹점 창업 안내 — 강점 5가지, 8단계 절차, 비용표
import SectionTitle from "./SectionTitle";
import { STEPS, COSTS, COST_TOTAL, COST_EXTRAS, STRENGTHS } from "../data/franchise";

const groupFormat = (n: number) => n.toLocaleString("ko-KR");

export default function Franchise() {
  return (
    <section id="franchise" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionTitle
          eyebrow="FRANCHISE"
          title={
            <>
              합리적인 비용, 높은 마진율<br />
              화반과 함께하세요
            </>
          }
          description="2015년부터 검증된 운영 시스템과 본사의 직영점 노하우로 예비 점주님의 안정적인 창업을 돕습니다."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {STRENGTHS.map((s, i) => (
            <div
              key={s.title}
              className="bg-white rounded-(--radius-card) p-6 border border-(--color-line)"
            >
              <div className="font-serif text-(--color-brand) text-3xl font-bold mb-3">
                0{i + 1}
              </div>
              <h3 className="font-bold mb-2 text-(--color-ink)">{s.title}</h3>
              <p className="text-sm text-(--color-ink-soft) leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-center mb-10">
            창업 절차 — 8단계
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="bg-white rounded-(--radius-card) p-6 border border-(--color-line)"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-serif text-(--color-brand) text-lg font-bold">
                    {s.num}
                  </span>
                  <s.icon className="w-5 h-5 text-(--color-brand)" />
                </div>
                <h4 className="font-bold mb-1.5 text-(--color-ink)">{s.title}</h4>
                <p className="text-xs text-(--color-ink-soft) leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-white rounded-(--radius-card) border border-(--color-line) overflow-hidden">
            <div className="bg-(--color-ink) text-white p-6 sm:p-8 flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <p className="text-xs tracking-widest text-(--color-brand-soft) mb-1">
                  INVESTMENT
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  창업 비용 안내 (20평 기준)
                </h3>
              </div>
              <div className="bg-(--color-brand) text-white text-xs px-3 py-1.5 rounded-full">
                10호점까지 가맹비 · 교육비 · 보증금 면제
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-(--color-cream-deep) text-(--color-ink)">
                  <tr>
                    <th className="text-left p-4 font-medium">구분</th>
                    <th className="text-left p-4 font-medium">내용</th>
                    <th className="text-right p-4 font-medium">비용 (만원)</th>
                    <th className="text-left p-4 font-medium hidden sm:table-cell">비고</th>
                  </tr>
                </thead>
                <tbody className="text-(--color-ink-soft)">
                  {COSTS.map((c, i) => (
                    <tr
                      key={i}
                      className="border-t border-(--color-line) hover:bg-(--color-cream)/50"
                    >
                      <td className="p-4 font-medium text-(--color-ink) whitespace-nowrap">
                        {c.label}
                      </td>
                      <td className="p-4">{c.detail}</td>
                      <td className="p-4 text-right font-medium text-(--color-ink) tabular-nums">
                        {groupFormat(c.cost)}
                      </td>
                      <td className="p-4 text-xs hidden sm:table-cell">{c.note ?? ""}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-(--color-ink) bg-(--color-brand)/5">
                    <td className="p-4 font-bold text-(--color-ink)">합계</td>
                    <td className="p-4"></td>
                    <td className="p-4 text-right font-bold text-(--color-brand) tabular-nums text-lg">
                      {groupFormat(COST_TOTAL)}
                    </td>
                    <td className="p-4 text-xs hidden sm:table-cell">부가세 별도</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-5 sm:p-6 text-xs text-(--color-ink-soft) bg-(--color-cream)">
              ※ 별도 사항 — {COST_EXTRAS}
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="brand-gradient text-white px-9 py-4 rounded-full font-medium inline-block hover:opacity-90"
          >
            가맹 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
