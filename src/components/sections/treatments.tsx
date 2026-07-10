import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { treatments } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const easeLux = [0.16, 1, 0.3, 1] as const;

export function Treatments() {
  return (
    <section id="tratamientos" className="bg-ivory-dim">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 lg:px-16 lg:py-36">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            kicker="Tratamientos"
            title="Protocolos diseñados con precisión clínica."
            description="Cada tratamiento combina tecnología certificada con un enfoque personalizado para tu piel y tus objetivos."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 0.08} y={20}>
              <motion.article
                whileHover="hover"
                className="group flex h-full flex-col"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <motion.img
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 0.7, ease: easeLux }}
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute bottom-4 left-4 bg-ivory/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
                    {t.duration}
                  </span>
                </div>

                <div className="mt-6 flex flex-1 flex-col">
                  <h3 className="font-serif-display text-[20px] leading-tight text-ink">{t.name}</h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-charcoal">{t.description}</p>

                  <a
                    href="#reserva"
                    className="group/link mt-6 inline-flex items-center gap-2 self-start text-[11px] font-medium uppercase tracking-[0.2em] text-ink"
                  >
                    <span className="relative">
                      Consultar
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-champagne transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:w-full" />
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
