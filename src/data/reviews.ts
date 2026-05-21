// 손님 후기 — 한·영·일
import type { L } from "../i18n/locale";

const t = <T,>(ko: T, en: T, ja: T): L<T> => ({ ko, en, ja });

export type Review = {
  store: L<string>;
  text: L<string>;
  source: L<string>;
  rating: number;
};

export const REVIEWS: Review[] = [
  {
    store: t("부민 1호점", "Bumin (1st)", "富民1号店"),
    text: t(
      "가성비 대비 매우 맛있고 양도 많아요. 된장까지 한 세트라 가격도 좋고 배부르게 먹기 좋음.",
      "Great value, very tasty and generous portions. Doenjang stew included — perfect for a full meal.",
      "コスパが良くて美味しく、量も多いです。味噌チゲまでセットで価格も嬉しい、満腹になります。"
    ),
    source: t("다이닝코드", "DiningCode", "DiningCode"),
    rating: 5,
  },
  {
    store: t("주례 2호점", "Jurye (2nd)", "周礼2号店"),
    text: t(
      "야채양이 많아서 어차피 추가할 배가 없어요. 반숙후라이는 비빔밥에 빠질 수 없죠.",
      "So many vegetables, no room to add anything. The runny fried egg makes the bibimbap.",
      "野菜の量が多くて追加する余裕がないほど。半熟目玉焼きはビビンバに欠かせません。"
    ),
    source: t("다이닝코드", "DiningCode", "DiningCode"),
    rating: 5,
  },
  {
    store: t("주례 2호점", "Jurye (2nd)", "周礼2号店"),
    text: t(
      "누룽지 밥이 꼬들꼬들하니 맛있어서 정말 적극 추천. 두루치기 간이 좀 쎄긴 한데 2인 이상 시키면 찌개도 같이 나와서 개이득.",
      "The crispy rice at the bottom is amazing — highly recommend. The doorochigi is a bit salty, but order for 2+ and stew comes free — total win.",
      "おこげご飯がカリカリで本当にオススメ。トゥルチギは少し濃いめですが、2人以上で頼むとチゲもついてお得です。"
    ),
    source: t("다이닝코드", "DiningCode", "DiningCode"),
    rating: 5,
  },
  {
    store: t("경성대·부경대 5호점", "Kyungsung·Pukyong (5th)", "慶星大·釜慶大5号店"),
    text: t(
      "양 너무 많고 항상 맛있어요. 솥밥을 바로 만들어 시간이 좀 걸리지만 그만한 가치가 있음.",
      "Huge portions, always delicious. The stone-bowl rice takes a moment, but it's worth the wait.",
      "ボリュームたっぷりでいつも美味しいです。釜飯はその場で炊くので少し時間はかかりますが、それだけの価値があります。"
    ),
    source: t("다이닝코드", "DiningCode", "DiningCode"),
    rating: 5,
  },
  {
    store: t("부민 1호점", "Bumin (1st)", "富民1号店"),
    text: t(
      "신선하고 깔끔한 야채에 건강한 한 끼 느낌. 오랜 시간 학생들을 위한 가성비 식당으로 자리잡았어요.",
      "Fresh, clean vegetables, a truly healthy meal. A long-standing budget go-to for students.",
      "新鮮で清潔な野菜に、本当に健康的な一食。学生向けのコスパ食堂として長く愛されてきました。"
    ),
    source: t("식신", "Siksin", "食神"),
    rating: 5,
  },
  {
    store: t("경성대·부경대 5호점", "Kyungsung·Pukyong (5th)", "慶星大·釜慶大5号店"),
    text: t(
      "계란후라이가 기본이라 개이득. 캐주얼하고 친절한 분위기에 혼밥도 부담 없어요.",
      "Fried egg as standard — huge plus. Casual, friendly vibe — perfect for solo dining.",
      "目玉焼きが基本で嬉しい。カジュアルで親切な雰囲気、おひとり様も気軽に楽しめます。"
    ),
    source: t("다이닝코드", "DiningCode", "DiningCode"),
    rating: 5,
  },
];
