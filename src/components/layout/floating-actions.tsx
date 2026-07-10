import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { useScrolled } from "@/hooks/use-scrolled";

export function FloatingActions() {
  const visible = useScrolled(320);

  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <a
        href="#reserva"
        aria-label="Reservar turno"
        className="hidden items-center gap-2 bg-ink px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ivory shadow-lg transition-colors hover:bg-champagne hover:text-ink md:flex"
      >
        <CalendarCheck className="h-4 w-4" />
        Reservar Turno
      </a>
      <a
        href="https://wa.me/5491100000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#1f2a1e] text-ivory shadow-lg transition-transform duration-300 hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </motion.div>
  );
}
