import { ChevronDown } from "lucide-react";
import type { CaseStudySectionData } from "../data/clothesMarinaCaseStudy";

export function CaseStudyDetails({
  sections,
  labelledBy,
}: {
  sections: CaseStudySectionData[];
  labelledBy: string;
}) {
  return (
    <div className="mt-5 space-y-2" aria-labelledby={labelledBy}>
      <p id={labelledBy} className="text-[11px] font-bold uppercase tracking-widest text-brand-primary">
        Alcance técnico detallado
      </p>
      <div className="space-y-2">
        {sections.map(({ id, title, Icon, bullets }) => (
          <details
            key={id}
            className="group overflow-hidden rounded-lg border border-brand-outline/40 bg-brand-bg/35 transition-colors open:border-brand-primary/45 open:bg-brand-primary/[0.04] hover:border-brand-outline/65"
          >
            <summary className="flex cursor-pointer select-none list-none items-center gap-2.5 px-3 py-2.5 text-left transition-colors hover:bg-brand-surface-light/35 [&::-webkit-details-marker]:hidden">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-brand-primary/25 bg-brand-primary/10 text-brand-primary">
                <Icon size={16} strokeWidth={2.25} aria-hidden />
              </span>
              <span className="min-w-0 flex-1 text-[11px] font-bold uppercase leading-snug tracking-wide text-brand-on-surface sm:text-xs">
                {title}
              </span>
              <ChevronDown
                size={16}
                className="shrink-0 text-brand-on-surface-muted transition-transform duration-300 ease-out group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <div className="border-t border-brand-outline/30 px-3 pb-3 pt-0">
              <ul className="mt-2 space-y-1.5 border-l border-brand-primary/35 pl-3 text-[12px] leading-relaxed text-brand-on-surface-muted marker:text-transparent">
                {bullets.map((item, bIdx) => (
                  <li key={`${id}-b-${bIdx}`}>{item}</li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
