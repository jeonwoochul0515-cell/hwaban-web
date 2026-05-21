// 메뉴 — 카테고리 필터 + 큰 사진 카드 + 폭발적 가격 표시
import { useState } from "react";
import { MENU, MENU_CATEGORIES, SIDE_ITEMS, formatKRW } from "../data/menu";
import { useReveal } from "../hooks/useReveal";

type CatId = (typeof MENU_CATEGORIES)[number]["id"] | "all";

export default function Menu() {
  const [cat, setCat] = useState<CatId>("all");
  const ref = useReveal<HTMLDivElement>();
  const list = cat === "all" ? MENU : MENU.filter((m) => m.category === cat);

  return (
    <section id="menu" className="bg-(--color-paper) overflow-hidden">
      <div className="border-y border-(--color-line)">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex items-end justify-between gap-5 flex-wrap">
          <div>
            <p className="text-[11px] tracking-[0.4em] text-(--color-brand) font-semibold mb-2">
              MENU · 메뉴
            </p>
            <h2 className="font-serif text-5xl sm:text-7xl font-black leading-[0.95] tracking-tighter">
              한 그릇의 <span className="text-(--color-brand)">정직</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <CatBtn active={cat === "all"} onClick={() => setCat("all")}>
              전체
            </CatBtn>
            {MENU_CATEGORIES.map((c) => (
              <CatBtn
                key={c.id}
                active={cat === c.id}
                onClick={() => setCat(c.id)}
              >
                {c.label}
              </CatBtn>
            ))}
          </div>
        </div>
      </div>

      <div ref={ref} className="reveal max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((m) => (
            <article
              key={m.id}
              className="group relative bg-(--color-cream) rounded-(--radius-card) overflow-hidden border border-(--color-line) hover:border-(--color-brand) transition-all hover:-translate-y-2 hover:shadow-2xl shadow-(--color-brand)/10 duration-500"
            >
              <div className="aspect-square bg-(--color-cream-deep) overflow-hidden relative">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {m.badge && (
                  <span className="absolute top-4 left-4 brand-gradient text-white text-[10px] px-3 py-1.5 rounded-full tracking-widest font-bold">
                    {m.badge}
                  </span>
                )}
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-(--color-ink)/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-5 left-5 right-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-xs leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between gap-3">
                <h3 className="font-serif text-xl font-bold text-(--color-ink) leading-tight">
                  {m.name}
                </h3>
                <p className="font-serif font-black text-2xl tabular-nums text-(--color-brand) shrink-0">
                  {formatKRW(m.price)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 bg-(--color-ink) text-(--color-cream) rounded-(--radius-card) p-7 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-[0.3em] text-(--color-brand-flame)">
              SIDE · 추가
            </span>
            <span className="h-px flex-1 bg-(--color-cream)/20" />
          </div>
          <ul className="grid sm:grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-6">
            {SIDE_ITEMS.map((s) => (
              <li key={s.name} className="flex items-baseline justify-between gap-3 border-b border-(--color-cream)/15 pb-3">
                <span className="text-sm">{s.name}</span>
                <span className="font-serif font-bold tabular-nums text-(--color-brand-flame)">
                  {formatKRW(s.price)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center text-xs text-(--color-ink-soft)">
          ※ 가격은 다이닝코드/식신 공개 정보 기준이며, 매장별로 일부 차이가 있을 수 있습니다.
        </p>
      </div>
    </section>
  );
}

function CatBtn({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition ${
        active
          ? "bg-(--color-ink) text-(--color-cream)"
          : "border border-(--color-line) text-(--color-ink) hover:border-(--color-ink)"
      }`}
    >
      {children}
    </button>
  );
}
