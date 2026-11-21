import { Eyebrows } from '@/components/Eyebrows';

const videos = [
  {
    id: 'vKyyUFQ_U0c',
    title: 'मुलतानी मोटर बॉडी के चाहने वालों का डांस — Bolero Pickup Lover 🔥 — 1.1M+ views',
  },
  {
    id: 'lW-VyJ1Y--8',
    title: 'Bolero Pickup — You won’t have seen a pickup like this on all of YouTube 🔥',
  },
  {
    id: '0uj0yefFBWs',
    title: "India's Most Spectacular Pickup Body — Built Here",
  },
  {
    id: '7Zp_37xlIgA',
    title: "India's Most Famous Pickup Body & Cabin Decoration — Multani Motor Body Makers",
  },
  {
    id: '0JH5Figr-J8',
    title: 'N.1 Pickup Body — Rajasthan — Famous — Multani Body Maker',
  },
];

export default function YouTubeVideosSection() {
  return (
    <section id="youtube" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <Eyebrows>YouTube — From the Workshop</Eyebrows>
          <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Their Best Work on YouTube
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Popular pickup builds &amp; modifier showcases — live from the backend class shop.
          </p>
        </div>
        <div className="mt-12 grid gap-6 max-w-3xl">
          {videos.map((v) => (
            <div key={v.id} className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group-hover:border-amber-500/50 transition-all">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  className="w-full aspect-video bg-slate-900"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <a
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-amber-600 transition-colors"
              >
                {v.title} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
