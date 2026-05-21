// 푸터 — 큰 화반 워드마크 + 사업자 정보
export default function Footer() {
  return (
    <footer className="ink-gradient text-(--color-cream)/70 relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10 relative">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <p className="font-serif font-black text-[18vw] sm:text-[15vw] lg:text-[12rem] leading-[0.85] tracking-tighter text-(--color-cream)">
              화반<span className="text-(--color-brand-flame)">.</span>
            </p>
            <p className="mt-4 text-sm max-w-md">
              한국인에게 가장 적합한 한 끼 식사. 2015년 부산 부민동에서 시작된 비빔밥 전문 한식점.
            </p>
          </div>

          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-8 text-xs leading-loose">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-(--color-brand-flame) font-bold mb-3">
                BUSINESS
              </p>
              <p><span className="text-(--color-cream)/40 inline-block w-16">상호</span>화반</p>
              <p><span className="text-(--color-cream)/40 inline-block w-16">대표</span>마경득</p>
              <p>
                <span className="text-(--color-cream)/40 inline-block w-16">사업자</span>
                603-13-77384
              </p>
              <p>
                <span className="text-(--color-cream)/40 inline-block w-16">주소</span>
                부산 서구 구덕로 199번길 5
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] text-(--color-brand-flame) font-bold mb-3">
                CONTACT
              </p>
              <p>
                <span className="text-(--color-cream)/40 inline-block w-16">TEL</span>
                <a href="tel:051-255-8727" className="hover:text-(--color-brand-flame)">051-255-8727</a>
              </p>
              <p>
                <span className="text-(--color-cream)/40 inline-block w-16">EMAIL</span>
                <a href="mailto:aktl7241@naver.com" className="hover:text-(--color-brand-flame)">
                  aktl7241@naver.com
                </a>
              </p>
              <p>
                <span className="text-(--color-cream)/40 inline-block w-16">SNS</span>
                <a
                  href="https://instagram.com/hwaban_official"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-(--color-brand-flame)"
                >
                  @hwaban_official
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-(--color-cream)/40">
          <p>© {new Date().getFullYear()} HWABAN. ALL RIGHTS RESERVED.</p>
          <p>RENEWED WITH React · Vite · Cloudflare Pages</p>
        </div>
      </div>
    </footer>
  );
}
