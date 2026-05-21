// 매장 안내 — 4개 매장 카드 + 네이버 지도 링크
import SectionTitle from "./SectionTitle";
import { STORES } from "../data/stores";
import { LuMapPin as MapPin, LuPhone as Phone, LuClock as Clock, LuCoffee as Coffee } from "react-icons/lu";

export default function Stores() {
  return (
    <section id="stores" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionTitle
          eyebrow="OUR STORES"
          title="가까운 화반 매장"
          description="부산 곳곳에서 화반을 만나보세요. 모든 매장은 당일 공급 식재료와 동일한 특제 소스로 운영됩니다."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {STORES.map((s, i) => (
            <article
              key={s.id}
              className="bg-white rounded-(--radius-card) border border-(--color-line) overflow-hidden hover:shadow-xl shadow-black/[0.04] transition-all"
            >
              <div className="aspect-[5/3] bg-(--color-cream-deep) overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.style.display = "none";
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-serif text-(--color-brand) text-2xl font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-(--color-ink)">
                    {s.name}
                  </h3>
                </div>
                <ul className="space-y-2.5 text-sm text-(--color-ink-soft)">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-(--color-brand)" />
                    <span>{s.address}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-(--color-brand)" />
                    <a href={`tel:${s.phone}`} className="hover:text-(--color-brand)">
                      {s.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-(--color-brand)" />
                    <span>
                      {s.hours}
                      {s.breakTime && (
                        <span className="block text-xs mt-0.5 opacity-70">
                          브레이크 타임 {s.breakTime}
                        </span>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Coffee className="w-4 h-4 mt-0.5 flex-shrink-0 text-(--color-brand)" />
                    <span>{s.closed}</span>
                  </li>
                </ul>
                <div className="mt-6 flex gap-2">
                  <a
                    href={`https://map.naver.com/p/search/${encodeURIComponent(
                      s.naverMapQuery
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2.5 rounded-full text-sm font-medium border border-(--color-line) hover:border-(--color-brand) hover:text-(--color-brand) transition"
                  >
                    네이버 지도
                  </a>
                  <a
                    href={`https://map.kakao.com/link/map/${encodeURIComponent(
                      s.name
                    )},${s.lat},${s.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2.5 rounded-full text-sm font-medium border border-(--color-line) hover:border-(--color-brand) hover:text-(--color-brand) transition"
                  >
                    카카오 지도
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
