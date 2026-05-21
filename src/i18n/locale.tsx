// 다국어 컨텍스트 — 한·영·일 3개국어, localStorage 동기화, html[lang] 자동 갱신
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "ko" | "en" | "ja";
export const LOCALES: { code: Locale; label: string; native: string }[] = [
  { code: "ko", label: "KO", native: "한국어" },
  { code: "en", label: "EN", native: "English" },
  { code: "ja", label: "JA", native: "日本語" },
];

export type L<T> = Record<Locale, T>;

const KEY = "hwaban.locale";

type Ctx = { locale: Locale; setLocale: (l: Locale) => void };
const LocaleCtx = createContext<Ctx>({ locale: "ko", setLocale: () => {} });

function detectInitial(): Locale {
  if (typeof window === "undefined") return "ko";
  const saved = window.localStorage.getItem(KEY) as Locale | null;
  if (saved && ["ko", "en", "ja"].includes(saved)) return saved;
  const nav = navigator.language.toLowerCase();
  if (nav.startsWith("ja")) return "ja";
  if (nav.startsWith("ko")) return "ko";
  return "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitial);

  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem(KEY, locale);
    } catch {}
  }, [locale]);

  return (
    <LocaleCtx.Provider value={{ locale, setLocale: setLocaleState }}>
      {children}
    </LocaleCtx.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleCtx);
}

// `t<T>(obj)` — locale에 맞는 문자열 꺼내기
export function useT() {
  const { locale } = useLocale();
  return function t<T>(obj: L<T>): T {
    return obj[locale];
  };
}

// 가격 포맷 (locale별)
export function useFormatPrice() {
  const { locale } = useLocale();
  return (n: number) => {
    if (locale === "ko") return n.toLocaleString("ko-KR") + "원";
    if (locale === "ja") return n.toLocaleString("ja-JP") + "ウォン";
    return "₩" + n.toLocaleString("en-US");
  };
}
