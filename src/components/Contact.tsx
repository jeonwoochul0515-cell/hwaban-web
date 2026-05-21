// 문의 — i18n
import {
  LuPhone as Phone,
  LuMail as Mail,
  LuMapPin as MapPin,
  LuInstagram as Instagram,
} from "react-icons/lu";
import Marquee from "./Marquee";
import { useT } from "../i18n/locale";
import { MESSAGES } from "../i18n/messages";

export default function Contact() {
  const t = useT();
  const m = t(MESSAGES).contact;

  return (
    <section id="contact" className="bg-paper">
      <Marquee items={m.marquee} variant="brand" />
      <div className="max-w-6xl mx-auto px-5 sm:px-10 py-24 sm:py-32 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <p className="text-[10px] tracking-[0.4em] text-(--color-brand) font-semibold mb-3">
            {m.eyebrow}
          </p>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl tracking-tight leading-tight">
            {m.title_l1}
            <br />
            <span className="text-(--color-brand)">{m.title_l2}</span>
          </h2>
          <div className="divider-line mt-2"></div>
          <p className="mt-7 text-(--color-ink-soft) leading-loose max-w-md text-sm">
            {m.description}
          </p>

          <div className="mt-10 space-y-3 max-w-xl">
            <BigLink
              href="tel:051-255-8727"
              eyebrow={m.label_phone}
              label="051 · 255 · 8727"
              icon={Phone}
            />
            <BigLink
              href="mailto:aktl7241@naver.com"
              eyebrow={m.label_email}
              label="aktl7241@naver.com"
              icon={Mail}
            />
            <BigLink
              href="https://map.naver.com/p/search/화반 부민점"
              eyebrow={m.label_hq}
              label={m.address}
              icon={MapPin}
            />
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <a
            href="https://instagram.com/hwaban_official"
            target="_blank"
            rel="noreferrer"
            className="block bg-(--color-cream) hover:bg-(--color-cream-deep) text-(--color-ink) rounded-sm p-8 border border-(--color-line) hover:border-(--color-brand)/50 transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="seal w-10 h-10 text-sm">官</span>
              <span className="font-serif text-xl font-bold">@hwaban_official</span>
            </div>
            <p className="text-sm text-(--color-ink-soft) leading-relaxed">
              {m.main_insta_desc}
            </p>
            <p className="mt-5 flex items-center gap-2 text-[11px] tracking-widest font-bold text-(--color-brand)">
              <Instagram className="w-3.5 h-3.5" />
              {m.follow_us}
            </p>
          </a>

          <a
            href="https://instagram.com/hwaban92"
            target="_blank"
            rel="noreferrer"
            className="block bg-(--color-paper) text-(--color-ink) rounded-sm p-7 border border-(--color-line) hover:border-(--color-brand)/50 transition"
          >
            <div className="flex items-center gap-2 mb-2">
              <Instagram className="w-4 h-4 text-(--color-brand)" />
              <span className="font-serif text-base font-bold">@hwaban92</span>
            </div>
            <p className="text-xs text-(--color-ink-soft) leading-relaxed">{m.bangi_desc}</p>
          </a>
        </div>
      </div>
    </section>
  );
}

function BigLink({
  href,
  eyebrow,
  label,
  icon: Icon,
}: {
  href: string;
  eyebrow: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      className="group block bg-(--color-paper) border border-(--color-line) hover:border-(--color-brand)/60 rounded-sm px-6 py-5 transition"
    >
      <div className="flex items-center gap-5">
        <span className="w-11 h-11 rounded-sm bg-(--color-cream) group-hover:bg-(--color-brand) text-(--color-brand) group-hover:text-(--color-paper) flex items-center justify-center transition">
          <Icon className="w-4 h-4" />
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] tracking-[0.3em] text-(--color-ink-soft) mb-1">{eyebrow}</p>
          <p className="font-serif text-base sm:text-lg font-bold tabular-nums text-(--color-ink) truncate">
            {label}
          </p>
        </div>
        <span className="text-xl text-(--color-ink-soft) group-hover:text-(--color-brand) transition">
          →
        </span>
      </div>
    </a>
  );
}
