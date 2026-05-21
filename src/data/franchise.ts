// 가맹점 데이터 — 한·영·일
import type { L } from "../i18n/locale";
import type { IconType } from "react-icons";
import {
  LuStore,
  LuReceipt,
  LuWallet,
  LuBuilding2,
  LuHammer,
  LuBoxes,
  LuUsers,
  LuPartyPopper,
} from "react-icons/lu";

const t = <T,>(ko: T, en: T, ja: T): L<T> => ({ ko, en, ja });

export type Step = { num: string; title: L<string>; desc: L<string>; icon: IconType };

export const STEPS: Step[] = [
  { num: "01", title: t("가맹상담", "Consultation", "加盟相談"),
    desc: t("홈페이지 문의 및 미팅을 통한 창업 관련 세부 상담", "Web inquiry and meetings for detailed launch consultation", "ホームページ問い合わせ・面談での創業詳細相談"),
    icon: LuStore },
  { num: "02", title: t("가맹계약", "Contract", "加盟契約"),
    desc: t("가맹 및 오픈 절차 진행", "Signing and opening procedures", "加盟・オープン手続き"),
    icon: LuReceipt },
  { num: "03", title: t("상권조사", "Market Survey", "商圏調査"),
    desc: t("희망 지역 혹은 추천 지역 중심으로 상권 조사", "Surveying the requested or recommended trade area", "希望エリアまたは推奨エリアの商圏調査"),
    icon: LuWallet },
  { num: "04", title: t("점포계약", "Store Lease", "店舗契約"),
    desc: t("상권과 점포를 종합 분석하여 점포 선정 및 임대차 계약", "Comprehensive analysis, site selection and lease", "商圏・物件を総合分析し選定・賃貸借契約"),
    icon: LuBuilding2 },
  { num: "05", title: t("인테리어 시공", "Interior Build-out", "内装工事"),
    desc: t("주요 타겟층에게 적합한 감각적인 인테리어 시공", "Tasteful interior build-out for the target audience", "ターゲット層に合わせた感性的な内装工事"),
    icon: LuHammer },
  { num: "06", title: t("집기 및 초도물품 입고", "Equipment & Initial Stock", "什器・初期物品納品"),
    desc: t("각종 집기 및 초도 물품 입고", "Equipment and initial inventory delivered", "各種什器・初期物品の納品"),
    icon: LuBoxes },
  { num: "07", title: t("점포교육", "Staff Training", "店舗教育"),
    desc: t("전문 인력을 투입한 전반적인 점포 운영 교육 및 오픈 준비", "Pro trainers cover full operations and pre-opening prep", "専門人材による店舗運営教育・オープン準備"),
    icon: LuUsers },
  { num: "08", title: t("점포오픈", "Grand Opening", "店舗オープン"),
    desc: t("GRAND OPEN!", "GRAND OPEN!", "GRAND OPEN!"),
    icon: LuPartyPopper },
];

export type CostRow = { label: L<string>; detail: L<string>; cost: number; note?: L<string> };

export const COSTS: CostRow[] = [
  { label: t("가맹비", "Franchise fee", "加盟金"),
    detail: t("상표권 사용권 및 영업권", "Trademark and business rights", "商標使用権・営業権"),
    cost: 500, note: t("부가세 별도", "VAT excluded", "VAT別") },
  { label: t("교육비", "Training fee", "教育費"),
    detail: t("본사 직원 지원 및 파견 교육", "HQ staff support & on-site training", "本社スタッフ派遣・教育"),
    cost: 300, note: t("부가세 별도", "VAT excluded", "VAT別") },
  { label: t("보증금", "Deposit", "保証金"),
    detail: t("계약 이행 보증금", "Contract performance deposit", "契約履行保証金"),
    cost: 200, note: t("계약 해지 시 환불 · 부가세 없음", "Refunded on termination · no VAT", "解約時返金・VATなし") },
  { label: t("인테리어 (20평 기준)", "Interior (20 pyeong)", "内装（20坪基準）"),
    detail: t("목공/전기/타일/수도/덕트 등", "Carpentry / electrical / tile / plumbing / duct", "木工・電気・タイル・水道・ダクト他"),
    cost: 2400, note: t("120만원/평", "₩1.2M per pyeong", "120万ウォン/坪") },
  { label: t("간판", "Signage", "看板"),
    detail: t("전면 및 돌출 간판 사용 비용 포함", "Frontal and protruding signage included", "前面・突出看板使用料込み"),
    cost: 200 },
  { label: t("주방시설", "Kitchen equipment", "厨房設備"),
    detail: t("간택기/식기세척기/싱크대/작업대 등", "Grill / dishwasher / sink / prep tables etc.", "焼き機・食器洗浄機・シンク・作業台他"),
    cost: 1000 },
  { label: t("집기류", "Furniture & wares", "什器類"),
    detail: t("그릇 집기 비품 및 테이블 의자", "Tableware, utensils, tables and chairs", "食器・備品・テーブル・椅子"),
    cost: 300 },
  { label: t("홍보물 및 비품", "Promotional items", "販促物・備品"),
    detail: t("유니폼/명함/포스터 홍보물 등", "Uniforms / business cards / posters", "ユニフォーム・名刺・ポスター等"),
    cost: 100 },
];

export const COST_TOTAL = COSTS.reduce((s, r) => s + r.cost, 0);

export const COST_EXTRAS: L<string> = t(
  "CCTV / 스피커 / 냉난방기 / 철거 / 전기증설 / 소방설비 / 초도 식자재비용 별도",
  "CCTV / speakers / HVAC / demolition / electrical upgrade / fire safety / initial ingredients — separate",
  "CCTV・スピーカー・冷暖房・解体・電気増設・消防設備・初期食材費 別途"
);

export type Strength = { title: L<string>; desc: L<string> };

export const STRENGTHS: Strength[] = [
  {
    title: t("합리적인 창업비용", "Reasonable Investment", "合理的な創業費用"),
    desc: t(
      "꼭 필요한 합리적인 비용만으로 예비 창업 점주님들이 안정적으로 시작할 수 있도록 지원합니다.",
      "Only the essential, reasonable costs — so prospective owners can launch with confidence.",
      "本当に必要な合理的費用だけで、開業希望者が安定してスタートできるよう支援します。"
    ),
  },
  {
    title: t("친근한 메뉴구성", "Familiar Menu", "親しみやすいメニュー"),
    desc: t(
      "한국인이 주식으로 즐기는 비빔밥, 두루치기, 돼지불고기, 찌개 등 친근한 메뉴로 지속 가능한 운영이 가능합니다.",
      "Bibimbap, doorochigi, pork bulgogi, jjigae — Korean staples that support sustainable operations.",
      "ビビンバ、トゥルチギ、豚プルコギ、チゲなど、韓国の定番メニューで持続可能な運営を支えます。"
    ),
  },
  {
    title: t("홀 · 테이크아웃 · 배달", "Dine-in · Takeout · Delivery", "イートイン・テイクアウト・デリバリー"),
    desc: t(
      "병행 운영 시스템으로 판로 다각화를 통한 매출 확대를 기대할 수 있습니다.",
      "Parallel-channel operations diversify sales and grow revenue.",
      "並行運営システムで販路を多様化し、売上拡大が見込めます。"
    ),
  },
  {
    title: t("높은 마진율", "High Margin", "高い利益率"),
    desc: t(
      "최저가 물류 시스템과 메뉴 조리 간편화로 인건비를 절감하고 높은 마진율을 자랑합니다.",
      "Low-cost logistics and simplified cooking reduce labor and boost margin.",
      "最安値物流システムと調理の簡素化で人件費を削減、高い利益率を実現します。"
    ),
  },
  {
    title: t("본사의 체계적인 관리", "Structured HQ Support", "本社の体系的管理"),
    desc: t(
      "다수 직영점 운영 노하우를 바탕으로 가맹점의 매출과 운영을 본사가 직접 관리합니다.",
      "Drawing on multiple directly-operated stores, HQ manages each franchise's sales and operations.",
      "多数の直営店運営ノウハウで、加盟店の売上と運営を本社が直接管理します。"
    ),
  },
];
