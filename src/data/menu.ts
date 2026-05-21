// 메뉴 데이터 — 기존 hwaban.co.kr 메뉴 페이지에서 추출
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  badge?: string;
  image: string;
};

export const MENU: MenuItem[] = [
  {
    id: "bibim-doenjang",
    name: "비빔밥 + 된장찌개",
    description: "7가지 풍부한 영양소로 가득한 비빔밥과 구수한 된장찌개",
    badge: "베이직",
    image: "/images/menu/bibim-doenjang.jpg",
  },
  {
    id: "bibim-kimchi",
    name: "비빔밥 + 김치찌개",
    description: "7가지 풍부한 영양소로 가득한 비빔밥과 칼칼한 김치찌개",
    badge: "스테디",
    image: "/images/menu/bibim-kimchi.jpg",
  },
  {
    id: "kimchi-doorochigi",
    name: "김치두루치기",
    description: "푹 익은 김치와 고추장 베이스 특제소스로 만들어진 화반 시그니처",
    badge: "시그니처",
    image: "/images/menu/kimchi-doorochigi.jpg",
  },
  {
    id: "doorochigi",
    name: "두루치기",
    description: "9가지 재료의 고추장 베이스 특제소스로 만들어진 단짠단짠 두루치기",
    image: "/images/menu/doorochigi.jpg",
  },
  {
    id: "dwaeji-bulgogi",
    name: "돼지불고기",
    description: "12가지 재료의 간장 베이스 특제소스로 만들어진 화반 돼지불고기",
    image: "/images/menu/dwaeji-bulgogi.jpg",
  },
];
