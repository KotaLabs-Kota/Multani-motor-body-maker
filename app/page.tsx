import MobileNav from '@/components/MobileNav';
import ReelsSection from '@/components/ReelsSection';
import YouTubeVideosSection from '@/components/YouTubeVideosSection';

const links = [
  { href: '#home', label: 'Home' }, { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our work' }, { href: '#reels', label: 'Reels' },
  { href: '#youtube', label: 'Videos' }, { href: '#contact', label: 'Contact' },
];
const services = [
  { title: 'Pickup body builds', description: 'Custom pickup bodies made to handle the work and look good doing it.', tag: '01 / PICKUP BODIES' },
  { title: 'Bolero body work', description: 'From the body to the finishing touches, built around your Bolero pickup.', tag: '02 / BOLERO SPECIALISTS' },
  { title: 'Styling & finishing', description: 'Lighting, cabin detailing and personal touches that make a build your own.', tag: '03 / CUSTOM DETAILS' },
  { title: 'Commercial vehicles', description: 'Body-making work for trucks, tippers, buses and other commercial vehicles.', tag: '04 / COMMERCIAL BODIES' },
];
const gallery = [
  { src: '/images/multani-motor-body-maker-kota-pickup-bod-1.jpg', alt: 'Colourful custom pickup body outside the workshop', label: 'Built to stand out', category: 'PICKUP BODY' },
  { src: '/images/multani-motor-body-maker-kota-pickup-bod-2.jpg', alt: 'White pickup with a custom high-sided cargo body', label: 'Made for the road', category: 'CUSTOM FABRICATION' },
  { src: '/images/multani-motor-body-maker-kota-pickup-bod-3.jpg', alt: 'Finished commercial pickup body', label: 'Every detail counts', category: 'BODY WORK' },
  { src: '/images/multani-motor-body-maker-kota-pickup-bod-4.jpg', alt: 'Custom pickup from the workshop', label: 'Crafted in Kota', category: 'PICKUP BUILD' },
  { src: '/images/multani-motor-body-maker-kota-pickup-bod-5.jpg', alt: 'White enclosed pickup body inside the workshop', label: 'Ready for work', category: 'COMMERCIAL BODY' },
];
const address = 'Backend class industrial area, Kota, Rajasthan, India (P.O. Industrial Area, PIN 324009)';
const map = 'https://maps.app.goo.gl/pdUCYmWHgy4ooX67A';

function Brand() {
  return <a href="#home" className="brand" aria-label="Multani Motor Body Makers home"><span className="brand-mark">M<span>.</span></span><span className="brand-name">MULTANI<small>MOTOR BODY MAKERS</small></span></a>;
}
function Header() {
  return <><div className="topbar"><div className="container topbar-inner"><span><i /> BUILT IN KOTA, RAJASTHAN</span><a href="tel:+919460424711">LET’S TALK &nbsp; +91 94604 24711 ↗</a></div></div><header className="site-header"><div className="container nav-inner"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><a className="nav-cta" href="#contact">LET’S BUILD <span>↗</span></a><MobileNav /></div></header></>;
}
function Hero() {
  return <section id="home" className="hero"><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow light"><span /> BUILT IN KOTA, RAJASTHAN</p><h1>MADE TO<br /><em>MOVE.</em><br />BUILT TO LAST<span className="accent">.</span></h1><p className="hero-lead">From hardworking pickups to custom commercial bodies — built with pride, made for the road ahead.</p><div className="hero-actions"><a className="button button-orange" href="#work">EXPLORE OUR WORK <span>↗</span></a><a className="hero-text-link" href="#services">WHAT WE DO <span>→</span></a></div><div className="hero-signature"><span>EST. 1996</span><i /><span>CRAFTED WITH PURPOSE</span></div></div><div className="hero-media"><img src="/images/multani-motor-body-maker-kota-pickup-bod-2.jpg" alt="A custom pickup body built by Multani Motor Body Makers" fetchPriority="high" /><div className="hero-image-overlay" /><div className="image-label"><span>THE WORK SPEAKS</span><span>01 / 05</span></div><div className="image-caption"><span className="caption-arrow">↗</span><div><small>MADE IN KOTA</small><strong>Built for the long haul.</strong></div></div></div></div><div className="container hero-bottom"><span>SCROLL TO EXPLORE ↓</span><span>MULTANI MOTOR BODY MAKERS / KOTA</span></div></section>;
}
function Intro() {
  return <section className="intro section-space"><div className="container"><div className="intro-top"><p className="eyebrow"><span /> BUILT ON EXPERIENCE</p><span className="section-number">01 / WHO WE ARE</span></div><div className="intro-grid"><h2>GOOD WORK.<br /><em>REAL PEOPLE.</em></h2><div className="intro-copy"><p className="intro-lead">Every vehicle has a job to do. We make sure it looks the part, too.</p><p>Since 1996, our team in Kota has been building pickup and commercial vehicle bodies — one detail at a time.</p><a href="#contact" className="underlined-link">GET TO KNOW US <span>↗</span></a></div></div><div className="stats"><div><strong>1996<span>–</span></strong><p>THE YEAR IT STARTED</p></div><div><strong>250K<span>+</span></strong><p>INSTAGRAM COMMUNITY</p></div><div><strong>200K<span>+</span></strong><p>YOUTUBE SUBSCRIBERS</p></div><div><strong>1.1M<span>+</span></strong><p>TOP VIDEO VIEWS</p></div></div></div></section>;
}
function Services() {
  return <section id="services" className="services-section section-space"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span /> WHAT WE DO</p><h2>BUILT AROUND<br /><em>YOUR WORK.</em></h2></div><div className="section-intro"><p>From everyday utility to custom craftsmanship, we build bodies with purpose.</p><span>02 / OUR SERVICES</span></div></div><div className="service-grid">{services.map(service => <article className="service-card" key={service.tag}><div className="service-card-top"><span>{service.tag}</span><span>↗</span></div><div><h3>{service.title}</h3><p>{service.description}</p></div></article>)}</div><div className="service-footer"><span>HAVE SOMETHING IN MIND?</span><a href="#contact">LET’S TALK ABOUT YOUR BUILD ↗</a></div></div></section>;
}
function Work() {
  return <section id="work" className="work-section section-space"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span /> FROM THE WORKSHOP</p><h2>THE PROOF IS<br /><em>IN THE WORK.</em></h2></div><div className="section-intro"><p>Built by hand. Made to move. Take a closer look at the work that rolls out of our workshop.</p><span>03 / SELECTED BUILDS</span></div></div><div className="gallery">{gallery.map((item, index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={item.src}><img src={item.src} alt={item.alt} loading="lazy" /><figcaption><div><span>{item.category}</span><strong>{item.label}</strong></div><span>0{index + 1} ↗</span></figcaption></figure>)}</div><div className="gallery-footer"><span>REAL BUILDS. REAL ROADS.</span><a href="https://www.instagram.com/multani_motor_body/" target="_blank" rel="noreferrer" className="underlined-link">MORE ON INSTAGRAM ↗</a></div></div></section>;
}
function Contact() {
  return <section id="contact" className="contact-section section-space"><div className="container"><div className="intro-top"><p className="eyebrow light"><span /> LET’S GET TO WORK</p><span className="section-number">06 / CONTACT US</span></div><div className="contact-grid"><div><h2>GOT A BUILD<br />IN <em>MIND?</em></h2><p className="contact-lead">Tell us what you need. Let’s build something great together.</p><div className="contact-buttons"><a className="button button-orange" href="tel:+919460424711">CALL THE WORKSHOP <span>↗</span></a><a className="button button-outline" href="https://wa.me/919660769822" target="_blank" rel="noreferrer">WHATSAPP US <span>↗</span></a></div></div><div className="contact-details"><div><span>CALL US</span><a href="tel:+919460424711">+91 94604 24711 ↗</a></div><div><span>WHATSAPP</span><a href="https://wa.me/919660769822" target="_blank" rel="noreferrer">+91 96607 69822 ↗</a></div><div><span>EMAIL US</span><a href="mailto:officialmultanibodykota@gmail.com">officialmultanibodykota@gmail.com ↗</a></div><div><span>FIND THE WORKSHOP</span><p>{address}</p><a className="map-link" href={map} target="_blank" rel="noreferrer">GET DIRECTIONS ↗</a></div></div></div></div></section>;
}
function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-main"><div><Brand /><p>Made with pride in Kota, Rajasthan.<br />Built for the road ahead.</p></div><div className="footer-links"><div><span>EXPLORE</span>{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</div><div><span>FOLLOW ALONG</span><a href="https://www.instagram.com/multani_motor_body/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.youtube.com/@Multanimotorbodymakers" target="_blank" rel="noreferrer">YouTube ↗</a><a href="https://www.facebook.com/100093682046235" target="_blank" rel="noreferrer">Facebook ↗</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} MULTANI MOTOR BODY MAKERS</span><span>CRAFTED IN KOTA, INDIA <span className="accent">✳</span></span></div></div></footer>;
}
export default function HomePage() { return <><Header /><main><Hero /><Intro /><Services /><Work /><ReelsSection /><YouTubeVideosSection /><Contact /></main><Footer /></>; }
