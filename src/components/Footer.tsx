// 푸터 — 사업자 정보 + 카피라이트
export default function Footer() {
  return (
    <footer className="bg-(--color-ink) border-t border-white/10 text-white/60 text-sm">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <div className="font-serif text-2xl font-bold text-(--color-brand-soft) mb-3">
            화반
          </div>
          <p className="text-xs leading-relaxed text-white/50 max-w-sm">
            한국인에게 가장 적합한 한 끼 식사. 2015년 부산 부민동에서 시작된
            비빔밥 전문 한식점.
          </p>
        </div>
        <div className="text-xs leading-relaxed space-y-1.5">
          <p>
            <span className="text-white/40 inline-block w-20">상호</span> 화반
          </p>
          <p>
            <span className="text-white/40 inline-block w-20">대표</span> 마경득
          </p>
          <p>
            <span className="text-white/40 inline-block w-20">주소</span>{" "}
            부산광역시 서구 구덕로 199번길 5 화반
          </p>
          <p>
            <span className="text-white/40 inline-block w-20">사업자번호</span>{" "}
            603-13-77384
          </p>
          <p>
            <span className="text-white/40 inline-block w-20">TEL</span>{" "}
            051-255-8727
          </p>
          <p>
            <span className="text-white/40 inline-block w-20">E-MAIL</span>{" "}
            aktl7241@naver.com
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-wrap justify-between items-center gap-2 text-xs text-white/40">
          <p>COPYRIGHT © {new Date().getFullYear()} HWABAN. All rights reserved.</p>
          <p>Renewed with React · Vite · Cloudflare Pages</p>
        </div>
      </div>
    </footer>
  );
}
