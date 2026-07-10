import { Cpu, ShieldCheck, HeartHandshake, Sparkles, Leaf, Wind } from "lucide-react";
import { benefits } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = {
  tecnologia: Cpu,
  profesionales: ShieldCheck,
  personalizada: HeartHandshake,
  productos: Sparkles,
  naturales: Leaf,
  ambiente: Wind,
} as const;

export function Benefits() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 lg:px-16 lg:py-36">
        <SectionHeading
          kicker="Por qué elegirnos"
          title="El detalle que distingue una experiencia excepcional."
          light
          align="center"
          className="mx-auto"
        />

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = icons[b.id as keyof typeof icons];
            return (
              <Reveal key={b.id} delay={(i % 3) * 0.08}>
                <div className="border-t border-ivory/15 pt-7">
                  <Icon className="h-6 w-6 text-champagne" strokeWidth={1.25} />
                  <h3 className="mt-6 font-serif-display text-[19px] text-ivory">{b.title}</h3>
                  <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-ivory/60">
                    {b.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
