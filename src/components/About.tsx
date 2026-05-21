// 브랜드 스토리 섹션 — 2015년 부민동 시작 이야기
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-(--color-cream-deep)/50 border-y border-(--color-line)/50"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionTitle
          eyebrow="BRAND STORY"
          title={
            <>
              2015년 부민동에서 시작된
              <br />
              비빔밥 한 그릇
            </>
          }
        />
        <div className="mt-14 grid md:grid-cols-2 gap-10 sm:gap-14 text-(--color-ink) leading-loose">
          <p className="text-lg sm:text-xl font-serif">
            <span className="text-(--color-brand) font-bold">화반</span>은 2015년
            부산 서구 부민동에서 시작된 비빔밥 전문 한식점입니다. 패스트푸드보다
            빠르게, 그러나 영양은 더 풍부하게 — 균형 잡힌 한 끼를 제공하는 것이
            화반의 출발이었습니다.
          </p>
          <p className="text-base sm:text-lg text-(--color-ink-soft)">
            세상에는 맛있는 음식이 많지만, 대부분은 우리의 건강을 해칩니다. 화반은
            단순히 맛만이 아니라, 하루에 섭취해야 할 영양소를 모두 담아낸
            한국인에게 가장 적합한 음식을 만듭니다. 손이 닿는 거리에서,
            합리적인 가격으로, 지불한 값보다 더 많은 것을 챙겨드리겠다는 약속을
            지켜오고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
