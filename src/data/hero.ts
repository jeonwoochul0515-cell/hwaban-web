// Hero 슬라이드 — 한·영·일
import type { L } from "../i18n/locale";

const t = <T,>(ko: T, en: T, ja: T): L<T> => ({ ko, en, ja });

export const HERO_SLIDES: { src: string; label: L<string> }[] = [
  { src: "/images/menu/bibimbap-kimchi-dark.png", label: t("비빔밥 · 김치찌개", "Bibimbap · Kimchi Stew", "ビビンバ・キムチチゲ") },
  { src: "/images/menu/kimchi-jeyuk-dark.png", label: t("김치제육두루치기", "Kimchi Pork Doorochigi", "キムチ豚トゥルチギ") },
  { src: "/images/menu/bulgogi-dark.png", label: t("돼지불고기", "Pork Bulgogi", "豚プルコギ") },
  { src: "/images/menu/bibimbap-doenjang-dark.png", label: t("비빔밥 · 된장찌개", "Bibimbap · Doenjang Stew", "ビビンバ・味噌チゲ") },
];
