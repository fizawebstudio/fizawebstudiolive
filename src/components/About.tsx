import SectionHeading from './SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const skills = [
  { name: 'Figma', level: 95 },
  { name: 'Webflow', level: 88 },
  { name: 'Adobe Suite', level: 92 },
  { name: 'Prototyping', level: 90 },
  { name: 'Motion Design', level: 85 },
  { name: 'Brand Strategy', level: 87 },
];

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Image */}
          <div ref={ref} className={`lg:col-span-5 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="relative max-w-sm mx-auto">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-ink-100">
                <img
                  src="https://images.pexels.com/photos/7172783/pexels-photo-7172783.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                  alt="Fiza — Creative Director"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-5">
            <SectionHeading
              eyebrow="About Me"
              center={false}
              title={<>Transforming Business Ideas into <span className="text-accent-500">Digital Experiences</span></>}
            />

            <div className="space-y-3 text-ink-500 leading-relaxed">
              <p>
                Hi, I'm <span className="font-semibold text-ink-900">Fiza</span> — a web designer and developer with 6 years of experience building websites that look good and work hard. I focus on clean layouts, fast load times, and designs that turn visitors into customers.
              </p>
              <p>
                I work with small businesses, startups, and individuals who want a website that actually does its job — not just something pretty to look at. Every project is built from scratch, tailored to what your business needs.
              </p>
              <p>
                When I'm not coding or designing, you'll find me sketching new ideas, testing out new tools, or hunting for the perfect cup of coffee.
              </p>
            </div>

            {/* Skills */}
            <div className="pt-2 space-y-4">
              <h4 className="font-display font-semibold text-sm text-ink-700 uppercase tracking-wide">
                Skills & Tools
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
