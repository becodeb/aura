import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker && (
        <Reveal>
          <span
            className={cn(
              "mb-5 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em]",
              light ? "text-ivory/60" : "text-stone",
              align === "center" && "justify-center"
            )}
          >
            <span className="h-px w-8 bg-champagne" />
            {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-serif-display text-balance text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.01em]",
            light ? "text-ivory" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-6 text-[15px] leading-relaxed",
              light ? "text-ivory/70" : "text-charcoal"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
