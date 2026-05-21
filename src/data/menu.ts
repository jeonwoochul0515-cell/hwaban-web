// 화반 메뉴 데이터 — 다이닝코드/식신 기준 실제 가격 (KRW)
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "bibim" | "doorochigi" | "set";
  badge?: string;
  image: string;
};

export const MENU: MenuItem[] = [
  {
    id: "bibim-single",
    name: "푸짐한 비빔밥",
    description: "야채 듬뿍, 누룽지 솥밥에 반숙 후라이까지 — 한 그릇으로 완성되는 한 끼.",
    price: 9900,
    category: "bibim",
    badge: "BEST",
    image: "/images/dishes/bumin-1.webp",
  },
  {
    id: "bibim-doenjang",
    name: "비빔밥 + 된장찌개",
    description: "7가지 영양소 비빔밥에 구수한 된장찌개를 곁들인 정통 한 상.",
    price: 11500,
    category: "bibim",
    image: "/images/dishes/bumin-2.webp",
  },
  {
    id: "bibim-kimchi",
    name: "비빔밥 + 김치찌개",
    description: "푸짐한 비빔밥과 칼칼한 김치찌개의 가장 인기 있는 조합.",
    price: 11500,
    category: "bibim",
    image: "/images/dishes/jurye-1.webp",
  },
  {
    id: "veg-bibim-doenjang",
    name: "채식 비빔밥 + 된장찌개",
    description: "고기를 빼고 야채와 누룽지 솥밥으로만 채운 깔끔한 한 끼.",
    price: 10900,
    category: "bibim",
    image: "/images/dishes/jurye-2.webp",
  },
  {
    id: "jeyuk-doorochigi-set",
    name: "제육두루치기 + 찌개",
    description: "9가지 재료의 고추장 베이스 특제소스로 볶아낸 화반 두루치기.",
    price: 13500,
    category: "doorochigi",
    image: "/images/dishes/kyungsung-1.webp",
  },
  {
    id: "kimchi-jeyuk",
    name: "김치제육두루치기 + 찌개",
    description: "푹 익은 김치와 제육이 만난 시그니처 두루치기. 단짠단짠의 끝판왕.",
    price: 14500,
    category: "doorochigi",
    badge: "SIGNATURE",
    image: "/images/dishes/kyungsung-2.webp",
  },
  {
    id: "dwaeji-bulgogi-set",
    name: "돼지불고기 + 찌개",
    description: "12가지 재료의 간장 베이스 특제소스로 만든 화반식 돼지불고기.",
    price: 13500,
    category: "doorochigi",
    image: "/images/dishes/kyungsung-3.webp",
  },
  {
    id: "set-2-person",
    name: "둘이서 2인 세트",
    description: "비빔밥 2 · 두루치기/불고기 1 · 찌개 — 두 명이 충분한 푸짐한 한 상.",
    price: 29900,
    category: "set",
    badge: "FOR 2",
    image: "/images/dishes/kyungsung-4.webp",
  },
];

export const MENU_CATEGORIES = [
  { id: "bibim", label: "비빔밥" },
  { id: "doorochigi", label: "두루치기 · 불고기" },
  { id: "set", label: "세트" },
] as const;

export const SIDE_ITEMS = [
  { name: "공기밥", price: 1500 },
  { name: "계란후라이", price: 1000 },
  { name: "고추장 비빔장", price: 500 },
  { name: "찌개 추가", price: 3500 },
  { name: "음료", price: 2500 },
];

export const formatKRW = (n: number) => n.toLocaleString("ko-KR") + "원";
