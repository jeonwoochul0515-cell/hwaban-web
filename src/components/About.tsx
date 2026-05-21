// 브랜드 스토리 — 풀블리드 큰 사진 + 큰 카피 + 마퀴
import Marquee from "./Marquee";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative">
      <Marquee
        variant="brand"
        items={[
          "한 그릇의 정직",
          "신선한 식재료",
          "직접 만든 소스",
          "주문 즉시 조리",
          "균형 잡힌 한 끼",
        ]}
      />

      <div className="relative ink-gradient text-(--color-cream) py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
        <div ref={ref} className="reveal max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-center relative">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="text-[11px] tracking-[0.4em] text-(--color-brand-flame) font-semibold mb-5">
              OUR STORY
            </p>
            <h2 className="font-serif font-black text-5xl sm:text-7xl leading-[0.95] tracking-tighter">
              세상엔 맛있는 음식이<br />
              너무 많지만,<br />
              <span className="text-(--color-brand-flame)">건강한 한 끼</span>는<br />
              많지 않습니다.
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-8 text-(--color-cream)/75 leading-loose max-w-2xl">
              <p className="text-base">
                <span className="text-(--color-brand-flame) font-bold">화반</span>은 2015년
                부산 서구 부민동에서 시작된 비빔밥 전문 한식점입니다. 패스트푸드보다 빠르게,
                그러나 영양은 더 풍부하게 — 균형 잡힌 한 끼를 제공하는 것이 화반의 출발이었습니다.
              </p>
              <p className="text-base">
                단순히 맛만이 아니라 하루에 섭취해야 할 영양소를 모두 담아낸 한국인에게 가장
                적합한 음식을 만듭니다. 손이 닿는 거리에서, 합리적인 가격으로 — 그 약속을
                10년째 지켜오고 있습니다.
              </p>
            </div>

            <div className="mt-12 inline-flex items-baseline gap-6 border-l-2 border-(--color-brand-flame) pl-6">
              <span className="font-serif text-6xl font-black tabular-nums">10</span>
              <span className="text-(--color-cream)/60 text-sm">
                YEARS<br />
                <span className="text-(--color-cream)">since 2015</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="aspect-[3/4] rounded-(--radius-card) overflow-hidden relative">
              <img
                src="/images/hero/main.png"
                alt="화반 비빔밥 한 상"
                className="w-full h-full object-cover ken-burns"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-(--color-ink) via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 sm:-left-10 bg-(--color-cream) text-(--color-ink) p-5 sm:p-7 rounded-2xl shadow-2xl max-w-[220px]">
              <p className="font-serif text-xs tracking-widest text-(--color-brand) mb-2">
                SIGNATURE
              </p>
              <p className="font-serif text-xl font-bold leading-tight">
                7가지 영양소가<br />가득한 비빔밥
              </p>
            </div>
          </div>
        </div>
      </div>

      <Marquee
        variant="light"
        speed="fast"
        items={[
          "BIBIMBAP",
          "DOOROCHIGI",
          "BULGOGI",
          "JJIGAE",
          "한국인의 한 끼",
        ]}
      />
    </section>
  );
}
