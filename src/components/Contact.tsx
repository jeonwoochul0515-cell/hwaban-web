// 연락처 + 인스타 — 본사 정보 & 외부 채널 링크
import { LuPhone as Phone, LuMail as Mail, LuMapPin as MapPin, LuInstagram as Instagram } from "react-icons/lu";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-(--color-ink) text-white"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] text-(--color-brand-soft) font-semibold mb-3">
            CONTACT
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">
            문의주세요.<br />
            화반이 답합니다.
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed max-w-md">
            가맹 창업 상담, 메뉴 제휴, 보도 자료 — 언제든 편하게 연락해 주세요.
            평일 영업시간 외에는 이메일로 문의해 주시면 빠르게 회신드립니다.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="tel:051-255-8727"
              className="flex items-center gap-4 group"
            >
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-(--color-brand) transition">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs text-white/60">본사 전화</div>
                <div className="text-lg font-medium tabular-nums">051-255-8727</div>
              </div>
            </a>
            <a
              href="mailto:aktl7241@naver.com"
              className="flex items-center gap-4 group"
            >
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-(--color-brand) transition">
                <Mail className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs text-white/60">이메일</div>
                <div className="text-lg font-medium">aktl7241@naver.com</div>
              </div>
            </a>
            <a
              href="https://map.naver.com/p/search/화반 부민점"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 group"
            >
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-(--color-brand) transition">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <div className="text-xs text-white/60">본사</div>
                <div className="text-lg font-medium">
                  부산 서구 구덕로199번길 5 화반
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <a
            href="https://instagram.com/hwaban_official"
            target="_blank"
            rel="noreferrer"
            className="block bg-white text-(--color-ink) rounded-(--radius-card) p-7 hover:scale-[1.01] transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <Instagram className="w-6 h-6 text-(--color-brand)" />
              <span className="font-serif text-xl font-bold">@hwaban_official</span>
            </div>
            <p className="text-sm text-(--color-ink-soft)">
              화반 본사 공식 인스타그램. 메뉴 사진, 매장 소식, 신규 오픈 정보를
              가장 빠르게 확인하실 수 있습니다.
            </p>
            <p className="mt-4 text-xs text-(--color-brand) font-medium">
              인스타그램에서 보기 →
            </p>
          </a>
          <a
            href="https://instagram.com/hwaban92"
            target="_blank"
            rel="noreferrer"
            className="block bg-white/5 border border-white/10 rounded-(--radius-card) p-7 hover:bg-white/10 transition"
          >
            <div className="flex items-center gap-3 mb-2">
              <Instagram className="w-5 h-5 text-(--color-brand-soft)" />
              <span className="font-serif text-lg font-bold">@hwaban92</span>
            </div>
            <p className="text-sm text-white/60">
              화반 방이점(서울 송파 방이동) · 숙성고기 전문 매장 별도 운영.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
