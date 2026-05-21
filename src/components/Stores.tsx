// 매장 — 큰 카드, 사진 + 텍스트 오버레이, 비대칭 그리드, 5개 매장
import { LuMapPin as MapPin, LuPhone as Phone, LuClock as Clock, LuTag as Tag } from "react-icons/lu";
import { STORES } from "../data/stores";
import { useReveal } from "../hooks/useReveal";

export default function Stores() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="stores" className="bg-(--color-cream-deep) py-24 sm:py-32 overflow-hidden">
      <div ref={ref} className="reveal max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-12 gap-6 items-end mb-14">
          <div className="sm:col-span-7">
            <p className="text-[11px] tracking-[0.4em] text-(--color-brand) font-semibold mb-3">
              OUR STORES · {STORES.length}
            </p>
            <h2 className="font-serif font-black text-5xl sm:text-7xl leading-[0.95] tracking-tighter">
              부산 <span className="text-(--color-brand)">5곳</span>에서<br />
              만나는 화반.
            </h2>
          </div>
          <p className="sm:col-span-5 text-(--color-ink-soft) leading-relaxed">
            모든 매장은 본사가 직접 관리하는 동일한 식재료와 동일한 특제 소스로 운영됩니다.
            가까운 매장으로 방문해 보세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-6 gap-5">
          {STORES.map((s, i) => {
            const wide = i === 0 || i === 4;
            return (
              <article
                key={s.id}
                className={`group relative bg-(--color-ink) text-(--color-cream) rounded-(--radius-card) overflow-hidden ${
                  wide ? "lg:col-span-4" : "lg:col-span-2"
                } ${i === 1 ? "lg:row-span-2" : ""}`}
              >
                <div className={`relative ${wide ? "aspect-[16/9]" : "aspect-[4/5]"} overflow-hidden`}>
                  <img
                    src={s.dishImage}
                    alt={s.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-(--color-ink) via-(--color-ink)/30 to-transparent" />

                  <div className="absolute top-5 left-5 flex items-center gap-2 text-(--color-brand-flame) text-xs tracking-widest font-bold">
                    <span className="font-serif text-3xl font-black">{s.number}</span>
                    <span className="opacity-60">/ 0{STORES.length}</span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7">
                    <p className="text-[10px] tracking-[0.3em] text-(--color-brand-flame) mb-2">
                      {s.shortName}
                    </p>
                    <h3 className="font-serif text-2xl sm:text-3xl font-black leading-tight mb-4">
                      {s.name}
                    </h3>

                    <ul className="space-y-1.5 text-xs sm:text-sm text-(--color-cream)/85">
                      <Row icon={MapPin}>{s.address}</Row>
                      <Row icon={Clock}>
                        {s.hours}
                        {s.breakTime && (
                          <span className="opacity-60"> · B/T {s.breakTime}</span>
                        )}
                        <span className="opacity-60"> · {s.closed}</span>
                      </Row>
                      <Row icon={Phone}>
                        <a href={`tel:${s.phone}`} className="hover:text-(--color-brand-flame)">
                          {s.phone}
                        </a>
                      </Row>
                      <Row icon={Tag}>
                        <span className="text-(--color-cream)/70">
                          {s.features.join(" · ")}
                        </span>
                      </Row>
                    </ul>

                    <div className="mt-5 flex gap-2">
                      <a
                        href={`https://map.naver.com/p/search/${encodeURIComponent(s.naverMapQuery)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs px-4 py-2 rounded-full bg-white/10 hover:bg-(--color-brand) transition"
                      >
                        네이버 지도
                      </a>
                      <a
                        href={`https://map.kakao.com/link/map/${encodeURIComponent(s.name)},${s.lat},${s.lng}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs px-4 py-2 rounded-full bg-white/10 hover:bg-(--color-brand) transition"
                      >
                        카카오 지도
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
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
      <Icon className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-(--color-brand-flame)" />
      <span>{children}</span>
    </li>
  );
}
