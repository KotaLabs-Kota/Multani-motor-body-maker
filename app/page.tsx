import MobileNav from '@/components/MobileNav';
import ReelsSection from '@/components/ReelsSection';
import YouTubeVideosSection from '@/components/YouTubeVideosSection';

const links = [
  { href: '#home', label: 'Home' }, { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our work' }, { href: '#reels', label: 'Reels' },
  { href: '#youtube', label: 'Videos' }, { href: '#contact', label: 'Contact' },
];
const photos = {
  instagramNight: '/images/instagram-night-build.jpg',
  customFront: '/images/workshop-custom-front.jpg',
  customRear: '/images/workshop-custom-rear.jpg',
  customSide: '/images/workshop-custom-side.jpg',
  illuminatedPickup: '/images/workshop-illuminated-pickup.jpg',
};
const map = 'https://maps.app.goo.gl/pdUCYmWHgy4ooX67A';
const services = [
  { title: 'Pickup bodies', description: 'Built for the way you work.', src: photos.customFront, alt: 'Colourfully customised pickup at the Multani workshop' },
  { title: 'Commercial bodies', description: 'Made for the road ahead.', src: photos.customRear, alt: 'Decorated commercial pickup body viewed from the rear' },
  { title: 'Body work & styling', description: 'The details that make it yours.', src: photos.illuminatedPickup, alt: 'Modified pickup with colourful lighting and body details' },
];
const work = [
  { src: photos.customFront, title: 'Made to stand out', type: 'PICKUP BODY', description: 'Custom fabrication', alt: 'Colourfully decorated pickup outside the workshop' },
  { src: photos.illuminatedPickup, title: 'Ready for the road', type: 'PICKUP BODY', description: 'Lighting and detail', alt: 'Custom white pickup lit up at night' },
  { src: photos.customRear, title: 'Built with character', type: 'BODY WORK', description: 'Decorated cargo body', alt: 'Colourful custom pickup body viewed from behind' },
  { src: photos.customSide, title: 'Made with purpose', type: 'CUSTOM BUILD', description: 'Commercial pickup body', alt: 'Decorated pickup with colourful bodywork in the workshop' },
];

function Brand() {
  return <a href="#home" className="brand" aria-label="Multani Motor Body Makers home"><span className="brand-icon" aria-hidden="true">M</span><span><strong>Multani<span>.</span></strong><small>Motor body makers · Kota</small></span></a>;
}
function Header() {
  return <><div className="location-bar"><a href={map} target="_blank" rel="noreferrer"><span>⌖</span> Industrial Area, Kota <i /> <span>Get directions ↗</span></a></div><header className="site-header"><div className="container nav-inner"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><a className="header-cta" href="tel:+919460424711">Call the workshop ↗</a><MobileNav /></div></header></>;
}
function Hero() {
  return <section id="home" className="hero"><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow">Kota’s body-building workshop</p><h1>Built to work.<br /><em>Made for your road.</em></h1><p>Pickup and commercial vehicle bodies, made with care in Kota. Let’s build something that works as hard as you do.</p><div className="button-row"><a className="button button-primary" href="#work">Explore our work <span>→</span></a><a className="button button-outline" href="#contact">Visit the workshop <span>↗</span></a></div></div><figure className="hero-visual"><img src={photos.instagramNight} alt="Multani’s colourfully lit modified pickup on the road at night" fetchPriority="high" /><figcaption><span>01</span> Made in Kota</figcaption><i aria-hidden="true" /></figure></div></section>;
}
function Facts() {
  return <div className="facts"><div className="container facts-grid"><a href="#contact" className="fact"><span className="fact-icon">✳</span><span><strong>Since 1996</strong><small>Crafted with experience</small></span></a><a href="#services" className="fact"><span className="fact-icon">⌁</span><span><strong>Custom body work</strong><small>Built around your needs</small></span></a><a href={map} target="_blank" rel="noreferrer" className="fact"><span className="fact-icon">⌖</span><span><strong>Visit us in Kota</strong><small>Industrial Area, Rajasthan</small></span></a></div></div>;
}
function Services() {
  return <section id="services" className="section container collection"><div className="section-heading"><div><p className="eyebrow">What we do</p><h2>Built around <em>your work.</em></h2></div><a href="#contact" className="text-link">Talk to the workshop ↗</a></div><div className="category-grid">{services.map((item, index) => <a className="category-card" href="#contact" key={item.title}><div className="category-image"><img src={item.src} alt={item.alt} loading="lazy" /><span className="category-index">0{index + 1}</span></div><div className="category-body"><div><h3>{item.title}</h3><p>{item.description}</p></div><span className="circle-arrow">↗</span></div></a>)}</div></section>;
}
function Work() {
  return <section id="work" className="work-section section"><div className="container"><div className="section-heading"><div><p className="eyebrow">From the workshop</p><h2>A closer look <em>at our work.</em></h2><p>Real builds, thoughtful details and bodies made to be put to work.</p></div><a href="https://www.instagram.com/multani_motor_body/" target="_blank" rel="noreferrer" className="text-link">More on Instagram ↗</a></div><div className="work-grid">{work.map(item => <article className="work-card" key={item.title}><div className="work-image"><img src={item.src} alt={item.alt} loading="lazy" /></div><div className="work-copy"><span className="micro">{item.type}</span><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div><p className="fine-print">A selection of work from the Multani Motor Body Makers workshop.</p></div></section>;
}
function About() {
  return <section className="section about-section"><div className="container about-grid"><div className="about-image"><img src={photos.customSide} alt="A decorated pickup body inside the Multani workshop" loading="lazy" /><span>Made with care, in Kota</span></div><div className="about-copy"><p className="eyebrow">The people behind the work</p><h2>Good work starts <em>with good hands.</em></h2><p>Since 1996, the team at Multani Motor Body Makers has been working on pickup and commercial vehicle bodies in Kota. From the first conversation to the finishing touches, every build starts with your needs.</p><div className="button-row"><a href="tel:+919460424711" className="button button-primary">Call the team ↗</a><a href="#contact" className="text-link">Plan your visit ↗</a></div></div></div></section>;
}
function Contact() {
  return <section id="contact" className="section contact-section"><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow">Come say hello</p><h2>Let’s build something <em>together.</em></h2><p>Have a vehicle body to build or a modification in mind? Get in touch with our workshop in Kota.</p><address>⌖ &nbsp; Backend class industrial area, Kota, Rajasthan<br />&nbsp;&nbsp;&nbsp;&nbsp; P.O. Industrial Area, PIN 324009</address><p className="contact-note">Call us to discuss your build before visiting.</p><div className="button-row"><a href={map} target="_blank" rel="noreferrer" className="button button-primary">Get directions ↗</a><a href="tel:+919460424711" className="button button-outline">+91 94604 24711</a></div></div><div className="contact-card"><div className="contact-card-label">THE WORKSHOP / KOTA</div><div className="contact-card-main"><span className="contact-pin">⌖</span><div><h3>Multani Motor<br />Body Makers<span>.</span></h3><p>Industrial Area · Kota, Rajasthan</p></div></div><div className="contact-card-links"><a href="https://wa.me/919660769822" target="_blank" rel="noreferrer">WhatsApp the team ↗</a><a href="mailto:officialmultanibodykota@gmail.com">Send an email ↗</a></div></div></div></section>;
}
function Footer() {
  return <footer className="footer"><div className="container footer-main"><div><Brand /><p>Custom vehicle bodies, made with care in Kota.</p></div><nav aria-label="Footer navigation">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><div className="footer-contact"><a href="tel:+919460424711">+91 94604 24711</a><a href="https://www.instagram.com/multani_motor_body/" target="_blank" rel="noreferrer">@multani_motor_body ↗</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Multani Motor Body Makers</span><span>Made in Kota, Rajasthan</span></div></footer>;
}
export default function HomePage() { return <><a href="#content" className="skip-link">Skip to content</a><Header /><main id="content"><Hero /><Facts /><Services /><Work /><About /><ReelsSection /><YouTubeVideosSection /><Contact /></main><Footer /></>; }
