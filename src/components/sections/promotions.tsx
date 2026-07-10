import { promotions } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function Promotions() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 lg:px-16 lg:py-36">
        <SectionHeading kicker="Promociones" title="Rituales pensados para acompañarte." light />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {promotions.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <div className="group flex h-full flex-col justify-between border border-ivory/15 p-9 transition-colors duration-500 hover:border-champagne/60">
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-champagne">
                    {p.tag}
                  </span>
                  <h3 className="mt-5 font-serif-display text-[24px] leading-tight text-ivory">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-ivory/65">{p.description}</p>
                </div>
                <Button
                  variant="ghost"
                  className="mt-10 self-start text-ivory hover:text-champagne"
                  asChild
                >
                  <a href="#reserva">Reservar</a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
