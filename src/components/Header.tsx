// 상단 네비게이션 — 스크롤 시 배경 등장, 모바일 햄버거 메뉴
import { useEffect, useState } from "react";
import { LuMenu as MenuIcon, LuX as X, LuPhone as Phone } from "react-icons/lu";

const NAV = [
  { id: "about", label: "브랜드" },
  { id: "menu", label: "메뉴" },
  { id: "stores", label: "매장" },
  { id: "franchise", label: "가맹문의" },
  { id: "contact", label: "연락처" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-(--color-cream)/90 backdrop-blur-md border-b border-(--color-line)"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-bold text-(--color-brand) tracking-tight">
            화반
          </span>
          <span className="hidden sm:inline text-xs text-(--color-ink-soft) border-l border-(--color-line) pl-2 ml-1">
            HWABAN since 2015
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-(--color-ink) hover:text-(--color-brand) transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:051-255-8727"
            className="brand-gradient text-white px-4 py-2 rounded-full text-sm flex items-center gap-1.5 hover:opacity-90"
          >
            <Phone className="w-3.5 h-3.5" />
            051-255-8727
          </a>
        </nav>

        <button
          aria-label="메뉴 열기"
          className="md:hidden p-2 -mr-2 text-(--color-ink)"
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-(--color-cream) flex flex-col">
          <div className="h-16 px-5 flex items-center justify-between border-b border-(--color-line)">
            <span className="font-serif text-2xl font-bold text-(--color-brand)">화반</span>
            <button aria-label="닫기" onClick={() => setOpen(false)} className="p-2 -mr-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-2 text-2xl font-serif">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-(--color-line) text-(--color-ink)"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:051-255-8727"
              onClick={() => setOpen(false)}
              className="mt-6 brand-gradient text-white text-center py-4 rounded-2xl text-lg"
            >
              본사 전화 · 051-255-8727
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
