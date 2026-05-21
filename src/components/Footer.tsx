// 푸터 — i18n
import { useT } from "../i18n/locale";
import { MESSAGES } from "../i18n/messages";
import LocaleSwitch from "./LocaleSwitch";

export default function Footer() {
  const t = useT();
  const m = t(MESSAGES).footer;
  const year = new Date().getFullYear();

  return (
    <footer className="ink-gradient text-(--color-cream) border-t border-(--color-ink-soft)/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="seal w-14 h-14 text-2xl">花</span>
              <div>
                <p className="font-serif text-3xl font-bold leading-none">{m.name}</p>
                <p className="text-[10px] tracking-[0.35em] mt-2 text-(--color-cream)/60">
                  HWABAN · 花飯 · SINCE 2015
                </p>
              </div>
            </div>
            <p className="font-serif text-xl sm:text-2xl leading-snug tracking-tight max-w-lg text-(--color-cream)/90">
              {m.tagline}
            </p>
            <div className="mt-7">
              <LocaleSwitch variant="inline" />
            </div>
          </div>

          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-8 text-xs leading-loose">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-(--color-brand) font-bold mb-3">
                {m.biz_eyebrow}
              </p>
              <p>
                <span className="text-(--color-cream)/40 inline-block w-16">{m.biz_name}</span>
                {m.name}
              </p>
              <p>
                <span className="text-(--color-cream)/40 inline-block w-16">{m.biz_ceo}</span>
                {m.ceo_value}
              </p>
              <p>
                <span className="text-(--color-cream)/40 inline-block w-16">{m.biz_reg}</span>
                603-13-77384
              </p>
              <p>
                <span className="text-(--color-cream)/40 inline-block w-16">{m.biz_addr}</span>
                {m.address_value}
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] text-(--color-brand) font-bold mb-3">
                {m.contact_eyebrow}
              </p>
              <p>
                <span className="text-(--color-cream)/40 inline-block w-16">{m.biz_tel}</span>
                <a href="tel:051-255-8727" className="hover:text-(--color-cream)">
                  051-255-8727
                </a>
              </p>
              <p>
                <span className="text-(--color-cream)/40 inline-block w-16">{m.biz_email}</span>
                <a href="mailto:aktl7241@naver.com" className="hover:text-(--color-cream)">
                  aktl7241@naver.com
                </a>
              </p>
              <p>
                <span className="text-(--color-cream)/40 inline-block w-16">{m.biz_sns}</span>
                <a
                  href="https://instagram.com/hwaban_official"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-(--color-cream)"
                >
                  @hwaban_official
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-(--color-cream)/15 flex flex-wrap items-center justify-between gap-3 text-[11px] text-(--color-cream)/45 tracking-widest">
          <p>{m.rights.replace("{y}", String(year))}</p>
          <p>RENEWED · React · Vite · Cloudflare Pages</p>
        </div>
      </div>
    </footer>
  );
}
