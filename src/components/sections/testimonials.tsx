import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 lg:px-16 lg:py-36">
        <SectionHeading kicker="Testimonios" title="La palabra de quienes ya confiaron en nosotros." />

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1}>
              <figure className="flex h-full flex-col">
                <Quote className="h-8 w-8 text-champagne" strokeWidth={1} />
                <blockquote className="mt-6 flex-1 font-serif-display text-[22px] font-normal leading-[1.35] text-ink">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 border-t border-sand-deep/70 pt-5">
                  <StarRating rating={t.rating} className="mb-3" />
                  <span className="block text-[14px] font-medium text-ink">{t.name}</span>
                  <span className="block text-[12px] text-stone">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
