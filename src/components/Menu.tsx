// 차림 — i18n + 카테고리 탭 + 가격 locale별 포맷
import { useState } from "react";
import { MENU, CATEGORY_ORDER, REVIEW_EVENT, type MenuItem } from "../data/menu";
import { useReveal } from "../hooks/useReveal";
import { useT, useFormatPrice } from "../i18n/locale";
import { MESSAGES } from "../i18n/messages";

type Tab = "signature" | "set" | "more";

export default function Menu() {
  const [tab, setTab] = useState<Tab>("signature");
  const ref = useReveal<HTMLDivElement>();
  const t = useT();
  const fmt = useFormatPrice();
  const m = t(MESSAGES).menu;

  const visible = (() => {
    if (tab === "signature") return MENU.filter((m) => m.category === "signature");
    if (tab === "set") return MENU.filter((m) => m.category === "set" || m.category === "hangrr");
    return MENU.filter((m) => ["vegan", "side", "drink"].includes(m.category));
  })();

  return (
    <section id="menu" className="bg-paper">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 py-24 sm:py-32" ref={ref}>
        <div className="reveal text-center mb-12">
          <p className="text-[10px] tracking-[0.4em] text-(--color-brand) font-semibold mb-3">
            {m.eyebrow}
          </p>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl tracking-tight leading-tight">
            {m.title_l1}
            <br />
            {m.title_l2}
          </h2>
          <div className="divider-line center mt-2 mx-auto inline-block"></div>
        </div>

        <div className="flex justify-center gap-1 mb-14 flex-wrap">
          <TabBtn active={tab === "signature"} onClick={() => setTab("signature")}>
            {m.tab_signature}
          </TabBtn>
          <TabBtn active={tab === "set"} onClick={() => setTab("set")}>
            {m.tab_set}
          </TabBtn>
          <TabBtn active={tab === "more"} onClick={() => setTab("more")}>
            {m.tab_more}
          </TabBtn>
        </div>

        {visible.some((m) => m.image) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
            {visible.filter((m) => m.image).map((item) => (
              <Card key={item.id} item={item} priceLabel={m.price_label} fmt={fmt} t={t} />
            ))}
          </div>
        )}

        {visible.some((m) => !m.image) && (
          <ListBlock items={visible.filter((m) => !m.image)} fmt={fmt} t={t} />
        )}

        {tab === "more" && (
          <div className="mt-14 bg-(--color-cream) border border-(--color-line) rounded-sm p-7 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="seal w-8 h-8 text-xs">禮</span>
              <p className="text-[10px] tracking-[0.35em] text-(--color-brand) font-semibold">
                {m.review_event_title}
              </p>
            </div>
            <p className="text-sm text-(--color-ink-soft) mb-5">{m.review_event_desc}</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {REVIEW_EVENT.map((r, i) => (
                <li
                  key={i}
                  className="flex items-baseline justify-between bg-(--color-paper) px-5 py-4 rounded-sm border border-(--color-line)"
                >
                  <span className="font-serif text-base">{t(r.name)}</span>
                  <span className="font-serif font-bold tabular-nums text-(--color-brand)">
                    {fmt(r.price)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-12 text-center text-xs text-(--color-ink-soft)">{m.note}</p>
      </div>

      <div className="bg-hanji py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-5 sm:px-10">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.4em] text-(--color-brand) font-semibold mb-3">
              {m.full_eyebrow}
            </p>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl tracking-tight">
              {m.full_title}
            </h3>
            <div className="divider-line center mt-2 mx-auto inline-block"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {CATEGORY_ORDER.map((cat) => (
              <CategoryBlock
                key={cat}
                title={m.categories[cat]}
                items={MENU.filter((mi) => mi.category === cat)}
                fmt={fmt}
                t={t}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TabBtn({
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
      className={`px-7 py-2.5 rounded-sm text-sm tracking-wider font-medium transition ${
        active
          ? "bg-(--color-ink) text-(--color-paper)"
          : "border border-(--color-line) text-(--color-ink) hover:border-(--color-ink)"
      }`}
    >
      {children}
    </button>
  );
}

type Tt = ReturnType<typeof useT>;

function Card({
  item,
  priceLabel,
  fmt,
  t,
}: {
  item: MenuItem;
  priceLabel: string;
  fmt: (n: number) => string;
  t: Tt;
}) {
  return (
    <article className="group bg-(--color-paper) border border-(--color-line) hover:border-(--color-brand)/60 transition-all rounded-sm overflow-hidden">
      <div className="aspect-[4/3] bg-(--color-cream) overflow-hidden">
        <img
          src={item.image}
          alt={t(item.name)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
          loading="lazy"
        />
      </div>
      <div className="p-6 sm:p-7">
        {item.badge && (
          <span className="inline-block text-[10px] tracking-widest text-(--color-brand) border border-(--color-brand)/40 px-2 py-0.5 rounded-sm mb-3">
            {t(item.badge)}
          </span>
        )}
        <h3 className="font-serif text-lg font-bold text-(--color-ink) leading-snug">
          {t(item.name)}
        </h3>
        {t(item.description) && (
          <p className="mt-2.5 text-xs text-(--color-ink-soft) leading-relaxed">
            {t(item.description)}
          </p>
        )}
        <div className="mt-5 pt-4 border-t border-(--color-line) flex items-baseline justify-between">
          <span className="text-[10px] tracking-widest text-(--color-ink-soft)">{priceLabel}</span>
          <span className="font-serif text-2xl font-bold tabular-nums text-(--color-brand)">
            {fmt(item.price)}
          </span>
        </div>
      </div>
    </article>
  );
}

function ListBlock({
  items,
  fmt,
  t,
}: {
  items: MenuItem[];
  fmt: (n: number) => string;
  t: Tt;
}) {
  return (
    <ul className="bg-(--color-cream) border border-(--color-line) rounded-sm divide-y divide-(--color-line) max-w-3xl mx-auto">
      {items.map((m) => (
        <li
          key={m.id}
          className="px-6 py-4 sm:px-8 sm:py-5 flex items-baseline justify-between gap-4"
        >
          <div className="min-w-0">
            <p className="font-serif text-base sm:text-lg font-bold text-(--color-ink) leading-tight">
              {t(m.name)}
            </p>
            {t(m.description) && (
              <p className="text-xs text-(--color-ink-soft) mt-1 leading-relaxed truncate">
                {t(m.description)}
              </p>
            )}
          </div>
          <span className="font-serif text-lg font-bold tabular-nums text-(--color-brand) shrink-0">
            {fmt(m.price)}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CategoryBlock({
  title,
  items,
  fmt,
  t,
}: {
  title: string;
  items: MenuItem[];
  fmt: (n: number) => string;
  t: Tt;
}) {
  return (
    <div>
      <h4 className="font-serif text-2xl font-bold mb-6 text-(--color-ink) border-b border-(--color-line) pb-3">
        {title}
      </h4>
      <ul className="space-y-4">
        {items.map((m) => (
          <li
            key={m.id}
            className="flex items-baseline justify-between gap-4 border-b border-dashed border-(--color-line)/70 pb-3"
          >
            <div className="min-w-0">
              <p className="font-serif text-[15px] font-bold text-(--color-ink)">{t(m.name)}</p>
              {t(m.description) && (
                <p className="text-[11px] text-(--color-ink-soft) mt-1 leading-relaxed">
                  {t(m.description)}
                </p>
              )}
            </div>
            <span className="font-serif font-bold tabular-nums text-(--color-brand) shrink-0">
              {fmt(m.price)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
