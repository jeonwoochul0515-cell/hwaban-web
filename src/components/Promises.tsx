// 화반의 3가지 약속 — 식재료 / 소스 / 즉시조리
import { LuSprout as Sprout, LuFlaskConical as FlaskConical, LuFlame as Flame } from "react-icons/lu";

const PROMISES = [
  {
    icon: Sprout,
    title: "건강한 식재료",
    detail: "신선함을 유지하기 위해 매일 당일 공급된 재료만 사용합니다.",
  },
  {
    icon: FlaskConical,
    title: "독자적인 소스",
    detail: "화반의 특별함을 위해 본사가 직접 개발하고 직접 제조한 소스를 사용합니다.",
  },
  {
    icon: Flame,
    title: "주문 즉시 조리",
    detail: "가장 맛있는 순간을 위해 손님의 주문이 들어온 그 순간부터 요리를 시작합니다.",
  },
];

export default function Promises() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-(--color-brand) font-semibold mb-3">
            THREE PROMISES
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
            화반의 3가지 약속
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-3 gap-5">
          {PROMISES.map((p, i) => (
            <div
              key={p.title}
              className="relative bg-white rounded-(--radius-card) p-8 border border-(--color-line) hover:border-(--color-brand)/40 transition-all hover:-translate-y-1 hover:shadow-xl shadow-black/[0.03]"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 brand-gradient rounded-xl flex items-center justify-center text-white font-bold text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p.icon className="w-10 h-10 text-(--color-brand) mb-5" />
              <h3 className="font-serif text-xl font-bold mb-3 text-(--color-ink)">
                {p.title}
              </h3>
              <p className="text-(--color-ink-soft) leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
