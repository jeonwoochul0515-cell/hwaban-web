// 손님 후기 — 큰 따옴표, 가로 스크롤, 강렬한 카피
import { LuQuote as Quote, LuStar as Star } from "react-icons/lu";
import { REVIEWS } from "../data/reviews";
import Marquee from "./Marquee";

export default function Reviews() {
  return (
    <section className="bg-(--color-cream)">
      <Marquee
        variant="dark"
        items={[
          "양 많고 맛있어요",
          "가성비 최고",
          "건강한 한 끼",
          "반숙후라이 필수",
          "혼밥 환영",
          "재방문 100%",
        ]}
        speed="fast"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.4em] text-(--color-brand) font-semibold mb-3">
            VOICES · 손님들의 이야기
          </p>
          <h2 className="font-serif font-black text-5xl sm:text-6xl tracking-tighter leading-[0.95]">
            "<span className="text-(--color-brand)">또 가야지</span>"
          </h2>
          <p className="mt-5 text-(--color-ink-soft) max-w-xl mx-auto">
            다이닝코드·식신·네이버 플레이스에 남겨진 손님들의 후기를 그대로 가져왔습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              className={`relative bg-(--color-paper) p-7 rounded-(--radius-card) border border-(--color-line) ${
                i === 1 || i === 4 ? "md:translate-y-6" : ""
              }`}
            >
              <Quote className="w-8 h-8 text-(--color-brand) mb-4 opacity-40" />
              <p className="text-(--color-ink) leading-relaxed text-base">
                {r.text}
              </p>
              <div className="mt-6 pt-4 border-t border-(--color-line) flex justify-between items-center">
                <span className="font-medium text-(--color-brand) text-xs tracking-wider">
                  {r.store}
                </span>
                <div className="flex items-center gap-2 text-xs text-(--color-ink-soft)">
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star key={k} className="w-3 h-3 fill-(--color-brand-flame) text-(--color-brand-flame)" />
                    ))}
                  </div>
                  <span>{r.source}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
