// 손님 후기 — 다이닝코드/식신/네이버 공개 리뷰 발췌
export type Review = {
  store: string;
  text: string;
  source: string;
  rating: number;
};

export const REVIEWS: Review[] = [
  {
    store: "부민 1호점",
    text: "가성비 대비 매우 맛있고 양도 많아요. 된장까지 한 세트라 가격도 좋고 배부르게 먹기 좋음.",
    source: "다이닝코드",
    rating: 5,
  },
  {
    store: "주례 2호점",
    text: "야채양이 많아서 어차피 추가할 배가 없어요. 반숙후라이는 비빔밥에 빠질 수 없죠.",
    source: "다이닝코드",
    rating: 5,
  },
  {
    store: "주례 2호점",
    text: "누룽지 밥이 꼬들꼬들하니 맛있어서 정말 적극 추천. 두루치기 간이 좀 쎄긴 한데 2인 이상 시키면 찌개도 같이 나와서 개이득.",
    source: "다이닝코드",
    rating: 5,
  },
  {
    store: "경성대·부경대 5호점",
    text: "양 너무 많고 항상 맛있어요. 솥밥을 바로 만들어 시간이 좀 걸리지만 그만한 가치가 있음.",
    source: "다이닝코드",
    rating: 5,
  },
  {
    store: "부민 1호점",
    text: "신선하고 깔끔한 야채에 건강한 한 끼 느낌. 오랜 시간 학생들을 위한 가성비 식당으로 자리잡았어요.",
    source: "식신",
    rating: 5,
  },
  {
    store: "경성대·부경대 5호점",
    text: "계란후라이가 기본이라 개이득. 캐주얼하고 친절한 분위기에 혼밥도 부담 없어요.",
    source: "다이닝코드",
    rating: 5,
  },
];
