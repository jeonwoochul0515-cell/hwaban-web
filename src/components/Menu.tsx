// 메뉴 섹션 — 5종 시그니처 메뉴 카드
import SectionTitle from "./SectionTitle";
import { MENU } from "../data/menu";

export default function Menu() {
  return (
    <section id="menu" className="py-24 sm:py-32 bg-(--color-cream-deep)/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionTitle
          eyebrow="OUR MENU"
          title="화반만의 시그니처 메뉴"
          description="비빔밥과 두루치기를 중심으로, 매일 새로 만든 특제 소스와 당일 식재료로 차려내는 한 끼."
        />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENU.map((m) => (
            <article
              key={m.id}
              className="group bg-white rounded-(--radius-card) overflow-hidden border border-(--color-line) hover:shadow-2xl shadow-black/[0.04] transition-all hover:-translate-y-1"
            >
              <div className="aspect-[4/3] bg-(--color-cream) overflow-hidden relative">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.classList.add(
                      "flex",
                      "items-center",
                      "justify-center"
                    );
                    target.parentElement!.innerHTML = `<div class="text-(--color-ink-soft) text-sm">사진 준비중</div>`;
                  }}
                />
                {m.badge && (
                  <span className="absolute top-4 left-4 bg-(--color-brand) text-white text-xs px-3 py-1 rounded-full tracking-wider font-medium">
                    {m.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-(--color-ink) mb-2">
                  {m.name}
                </h3>
                <p className="text-sm text-(--color-ink-soft) leading-relaxed">
                  {m.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-(--color-ink-soft)">
          ※ 가격과 세부 구성은 매장에 따라 다를 수 있습니다. 각 매장에 문의해 주세요.
        </p>
      </div>
    </section>
  );
}
