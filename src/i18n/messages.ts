// UI 메시지 — 한·영·일
import type { L } from "./locale";

export type Messages = {
  nav: { story: string; menu: string; stores: string; franchise: string; contact: string };
  brand: { tagline: string; since: string };
  hero: {
    eyebrow1: string;
    eyebrow2: string;
    title_l1: string;
    title_l2: string;
    title_l3: string;
    desc: string;
    cta_menu: string;
    cta_stores: string;
    stat1: string;
    stat2: string;
    stat3: string;
    today: string;
    scroll: string;
  };
  about: {
    eyebrow: string;
    title_l1: string;
    title_l2: string;
    title_brand: string;
    body1: string;
    body2: string;
    body3: string;
    signature_label: string;
    signature_title: string;
    marquee: string[];
  };
  promises: {
    eyebrow: string;
    title_l1: string;
    title_l2: string;
    items: { eyebrow: string; title: string; detail: string }[];
  };
  menu: {
    eyebrow: string;
    title_l1: string;
    title_l2: string;
    tab_signature: string;
    tab_set: string;
    tab_more: string;
    review_event_title: string;
    review_event_desc: string;
    note: string;
    full_eyebrow: string;
    full_title: string;
    price_label: string;
    categories: {
      signature: string;
      set: string;
      hangrr: string;
      vegan: string;
      side: string;
      drink: string;
    };
  };
  stores: {
    eyebrow: string;
    title_l1: string;
    title_l2: string;
    description: string;
    map_naver: string;
    map_kakao: string;
  };
  reviews: {
    eyebrow: string;
    title: string;
    description: string;
  };
  franchise: {
    eyebrow: string;
    title_l1: string;
    title_l2: string;
    description: string;
    steps_title: string;
    steps_subtitle: string;
    cost_eyebrow: string;
    cost_title: string;
    cost_total_label: string;
    cost_total_unit: string;
    cost_promo: string;
    cost_th_item: string;
    cost_th_detail: string;
    cost_th_cost: string;
    cost_th_note: string;
    cost_extras_label: string;
    cta: string;
  };
  contact: {
    eyebrow: string;
    title_l1: string;
    title_l2: string;
    description: string;
    label_phone: string;
    label_email: string;
    label_hq: string;
    address: string;
    follow_us: string;
    main_insta_desc: string;
    bangi_desc: string;
    marquee: string[];
  };
  footer: {
    tagline: string;
    biz_eyebrow: string;
    contact_eyebrow: string;
    biz_name: string;
    biz_ceo: string;
    biz_reg: string;
    biz_addr: string;
    biz_tel: string;
    biz_email: string;
    biz_sns: string;
    name: string;
    ceo_value: string;
    address_value: string;
    rights: string;
  };
  meta: { title: string; description: string };
};

const ko: Messages = {
  nav: { story: "이야기", menu: "차림", stores: "매장", franchise: "가맹", contact: "문의" },
  brand: { tagline: "한국인에게 가장 적합한 한 끼 식사", since: "SINCE 2015 · BUSAN" },
  hero: {
    eyebrow1: "HWABAN · 花飯",
    eyebrow2: "SINCE 2015 · BUSAN",
    title_l1: "한국인에게 가장 적합한",
    title_l2: "한 끼 식사,",
    title_l3: "화반",
    desc: "바쁘게 살아가는 현대인을 위해, 가장 친근한 메뉴 구성으로 영양소가 골고루 갖춰진 균형 잡힌 한 끼.",
    cta_menu: "메뉴 살펴보기 →",
    cta_stores: "매장 안내",
    stat1: "10년 한 길",
    stat2: "부산 다섯 매장",
    stat3: "가지 약속",
    today: "TODAY'S TABLE",
    scroll: "SCROLL",
  },
  about: {
    eyebrow: "BRAND STORY · 이야기",
    title_l1: "2015년 부민동에서",
    title_l2: "시작된 비빔밥,",
    title_brand: "한 그릇의 정직",
    body1:
      "화반(花飯)은 2015년 부산 서구 부민동의 작은 한식점에서 시작되었습니다. 패스트푸드보다 빠르게, 그러나 영양은 더 풍부하게 — 균형 잡힌 한 끼를 내드리는 것이 화반의 출발이었습니다.",
    body2:
      "세상엔 맛있는 음식이 많지만, 대부분은 우리의 건강을 해칩니다. 화반은 단순히 맛만이 아니라 하루에 섭취해야 할 영양소를 모두 담아낸, 한국인에게 가장 적합한 음식을 만듭니다.",
    body3:
      "\"손이 닿는 거리에서, 합리적인 가격으로 — 지불한 값보다 더 많은 것을 챙겨드리겠다는 약속을 지켜온 지 10년.\"",
    signature_label: "SIGNATURE",
    signature_title: "7가지 영양소가 담긴 비빔밥 한 그릇",
    marquee: ["한 그릇의 정직", "신선한 식재료", "직접 만든 소스", "주문 즉시 조리", "균형 잡힌 한 끼", "HWABAN · 花飯"],
  },
  promises: {
    eyebrow: "THREE PROMISES · 세 가지 약속",
    title_l1: "맛과 건강을 위해",
    title_l2: "화반이 지키는 세 가지.",
    items: [
      { eyebrow: "FRESH", title: "건강한 식재료", detail: "신선함을 유지하기 위해 매일 당일 공급된 재료만 사용합니다." },
      { eyebrow: "OUR OWN", title: "독자적인 소스", detail: "본사가 직접 개발하고 직접 제조한 화반만의 특제 소스." },
      { eyebrow: "NOW", title: "주문 즉시 조리", detail: "가장 맛있는 순간을 위해 주문이 들어온 그 순간 요리를 시작합니다." },
    ],
  },
  menu: {
    eyebrow: "MENU · 차림표",
    title_l1: "한 그릇의 정직.",
    title_l2: "오늘의 화반.",
    tab_signature: "대표",
    tab_set: "세트·한그릇",
    tab_more: "채식·추가·음료",
    review_event_title: "REVIEW EVENT · 리뷰 이벤트",
    review_event_desc: "메인 메뉴 1개당 1개씩 제공됩니다. 두 메뉴 모두 주문 시 한 메뉴로 제공됩니다.",
    note: "※ 가격과 구성은 매장 사정에 따라 일부 다를 수 있습니다.",
    full_eyebrow: "FULL MENU · 전체 차림표",
    full_title: "모든 차림을 한눈에.",
    price_label: "가격",
    categories: {
      signature: "대표 메뉴",
      set: "세트",
      hangrr: "한그릇 (음료 포함)",
      vegan: "채식",
      side: "추가 메뉴",
      drink: "음료",
    },
  },
  stores: {
    eyebrow: "OUR STORES · 매장 안내",
    title_l1: "부산 다섯 곳,",
    title_l2: "화반이 모십니다.",
    description: "모든 매장은 본사가 직접 관리하는 동일한 식재료와 동일한 특제 소스로 운영됩니다.",
    map_naver: "네이버 지도",
    map_kakao: "카카오 지도",
  },
  reviews: {
    eyebrow: "VOICES · 손님의 한 마디",
    title: "또 가야지",
    description: "다이닝코드 · 식신 · 네이버 플레이스에 남겨진 손님들의 후기를 그대로 가져왔습니다.",
  },
  franchise: {
    eyebrow: "FRANCHISE · 가맹점 모집",
    title_l1: "합리적인 비용,",
    title_l2: "검증된 마진.",
    description: "2015년부터 직영 운영해 온 노하우로, 예비 점주님의 안정적인 창업을 본사가 함께합니다.",
    steps_title: "창업 절차 · 八 단계",
    steps_subtitle: "상담부터 그랜드 오픈까지, 본사가 처음부터 끝까지 함께합니다.",
    cost_eyebrow: "INVESTMENT · 20평 기준",
    cost_title: "창업 비용",
    cost_total_label: "총 합계 (부가세 별도)",
    cost_total_unit: "만원",
    cost_promo: "◆ 10호점까지 가맹비 · 교육비 · 보증금 면제 ◆",
    cost_th_item: "항목",
    cost_th_detail: "내용",
    cost_th_cost: "비용 (만원)",
    cost_th_note: "비고",
    cost_extras_label: "※ 별도 사항",
    cta: "가맹 문의하기 →",
  },
  contact: {
    eyebrow: "CONTACT · 문의",
    title_l1: "언제든",
    title_l2: "연락주세요.",
    description: "가맹 창업 상담, 메뉴 제휴, 보도 자료 등 — 평일 영업시간 외에는 이메일로 빠르게 회신드립니다.",
    label_phone: "PHONE",
    label_email: "EMAIL",
    label_hq: "HQ ADDRESS",
    address: "부산 서구 구덕로 199번길 5",
    follow_us: "FOLLOW US →",
    main_insta_desc: "화반 본사 공식 인스타그램. 메뉴 사진과 매장 소식, 신규 오픈 정보를 가장 빠르게 확인하실 수 있습니다.",
    bangi_desc: "화반 방이점(서울 송파 방이동) · 숙성고기 전문 매장 별도 운영.",
    marquee: ["연락주세요", "CONTACT US", "가맹 문의 환영", "함께해요", "화반 · HWABAN"],
  },
  footer: {
    tagline: "한국인에게 가장 적합한 한 끼 식사, 화반.",
    biz_eyebrow: "BUSINESS",
    contact_eyebrow: "CONTACT",
    biz_name: "상호",
    biz_ceo: "대표",
    biz_reg: "사업자",
    biz_addr: "주소",
    biz_tel: "TEL",
    biz_email: "EMAIL",
    biz_sns: "SNS",
    name: "화반",
    ceo_value: "마경득",
    address_value: "부산 서구 구덕로 199번길 5",
    rights: "© {y} HWABAN. ALL RIGHTS RESERVED.",
  },
  meta: {
    title: "화반 — 한국인에게 가장 적합한 한 끼 식사",
    description: "2015년 부산 부민동에서 시작된 비빔밥 전문 한식점 화반. 건강한 식재료와 화반만의 독자적인 소스, 주문 즉시 조리로 한국인에게 가장 적합한 한 끼.",
  },
};

const en: Messages = {
  nav: { story: "Story", menu: "Menu", stores: "Stores", franchise: "Franchise", contact: "Contact" },
  brand: { tagline: "The most fitting meal for Koreans", since: "SINCE 2015 · BUSAN" },
  hero: {
    eyebrow1: "HWABAN · 花飯",
    eyebrow2: "SINCE 2015 · BUSAN",
    title_l1: "The most fitting",
    title_l2: "Korean meal,",
    title_l3: "HWABAN",
    desc: "Faster than fast food, yet more nutritious — a balanced meal of Korean classics, designed for the busy modern table.",
    cta_menu: "Explore Menu →",
    cta_stores: "Find Stores",
    stat1: "Years of practice",
    stat2: "Stores in Busan",
    stat3: "Promises kept",
    today: "TODAY'S TABLE",
    scroll: "SCROLL",
  },
  about: {
    eyebrow: "BRAND STORY",
    title_l1: "Bibimbap born in",
    title_l2: "Bumin-dong, 2015 —",
    title_brand: "honesty in a bowl",
    body1:
      "HWABAN (花飯) began in a small Korean restaurant in Bumin-dong, Seo-gu, Busan in 2015. Faster than fast food, yet more nutritious — serving a balanced meal has been HWABAN's starting point.",
    body2:
      "The world is full of delicious dishes, yet most harm our health. HWABAN crafts food that goes beyond flavor — meals carrying all the nutrients you need in a day, designed for the Korean palate.",
    body3:
      "\"Within arm's reach, at a fair price — we've kept that promise to deliver more than you paid for, for ten years.\"",
    signature_label: "SIGNATURE",
    signature_title: "A bowl of bibimbap with 7 essential nutrients",
    marquee: ["Honesty in a bowl", "Fresh ingredients", "Our own sauces", "Cooked to order", "A balanced meal", "HWABAN · 花飯"],
  },
  promises: {
    eyebrow: "THREE PROMISES",
    title_l1: "The three things",
    title_l2: "HWABAN keeps for flavor and health.",
    items: [
      { eyebrow: "FRESH", title: "Fresh ingredients", detail: "Only same-day delivered ingredients — every single day, to keep freshness intact." },
      { eyebrow: "OUR OWN", title: "Original sauces", detail: "Developed and produced in-house by HWABAN — sauces you'll taste nowhere else." },
      { eyebrow: "NOW", title: "Cooked to order", detail: "For the tastiest moment, cooking begins the instant your order arrives." },
    ],
  },
  menu: {
    eyebrow: "MENU",
    title_l1: "Honesty in a bowl.",
    title_l2: "Today's HWABAN.",
    tab_signature: "Signatures",
    tab_set: "Sets",
    tab_more: "Vegan · Sides · Drinks",
    review_event_title: "REVIEW EVENT",
    review_event_desc: "One per main menu ordered. If both are chosen, one is served per main.",
    note: "※ Prices and composition may vary slightly by store.",
    full_eyebrow: "FULL MENU",
    full_title: "Every dish at a glance.",
    price_label: "Price",
    categories: {
      signature: "Signatures",
      set: "Sets",
      hangrr: "Sets with drink",
      vegan: "Vegan",
      side: "Sides",
      drink: "Drinks",
    },
  },
  stores: {
    eyebrow: "OUR STORES",
    title_l1: "Five stores in Busan,",
    title_l2: "welcoming you to HWABAN.",
    description: "Every store is directly managed by HQ — same ingredients, same signature sauces.",
    map_naver: "Naver Map",
    map_kakao: "Kakao Map",
  },
  reviews: {
    eyebrow: "VOICES",
    title: "I'll be back",
    description: "Real reviews left on DiningCode, Siksin, and Naver Place — quoted as they are.",
  },
  franchise: {
    eyebrow: "FRANCHISE",
    title_l1: "Reasonable cost,",
    title_l2: "proven margin.",
    description: "Drawing on a decade of directly-operated stores, HQ stands with prospective owners through their full launch.",
    steps_title: "8 Steps to Open",
    steps_subtitle: "From consultation to grand opening, HQ walks the entire journey with you.",
    cost_eyebrow: "INVESTMENT · 20 pyeong basis",
    cost_title: "Opening Cost",
    cost_total_label: "Total (VAT not included)",
    cost_total_unit: "× 10,000 KRW",
    cost_promo: "◆ Franchise fee · training fee · deposit waived for stores 1–10 ◆",
    cost_th_item: "Item",
    cost_th_detail: "Detail",
    cost_th_cost: "Cost (× 10,000 KRW)",
    cost_th_note: "Note",
    cost_extras_label: "※ Additional items",
    cta: "Contact us →",
  },
  contact: {
    eyebrow: "CONTACT",
    title_l1: "Reach out",
    title_l2: "anytime.",
    description: "Franchise consultations, menu collaborations, press inquiries — outside business hours, email gets the fastest reply.",
    label_phone: "PHONE",
    label_email: "EMAIL",
    label_hq: "HQ ADDRESS",
    address: "5, Gudeok-ro 199beon-gil, Seo-gu, Busan, Korea",
    follow_us: "FOLLOW US →",
    main_insta_desc: "Official HWABAN HQ Instagram. The fastest place to catch menu photos, store news, and grand openings.",
    bangi_desc: "HWABAN Bangi store (Seoul Songpa-gu) · separately operated aged-meat branch.",
    marquee: ["Reach out anytime", "CONTACT US", "Franchise welcome", "Walk with us", "HWABAN · 花飯"],
  },
  footer: {
    tagline: "The most fitting meal for Koreans, HWABAN.",
    biz_eyebrow: "BUSINESS",
    contact_eyebrow: "CONTACT",
    biz_name: "Name",
    biz_ceo: "CEO",
    biz_reg: "Biz No.",
    biz_addr: "Address",
    biz_tel: "TEL",
    biz_email: "EMAIL",
    biz_sns: "SNS",
    name: "HWABAN",
    ceo_value: "Ma Kyeong-Deuk",
    address_value: "5, Gudeok-ro 199beon-gil, Seo-gu, Busan",
    rights: "© {y} HWABAN. ALL RIGHTS RESERVED.",
  },
  meta: {
    title: "HWABAN — The most fitting meal for Koreans",
    description: "HWABAN, a bibimbap restaurant born in Bumin-dong, Busan in 2015. Fresh same-day ingredients, original house sauces, cooked to order — a balanced Korean meal.",
  },
};

const ja: Messages = {
  nav: { story: "ストーリー", menu: "メニュー", stores: "店舗", franchise: "加盟店", contact: "お問い合わせ" },
  brand: { tagline: "韓国人に最も似合う一食", since: "SINCE 2015 · BUSAN" },
  hero: {
    eyebrow1: "HWABAN · 花飯",
    eyebrow2: "SINCE 2015 · BUSAN",
    title_l1: "韓国人に最も似合う",
    title_l2: "一食、",
    title_l3: "花飯",
    desc: "ファストフードより速く、しかし栄養はもっと豊かに。慌ただしい現代人のための、栄養バランスの取れた韓国式一食。",
    cta_menu: "メニューを見る →",
    cta_stores: "店舗を探す",
    stat1: "十年の道",
    stat2: "釜山五店舗",
    stat3: "三つの約束",
    today: "TODAY'S TABLE",
    scroll: "SCROLL",
  },
  about: {
    eyebrow: "BRAND STORY · 物語",
    title_l1: "2015年、富民洞で",
    title_l2: "始まったビビンバ —",
    title_brand: "一杯の誠実",
    body1:
      "花飯（HWABAN）は2015年、韓国・釜山市西区富民洞の小さな韓食店から始まりました。ファストフードより速く、しかし栄養はもっと豊かに — バランスの取れた一食をお出しすることが、花飯の出発点でした。",
    body2:
      "世の中には美味しい料理が溢れていますが、その多くは健康を損ねます。花飯は味だけでなく、一日に必要な栄養素を全て込めた、韓国人に最も似合う料理をつくります。",
    body3:
      "「手の届く距離で、合理的な価格で — お支払いいただいた以上のものをご提供する。その約束を守り続けて十年。」",
    signature_label: "SIGNATURE",
    signature_title: "7種の栄養素が詰まったビビンバ一杯",
    marquee: ["一杯の誠実", "新鮮な食材", "自家製ソース", "ご注文後調理", "バランスのとれた一食", "HWABAN · 花飯"],
  },
  promises: {
    eyebrow: "THREE PROMISES · 三つの約束",
    title_l1: "味と健康のために",
    title_l2: "花飯が守る三つ。",
    items: [
      { eyebrow: "FRESH", title: "新鮮な食材", detail: "鮮度を保つため、毎日その日仕入れた食材のみを使用します。" },
      { eyebrow: "OUR OWN", title: "独自のソース", detail: "本社が自ら開発・製造した、花飯だけの特製ソース。" },
      { eyebrow: "NOW", title: "ご注文後調理", detail: "最も美味しい瞬間のため、ご注文が入ったその瞬間に調理を始めます。" },
    ],
  },
  menu: {
    eyebrow: "MENU · お品書き",
    title_l1: "一杯の誠実。",
    title_l2: "本日の花飯。",
    tab_signature: "看板",
    tab_set: "セット",
    tab_more: "ビーガン · サイド · ドリンク",
    review_event_title: "REVIEW EVENT · レビューイベント",
    review_event_desc: "メインメニュー1点につき1点ご提供。両方ご注文の場合はメイン1点につき1点となります。",
    note: "※ 価格と構成は店舗の事情により多少異なる場合があります。",
    full_eyebrow: "FULL MENU · 全お品書き",
    full_title: "すべてのお品書きを一目で。",
    price_label: "価格",
    categories: {
      signature: "看板メニュー",
      set: "セット",
      hangrr: "一杯セット（ドリンク付）",
      vegan: "ビーガン",
      side: "サイド",
      drink: "ドリンク",
    },
  },
  stores: {
    eyebrow: "OUR STORES · 店舗案内",
    title_l1: "釜山五店舗にて、",
    title_l2: "花飯がお迎えします。",
    description: "すべての店舗は本社直営管理 — 同じ食材、同じ特製ソースで運営しています。",
    map_naver: "ネイバーマップ",
    map_kakao: "カカオマップ",
  },
  reviews: {
    eyebrow: "VOICES · お客様の一言",
    title: "また来たい",
    description: "DiningCode・食神・Naverプレイスに投稿された実際のお客様レビューをそのまま掲載しています。",
  },
  franchise: {
    eyebrow: "FRANCHISE · 加盟店募集",
    title_l1: "合理的な投資、",
    title_l2: "確かな利益率。",
    description: "2015年からの直営運営ノウハウで、開業希望者の安定したスタートを本社が共に支えます。",
    steps_title: "開業の流れ · 八 段階",
    steps_subtitle: "ご相談からグランドオープンまで、本社が最初から最後まで伴走します。",
    cost_eyebrow: "INVESTMENT · 20坪基準",
    cost_title: "開業費用",
    cost_total_label: "総計（VAT別）",
    cost_total_unit: "万ウォン",
    cost_promo: "◆ 10号店まで加盟金 · 教育費 · 保証金 免除 ◆",
    cost_th_item: "項目",
    cost_th_detail: "内容",
    cost_th_cost: "費用（万ウォン）",
    cost_th_note: "備考",
    cost_extras_label: "※ 別途事項",
    cta: "お問い合わせ →",
  },
  contact: {
    eyebrow: "CONTACT · お問い合わせ",
    title_l1: "いつでも",
    title_l2: "ご連絡ください。",
    description: "加盟相談、メニュー提携、報道資料など — 営業時間外はメールが最速です。",
    label_phone: "PHONE",
    label_email: "EMAIL",
    label_hq: "HQ ADDRESS",
    address: "韓国・釜山広域市西区 九徳路199番ギル5",
    follow_us: "FOLLOW US →",
    main_insta_desc: "花飯本社公式インスタグラム。メニュー写真、店舗情報、新規オープンを最速でお知らせします。",
    bangi_desc: "花飯 方夷店（ソウル松坡区 芳荑洞）· 熟成肉専門の別運営店舗。",
    marquee: ["いつでもご連絡を", "CONTACT US", "加盟ご相談歓迎", "共に歩みましょう", "花飯 · HWABAN"],
  },
  footer: {
    tagline: "韓国人に最も似合う一食、花飯。",
    biz_eyebrow: "BUSINESS",
    contact_eyebrow: "CONTACT",
    biz_name: "屋号",
    biz_ceo: "代表",
    biz_reg: "事業者",
    biz_addr: "住所",
    biz_tel: "TEL",
    biz_email: "EMAIL",
    biz_sns: "SNS",
    name: "花飯",
    ceo_value: "マ・ギョンドゥク",
    address_value: "釜山広域市西区 九徳路199番ギル5",
    rights: "© {y} HWABAN. ALL RIGHTS RESERVED.",
  },
  meta: {
    title: "花飯 HWABAN — 韓国人に最も似合う一食",
    description: "2015年、釜山富民洞で生まれたビビンバ専門韓食店「花飯」。当日仕入れの新鮮な食材、自家製の特製ソース、ご注文後調理 — 韓国人に最も似合うバランスのとれた一食。",
  },
};

export const MESSAGES: L<Messages> = { ko, en, ja };
