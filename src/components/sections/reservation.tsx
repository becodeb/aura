import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, MapPin, Clock, Check } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import { treatments } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { FieldWrapper, Input, Select, Textarea } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+54 9 11 0000-0000",
    href: "https://wa.me/5491100000000",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@aura.estetica",
    href: "https://instagram.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Av. Alvear 1745, Recoleta, CABA",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun a Vie 10–20h · Sáb 10–15h",
    href: undefined,
  },
];

export function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="reserva" className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 lg:px-16 lg:py-36">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading
              kicker="Reserva tu Turno"
              title="Tu próximo momento de cuidado, a un mensaje de distancia."
              description="Completá el formulario y nuestro equipo te contactará en menos de 24 horas para confirmar tu turno."
            />

            <ul className="mt-14 space-y-7">
              {contactItems.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-champagne" strokeWidth={1.5} />
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.2em] text-stone">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-[15px] text-ink transition-colors hover:text-champagne"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="mt-1 block text-[15px] text-ink">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <div className="relative min-h-[520px]">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex h-full min-h-[420px] flex-col items-center justify-center border border-sand-deep/70 px-8 py-20 text-center"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-champagne/20">
                        <Check className="h-6 w-6 text-champagne" />
                      </span>
                      <h3 className="mt-7 font-serif-display text-[24px] text-ink">
                        Solicitud recibida
                      </h3>
                      <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-charcoal">
                        Gracias por confiar en Aura. Te contactaremos a la brevedad para confirmar tu turno.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      onSubmit={handleSubmit}
                      className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2"
                    >
                      <FieldWrapper label="Nombre completo" htmlFor="name">
                        <Input id="name" name="name" type="text" required autoComplete="name" />
                      </FieldWrapper>

                      <FieldWrapper label="Teléfono" htmlFor="phone">
                        <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
                      </FieldWrapper>

                      <div className="relative sm:col-span-2">
                        <Select id="treatment" name="treatment" required defaultValue="">
                          <option value="" disabled>
                            Seleccioná un tratamiento
                          </option>
                          {treatments.map((t) => (
                            <option key={t.id} value={t.name}>
                              {t.name}
                            </option>
                          ))}
                        </Select>
                      </div>

                      <FieldWrapper label="Fecha" htmlFor="date">
                        <Input id="date" name="date" type="date" required />
                      </FieldWrapper>

                      <FieldWrapper label="Hora" htmlFor="time">
                        <Input id="time" name="time" type="time" required />
                      </FieldWrapper>

                      <FieldWrapper label="Mensaje (opcional)" htmlFor="message" className="sm:col-span-2">
                        <Textarea id="message" name="message" rows={3} />
                      </FieldWrapper>

                      <div className="mt-8 sm:col-span-2">
                        <Button type="submit" className="w-full sm:w-auto">
                          Confirmar Solicitud
                        </Button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
