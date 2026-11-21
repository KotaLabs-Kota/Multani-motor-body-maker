import reelsData from '@/content/reels.json';
import { Eyebrows } from '@/components/Eyebrows';

interface ReelVideo {
  id: string;
  title: string;
  caption?: string;
  channel?: string;
}

export default function ReelsSection() {
  const videos = (reelsData.videos ?? []) as ReelVideo[];

  return (
    <section id="reels" className="py-16 md:py-24 bg-gradient-to-b from-amber-50/60 via-white to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <Eyebrows>Instagram Reels</Eyebrows>
          <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Video Highlights — Instagram Reels
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Watch the shop come alive — customer pickups, styling work, delivery drives.
          </p>
        </div>
        {videos.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-slate-300 px-8 md:px-16 py-14 max-w-3xl">
            <p className="text-center font-black text-lg text-slate-600">
              Reels will appear here once the team adds them.
            </p>
            <p className="text-center mt-3 text-sm text-slate-500">
              They&apos;ll edit <code className="bg-slate-100 px-2 py-1 rounded">content/reels.json</code> — add your YouTube reels, titles and captions when they raise the PR.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 max-w-3xl">
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
                <div className="mt-3">
                  <p className="font-black text-slate-800">{v.title}</p>
                  {v.caption && <p className="mt-1 text-sm text-slate-600 max-w-3xl">{v.caption}</p>}
                  {v.channel && <p className="mt-1 text-xs text-slate-500 font-semibold uppercase tracking-widest">{v.channel}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
        <p className="mt-6 text-xs text-slate-500 font-semibold uppercase tracking-widest">
          Add reels: edit <code className="bg-slate-100 px-1.5 py-0.5 rounded">content/reels.json</code> + save the video files in <code className="bg-slate-100 px-1.5 py-0.5 rounded">public/reels/</code>.
        </p>
      </div>
    </section>
  );
}
