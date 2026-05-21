// 매장 데이터 — hwaban.co.kr 매장안내 + 카카오맵 좌표 추출
export type Store = {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  breakTime?: string;
  closed: string;
  lat: number;
  lng: number;
  image: string;
  naverMapQuery: string;
};

export const STORES: Store[] = [
  {
    id: "bumin",
    name: "화반 부민 1호점",
    address: "부산 서구 구덕로199번길 5",
    phone: "051-255-8727",
    hours: "11:00 — 20:00",
    breakTime: "15:00 — 16:00",
    closed: "일요일 휴무",
    lat: 35.1024336977749,
    lng: 129.019536175191,
    image: "/images/stores/bumin.jpg",
    naverMapQuery: "화반 부민점",
  },
  {
    id: "jurye",
    name: "화반 주례 2호점 (동서대학교점)",
    address: "부산 사상구 주례로 76-1",
    phone: "051-311-8727",
    hours: "11:00 — 20:00",
    breakTime: "15:00 — 16:00",
    closed: "일요일 휴무",
    lat: 35.1466509604876,
    lng: 129.008133219605,
    image: "/images/stores/jurye.jpg",
    naverMapQuery: "화반 동서대점",
  },
  {
    id: "hadan",
    name: "화반 하단 3호점",
    address: "부산 사하구 낙동대로516번길 55",
    phone: "051-203-8727",
    hours: "11:00 — 20:00",
    breakTime: "15:00 — 16:00",
    closed: "일요일 휴무",
    lat: 35.1133517648528,
    lng: 128.965706266409,
    image: "/images/stores/hadan.jpg",
    naverMapQuery: "화반 하단점",
  },
  {
    id: "jungang",
    name: "화반 중앙 4호점",
    address: "부산 중구 대청로141번길 15 1층",
    phone: "051-467-8727",
    hours: "평일 11:00 — 20:00 · 주말 11:00 — 15:00",
    closed: "휴무 없음",
    lat: 35.1041447015102,
    lng: 129.035086688734,
    image: "/images/stores/jungang.jpg",
    naverMapQuery: "화반 중앙점",
  },
];
