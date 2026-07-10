import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/use-scrolled";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Sobre Nosotros", href: "#nosotros" },
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Equipo", href: "#equipo" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#reserva" },
];

export function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        solid
          ? "bg-ivory/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(23,22,15,0.06)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10 lg:px-16">
        <a
          href="#top"
          className={cn(
            "font-serif-display text-[22px] tracking-[0.02em] transition-colors duration-500",
            solid ? "text-ink" : "text-ivory"
          )}
        >
          Aura
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "group relative text-[12px] font-medium uppercase tracking-[0.18em] transition-colors duration-500",
                  solid ? "text-ink/80 hover:text-ink" : "text-ivory/85 hover:text-ivory"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-champagne transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button
            variant="secondary"
            size="sm"
            className={cn(!solid && "border-ivory/40 text-ivory hover:border-ivory")}
            asChild
          >
            <a href="#reserva">Reservar Turno</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-10 w-10 items-center justify-center transition-colors duration-500 lg:hidden",
            solid ? "text-ink" : "text-ivory"
          )}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-ivory lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-8">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-sand-deep/60 py-4 text-[15px] tracking-[0.05em] text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-6">
                <Button variant="primary" className="w-full" asChild>
                  <a href="#reserva" onClick={() => setOpen(false)}>
                    Reservar Turno
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
