import YouTubeVideosSection from '@/components/YouTubeVideosSection';
import ReelsSection from '@/components/ReelsSection';
import { Eyebrows } from '@/components/Eyebrows';
import MobileNav from '@/components/MobileNav';

/* ------------------------------------------------------------------ */
/* Data (facts from their social pages)                                */
/* ------------------------------------------------------------------ */

const brandName = 'Multani Motor Body Makers';
const YEARS = '1996 — Present';
const FOLLOWERS = '250K+';
const SUBSCRIBERS = '200K+';
const TOP_VIDEO_VIEWS = '1.1M+';

const headerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Their Work' },
  { href: '#youtube', label: 'YouTube' },
  { href: '#reels', label: 'Reels' },
  { href: '#contact', label: 'Contact' },
];

const services = [
  {
    title: 'Mahindra Bolero Pickup',
    blurb: 'Fully fitted Bolero Pickup bodies — mounting, engine, chassis — ready to hand over.',
  },
  {
    title: 'Mahindra Pickup Body',
    blurb: 'Custom Mahindra Pickup steel bodies, from stock shell to luxury variant.',
  },
  {
    title: 'Bolero Pickup Body Work',
    blurb: 'Lighting, GCC & ECU mods, styling and cabin modifications — fully documented in their YouTube build videos.',
  },
  {
    title: 'Pickup Bodies — All Types',
    blurb: 'Mini, mid and luxe pickup bodies — new builds and conversions, Bolero family focus.',
  },
  {
    title: 'Commercial Vehicle Bodies',
    blurb: 'Bus, truck, tipper, dumper & minivan bodies — every kind of commercial vehicle built in one place.',
  },
];

const gallery = [
  { src: '/images/multani-motor-body-maker-kota-pickup-bod-1.jpg', alt: 'Fabricated Mahindra Bolero Pickup body — Multani Motor Body Makers' },
  { src: '/images/multani-motor-body-maker-kota-pickup-bod-2.jpg', alt: 'Custom pickup body — Backend class fabrication shop' },
  { src: '/images/multani-motor-body-maker-kota-pickup-bod-3.jpg', alt: 'Finished Bolero Pickup body — pickup body work in Kota' },
  { src: '/images/multani-motor-body-maker-kota-pickup-bod-4.jpg', alt: 'Mahindra Pickup Body — body fabrication, Kota' },
  { src: '/images/multani-motor-body-maker-kota-pickup-bod-5.jpg', alt: 'Painted pickup body — ready for delivery' },
];

const contact = {
  phone: '+91 94604 24711',
  whatsapp: '+91 96607 69822',
  email: 'officialmultanibodykota@gmail.com',
  address: 'Backend class industrial area, Kota, Rajasthan, India (P.O. Industrial Area, PIN 324009)',
  mapLink: 'https://www.maps.app.goo.gl/pdUCYmWHgy4ooX67A',
  youtube: 'https://www.youtube.com/@Multanimotorbodymakers',
  instagram: 'https://www.instagram.com/multani_motor_body/',
  facebook: 'https://www.facebook.com/100093682046235',
};

/* ------------------------------------------------------------------ */
/* Reusable UI                                                         */
/* ------------------------------------------------------------------ */

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`site-section section-${id}`}>
      {children}
    </section>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 text-lg font-semibold text-slate-700 hover:border-amber-500 hover:text-amber-600 transition-all"
    >
      {label} →
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function Header() {
  return (
    <header className="site-header sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#home" className="text-xl font-black tracking-tighter text-slate-900">
          Multani <span className="text-amber-600">Motor Body Makers</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {headerLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-slate-600 hover:text-amber-600 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="header-cta">
          Call Us ↗
        </a>
        <MobileNav />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="hero-eyebrow">BUILT IN KOTA, RAJASTHAN <span> / </span> EST. 1996</p>
          <h1 className="hero-title">
            Built for work.<br /><span>Made to stand out.</span>
          </h1>
          <p className="hero-tagline">Custom vehicle bodies, built with pride.</p>
          <p className="hero-description">
            We design and build pickup bodies, commercial vehicle bodies and all kinds of body-making, end to end — from Kota, since 1996.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="hero-button hero-button-primary">
              Explore Our Work ↗
            </a>
            <a href="#youtube" className="hero-button hero-button-secondary">
              Watch Videos ↗
            </a>
          </div>
          <div className="hero-location">
            <span className="flex items-center gap-2">📍 {contact.address}</span>
            <a href={`tel:${contact.phone}`} className="hero-phone">{contact.phone}</a>
          </div>
        </div>

        <div className="relative lg:pl-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-900/10">
            <img
              src="/images/multani-motor-body-maker-kota-pickup-bod-2.jpg"
              alt="Fabricated pickup body by Multani Motor Body Makers"
              className="hero-image" fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white text-sm font-black uppercase tracking-widest">Made in Kota. Built for the road.</p>
            </div>
            <a href={contact.mapLink} target="_blank" rel="noreferrer" className="absolute top-3 right-3 bg-white/90 text-slate-900 text-xs font-black px-4 py-2 rounded-full hover:scale-105 transition-all">
              📍 Visit Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { label: 'Years in Business', value: YEARS, note: 'Registered since 1996' },
    { label: 'Follower Community', value: FOLLOWERS, note: 'Instagram' },
    { label: 'Subscriber Community', value: SUBSCRIBERS, note: 'YouTube' },
    { label: 'Top Video Views', value: TOP_VIDEO_VIEWS, note: 'YouTube' },
    { label: 'Service Areas', value: 'Every kind of commercial vehicle', note: 'From our workshop' },
  ];
  return (
    <Section id="stats">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <Eyebrows>Achievements &amp; Reach</Eyebrows>
          <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Numbers Worth Knowing — Not marketing, real stats.
          </h2>
          <p className="mt-4 text-slate-600">
            For 3+ decades the team has been the go-to pickup body studio. The numbers behind our growing community.
          </p>
        </div>
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <p className="stat-value">{s.value}</p>
              <h3 className="mt-3 text-lg font-black text-slate-800 tracking-tight">{s.label}</h3>
              {s.note && <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-500">{s.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <Eyebrows>Products &amp; Services</Eyebrows>
          <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Built to Love, Built to Serve
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Products &amp; Services. From pickups to heavy commercial vehicles — whatever your body, we build it.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div key={s.title} className="service-card group">
              <h3 className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-amber-700">{s.title}</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">{s.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Gallery() {
  return (
    <Section id="work">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <Eyebrows>Their Work</Eyebrows>
          <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Heavy Duty, Fully Fitted — These Are the Bodies
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Bodies built over years, some already on the road — built by Multani Motor Body Makers.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {gallery.map((g) => (
            <div key={g.src} className="group overflow-hidden rounded-2xl border border-slate-200 shadow-md hover:-translate-y-2 transition-all">
              <img src={g.src} alt={g.alt} className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500" />
              <div className="p-4 bg-white">
                <p className="text-sm font-bold text-slate-700">{g.alt.replace(' — Multani Motor Body Makers', '')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <Eyebrows>Contact</Eyebrows>
            <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Get in Touch With the Team
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Have a body to build or a pickup modification to discuss? Reach out — the workshop answers all direct calls.
            </p>
            <div className="mt-10 space-y-5">
              <a href={`tel:${contact.phone}`} className="contact-link">
                📞 {contact.phone}
              </a>
              <a href={`https://wa.me/919660769822?text=Hi`} target="_blank" rel="noreferrer" className="contact-link">
                💬 {contact.whatsapp} — WhatsApp
              </a>
              <a href={`mailto:${contact.email}`} className="contact-link">
                ✉️ {contact.email}
              </a>
              <div className="contact-link">
                📍 {contact.address}
              </div>
              <a href={contact.mapLink} target="_blank" rel="noreferrer" className="contact-link">
                🗺️ Open the workshop on the map
              </a>
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-black text-slate-900">Follow the Works</h3>
            <div className="grid gap-3">
              <SocialLink href={contact.youtube} label="YouTube — 200K+ Subscribers" />
              <SocialLink href={contact.instagram} label="Instagram — 250K+ Followers" />
              <SocialLink href={contact.facebook} label="Facebook — Official Page" />
            </div>
            <p className="text-xs text-slate-400">Backers &amp; aggregators: IndiaMART — every call/WhatsApp reaches their team directly.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between items-center gap-6">
        <p className="footer-copyright">
          © {new Date().getFullYear()} {brandName} — Official website.
        </p>
        <nav className="footer-nav" aria-label="Footer navigation">
          {headerLinks.map((l) => (
            <a key={l.href} href={l.href} className="footer-link">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen site-shell">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Gallery />
      <YouTubeVideosSection />
      <ReelsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
