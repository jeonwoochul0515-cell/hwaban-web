// 메인 페이지 — LocaleProvider 감싸고 동적 메타 적용
import { useEffect } from "react";
import { LocaleProvider, useT } from "./i18n/locale";
import { MESSAGES } from "./i18n/messages";
import { useLocale } from "./i18n/locale";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Promises from "./components/Promises";
import Menu from "./components/Menu";
import Stores from "./components/Stores";
import Reviews from "./components/Reviews";
import Franchise from "./components/Franchise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function MetaSync() {
  const { locale } = useLocale();
  const t = useT();
  useEffect(() => {
    const meta = t(MESSAGES).meta;
    document.title = meta.title;
    let desc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!desc) {
      desc = document.createElement("meta");
      desc.name = "description";
      document.head.appendChild(desc);
    }
    desc.content = meta.description;
    document.documentElement.lang = locale;
  }, [locale, t]);
  return null;
}

function Shell() {
  return (
    <div className="min-h-screen bg-paper text-(--color-ink)">
      <MetaSync />
      <Header />
      <main>
        <Hero />
        <About />
        <Promises />
        <Menu />
        <Stores />
        <Reviews />
        <Franchise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LocaleProvider>
      <Shell />
    </LocaleProvider>
  );
}
