
const items = [
  'WordPress Development',
  'Shopify Development',
  'eCommerce Solutions',
  'Wix Development',
  'Custom Website Development',
  'Landing Page Development',
  'Website Redesign',
  'PSD to WordPress',
  'Website Maintenance',
  'SEO & Speed Optimization',
  'Website Migration',
  'Blogger Website Development',
  'SEO Content Writing',
  'Amazon KDP Services',
  'Digital Products',
];


export default function Marquee() {
  return (
    <div className="relative py-6 border-y border-ink-100 overflow-hidden bg-ink-50">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="font-display font-semibold text-xl lg:text-2xl text-ink-300 hover:text-accent-500 transition-colors duration-300 cursor-default">
              {item}
            </span>
            <span className="text-accent-500 text-xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
