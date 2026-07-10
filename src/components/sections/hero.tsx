import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const easeLux = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.65]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 z-0 scale-110">
        <img
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2400&auto=format&fit=crop"
          alt="Sala de tratamiento del centro de estética Aura, iluminación cálida y natural"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-0 bg-ink"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-0 bg-gradient-to-t from-ink via-ink/10 to-transparent"
        aria-hidden="true"
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40 md:px-10 md:pb-28 lg:px-16"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeLux, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-ivory/70"
        >
          <span className="h-px w-8 bg-champagne" />
          Centro de Estética
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: easeLux, delay: 0.3 }}
          className="font-serif-display max-w-3xl text-balance text-[clamp(2.5rem,6vw,4.75rem)] font-normal leading-[1.04] tracking-[-0.01em] text-ivory"
        >
          La belleza comienza con el cuidado.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeLux, delay: 0.5 }}
          className="mt-7 max-w-md text-[16px] leading-relaxed text-ivory/75"
        >
          Tratamientos personalizados para potenciar tu bienestar y tu confianza.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeLux, delay: 0.65 }}
          className="mt-11 flex flex-wrap items-center gap-5"
        >
          <Button variant="champagne" asChild>
            <a href="#reserva">Reservar Turno</a>
          </Button>
          <Button variant="secondary" className="border-ivory/30 text-ivory hover:border-ivory" asChild>
            <a href="#tratamientos">Ver Tratamientos</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ivory/60 md:right-10 md:flex lg:right-16"
      >
        Descubrir
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.span>
      </motion.div>
    </section>
  );
}
