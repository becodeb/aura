import { MessageCircle, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import { Reveal } from "@/components/ui/reveal";

export function Footer() {
  return (
    <footer className="border-t border-sand-deep/70 bg-ivory-dim">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 lg:px-16">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <Reveal className="lg:col-span-1">
            <span className="font-serif-display text-[26px] text-ink">Aura</span>
            <p className="mt-4 max-w-[220px] text-[14px] leading-relaxed text-charcoal">
              Centro de estética de alta gama. Cuidado con criterio, resultados con carácter.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h3 className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-stone">
              Ubicación
            </h3>
            <div className="flex items-start gap-3 text-[14px] leading-relaxed text-charcoal">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
              <span>
                Av. Alvear 1745, Recoleta
                <br />
                Buenos Aires, Argentina
              </span>
            </div>
            <div className="mt-6 h-32 w-full overflow-hidden border border-sand-deep/70 grayscale transition-[filter] duration-500 hover:grayscale-0">
              <iframe
                title="Ubicación Aura Centro de Estética"
                src="https://www.google.com/maps?q=Av.+Alvear+1745+Buenos+Aires&output=embed"
                loading="lazy"
                className="h-full w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-stone">
              Horarios
            </h3>
            <ul className="space-y-2 text-[14px] text-charcoal">
              <li className="flex justify-between gap-6">
                <span>Lun — Vie</span>
                <span>10:00 — 20:00</span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Sábado</span>
                <span>10:00 — 15:00</span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Domingo</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.18}>
            <h3 className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-stone">
              Contacto
            </h3>
            <div className="flex flex-col gap-3 text-[14px] text-charcoal">
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 transition-colors hover:text-ink"
              >
                <MessageCircle className="h-4 w-4 text-champagne" />
                +54 9 11 0000-0000
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 transition-colors hover:text-ink"
              >
                <InstagramIcon className="h-4 w-4 text-champagne" />
                @aura.estetica
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-sand-deep/70 pt-8 text-[12px] text-stone md:flex-row">
          <span>© {new Date().getFullYear()} Aura Centro de Estética. Todos los derechos reservados.</span>
          <span className="tracking-[0.1em]">Diseño &amp; Desarrollo Web</span>
        </div>
      </div>
    </footer>
  );
}
