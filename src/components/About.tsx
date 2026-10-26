import SectionHeading from './SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const skills = [
  { name: 'WordPress Development', level: 96 },
  { name: 'Shopify & Wix Development', level: 94 },
  { name: 'eCommerce Development', level: 92 },
  { name: 'Website Maintenance & Optimization', level: 96 },
];

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="relative bg-[#fcf9f1] py-20 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Image */}
          <div ref={ref} className={`lg:col-span-5 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="relative max-w-sm mx-auto">
              <div className="relative aspect-[4/5] rounded-3xl ">
                <img
                  src="/abouts.png"
                  alt="Fiza Asif working at her laptop"
                  className="w-full h-auto object-cover object-left"
                  width={1024}
                  height={1536}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-5">
            <SectionHeading
              eyebrow="About Fiza"
              center={false}
              titleClassName="leading-[1.35]"
              title={<>Transforming Business Ideas Into <span className="text-accent-500">Digital Experiences</span></>}
            />

            <div className="space-y-3 text-ink-500 leading-relaxed">
              <p>
                I’m Fiza Asif, a freelance web developer specializing in modern, responsive websites for businesses, professionals and online brands. My core expertise includes WordPress, Shopify, Wix and eCommerce development, along with website redesign, landing pages, SEO, website maintenance and performance optimization.
              </p>
              <p>
                I focus on building user-friendly websites with responsive layouts, clear content structure and search-friendly implementation. Whether you need a new business website, an online store, website updates or technical support, I provide practical solutions designed around your goals, audience and content.              </p>
            </div>

            {/* Skills */}
            <div className="pt-2 space-y-4">
              <h4 className="font-display font-semibold text-sm text-ink-700 uppercase tracking-wide">
                Core Services
              </h4>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} visible={visible} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({
  skill,
  index,
  visible,
}: {
  skill: { name: string; level: number };
  index: number;
  visible: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-ink-700">{skill.name}</span>
        <span className="text-xs font-semibold text-accent-500">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-ink-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-500 to-accent-300 transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100 + 300}ms`,
          }}
        />
      </div>
    </div>
  );
}
