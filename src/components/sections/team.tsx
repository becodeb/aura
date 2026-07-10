import { team } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Team() {
  return (
    <section id="equipo" className="bg-ivory-dim">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 lg:px-16 lg:py-36">
        <SectionHeading
          kicker="Equipo"
          title="Profesionales que eligen la precisión sobre la promesa."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.1}>
              <div className="group">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-sand-deep/70 pt-4">
                  <h3 className="font-serif-display text-[19px] text-ink">{m.name}</h3>
                  <span className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-champagne">
                    {m.role}
                  </span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-charcoal">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
