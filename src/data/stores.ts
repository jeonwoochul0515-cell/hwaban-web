// 매장 데이터 — 한·영·일
import type { L } from "../i18n/locale";

const t = <T,>(ko: T, en: T, ja: T): L<T> => ({ ko, en, ja });

export type Store = {
  id: string;
  number: string;
  name: L<string>;
  shortName: L<string>;
  address: L<string>;
  phone: string;
  hours: L<string>;
  breakTime?: L<string>;
  closed: L<string>;
  features: L<string[]>;
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
    name: t("화반 부민 1호점", "HWABAN Bumin (1st)", "花飯 富民1号店"),
    shortName: t("부민점", "Bumin", "富民店"),
    address: t(
      "부산 서구 구덕로199번길 5",
      "5, Gudeok-ro 199beon-gil, Seo-gu, Busan",
      "釜山広域市西区 九徳路199番ギル5"
    ),
    phone: "051-255-8727",
    hours: t("11:00 — 20:30", "11:00 — 20:30", "11:00 — 20:30"),
    breakTime: t("15:30 — 16:30", "15:30 — 16:30", "15:30 — 16:30"),
    closed: t("일요일 휴무", "Closed Sundays", "日曜定休"),
    features: t(
      ["동아대 부민캠퍼스 옆", "공기밥 무한 리필", "본점·본사"],
      ["Next to Dong-A Univ.", "Free rice refills", "Flagship · HQ"],
      ["東亜大富民キャンパス隣", "ご飯おかわり自由", "本店・本社"]
    ),
    lat: 35.1024336977749,
    lng: 129.019536175191,
    image: "/images/stores/bumin.jpg",
    dishImage: "/images/menu/bibimbap-kimchi-dark.png",
    naverMapQuery: "화반 부민점",
  },
  {
    id: "jurye",
    number: "02",
    name: t("화반 주례 2호점", "HWABAN Jurye (2nd)", "花飯 周礼2号店"),
    shortName: t("주례점 · 동서대점", "Jurye · Dongseo Univ.", "周礼店・東西大店"),
    address: t(
      "부산 사상구 주례로 76-1",
      "76-1, Jurye-ro, Sasang-gu, Busan",
      "釜山広域市沙上区 周礼路76-1"
    ),
    phone: "051-311-8727",
    hours: t("10:30 — 20:30", "10:30 — 20:30", "10:30 — 20:30"),
    breakTime: t("15:00 — 16:00", "15:00 — 16:00", "15:00 — 16:00"),
    closed: t("일요일 휴무", "Closed Sundays", "日曜定休"),
    features: t(
      ["동서대 · 경남정보대 도보 5분", "키오스크 선결제", "혼밥 가능"],
      ["5-min walk to Dongseo Univ.", "Kiosk pre-pay", "Solo-friendly"],
      ["東西大・慶南情報大 徒歩5分", "キオスク前払い", "おひとり様歓迎"]
    ),
    lat: 35.1466509604876,
    lng: 129.008133219605,
    image: "/images/stores/jurye.jpg",
    dishImage: "/images/menu/bibimbap-doenjang-dark.png",
    naverMapQuery: "화반 동서대점",
  },
  {
    id: "hadan",
    number: "03",
    name: t("화반 하단 3호점", "HWABAN Hadan (3rd)", "花飯 下端3号店"),
    shortName: t("하단점", "Hadan", "下端店"),
    address: t(
      "부산 사하구 낙동대로516번길 55",
      "55, Nakdongdae-ro 516beon-gil, Saha-gu, Busan",
      "釜山広域市沙下区 洛東大路516番ギル55"
    ),
    phone: "051-203-8727",
    hours: t("11:00 — 20:00", "11:00 — 20:00", "11:00 — 20:00"),
    breakTime: t("15:00 — 16:00", "15:00 — 16:00", "15:00 — 16:00"),
    closed: t("일요일 휴무", "Closed Sundays", "日曜定休"),
    features: t(
      ["사하구 가족 단위 인기", "배달·테이크아웃 OK"],
      ["Loved by families", "Delivery & takeout"],
      ["沙下区ファミリー人気", "デリバリー・テイクアウト可"]
    ),
    lat: 35.1133517648528,
    lng: 128.965706266409,
    image: "/images/stores/hadan.jpg",
    dishImage: "/images/menu/bibimbap-light.png",
    naverMapQuery: "화반 하단점",
  },
  {
    id: "jungang",
    number: "04",
    name: t("화반 중앙 4호점", "HWABAN Jung-ang (4th)", "花飯 中央4号店"),
    shortName: t("중앙점 · 남포동", "Jung-ang · Nampo", "中央店・南浦洞"),
    address: t(
      "부산 중구 대청로141번길 15 1층",
      "1F, 15 Daecheong-ro 141beon-gil, Jung-gu, Busan",
      "釜山広域市中区 大庁路141番ギル15 1階"
    ),
    phone: "051-467-8727",
    hours: t(
      "평일 11:00 — 20:00 · 주말 11:00 — 15:00",
      "Weekdays 11:00–20:00 · Weekends 11:00–15:00",
      "平日 11:00 — 20:00 · 週末 11:00 — 15:00"
    ),
    closed: t("휴무 없음", "Open daily", "無休"),
    features: t(
      ["남포동·국제시장 도보권", "주말도 영업"],
      ["Walk to Nampo & Gukje Market", "Open weekends"],
      ["南浦洞・国際市場徒歩圏", "週末も営業"]
    ),
    lat: 35.1041447015102,
    lng: 129.035086688734,
    image: "/images/stores/jungang.jpg",
    dishImage: "/images/menu/kimchi-jeyuk-dark.png",
    naverMapQuery: "화반 중앙점",
  },
  {
    id: "kyungsung",
    number: "05",
    name: t(
      "화반 경성대·부경대 5호점",
      "HWABAN Kyungsung·Pukyong (5th)",
      "花飯 慶星大·釜慶大5号店"
    ),
    shortName: t("경성대·부경대점", "Kyungsung · Pukyong", "慶星大·釜慶大店"),
    address: t(
      "부산 남구 용소로21번길 19 1층",
      "1F, 19 Yongso-ro 21beon-gil, Nam-gu, Busan",
      "釜山広域市南区 龍沼路21番ギル19 1階"
    ),
    phone: "051-611-8727",
    hours: t("10:30 — 20:30", "10:30 — 20:30", "10:30 — 20:30"),
    breakTime: t("15:30 — 16:30", "15:30 — 16:30", "15:30 — 16:30"),
    closed: t("일요일 휴무", "Closed Sundays", "日曜定休"),
    features: t(
      ["경성대·부경대역 도보 6분", "2만원 이상 1시간 무료 주차", "2인·4인석"],
      ["6-min walk from station", "Free 1hr parking (₩20k+)", "2 & 4-seat tables"],
      ["駅から徒歩6分", "2万ウォン以上 1時間無料駐車", "2席・4席あり"]
    ),
    lat: 35.139,
    lng: 129.099,
    image: "/images/menu/kimchi-jeyuk-dark.png",
    dishImage: "/images/menu/bulgogi-light.png",
    naverMapQuery: "화반 경성대부경대점",
  },
];
