import Icon from '@/components/Icon';
import MobileNav from '@/components/MobileNav';
import ReelsSection from '@/components/ReelsSection';
import YouTubeVideosSection from '@/components/YouTubeVideosSection';

const links = [
  { href: '#home', label: 'Home' }, { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our work' }, { href: '#reels', label: 'Reels' },
  { href: '#youtube', label: 'Videos' }, { href: '#contact', label: 'Contact' },
];
const photos = {
  hero: '/images/hero-vehicle.png',
  front: '/images/workshop-custom-front.jpg',
  rear: '/images/workshop-custom-rear.jpg',
  side: '/images/workshop-custom-side.jpg',
  lights: '/images/workshop-illuminated-pickup.jpg',
};
const map = 'https://maps.app.goo.gl/pdUCYmWHgy4ooX67A';
const phone = 'tel:+919460424711';
const whatsapp = 'https://wa.me/919660769822';
const services = [
  { title: 'Pickup body work', hindi: 'पिकअप बॉडी', description: 'Body building and custom work for your pickup.', src: photos.front, alt: 'Custom pickup body at the Multani workshop' },
  { title: 'Commercial bodies', hindi: 'कमर्शियल बॉडी', description: 'Vehicle bodies made for the work you do.', src: photos.rear, alt: 'Decorated commercial pickup body viewed from the rear' },
  { title: 'Styling & details', hindi: 'सजावट और स्टाइल', description: 'Give your gaadi a look that feels like yours.', src: photos.lights, alt: 'White pickup with colourful lights and body details' },
];
const work = [
  { src: photos.front, title: 'Made to stand out', type: 'PICKUP BODY', alt: 'Colourfully decorated pickup outside the workshop' },
  { src: photos.lights, title: 'Ready for the road', type: 'LIGHTING & DETAILS', alt: 'Custom white pickup lit up at night' },
  { src: photos.rear, title: 'Built with character', type: 'BODY WORK', alt: 'Colourful custom pickup body viewed from behind' },
  { src: photos.side, title: 'Made with purpose', type: 'CUSTOM BUILD', alt: 'Decorated pickup with colourful bodywork in the workshop' },
];

function Brand() {
  return <a href="#home" className="brand" aria-label="Multani Motor Body Makers home"><span className="brand-mark" aria-hidden="true">M<span>.</span></span><span className="brand-wordmark"><strong>Multani</strong><small>Motor Body Makers <span>·</span> Kota</small></span></a>;
}
function Header() {
  return <><div className="location-bar"><div className="container location-inner"><span><span lang="hi">नमस्ते!</span> Welcome to Multani Motor Body Makers</span><a href={map} target="_blank" rel="noopener noreferrer"><Icon name="pin" /> Industrial Area, Kota</a></div></div><header className="site-header"><div className="container nav-inner"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><a className="header-cta" href={phone}><Icon name="phone" /> Call now</a><MobileNav /></div></header></>;
}
function Hero() {
  return <section id="home" className="hero"><div className="container hero-grid"><div className="hero-copy"><p className="hero-kicker"><span className="kicker-line" /> BODY MAKERS OF KOTA <span className="kicker-since">SINCE 1996</span></p><p className="hero-hindi" lang="hi">गाड़ी आपकी, काम हमारा।</p><h1>Made for your <span>gaadi.</span>{' '}<br />Built for your journey.</h1><p className="hero-description">Pickup and commercial vehicle body work, made with care in Kota. Tell us what you have in mind — let’s bring it to life.</p><div className="button-row"><a className="button button-primary" href={phone}><Icon name="phone" /> Call the workshop</a><a className="button button-light" href="#work">See our work <Icon name="arrow" /></a></div><div className="hero-note"><span className="hero-note-mark" aria-hidden="true">M</span><span>From our workshop in<br /><strong>Kota, Rajasthan</strong></span></div></div><div className="hero-image-wrap"><div className="hero-photo"><img src={photos.hero} alt="A decorated white pickup with colourful lights at sunset" fetchPriority="high" /><div className="hero-photo-caption"><span className="caption-tag">MADE IN KOTA</span><span>Built with pride.<br /><strong>Made for the road.</strong></span></div></div><div className="hero-image-label" aria-hidden="true"><span>BODY WORK</span><span>•</span><span>YOUR WAY</span></div></div></div></section>;
}
function Facts() {
  return <div className="facts"><div className="container facts-grid"><div className="fact"><span className="fact-icon"><Icon name="clock" /></span><span><strong>Since 1996</strong><small>Years of body-making experience</small></span></div><div className="fact"><span className="fact-icon"><Icon name="truck" /></span><span><strong>Made for your gaadi</strong><small>Pickup & commercial body work</small></span></div><a href={map} target="_blank" rel="noopener noreferrer" className="fact"><span className="fact-icon"><Icon name="pin" /></span><span><strong>Find us in Kota</strong><small>Industrial Area, Rajasthan</small></span><Icon name="arrow" className="fact-arrow" /></a></div></div>;
}
function Services() {
  return <section id="services" className="section container collection"><div className="section-heading"><div><p className="eyebrow"><span>01</span> WHAT WE DO</p><h2>Apni gaadi, <span>apna style.</span></h2><p>From a new body to the finishing details, talk to us about the work your vehicle needs.</p></div><a href="#contact" className="text-link">Talk to the workshop <Icon name="arrow" /></a></div><div className="category-grid">{services.map((item, index) => <a className="category-card" href="#contact" key={item.title}><div className="category-image"><img src={item.src} alt={item.alt} loading="lazy" /><span className="category-index">0{index + 1}</span></div><div className="category-body"><div><span className="card-hindi" lang="hi">{item.hindi}</span><h3>{item.title}</h3><p>{item.description}</p></div><span className="circle-arrow"><Icon name="arrow" /></span></div></a>)}</div></section>;
}
function Work() {
  return <section id="work" className="work-section section"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span>02</span> FROM THE WORKSHOP</p><h2>Kaam jo <span>bolta hai.</span></h2><p>Take a closer look at some of the vehicles and details from our workshop.</p></div><a href="https://www.instagram.com/multani_motor_body/" target="_blank" rel="noopener noreferrer" className="text-link">See more on Instagram <Icon name="arrow" /></a></div><div className="work-grid">{work.map((item, index) => <article className="work-card" key={item.title}><div className="work-image"><img src={item.src} alt={item.alt} loading="lazy" /><span className="work-number">0{index + 1}</span></div><div className="work-copy"><span className="micro">{item.type}</span><h3>{item.title}</h3></div></article>)}</div></div></section>;
}
function About() {
  return <section className="section about-section"><div className="container about-grid"><div className="about-image"><img src={photos.side} alt="A decorated pickup body inside the Multani workshop" loading="lazy" /><div className="about-image-label"><strong>Since 1996</strong><span>BODY WORK IN KOTA</span></div></div><div className="about-copy"><p className="eyebrow"><span>03</span> OUR WORKSHOP</p><h2>Made with care.<br /><span>Made in Kota.</span></h2><p>At Multani Motor Body Makers, we work on pickup and commercial vehicle bodies with the details that matter to you.</p><p>Have an idea for your gaadi? Call our team and let’s talk about it.</p><div className="button-row"><a href={phone} className="button button-primary"><Icon name="phone" /> Call the team</a><a href="#contact" className="text-link">Plan your visit <Icon name="arrow" /></a></div></div></div></section>;
}
function Contact() {
  return <section id="contact" className="section contact-section"><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow"><span>06</span> GET IN TOUCH</p><p className="contact-hindi" lang="hi">आइए, बात करते हैं।</p><h2>Let’s get your<br /><span>gaadi ready.</span></h2><p>Have a body build or modification in mind? Call or message our team before you visit.</p><div className="button-row"><a href={phone} className="button button-primary"><Icon name="phone" /> Call +91 94604 24711</a><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="button button-light"><Icon name="whatsapp" /> WhatsApp us</a></div></div><div className="contact-card"><div className="contact-card-top"><span className="micro">THE WORKSHOP</span><Icon name="pin" /></div><h3>Multani Motor<br />Body Makers<span>.</span></h3><p>Industrial Area<br />Kota, Rajasthan 324009</p><a href={map} target="_blank" rel="noopener noreferrer" className="contact-map">Get directions <Icon name="arrow" /></a><div className="contact-card-links"><a href={phone}>+91 94604 24711</a><a href="mailto:officialmultanibodykota@gmail.com">Send us an email</a></div></div></div></section>;
}
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div><Brand /><p>Pickup & commercial vehicle body work.<br />Proudly from Kota, Rajasthan.</p></div>
        <nav aria-label="Footer navigation">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
        <div className="footer-contact"><span className="micro">LET’S TALK</span><a href={phone}>+91 94604 24711</a><a href="https://www.instagram.com/multani_motor_body/" target="_blank" rel="noopener noreferrer">@multani_motor_body</a></div>
      </div>
      <div className="container">
        <div className="kotalabs-credit">
          <div className="kotalabs-mark" aria-hidden="true"><span>K</span><span>L</span></div>
          <div className="kotalabs-copy">
            <p className="kotalabs-eyebrow">Designed &amp; engineered by</p>
            <p className="kotalabs-line"><span className="kotalabs-name">Kota<span>Labs</span></span><span className="kotalabs-tagline">Next-gen 3D web, AR experiences &amp; digital flagships</span></p>
          </div>
          <a className="kotalabs-link" href="https://www.kotalabs.in/" target="_blank" rel="noopener noreferrer">Explore KotaLabs <Icon name="arrow" /></a>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Multani Motor Body Makers</span><span>Made with care in Kota, Rajasthan</span></div>
    </footer>
  );
}
function MobileActions() {
  return <div className="mobile-actions"><a href={phone}><Icon name="phone" /> Call now</a><a href={whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> WhatsApp</a></div>;
}
export default function HomePage() { return <><a href="#content" className="skip-link">Skip to content</a><Header /><main id="content"><Hero /><Facts /><Services /><Work /><About /><ReelsSection /><YouTubeVideosSection /><Contact /></main><Footer /><MobileActions /></>; }
