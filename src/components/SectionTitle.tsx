// 공통 섹션 제목 — 영문 라벨 + 한글 헤드라인 + 보조 설명
type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="text-xs tracking-[0.3em] text-(--color-brand) font-semibold mb-3">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl sm:text-5xl font-bold text-(--color-ink) leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-(--color-ink-soft) leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
