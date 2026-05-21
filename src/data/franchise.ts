// 가맹점 창업 데이터 — 절차 8단계 + 비용 + 5가지 강점
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

export type Step = { num: string; title: string; desc: string; icon: IconType };

export const STEPS: Step[] = [
  { num: "01", title: "가맹상담", desc: "홈페이지 문의 및 미팅을 통한 창업 관련 세부 상담", icon: LuStore },
  { num: "02", title: "가맹계약", desc: "가맹 및 오픈 절차 진행", icon: LuReceipt },
  { num: "03", title: "상권조사", desc: "희망 지역 혹은 추천 지역 중심으로 상권 조사", icon: LuWallet },
  { num: "04", title: "점포계약", desc: "상권과 점포를 종합 분석하여 점포 선정 및 임대차 계약", icon: LuBuilding2 },
  { num: "05", title: "인테리어 시공", desc: "주요 타겟층에게 적합한 감각적인 인테리어 시공", icon: LuHammer },
  { num: "06", title: "집기 및 초도물품 입고", desc: "각종 집기 및 초도 물품 입고", icon: LuBoxes },
  { num: "07", title: "점포교육", desc: "전문 인력을 투입한 전반적인 점포 운영 교육 및 오픈 준비", icon: LuUsers },
  { num: "08", title: "점포오픈", desc: "GRAND OPEN!", icon: LuPartyPopper },
];

export type CostRow = { group: string; label: string; detail: string; cost: number; note?: string };

export const COSTS: CostRow[] = [
  { group: "가맹금", label: "가맹비", detail: "상표권 사용권 및 영업권", cost: 500, note: "부가세 별도" },
  { group: "가맹금", label: "교육비", detail: "본사 직원 지원 및 파견 교육", cost: 300, note: "부가세 별도" },
  { group: "가맹금", label: "보증금", detail: "계약 이행 보증금", cost: 200, note: "계약 해지 시 환불 · 부가세 없음" },
  { group: "인테리어", label: "인테리어 (20평 기준)", detail: "목공/전기/타일/수도/덕트 등", cost: 2400, note: "120만원/평" },
  { group: "인테리어", label: "간판", detail: "전면 및 돌출 간판 사용 비용 포함", cost: 200 },
  { group: "인테리어", label: "주방시설", detail: "간택기/식기세척기/싱크대/작업대 등", cost: 1000 },
  { group: "인테리어", label: "집기류", detail: "그릇 집기 비품 및 테이블 의자", cost: 300 },
  { group: "인테리어", label: "홍보물 및 비품", detail: "유니폼/명함/포스터 홍보물 등", cost: 100 },
];

export const COST_TOTAL = COSTS.reduce((s, r) => s + r.cost, 0);

export const COST_EXTRAS = "CCTV / 스피커 / 냉난방기 / 철거 / 전기증설 / 소방설비 / 초도 식자재비용 별도";

export type Strength = { title: string; desc: string };

export const STRENGTHS: Strength[] = [
  {
    title: "합리적인 창업비용",
    desc: "꼭 필요한 합리적인 비용만으로 예비 창업 점주님들이 안정적으로 시작할 수 있도록 지원합니다.",
  },
  {
    title: "친근한 메뉴구성",
    desc: "한국인이 주식으로 즐기는 비빔밥, 두루치기, 돼지불고기, 찌개 등 친근한 메뉴로 지속 가능한 운영이 가능합니다.",
  },
  {
    title: "홀 · 테이크아웃 · 배달",
    desc: "병행 운영 시스템으로 판로 다각화를 통한 매출 확대를 기대할 수 있습니다.",
  },
  {
    title: "높은 마진율",
    desc: "최저가 물류 시스템과 메뉴 조리 간편화로 인건비를 절감하고 높은 마진율을 자랑합니다.",
  },
  {
    title: "본사의 체계적인 관리",
    desc: "다수 직영점 운영 노하우를 바탕으로 가맹점의 매출과 운영을 본사가 직접 관리합니다.",
  },
];
