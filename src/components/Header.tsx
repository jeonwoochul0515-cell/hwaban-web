// 네비 — 다국어 + LocaleSwitch
import { useEffect, useState } from "react";
import { LuMenu as MenuIcon, LuX as X } from "react-icons/lu";
import LocaleSwitch from "./LocaleSwitch";
import { useT } from "../i18n/locale";
import { MESSAGES } from "../i18n/messages";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useT();
  const m = t(MESSAGES);

  const NAV = [
    { id: "about", label: m.nav.story, en: "STORY" },
    { id: "menu", label: m.nav.menu, en: "MENU" },
    { id: "stores", label: m.nav.stores, en: "STORES" },
    { id: "franchise", label: m.nav.franchise, en: "FRANCHISE" },
    { id: "contact", label: m.nav.contact, en: "CONTACT" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-(--color-paper)/95 backdrop-blur-md border-b border-(--color-line)"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <span className="seal text-sm w-9 h-9">花</span>
          <div className="leading-tight">
            <p className="font-serif text-xl font-bold tracking-tight text-(--color-ink)">화반</p>
            <p className="text-[9px] tracking-[0.3em] text-(--color-ink-soft) mt-0.5">
              HWABAN · 2015
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-baseline gap-1.5 text-(--color-ink) hover:text-(--color-brand) transition-colors"
            >
              <span className="font-serif">{item.label}</span>
              <span className="text-[9px] tracking-widest text-(--color-ink-soft) group-hover:text-(--color-brand) transition">
                {item.en}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitch />
          <a
            href="tel:051-255-8727"
            className="hidden md:inline-flex border border-(--color-ink)/30 text-(--color-ink) px-3.5 py-1.5 rounded-sm text-xs tracking-wider hover:bg-(--color-ink) hover:text-(--color-paper) transition"
          >
            051·255·8727
          </a>
          <button
            aria-label="Menu"
            className="lg:hidden p-2 -mr-2 text-(--color-ink)"
            onClick={() => setOpen(true)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-paper flex flex-col">
          <div className="h-16 px-5 flex items-center justify-between border-b border-(--color-line)">
            <div className="flex items-center gap-3">
              <span className="seal text-sm w-9 h-9">花</span>
              <span className="font-serif text-xl font-bold">화반</span>
            </div>
            <button aria-label="Close" onClick={() => setOpen(false)} className="p-2 -mr-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="px-7 pt-6">
            <LocaleSwitch variant="inline" />
          </div>
          <nav className="flex flex-col px-7 py-8 gap-1">
            {NAV.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="py-5 border-b border-(--color-line) flex items-baseline justify-between"
              >
                <span className="font-serif text-2xl font-bold">{item.label}</span>
                <span className="text-[10px] tracking-[0.35em] text-(--color-ink-soft)">
                  {String(i + 1).padStart(2, "0")} · {item.en}
                </span>
              </a>
            ))}
            <a
              href="tel:051-255-8727"
              onClick={() => setOpen(false)}
              className="mt-8 brand-gradient text-(--color-paper) text-center py-4 rounded-sm tracking-widest text-sm"
            >
              051-255-8727
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
