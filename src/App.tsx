// 메인 페이지 — 단일 페이지 앵커 스크롤 구조
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

export default function App() {
  return (
    <div className="min-h-screen bg-(--color-cream) text-(--color-ink)">
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
