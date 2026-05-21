// 연락처 — 큰 CTA, 인스타 카드, 강한 색감
import {
  LuPhone as Phone,
  LuMail as Mail,
  LuMapPin as MapPin,
  LuInstagram as Instagram,
} from "react-icons/lu";
import Marquee from "./Marquee";

export default function Contact() {
  return (
    <section id="contact" className="bg-(--color-cream)">
      <Marquee
        variant="brand"
        items={["연락주세요", "CONTACT US", "가맹 문의 환영", "함께해요", "HWABAN"]}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <p className="text-[11px] tracking-[0.4em] text-(--color-brand) font-semibold mb-3">
            CONTACT · 문의
          </p>
          <h2 className="font-serif font-black text-5xl sm:text-7xl leading-[0.92] tracking-tighter">
            언제든<br />
            <span className="text-(--color-brand)">연락주세요</span>.
          </h2>
          <p className="mt-7 text-(--color-ink-soft) leading-relaxed max-w-md">
            가맹 창업 상담, 메뉴 제휴, 보도 자료 등 — 평일 영업시간 외에는 이메일로 빠르게 회신드립니다.
          </p>

          <div className="mt-10 space-y-3 max-w-xl">
            <BigLink
              href="tel:051-255-8727"
              eyebrow="PHONE"
              label="051-255-8727"
              icon={Phone}
            />
            <BigLink
              href="mailto:aktl7241@naver.com"
              eyebrow="EMAIL"
              label="aktl7241@naver.com"
              icon={Mail}
            />
            <BigLink
              href="https://map.naver.com/p/search/화반 부민점"
              eyebrow="HQ ADDRESS"
              label="부산 서구 구덕로 199번길 5"
              icon={MapPin}
            />
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <a
            href="https://instagram.com/hwaban_official"
            target="_blank"
            rel="noreferrer"
            className="block brand-gradient text-white rounded-(--radius-card) p-8 hover:scale-[1.02] transition-transform shadow-2xl shadow-(--color-brand)/30 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full dot-pattern opacity-50" />
            <div className="flex items-center gap-3 mb-4 relative">
              <Instagram className="w-7 h-7" />
              <span className="font-serif text-2xl font-black">@hwaban_official</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed relative">
              화반 본사 공식 인스타그램. 메뉴 사진, 매장 소식, 신규 오픈 정보를 가장 빠르게 확인하실 수 있습니다.
            </p>
            <p className="mt-6 text-xs tracking-widest font-bold relative">
              FOLLOW US →
            </p>
          </a>

          <a
            href="https://instagram.com/hwaban92"
            target="_blank"
            rel="noreferrer"
            className="block bg-(--color-ink) text-(--color-cream) rounded-(--radius-card) p-7 hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-3 mb-2">
              <Instagram className="w-5 h-5 text-(--color-brand-flame)" />
              <span className="font-serif text-lg font-bold">@hwaban92 — 방이점</span>
            </div>
            <p className="text-sm text-(--color-cream)/60">
              화반 방이점 (서울 송파 방이동) · 숙성고기 전문 매장 별도 운영.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

function BigLink({
  href,
  eyebrow,
  label,
  icon: Icon,
}: {
  href: string;
  eyebrow: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      className="group block bg-(--color-paper) hover:bg-(--color-ink) text-(--color-ink) hover:text-(--color-cream) rounded-2xl px-6 py-5 border border-(--color-line) hover:border-(--color-ink) transition-all duration-300"
    >
      <div className="flex items-center gap-5">
        <span className="w-12 h-12 rounded-full bg-(--color-brand)/10 group-hover:bg-(--color-brand) text-(--color-brand) group-hover:text-white flex items-center justify-center transition">
          <Icon className="w-5 h-5" />
        </span>
        <div className="flex-1">
          <p className="text-[10px] tracking-[0.3em] text-(--color-ink-soft) group-hover:text-(--color-brand-flame) mb-1 transition">
            {eyebrow}
          </p>
          <p className="font-serif text-xl font-bold">{label}</p>
        </div>
        <span className="text-2xl opacity-30 group-hover:opacity-100 group-hover:text-(--color-brand-flame) transition">
          →
        </span>
      </div>
    </a>
  );
}
