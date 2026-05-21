// 매장 — i18n
import { LuMapPin as MapPin, LuPhone as Phone, LuClock as Clock } from "react-icons/lu";
import { STORES } from "../data/stores";
import { useReveal } from "../hooks/useReveal";
import { useT } from "../i18n/locale";
import { MESSAGES } from "../i18n/messages";

const HAN_NUM = ["一", "二", "三", "四", "五"];

export default function Stores() {
  const ref = useReveal<HTMLDivElement>();
  const t = useT();
  const m = t(MESSAGES).stores;

  return (
    <section id="stores" className="bg-paper py-24 sm:py-32">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {STORES.map((s, i) => (
            <article
              key={s.id}
              className="group bg-(--color-cream)/60 hover:bg-(--color-paper) border border-(--color-line) hover:border-(--color-brand)/50 transition-all rounded-sm overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[5/3] overflow-hidden bg-(--color-cream)">
                <img
                  src={s.dishImage}
                  alt={t(s.name)}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1400ms]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-(--color-ink)/55 via-(--color-ink)/10 to-transparent" />
                <span className="absolute top-4 left-4 seal text-xl w-12 h-12">
                  {HAN_NUM[i] ?? String(i + 1)}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] tracking-[0.3em] text-(--color-paper)/85 mb-1">
                    {t(s.shortName)}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-(--color-paper) leading-tight">
                    {t(s.name)}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-2.5 text-xs text-(--color-ink-soft) leading-relaxed">
                  <Row icon={MapPin}>{t(s.address)}</Row>
                  <Row icon={Clock}>
                    {t(s.hours)}
                    {s.breakTime && <span className="opacity-70"> · B/T {t(s.breakTime)}</span>}
                    <br />
                    <span className="opacity-70">{t(s.closed)}</span>
                  </Row>
                  <Row icon={Phone}>
                    <a href={`tel:${s.phone}`} className="hover:text-(--color-brand)">
                      {s.phone}
                    </a>
                  </Row>
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t(s.features).map((f, k) => (
                    <span
                      key={k}
                      className="text-[10px] tracking-wide text-(--color-brand) border border-(--color-brand)/30 px-2 py-0.5 rounded-sm"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-(--color-line) flex gap-2">
                  <a
                    href={`https://map.naver.com/p/search/${encodeURIComponent(s.naverMapQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center text-xs py-2 rounded-sm border border-(--color-ink)/20 hover:border-(--color-brand) hover:text-(--color-brand) transition"
                  >
                    {m.map_naver}
                  </a>
                  <a
                    href={`https://map.kakao.com/link/map/${encodeURIComponent(t(s.name))},${s.lat},${s.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center text-xs py-2 rounded-sm border border-(--color-ink)/20 hover:border-(--color-brand) hover:text-(--color-brand) transition"
                  >
                    {m.map_kakao}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-2.5">
      <Icon className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-(--color-brand)" />
      <span>{children}</span>
    </li>
  );
}
