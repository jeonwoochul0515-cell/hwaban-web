// 화반의 3가지 약속 — 큰 번호, 강한 대비
import {
  LuSprout as Sprout,
  LuFlaskConical as FlaskConical,
  LuFlame as Flame,
} from "react-icons/lu";
import { useReveal } from "../hooks/useReveal";

const PROMISES = [
  {
    icon: Sprout,
    eyebrow: "FRESH",
    title: "건강한 식재료",
    detail: "신선함을 유지하기 위해 매일 당일 공급된 재료만 사용합니다.",
  },
  {
    icon: FlaskConical,
    eyebrow: "OUR OWN",
    title: "독자적인 소스",
    detail: "본사가 직접 개발하고 직접 제조한 화반만의 특제 소스.",
  },
  {
    icon: Flame,
    eyebrow: "NOW",
    title: "주문 즉시 조리",
    detail: "가장 맛있는 순간을 위해, 손님의 주문이 들어온 그 순간 요리를 시작합니다.",
  },
];

export default function Promises() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="py-24 sm:py-32 bg-(--color-cream)">
      <div ref={ref} className="reveal max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-12 gap-6 mb-14 items-end">
          <div className="sm:col-span-7">
            <p className="text-[11px] tracking-[0.4em] text-(--color-brand) font-semibold mb-3">
              THREE PROMISES
            </p>
            <h2 className="font-serif font-black text-5xl sm:text-7xl leading-[0.95] tracking-tighter">
              화반이<br />
              지키는<br />
              <span className="text-(--color-brand)">세 가지</span>.
            </h2>
          </div>
          <div className="sm:col-span-5">
            <p className="text-(--color-ink-soft) text-base leading-relaxed">
              맛과 건강을 위해 끊임없이 노력하는 화반이 되겠습니다. <br />
              지난 10년간 매일 같은 약속을 지켜왔고, 앞으로도 변하지 않습니다.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-0">
          {PROMISES.map((p, i) => (
            <article
              key={p.title}
              className="group relative bg-(--color-paper) border border-(--color-line) p-8 sm:p-10 hover:bg-(--color-ink) hover:text-(--color-cream) transition-colors duration-500"
              style={{ marginLeft: i > 0 ? "-1px" : undefined }}
            >
              <div className="flex items-baseline justify-between mb-10">
                <span className="font-serif text-7xl font-black text-(--color-brand)/70 group-hover:text-(--color-brand-flame) tabular-nums transition">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p.icon className="w-9 h-9 text-(--color-brand) group-hover:text-(--color-brand-flame) transition" />
              </div>
              <p className="text-[10px] tracking-[0.3em] text-(--color-ink-soft) group-hover:text-(--color-brand-flame) mb-3 transition">
                {p.eyebrow}
              </p>
              <h3 className="font-serif text-3xl font-bold mb-4 leading-tight">
                "{p.title}"
              </h3>
              <p className="text-(--color-ink-soft) group-hover:text-(--color-cream)/70 leading-relaxed text-sm transition">
                {p.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
