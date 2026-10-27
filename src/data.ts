export const services = [
  {
    id: 1,
    icon: 'Code2',
    title: 'Web Development',
    description: 'Build modern, responsive websites for businesses and professionals with clean layouts, user-friendly navigation and reliable functionality tailored to your specific goals.',
    features: ['Custom Website Development','User-Friendly Navigation', 'Responsive Improvements', 'Content Restructuring', 'Modern Web Technologies'],
    price: 'Starting at custom quote',
    image: 'services/Web-Development.webp',
  },
  {
    id: 2,
    icon: 'PanelsTopLeft',
    title: 'WordPress Development',
    description: 'Professional WordPress websites for businesses, corporate companies and personal brands, built with responsive layouts, clear structure and easy content management.',
    features: ['Business & Corporate Websites','Blog Setup', 'Responsive WordPress Design', 'Elementor, Divi & Avada', 'SEO & Performance Optimization'],
    price: 'Starting at custom quote',
    image: 'services/wordpress.jpg',
  },
  {
    id: 3,
    icon: 'RefreshCw',
    title: 'Website Redesign',
    description: 'Transform outdated websites into modern, professional digital experiences with improved layouts, refreshed visuals and responsive designs that make your business stand out.',
    features: ['Modern UI & Layout Improvements', 'Responsive Improvements', 'Content Restructuring', 'SEO-Friendly Structure','Improved User Experience'],
    price: 'Starting at custom quote',
    image: '/services/redesign.jpg',
  },
  {
    id: 4,
    icon: 'LayoutTemplate',
    title: 'Landing Page Development',
    description: 'High-converting landing pages designed to showcase your offer, highlight key benefits and encourage visitors to take action through clear content and strategic layouts.',
    features: ['Business Landing Pages', 'Lead Generation', 'Conversion-Focused Layout', 'Mobile Responsive Design'],
    price: 'Starting at custom quote',
    image: '/services/landing.jpg',
  },
   {
    id: 5,
    icon: 'Code2',
    title: 'Custom Website Development',
    description: 'Develop tailored websites for businesses and professionals with modern designs, responsive layouts and functional features that support your goals and online presence.',
    features: ['Custom Website Solutions', 'Responsive Website Development', 'Business Website Design', 'Custom Feature Implementation'],
    price: 'Starting at custom quote',
    image: '/services/marketing-agency-western-sydney.jpg',
  },
  {
    id: 6,
    icon: 'ShoppingBag',
    title: 'Shopify Development',
    description: 'Professional Shopify stores with responsive storefronts, organized product layouts and a smooth shopping experience for growing online businesses worldwide.',
    features: ['Shopify Store Setup', 'Product & Collection Pages', 'Theme Customization', 'Mobile-Friendly Store Design'],
    price: 'Starting at custom quote',
    image: '/services/shopify.jpg',
  },
  {
    id: 7,
    icon: 'Store',
    title: 'eCommerce Development',
    description: 'Scalable WooCommerce stores with organized product layouts, easy navigation and a seamless shopping experience for online customers.',
    features: ['WooCommerce Development', 'Product & Category Setup', 'Product Variations Setup' ,'Shopping Cart & Checkout', 'Responsive Store Design'],
    price: 'Starting at custom quote',
    image: '/services/eCommerce-Development.jpg',
  },
  {
    id: 8,
    icon: 'Monitor',
    title: 'Wix Development',
    description: 'Build professional Wix websites for small businesses, professionals and personal brands with flexible layouts, engaging visuals and easy-to-manage content.',
    features: ['Wix Business Websites', 'Custom Wix Page Design', 'Responsive Website Layouts', 'Wix Content & Section Updates'],
    price: 'Starting at custom quote',
    image: '/services/wix.jpg',
  },
  {
    id: 9,
    icon: 'FileCode',
    title: 'PSD to WordPress',
    description: 'Convert PSD designs into responsive, functional web pages while maintaining the original design direction, visual consistency and layout details.',
    features: ['PSD to WordPress Conversion', 'Pixel-Accurate Design', 'Responsive Page Development', 'Design & Typography Matching','Cross-Browser Compatibility'],
    price: 'Starting at custom quote',
    image: '/services/design-in-photoshop.png',
  },
  {
    id: 10,
    icon: 'Wrench',
    title: 'Website Maintenance & Bug Fixes',
    description: 'Keep your website running smoothly with regular updates, troubleshooting and technical fixes to resolve common issues and maintain reliable website functionality.',
    features: ['WordPress Updates & Maintenance', 'Plugin & Theme Conflict Fixes', 'Layout Errors & Bug Fixes', 'Website Backup & Recovery Support', 'Website Functionality Testing'],
    price: 'Starting at custom quote',
    image: '/services/critical-error.png',
  },
  {
    id: 11,
    icon: 'Search',
    title: 'Website SEO & Speed Optimization',
    description: 'Improve your website’s technical and on-page seo structure, metadata, image optimization, internal linking and speed-focused enhancements for a smoother browsing experience.',
    features: ['Website Speed Optimization','On-Page SEO Improvements', 'Technical SEO Setup', 'Image & Asset Optimization', 'Mobile Performance Improvements'],
    price: 'Starting at custom quote',
    image: '/services/seo.jpg',
  },
  {
    id: 12,
    icon: 'ArrowRightLeft',
    title: 'Website Migration',
    description: 'Move your website to a new hosting provider, domain or platform with careful file and database transfers, configuration checks and functionality testing procedures.',
    features: ['Website & Hosting Migration', 'WordPress Site Transfers', 'Domain & URL Configuration', 'Post-Migration Testing', 'Website Backup Transfer'],
    price: 'Starting at custom quote',
    image: '/services/migrate.png',
  },
  {
    id: 14,
    icon: 'BookOpen',
    title: 'Blogger Website Development',
    description: 'Design and customize Blogger websites with attractive templates, structured blog layouts and easy navigation to publish content and engage readers effectively.',
    features: ['Blogger theme Customization', 'Mobile-Friendly Templates','Post & Category Setup', 'Navigation & Content Setup'],
    price: 'Starting at custom quote',
    image: '/services/blog.jpg',
  },
  {
    id: 15,
    icon: 'PencilLine',
    title: 'SEO Content Writing',
    description: 'Professional, SEO-optimized content with relevant keywords, clear structure and engaging copy to improve readability, strengthen search visibility and connect with your target audience.',
    features: ['SEO Blog Article Writing', 'Keyword Research & Placement','Website Content Optimization', 'Meta Titles & Descriptions'],
    price: 'Starting at custom quote',
    image: '/services/content.jpg',
  },
  {
    id: 16,
    icon: 'FileDown',
    title: 'Digital Products',
    description: 'Create and set up digital product experiences that make it easy to showcase, sell and deliver downloadable resources through a professional online storefront.',
    features: ['eBook & Digital Download Stores', 'Social Media Templates & Digital Planners', 'Digital Product Page Setup', 'Online Payment & Delivery Setup'],
    price: 'Starting at custom quote',
    image: '/services/ebook.jpg',
  },
  
];

export type ProjectCategory =
  | 'Web Development'
  | 'WordPress'
  | 'Website Redesign'
  | 'Custom Website'
  | 'E-Commerce'
  | 'Shopify'
  | 'Wix'
  | 'Landing Page';

export interface Project {
  id: number;
  title: string;
  categories: ProjectCategory[]; // 2-3 categories
  tags: string[];                // tech / skills
  year: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Fydexa Digital',
    categories: ['Web Development', 'WordPress'],
    tags: ['Business Website', 'Digital Marketing', 'Marketing Agency', 'SEO Services'],
    year: '2025',
    image: '/projects/1-1.png',
    description: 'A professional digital marketing agency website designed to showcase services, strengthen brand credibility, and provide a seamless experience for potential clients.',
  },
  {
    id: 2,
    title: 'Healing With Aymen',
    categories: ['Web Development', 'WordPress'],
    tags: ['Healthcare Website', 'Psychology', 'Therapy','Mental Health' , 'Health & Wellness'],
    year: '2025',
    image: '/projects/2.png',
    description: 'Professional counseling website designed with a calm, user-friendly layout to present therapy services, build trust, and help visitors easily find relevant support and contact information.',
  },
  {
    id: 3,
    title: 'GymFitness',
    categories: ['Web Development', 'WordPress'],
    tags: ['Gym & Fitness Website', 'Business Website', 'Fitness Training', 'Membership Website'],
    year: '2024',
    image: '/projects/3.png',
    description: 'A modern gym website showcasing fitness programs, workout facilities, and membership services through an engaging layout that encourages visitors to take the next step in their fitness journey.',
  },
  {
    id: 4,
    title: 'AuraSkin Co.',
    categories: ['Web Development', 'Shopify'],
    tags: ['Shopify Store', 'Skincare Website', 'eCommerce Website', 'Beauty & Skincare'],
    year: '2024',
    image: '/projects/4.png',
    description: 'Modern Shopify skincare store featuring elegant product displays, a calming sage-green and beige palette, and a responsive shopping experience. Access the website using the provided password-protected link.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Client Name',
    role: 'Business Owner',
    avatar: '/placeholder.jpg',
    rating: 5,
    text: 'Client testimonials are currently being collected and will be added here to showcase real project experiences and feedback.',
  },
  {
    id: 2,
    name: 'Client Name',
    role: 'Founder',
    avatar: '/placeholder.jpg',
    rating: 5,
    text: 'Client testimonials are currently being collected and will be added here to showcase real project experiences and feedback.',
  },
  {
    id: 3,
    name: 'Client Name',
    role: 'Marketing Lead',
    avatar: '/placeholder.jpg',
    rating: 5,
    text: 'Client testimonials are currently being collected and will be added here to showcase real project experiences and feedback.',
  },
  {
    id: 4,
    name: 'Client Name',
    role: 'Business Owner',
    avatar: '/placeholder.jpg',
    rating: 5,
    text: 'Client testimonials are currently being collected and will be added here to showcase real project experiences and feedback.',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'What type of websites do you build?',
    answer: 'I build WordPress business and corporate websites, Shopify stores, WooCommerce eCommerce websites, landing pages, portfolio websites and custom WordPress solutions.',
  },
  {
    id: 2,
    question: 'Can you redesign or improve my existing website?',
    answer: 'Yes! I can redesign your existing website to improve its layout, appearance, responsiveness, navigation and overall functionality while keeping your business goals in focus.',
  },
  {
    id: 3,
    question: 'Do you work with Shopify, Wix and WooCommerce?',
    answer: 'Yes, I work with Shopify, Wix and WooCommerce to build and customize online stores and business websites, including product pages, store layouts and essential eCommerce features.',
  },
  {
    id: 4,
    question: 'Can you optimize my website for SEO?',
    answer: 'Yes. I can improve SEO foundations such as page titles, meta descriptions, headings, URLs, internal links, image optimization and technical website structure. Search rankings also depend on competition, content quality, authority, indexing and ongoing SEO work.',
  },
  {
    id: 5,
    question: 'Will my website work on mobile devices?',
    answer: 'Yes, I build responsive websites that adapt to desktops, tablets and smartphones, providing a consistent browsing experience across different screen sizes.',
  },
  {
    id: 6,
    question: 'Do you offer website maintenance and speed optimization?',
    answer: 'Yes, I provide website maintenance, bug fixing, plugin and theme updates, layout corrections, performance optimization and troubleshooting to help keep your website running smoothly.',
  },
  {
    id: 7,
    question: 'Can you convert PSD or Figma designs into WordPress websites?',
    answer: 'Yes, I can convert PSD or Figma designs into responsive WordPress pages, focusing on accurate layouts, consistent styling, mobile compatibility and functional implementation.',
  },
];

export const stats = [
  { value: 'Web Development', label: 'Business & eCommerce' },
  { value: 'SEO-Friendly', label: 'Speed Optimization' },
    { value: 'Responsive', label: 'Website Development' },

];

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your business, audience, goals, required pages, features and content before development begins.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Define a clear page structure, content flow, functionality, and development plan based on your project requirements.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Build responsive pages and features with the right WordPress, Shopify, and eCommerce tools.',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Test devices, review performance, fix issues, make final improvements, and prepare for launch.',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
