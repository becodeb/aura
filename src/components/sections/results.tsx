import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { results, type Result } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const easeLux = [0.16, 1, 0.3, 1] as const;

export function Results() {
  const [active, setActive] = useState<Result | null>(null);

  return (
    <section id="resultados" className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 lg:px-16 lg:py-36">
        <SectionHeading
          kicker="Resultados"
          title="Antes y después. Sin filtros, sin promesas vacías."
          description="Una selección de resultados reales, obtenidos a través de protocolos personalizados y seguimiento profesional."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((r, i) => (
            <Reveal key={r.id} delay={(i % 4) * 0.08}>
              <button
                type="button"
                onClick={() => setActive(r)}
                className="group block w-full text-left"
                aria-label={`Ver antes y después: ${r.title}`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={r.after}
                    alt={`Resultado de ${r.title}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/50 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ivory">
                      Ver comparación
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-serif-display text-[16px] text-ink">{r.title}</h3>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-stone">{r.category}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog.Root open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <AnimatePresence>
          {active && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="fixed inset-0 z-[70] bg-ink/90 backdrop-blur-sm"
                />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount>
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: easeLux }}
                  className="fixed inset-0 z-[71] flex items-center justify-center p-6"
                >
                  <div className="w-full max-w-3xl">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <Dialog.Title className="font-serif-display text-[22px] text-ivory">
                          {active.title}
                        </Dialog.Title>
                        <Dialog.Description className="mt-1 text-[12px] uppercase tracking-[0.2em] text-ivory/60">
                          {active.category}
                        </Dialog.Description>
                      </div>
                      <Dialog.Close
                        className="flex h-10 w-10 items-center justify-center text-ivory/70 transition-colors hover:text-ivory"
                        aria-label="Cerrar"
                      >
                        <X className="h-5 w-5" />
                      </Dialog.Close>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="aspect-[4/5] w-full overflow-hidden">
                          <img src={active.before} alt={`${active.title} antes`} className="h-full w-full object-cover" />
                        </div>
                        <span className="mt-3 block text-center text-[11px] uppercase tracking-[0.2em] text-ivory/60">
                          Antes
                        </span>
                      </div>
                      <div>
                        <div className="aspect-[4/5] w-full overflow-hidden">
                          <img src={active.after} alt={`${active.title} después`} className="h-full w-full object-cover" />
                        </div>
                        <span className="mt-3 block text-center text-[11px] uppercase tracking-[0.2em] text-champagne">
                          Después
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
}
