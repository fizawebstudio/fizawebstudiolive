import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '@/data';
import SectionHeading from './SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref, visible } = useScrollReveal();
  const displayed = [0, 1].map((offset) => testimonials[(active + offset) % testimonials.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const next = () => setActive((current) => (current + 1) % testimonials.length);
  const previous = () => setActive((current) => (current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-ink-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Kind words from <span className="text-accent-500">happy clients</span></>}
          description="Don't just take my word for it. Here's what clients say about working with me."
        />

        <div
          ref={ref}
          className={`relative mt-12 ${visible ? 'animate-fade-up' : 'opacity-0'}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid md:grid-cols-2 gap-5">
            {displayed.map((testimonial) => (
              <article key={testimonial.id} className="relative bg-white rounded-2xl p-6 lg:p-8 border border-ink-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Quote size={34} className="absolute top-6 right-6 text-accent-500/15" />
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} size={14} className="fill-warm-500 text-warm-500" />
                  ))}
                </div>
                <p className="relative text-sm lg:text-base text-ink-700 leading-relaxed mb-7">
                  “{testimonial.text}”
                </p>
                <div className="flex items-center gap-3">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-accent-500/20" />
                  <div>
                    <div className="font-display font-semibold text-sm text-ink-900">{testimonial.name}</div>
                    <div className="text-xs text-ink-400">{testimonial.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-7">
            <button
              onClick={previous}
              className="w-9 h-9 rounded-lg border border-ink-200 bg-white flex items-center justify-center text-ink-600 hover:text-accent-500 hover:border-accent-400 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === active ? 'w-6 bg-accent-500' : 'w-1.5 bg-ink-300'}`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 rounded-lg border border-ink-200 bg-white flex items-center justify-center text-ink-600 hover:text-accent-500 hover:border-accent-400 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
