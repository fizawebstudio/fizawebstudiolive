import { ArrowRight, ArrowUpRight, Monitor, SearchCheck, ShoppingCart, LayoutTemplate } from 'lucide-react';

const highlights = [
  {
    title: 'Web Development',
    description: 'Business & eCommerce',
    Icon: Monitor,
    iconStyle: 'bg-orange-100 text-orange-500',
  },
  {
    title: 'SEO-Friendly',
    description: 'Speed Optimization',
    Icon: SearchCheck,
    iconStyle: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Responsive',
    description: 'Website Development',
    Icon: LayoutTemplate,
    iconStyle: 'bg-pink-100 text-pink-500',
  },
];

const chipBase =
  'absolute z-20 flex items-center gap-2 sm:gap-3 rounded-2xl bg-white px-[0.55rem] py-[0.5rem] sm:px-[0.65rem] sm:py-[0.7rem] shadow-xl shadow-ink-900/10 animate-float-card';

// Title text inside the boxes
const boxTitle =
  'font-semibold text-ink-900 text-[11px] sm:text-[13px] min-[1023px]:max-[1300px]:text-[12px] mb-[-1px] sm:mb-[3px]';

// Subtitle text inside the boxes
const subText =
  'text-ink-500 text-[11px] sm:text-[12px] min-[1023px]:max-[1300px]:text-[11px] leading-[1.2rem]';

export default function Hero({ id = 'home' }: { id?: string }) {
  return (
    <section id={id} className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-accent-300/10 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-medium"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>Available for projects</span>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-500 animate-fade-up animation-delay-100">
              Freelance Web Developer
            </p>
            <h1 className="w-[90%] lg:w-[calc(90%+3rem)] font-display font-bold text-[clamp(1.5rem,7vw,2.25rem)] lg:text-[clamp(2.25rem,3vw,2.75rem)] leading-[1.3] tracking-tight text-ink-900 animate-fade-up animation-delay-100">
              Websites That Help Your               <span className="text-accent-500">Business Grow </span>
            </h1>

            <p className="text-base text-ink-500 max-w-xl leading-relaxed animate-fade-up animation-delay-200">
              I’m Fiza Asif, a freelance web developer specializing in WordPress, Shopify and eCommerce development. I build modern, responsive and SEO-friendly websites that help businesses present their brand professionally and give customers a better online experience.
            </p>

            <div className="flex flex-wrap items-center gap-4 animate-fade-up animation-delay-300">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-500 text-white font-semibold text-sm hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Work
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-ink-200 text-ink-700 font-semibold text-sm hover:border-accent-500 hover:text-accent-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                Start a Project
                <ArrowRight size={18} />
              </a>
            </div>

            <p className="text-xs text-ink-500 animate-fade-up animation-delay-300">
              WordPress websites, Shopify stores, landing pages, redesigns and website optimization tailored to your goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-ink-100 animate-fade-up animation-delay-400">
              {highlights.map(({ title, description, Icon, iconStyle }, i) => (
                <div
                  key={title}
                  className="flex items-center gap-3 cursor-default hover:-translate-y-1 transition-transform duration-300"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconStyle}`}>
                    <Icon size={19} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <div className="font-display font-bold text-sm lg:text-base text-ink-900 hover:text-accent-500 transition-colors duration-300">
                      {title}
                    </div>
                    <div className="text-xs text-ink-500 mt-1 font-medium">
                      {description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-[34rem] mx-auto aspect-square">
              <img
                src="/image.webp"
                alt="Fiza Asif, freelance web developer"
                className="absolute inset-0 z-10 h-full w-full object-contain"
                width={1153}
                height={1148}
                loading="eager"
                decoding="async"
              />

              {/* WordPress – top left */}
              <div className={`${chipBase} top-[4%] left-0 lg:-left-[10%]`}>
                <img src="/logos/wordpress.svg" alt="WordPress logo" className="w-[30px] shrink-0" />
                <div className="text-[11px] sm:text-sm leading-snug">
                  <div className={boxTitle}>WordPress</div>
                  <div className={subText}>Websites &amp; Blogs</div>
                </div>
              </div>

              {/* Shopify – top right */}
              <div className={`${chipBase} top-[12%] right-[-21px] min-[1023px]:right-[-12%]`} style={{ animationDelay: '1s' }}>
                <img src="/logos/shopify.svg" alt="Shopify logo" className="w-[30px] shrink-0" />
                <div className="text-[11px] sm:text-sm leading-snug">
                  <div className={boxTitle}>Shopify</div>
                  <div className={subText}>Ecommerce Stores</div>
                </div>
              </div>

              {/* Wix – middle right */}
              <div className={`${chipBase} top-[40%] right-[-21px] min-[1023px]:right-[-28%] min-[1023px]:max-[1300px]:right-[-20%]`} style={{ animationDelay: '1.5s' }}>
                <img src="/logos/wix.svg" alt="Wix logo" className="w-[30px] shrink-0" />
                <div className="text-[11px] sm:text-sm leading-snug">
                  <div className={boxTitle}>Wix</div>
                  <div className={subText}>Custom Websites</div>
                </div>
              </div>

              {/* eCommerce – lower right */}
              <div className={`${chipBase} top-[66%] right-[-21px] min-[1023px]:right-[-22%]`} style={{ animationDelay: '2s' }}>
                <ShoppingCart size={30} strokeWidth={2} className="shrink-0 text-orange-500" aria-hidden="true" />
                <div className="text-[11px] sm:text-sm leading-snug">
                  <div className={boxTitle}>eCommerce</div>
                  <div className={subText}>Grow Your Sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}