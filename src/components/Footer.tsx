import { ArrowUp, Linkedin } from 'lucide-react';
import { siInstagram, siPinterest, siTiktok, siX, siYoutube } from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';
import { navLinks } from '@/data';

const brandIcon = (icon: SimpleIcon) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d={icon.path} />
  </svg>
);

const socials = [
  { icon: <Linkedin size={16} aria-hidden="true" />, href: 'https://www.linkedin.com/in/fizawebstudio/', label: 'LinkedIn' },
  { icon: <span aria-hidden="true" className="font-display text-base font-extrabold leading-none">F</span>, href: 'https://www.fiverr.com/fizawebstd/design-and-develop-a-professional-wordpress-website?ref_ctx_id=cde692bee7aa4dd0b27a0dfcf785f940&pckg_id=1&source=seller_page', label: 'Fiverr' },
  { icon: brandIcon(siInstagram), href: 'https://www.instagram.com/fizawebstudio/', label: 'Instagram' },
  { icon: brandIcon(siPinterest), href: 'https://www.pinterest.com/fizawebstudio/', label: 'Pinterest' },
  { icon: brandIcon(siX), href: 'https://x.com/FizaWebStudio', label: 'X' },
  { icon: brandIcon(siTiktok), href: 'https://www.tiktok.com/@fizawebstudio', label: 'TikTok' },
  { icon: brandIcon(siYoutube), href: 'https://www.youtube.com/@FizaWebStudio', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top CTA banner */}
        <div className="relative rounded-2xl overflow-hidden bg-ink-900 p-8 lg:p-12 mb-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-transparent" />
          <div className="relative">
            <h3 className="font-display font-bold text-2xl lg:text-4xl text-white mb-3 leading-tight">
              Ready to start your <span className="text-accent-500">next web project?</span>
            </h3>
            <p className="text-ink-300 max-w-2xl mx-auto mb-6 text-sm">
              Whether you need a business website, eCommerce store, landing page or website redesign, let’s discuss your goals and find the right solution for your project.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent-500 text-white font-semibold text-sm hover:bg-accent-600 transition-colors duration-300"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Main footer */}
        <div className="grid md:grid-cols-12 gap-8 pb-10 border-b border-ink-100">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <a href="#home" className="flex items-center gap-2.5 group w-fit">
              <img
                src="/logo.png.webp"
                alt="Fiza Web Studio"
                className="w-40 h-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </a>
            <p className="text-sm text-ink-500 leading-relaxed max-w-sm">
              Freelance web developer helping businesses and online brands build professional websites, eCommerce stores and landing pages, with expertise in WordPress, Shopify, Wix, website redesign, SEO and website optimization.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-ink-100 flex items-center justify-center text-ink-500 hover:text-accent-500 hover:border-accent-500 transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-sm text-ink-900 mb-3 uppercase tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-ink-500 hover:text-accent-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-display font-semibold text-sm text-ink-900 mb-3 uppercase tracking-wide">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm text-ink-500">
              <li>fizawebstudio@gmail.com</li>
              <li>+92 312 7195206</li>
              <li>Pakistan, Lahore - Remote</li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Available for projects
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-xs text-ink-500">
            © 2026 Fiza Web Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
             <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-9 h-9 rounded-lg border border-ink-100 flex items-center justify-center text-ink-500 hover:text-accent-500 hover:border-accent-500 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
