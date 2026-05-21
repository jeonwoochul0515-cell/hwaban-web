// Hero 섹션 — 슬로건 + 비빔밥 상징 + CTA
import { LuArrowDown as ArrowDown, LuChefHat as ChefHat } from "react-icons/lu";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 20%, rgba(244,230,214,0.9) 0%, rgba(250,246,240,1) 60%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-(--color-brand-soft) text-(--color-brand) px-3 py-1.5 rounded-full text-xs font-medium tracking-wider">
            <ChefHat className="w-3.5 h-3.5" />
            SINCE 2015 · BUSAN
          </div>
          <h1 className="mt-6 font-serif font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-(--color-ink)">
            한국인에게 가장
            <br />
            적합한 한 끼,
            <br />
            <span className="text-(--color-brand)">화반</span>
          </h1>
          <p className="mt-7 text-lg text-(--color-ink-soft) leading-relaxed max-w-md">
            바쁘게 살아가는 현대인을 위해, 가장 친근한 메뉴 구성으로
            영양소가 골고루 갖춰진 균형 잡힌 한 끼를 제공합니다.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="brand-gradient text-white px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition"
            >
              메뉴 살펴보기
            </a>
            <a
              href="#stores"
              className="border border-(--color-ink)/15 px-7 py-3.5 rounded-full font-medium text-(--color-ink) hover:border-(--color-brand) hover:text-(--color-brand) transition"
            >
              가까운 매장 찾기
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-full bg-(--color-cream-deep) absolute inset-0 m-auto w-[85%] h-[85%]" />
          <img
            src="/images/hero/main.png"
            alt="화반 비빔밥 한 상"
            className="relative w-full max-w-xl mx-auto animate-float drop-shadow-2xl"
            loading="eager"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-(--color-ink-soft) text-xs tracking-widest"
        >
          SCROLL
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
