// 매장 데이터 — 다이닝코드/식신/공식사이트 기준 5개 매장
export type Store = {
  id: string;
  number: string;
  name: string;
  shortName: string;
  address: string;
  phone: string;
  hours: string;
  breakTime?: string;
  closed: string;
  features: string[];
  lat: number;
  lng: number;
  image: string;
  dishImage: string;
  naverMapQuery: string;
};

export const STORES: Store[] = [
  {
    id: "bumin",
    number: "01",
    name: "화반 부민 1호점",
    shortName: "부민점",
    address: "부산 서구 구덕로199번길 5",
    phone: "051-255-8727",
    hours: "11:00 — 20:30",
    breakTime: "15:30 — 16:30",
    closed: "일요일 휴무",
    features: ["동아대 부민캠퍼스 옆", "공기밥 무한 리필", "본점·본사"],
    lat: 35.1024336977749,
    lng: 129.019536175191,
    image: "/images/stores/bumin.jpg",
    dishImage: "/images/dishes/bumin-1.webp",
    naverMapQuery: "화반 부민점",
  },
  {
    id: "jurye",
    number: "02",
    name: "화반 주례 2호점",
    shortName: "주례점 · 동서대점",
    address: "부산 사상구 주례로 76-1",
    phone: "051-311-8727",
    hours: "10:30 — 20:30",
    breakTime: "15:00 — 16:00",
    closed: "일요일 휴무",
    features: ["동서대 · 경남정보대 도보 5분", "키오스크 선결제", "혼밥 가능"],
    lat: 35.1466509604876,
    lng: 129.008133219605,
    image: "/images/stores/jurye.jpg",
    dishImage: "/images/dishes/jurye-1.webp",
    naverMapQuery: "화반 동서대점",
  },
  {
    id: "hadan",
    number: "03",
    name: "화반 하단 3호점",
    shortName: "하단점",
    address: "부산 사하구 낙동대로516번길 55",
    phone: "051-203-8727",
    hours: "11:00 — 20:00",
    breakTime: "15:00 — 16:00",
    closed: "일요일 휴무",
    features: ["사하구 가족 단위 인기", "배달·테이크아웃 OK"],
    lat: 35.1133517648528,
    lng: 128.965706266409,
    image: "/images/stores/hadan.jpg",
    dishImage: "/images/dishes/bumin-2.webp",
    naverMapQuery: "화반 하단점",
  },
  {
    id: "jungang",
    number: "04",
    name: "화반 중앙 4호점",
    shortName: "중앙점 · 남포동",
    address: "부산 중구 대청로141번길 15 1층",
    phone: "051-467-8727",
    hours: "평일 11:00 — 20:00 · 주말 11:00 — 15:00",
    closed: "휴무 없음",
    features: ["남포동·국제시장 도보권", "주말도 영업"],
    lat: 35.1041447015102,
    lng: 129.035086688734,
    image: "/images/stores/jungang.jpg",
    dishImage: "/images/dishes/kyungsung-2.webp",
    naverMapQuery: "화반 중앙점",
  },
  {
    id: "kyungsung",
    number: "05",
    name: "화반 경성대·부경대 5호점",
    shortName: "경성대·부경대점",
    address: "부산 남구 용소로21번길 19 1층",
    phone: "051-611-8727",
    hours: "10:30 — 20:30",
    breakTime: "15:30 — 16:30",
    closed: "일요일 휴무",
    features: ["경성대·부경대역 도보 6분", "2만원 이상 1시간 무료 주차", "2인·4인석"],
    lat: 35.139,
    lng: 129.099,
    image: "/images/dishes/kyungsung-1.webp",
    dishImage: "/images/dishes/kyungsung-3.webp",
    naverMapQuery: "화반 경성대부경대점",
  },
];
