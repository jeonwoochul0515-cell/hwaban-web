// 상단 네비 — 다크 톤 통과 + 라이트 톤 통과 자동 전환, 강한 타이포
import { useEffect, useState } from "react";
import { LuMenu as MenuIcon, LuX as X, LuPhone as Phone } from "react-icons/lu";

const NAV = [
  { id: "about", label: "BRAND" },
  { id: "menu", label: "MENU" },
  { id: "stores", label: "STORES" },
  { id: "franchise", label: "FRANCHISE" },
  { id: "contact", label: "CONTACT" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-(--color-cream)/90 backdrop-blur-md text-(--color-ink) border-b border-(--color-line)"
          : "bg-transparent text-(--color-cream)"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-serif text-2xl sm:text-3xl font-black tracking-tighter">
            화반
          </span>
          <span className="hidden sm:inline text-[10px] tracking-[0.3em] opacity-60">
            HWABAN · SINCE 2015
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-xs tracking-[0.2em] font-medium">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-(--color-brand-flame) transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:051-255-8727"
            className="brand-gradient text-white px-4 py-2 rounded-full text-xs flex items-center gap-1.5 tracking-normal"
          >
            <Phone className="w-3 h-3" />
            051-255-8727
          </a>
        </nav>

        <button
          aria-label="메뉴 열기"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 ink-gradient text-(--color-cream) flex flex-col">
          <div className="h-16 px-5 flex items-center justify-between border-b border-white/10">
            <span className="font-serif text-2xl font-black">화반</span>
            <button aria-label="닫기" onClick={() => setOpen(false)} className="p-2 -mr-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-10 gap-2">
            {NAV.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="py-4 border-b border-white/10 font-serif text-3xl font-bold flex items-baseline gap-4"
              >
                <span className="text-(--color-brand-flame) text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            ))}
            <a
              href="tel:051-255-8727"
              onClick={() => setOpen(false)}
              className="mt-8 brand-gradient text-white text-center py-5 rounded-full text-lg font-medium"
            >
              본사 전화 · 051-255-8727
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
