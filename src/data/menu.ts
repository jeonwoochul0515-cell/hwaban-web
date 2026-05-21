// 화반 메뉴 — 한·영·일 다국어
import type { L } from "../i18n/locale";

export type MenuCategory =
  | "signature"
  | "set"
  | "hangrr"
  | "vegan"
  | "side"
  | "drink";

export type MenuItem = {
  id: string;
  name: L<string>;
  description: L<string>;
  price: number;
  category: MenuCategory;
  badge?: L<string>;
  image?: string;
};

const t = <T,>(ko: T, en: T, ja: T): L<T> => ({ ko, en, ja });

export const MENU: MenuItem[] = [
  // ───── 대표 ─────
  {
    id: "bibim-doenjang",
    name: t(
      "[야채듬뿍] 푸짐한 비빔밥 + 된장찌개",
      "Veggie-Loaded Bibimbap + Doenjang-jjigae",
      "[野菜たっぷり] ボリュームビビンバ + 味噌チゲ"
    ),
    description: t(
      "비빔밥 · 계란후라이 · 된장찌개 · 밑반찬 3종",
      "Bibimbap · Fried egg · Doenjang stew · 3 side dishes",
      "ビビンバ・目玉焼き・味噌チゲ・小皿3種"
    ),
    price: 11500,
    category: "signature",
    badge: t("대표", "Signature", "看板"),
    image: "/images/menu/bibimbap-doenjang-dark.png",
  },
  {
    id: "bibim-kimchi",
    name: t(
      "[야채듬뿍] 푸짐한 비빔밥 + 김치찌개",
      "Veggie-Loaded Bibimbap + Kimchi-jjigae",
      "[野菜たっぷり] ボリュームビビンバ + キムチチゲ"
    ),
    description: t(
      "비빔밥 · 계란후라이 · 김치찌개 · 밑반찬 3종",
      "Bibimbap · Fried egg · Kimchi stew · 3 side dishes",
      "ビビンバ・目玉焼き・キムチチゲ・小皿3種"
    ),
    price: 11500,
    category: "signature",
    badge: t("대표", "Signature", "看板"),
    image: "/images/menu/bibimbap-kimchi-dark.png",
  },
  {
    id: "kimchi-jeyuk-jjigae",
    name: t(
      "[수제양념] 김치제육두루치기 + 찌개",
      "House-Made Kimchi Jeyuk Doorochigi + Stew",
      "[自家製] キムチ豚トゥルチギ + チゲ"
    ),
    description: t(
      "김치두루치기 · 공기밥 · 계란후라이 · 된장 or 김치찌개 · 야채세트(상추·깻잎) · 밑반찬 3종",
      "Kimchi pork doorochigi · rice · fried egg · doenjang or kimchi stew · lettuce & perilla · 3 side dishes",
      "キムチ豚トゥルチギ・ご飯・目玉焼き・味噌 or キムチチゲ・葉野菜（サンチュ・エゴマ）・小皿3種"
    ),
    price: 14500,
    category: "signature",
    badge: t("시그니처", "Signature", "シグネチャー"),
    image: "/images/menu/kimchi-jeyuk-dark.png",
  },
  {
    id: "jeyuk-jjigae",
    name: t(
      "[수제양념] 제육두루치기 + 찌개",
      "House-Made Jeyuk Doorochigi + Stew",
      "[自家製] 豚トゥルチギ + チゲ"
    ),
    description: t(
      "두루치기 · 공기밥 · 계란후라이 · 찌개 택1 · 야채세트(상추·깻잎) · 밑반찬 3종",
      "Doorochigi · rice · fried egg · choice of stew · lettuce & perilla · 3 side dishes",
      "トゥルチギ・ご飯・目玉焼き・チゲ選択・葉野菜・小皿3種"
    ),
    price: 13500,
    category: "signature",
    badge: t("대표", "Signature", "看板"),
    image: "/images/menu/jeyuk-light.png",
  },
  {
    id: "bulgogi-jjigae",
    name: t(
      "[수제양념] 돼지불고기 + 찌개",
      "House-Made Pork Bulgogi + Stew",
      "[自家製] 豚プルコギ + チゲ"
    ),
    description: t(
      "돼지불고기 · 공기밥 · 계란후라이 · 된장찌개 · 야채세트(상추·깻잎) · 밑반찬 3종",
      "Pork bulgogi · rice · fried egg · doenjang stew · lettuce & perilla · 3 side dishes",
      "豚プルコギ・ご飯・目玉焼き・味噌チゲ・葉野菜・小皿3種"
    ),
    price: 13500,
    category: "signature",
    badge: t("대표", "Signature", "看板"),
    image: "/images/menu/bulgogi-dark.png",
  },

  // ───── 세트 ─────
  {
    id: "set-1person",
    name: t(
      "[가성비 갑] 혼자서 1인분 세트",
      "Solo Set for One",
      "[コスパ◎] 一人用セット"
    ),
    description: t(
      "비빔밥 · 찌개 택1 · 고기 200g · 야채세트(상추·깻잎) · 밑반찬 3종",
      "Bibimbap · choice of stew · 200g meat · lettuce & perilla · 3 side dishes",
      "ビビンバ・チゲ選択・お肉200g・葉野菜・小皿3種"
    ),
    price: 19900,
    category: "set",
    badge: t("1인 추천", "For 1", "1名様向け"),
    image: "/images/menu/bulgogi-light.png",
  },
  {
    id: "set-2person",
    name: t(
      "[한상가득] 둘이서 2인분 세트",
      "Sharing Set for Two",
      "[満載] 二人用セット"
    ),
    description: t(
      "비빔밥 2 · 찌개 택2 · 고기 200g · 쌈야채 · 밑반찬 3종",
      "2 bibimbap · 2 stews · 200g meat · wrap veggies · 3 side dishes",
      "ビビンバ2・チゲ2・お肉200g・サムの野菜・小皿3種"
    ),
    price: 29900,
    category: "set",
    badge: t("2인 추천", "For 2", "2名様向け"),
    image: "/images/menu/bulgogi-dark-2.png",
  },

  // ───── 한그릇 ─────
  {
    id: "hangrr-bibim",
    name: t(
      "[야채듬뿍] 비빔밥 + 찌개 + 음료세트",
      "Bibimbap + Stew + Drink",
      "[野菜たっぷり] ビビンバ + チゲ + ドリンク"
    ),
    description: t(
      "비빔밥 · 찌개 · 계란후라이 · 음료 1잔",
      "Bibimbap · stew · fried egg · one drink",
      "ビビンバ・チゲ・目玉焼き・ドリンク1杯"
    ),
    price: 14500,
    category: "hangrr",
    image: "/images/menu/bibimbap-set-light.png",
  },
  {
    id: "hangrr-jeyuk",
    name: t(
      "제육두루치기 + 찌개 + 음료세트",
      "Jeyuk Doorochigi + Stew + Drink",
      "豚トゥルチギ + チゲ + ドリンク"
    ),
    description: t(
      "제육두루치기 200g · 공기밥 · 계란후라이 · 찌개 · 야채쌈 · 밑반찬 · 음료",
      "Jeyuk doorochigi 200g · rice · fried egg · stew · wrap veggies · sides · drink",
      "豚トゥルチギ200g・ご飯・目玉焼き・チゲ・野菜サム・小皿・ドリンク"
    ),
    price: 15200,
    category: "hangrr",
    image: "/images/menu/jeyuk-light.png",
  },
  {
    id: "hangrr-bulgogi",
    name: t(
      "돼지불고기 + 찌개 + 음료세트",
      "Pork Bulgogi + Stew + Drink",
      "豚プルコギ + チゲ + ドリンク"
    ),
    description: t(
      "돼지불고기 · 공기밥 · 계란후라이 · 찌개 · 야채쌈 · 밑반찬 · 음료",
      "Pork bulgogi · rice · fried egg · stew · wrap veggies · sides · drink",
      "豚プルコギ・ご飯・目玉焼き・チゲ・野菜サム・小皿・ドリンク"
    ),
    price: 15000,
    category: "hangrr",
    image: "/images/menu/bulgogi-light.png",
  },

  // ───── 채식 ─────
  {
    id: "vegan-bibim",
    name: t(
      "[비건] 채식비빔밥 + 된장찌개",
      "[Vegan] Veggie Bibimbap + Doenjang-jjigae",
      "[ビーガン] 野菜ビビンバ + 味噌チゲ"
    ),
    description: t(
      "밥·상추·깻잎·양배추·콩나물·당근·계란후라이·김가루·참기름·통깨 + 된장찌개 — 재료 제외 요청 가능",
      "Rice · lettuce · perilla · cabbage · bean sprouts · carrot · fried egg · seaweed flakes · sesame oil + doenjang stew — exclusions on request",
      "ご飯・サンチュ・エゴマ・キャベツ・もやし・人参・目玉焼き・海苔・ごま油 + 味噌チゲ — 食材除外リクエスト可"
    ),
    price: 10900,
    category: "vegan",
    badge: t("비건", "Vegan", "ビーガン"),
    image: "/images/menu/bibimbap-mini-light.png",
  },

  // ───── 추가 ─────
  {
    id: "side-bibim-single",
    name: t("[야채듬뿍] 비빔밥 단품", "Bibimbap (Single)", "[野菜たっぷり] ビビンバ単品"),
    description: t(
      "상추·깻잎·양배추·콩나물·당근·민찌(다짐육)·계란후라이",
      "Lettuce · perilla · cabbage · bean sprouts · carrot · minced meat · fried egg",
      "サンチュ・エゴマ・キャベツ・もやし・人参・ミンチ・目玉焼き"
    ),
    price: 9900,
    category: "side",
    image: "/images/menu/bibimbap-light.png",
  },
  { id: "side-kim", name: t("미니 도시락김", "Mini Lunch Seaweed", "ミニ弁当海苔"), description: t("", "", ""), price: 700, category: "side" },
  { id: "side-sauce", name: t("고추장 비빔장 추가", "Extra Gochujang Sauce", "コチュジャン・ソース追加"), description: t("", "", ""), price: 500, category: "side" },
  { id: "side-rice", name: t("공기밥", "Bowl of Rice", "ご飯"), description: t("", "", ""), price: 1500, category: "side" },
  { id: "side-egg", name: t("계란후라이", "Fried Egg", "目玉焼き"), description: t("", "", ""), price: 1000, category: "side" },

  // ───── 음료 ─────
  { id: "drink-apple", name: t("사과드링크", "Apple Drink", "アップルドリンク"), description: t("", "", ""), price: 1500, category: "drink" },
  { id: "drink-coke", name: t("코카콜라", "Coca-Cola", "コカ・コーラ"), description: t("", "", ""), price: 2500, category: "drink" },
  { id: "drink-sprite", name: t("스프라이트", "Sprite", "スプライト"), description: t("", "", ""), price: 2500, category: "drink" },
  { id: "drink-pepsi", name: t("펩시제로 라임 500ml", "Pepsi Zero Lime 500ml", "ペプシゼロ ライム 500ml"), description: t("", "", ""), price: 2500, category: "drink" },
];

export const CATEGORY_ORDER: MenuCategory[] = ["signature", "set", "hangrr", "vegan", "side", "drink"];

export const REVIEW_EVENT: { name: L<string>; price: number }[] = [
  { name: t("사과드링크", "Apple Drink", "アップルドリンク"), price: 100 },
  { name: t("쫀득 달방아 호박약과", "Chewy Honey Pumpkin Yakgwa", "もちもちカボチャ薬菓"), price: 100 },
];
