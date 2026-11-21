import YouTubeVideosSection from '@/components/YouTubeVideosSection';
import ReelsSection from '@/components/ReelsSection';
import { Eyebrows } from '@/components/Eyebrows';

/* ------------------------------------------------------------------ */
/* Data (facts from their social pages)                                */
/* ------------------------------------------------------------------ */

const brandName = 'Multani Motor Body Makers';
const tagline = "India's No.1 Commercial Vehicle Body Maker";
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
    <section id={id} className="py-16 md:py-24 border-b border-slate-100 last:border-0">
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
    <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#home" className="text-xl font-black tracking-tighter text-slate-900">
          Multani <span className="text-amber-600">Motor Body Makers</span>
        </a>
        <nav className="hidden md:flex gap-8">
          {headerLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-slate-600 hover:text-amber-600 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex bg-amber-500 text-slate-900 px-5 py-2.5 rounded-full text-sm font-black tracking-wide hover:shadow-lg hover:-translate-y-px transition-all">
          Call Us
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-[90vh] bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center py-20 md:py-28">
        <div>
          <Eyebrows>Established — 1996</Eyebrows>
          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.15]">
            We Turn Ordinary <span className="bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">Vehicles Into Custom Pickup Bodies.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 font-medium max-w-xl">{tagline}.</p>
          <p className="mt-4 text-sm text-slate-500 max-w-xl">
            We design and build pickup bodies, commercial vehicle bodies and all kinds of body-making, end to end — from Kota, since 1996.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="bg-amber-500 text-slate-900 px-7 py-3.5 rounded-full text-base font-black tracking-wide hover:shadow-xl hover:-translate-y-px transition-all">
              Explore Their Work
            </a>
            <a href="#youtube" className="text-slate-700 font-bold border-2 border-slate-200 rounded-full px-7 py-3.5 text-base hover:border-amber-500 hover:text-amber-600 transition-all">
              Watch Videos
            </a>
          </div>
          <div className="mt-8 flex gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">📍 {contact.address}</span>
            <a href={`tel:${contact.phone}`} className="text-amber-600 font-semibold hover:underline">{contact.phone}</a>
          </div>
        </div>

        <div className="relative lg:pl-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-900/10">
            <img
              src="/images/multani-motor-body-maker-kota-pickup-bod-2.jpg"
              alt="Fabricated pickup body by Multani Motor Body Makers"
              className="w-full h-[420px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white text-sm font-black uppercase tracking-widest">2026 Batch — Built in the Backend Class</p>
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
        <div className="mt-12 grid gap-6 md:grid-cols-5 max-w-3xl">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl border border-slate-200 p-8 text-center bg-slate-50/60 hover:border-amber-500/50 hover:shadow-2xl transition-all">
              <p className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">{s.value}</p>
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
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="group rounded-3xl border border-slate-200 hover:border-amber-500/50 p-8 hover:bg-amber-50/40 transition-all shadow-sm hover:shadow-2xl hover:-translate-y-1">
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
        <div className="max-w-4xl grid md:grid-cols-2 gap-12">
          <div>
            <Eyebrows>Contact</Eyebrows>
            <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Get in Touch With the Team
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Have a body to build or a pickup modification to discuss? Reach out — the workshop answers all direct calls.
            </p>
            <div className="mt-10 space-y-5">
              <a href={`tel:${contact.phone}`} className="flex items-center gap-4 text-2xl font-black text-slate-900 hover:text-amber-600 transition-colors">
                📞 {contact.phone}
              </a>
              <a href={`https://wa.me/919460424711?text=Hi`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-2xl font-black text-slate-900 hover:text-amber-600 transition-colors">
                💬 {contact.whatsapp} — WhatsApp
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-2xl font-black text-slate-900 hover:text-amber-600 transition-colors">
                ✉️ {contact.email}
              </a>
              <div className="flex items-center gap-4 text-2xl font-black text-slate-900">
                📍 {contact.address}
              </div>
              <a href={contact.mapLink} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-2xl font-black text-slate-900 hover:text-amber-600 transition-colors">
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
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {brandName} — Official website.
        </p>
        <nav className="flex gap-6 text-sm font-medium text-slate-600">
          {headerLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-amber-600 transition-colors">
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
    <div className="min-h-screen bg-white">
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
