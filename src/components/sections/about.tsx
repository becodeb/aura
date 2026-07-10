import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  {
    title: "Filosofía",
    text: "Creemos en un cuidado que respeta la identidad de cada persona, sin fórmulas estandarizadas.",
  },
  {
    title: "Método",
    text: "Diagnóstico, tecnología y seguimiento profesional en cada una de nuestras intervenciones.",
  },
  {
    title: "Misión",
    text: "Acompañar procesos de bienestar duraderos, no resultados de una sola visita.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="bg-ivory">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 py-28 md:px-10 lg:grid-cols-12 lg:gap-8 lg:px-16 lg:py-36">
        <div className="lg:col-span-5">
          <SectionHeading
            kicker="Sobre Nosotros"
            title="Una filosofía de cuidado, no una lista de servicios."
            description="Desde 2014 trabajamos junto a cada paciente para diseñar protocolos donde la tecnología y el criterio profesional conviven con calma y espacio para escuchar."
          />

          <dl className="mt-14 space-y-10">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.08}>
                <div className="border-t border-sand-deep/70 pt-6">
                  <dt className="font-serif-display text-[19px] text-ink">{p.title}</dt>
                  <dd className="mt-2 max-w-sm text-[14px] leading-relaxed text-charcoal">{p.text}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal delay={0.15} className="relative lg:col-span-7 lg:col-start-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[16/11]">
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1800&auto=format&fit=crop"
              alt="Interior del centro de estética Aura, espacio minimalista con luz natural"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 left-6 hidden max-w-[260px] bg-ivory p-7 shadow-[0_20px_60px_-20px_rgba(23,22,15,0.25)] md:block lg:-left-10">
            <p className="font-serif-display text-[15px] italic leading-relaxed text-ink">
              "Once años cuidando la piel y el tiempo de nuestros pacientes."
            </p>
            <span className="mt-3 block text-[11px] uppercase tracking-[0.24em] text-stone">
              Fundación 2014
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
