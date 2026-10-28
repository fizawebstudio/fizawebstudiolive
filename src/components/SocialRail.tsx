import { siFacebook, siInstagram } from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';
import { Linkedin } from 'lucide-react';

const brandIcon = (icon: SimpleIcon) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d={icon.path} />
  </svg>
);

const socials = [
  {
    icon: <Linkedin size={20} aria-hidden="true" />,
    href: 'https://www.linkedin.com/in/fizawebstudio/',
    label: 'LinkedIn',
  },
  {
    icon: <span aria-hidden="true" className="font-display text-xl font-extrabold leading-none">F</span>,
    href: 'https://www.fiverr.com/fizawebstd/design-and-develop-a-professional-wordpress-website?ref_ctx_id=cde692bee7aa4dd0b27a0dfcf785f940&pckg_id=1&source=seller_page',
    label: 'Fiverr',
  },
  {
    icon: brandIcon(siInstagram),
    href: 'https://www.instagram.com/fizawebstudio/',
    label: 'Instagram',
  },
  {
    icon: brandIcon(siFacebook),
    href: 'https://www.facebook.com/fizawebstudio/',
    label: 'Facebook',
  },
];

export default function SocialRail() {
  return (
    <aside
      aria-label="Social media"
      className="fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
    >
      <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">
        Follow me on
      </span>
      <span aria-hidden="true" className="h-8 w-px bg-ink-200" />
      <div className="flex flex-col items-center gap-1 rounded-full bg-white/95 py-1 px-0.5  shadow-lg ring-1 ring-ink-100/80">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            title={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-600 transition-colors duration-200 hover:bg-accent-500 hover:text-white focus-visible:bg-accent-500 focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </aside>
  );
}
