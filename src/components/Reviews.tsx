// 리뷰 섹션 — 네이버/식신/다이닝코드 공개 후기 발췌
import { LuQuote as Quote } from "react-icons/lu";
import { REVIEWS } from "../data/reviews";

export default function Reviews() {
  return (
    <section className="py-24 sm:py-32 bg-(--color-cream-deep)/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-(--color-brand) font-semibold mb-3">
            VOICES
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            손님들의 이야기
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              className="bg-white rounded-(--radius-card) p-7 border border-(--color-line)"
            >
              <Quote className="w-8 h-8 text-(--color-brand)/40 mb-4" />
              <p className="text-(--color-ink) leading-relaxed">{r.text}</p>
              <div className="mt-5 pt-4 border-t border-(--color-line) flex justify-between items-center text-xs text-(--color-ink-soft)">
                <span className="font-medium text-(--color-brand)">{r.store}</span>
                <span>{r.source}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
