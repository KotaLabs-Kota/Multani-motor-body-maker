import reelsData from '@/content/reels.json';
import { Eyebrows } from '@/components/Eyebrows';

interface ReelVideo {
  id: string;
  title: string;
  caption?: string;
  channel?: string;
  number?: number;
}

const INSTAGRAM_HANDLE = 'https://www.instagram.com/multani_motor_body/';

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function ReelsSection() {
  const videos = ((reelsData.videos ?? []) as ReelVideo[]).slice().sort((a, b) => (a.number ?? 0) - (b.number ?? 0));
  const total = videos.length;

  return (
    <section
      id="reels"
      className="py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/40 to-white border-t border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <Eyebrows>THE REELS</Eyebrows>
          <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Inside the Workshop — Pickup Builds &amp; Working Days
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Video highlights from the shop — from pickup body work to finished builds. Everything at the backend class in Kota.
          </p>
          {total > 0 && (
            <p className="mt-4 text-sm font-black uppercase tracking-widest text-amber-700">
              {pad(total)} clips — Switch reels with swipes &amp; arrows — Choose a reel
            </p>
          )}
        </div>

        {total === 0 ? (
          <ReelPlaceholder />
        ) : (
          <>
            <div className="video-rail" role="region" aria-label="Workshop reels, scroll horizontally to see more" tabIndex={0}>
              {videos.map((v, i) => (
                <ReelCard key={v.id} video={v} number={v.number ?? i + 1} total={total} />
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500 font-semibold uppercase tracking-widest">
              Sound is off by default. Turn it on using the video controls.
            </p>
          </>
        )}

        <p className="mt-4 text-xs text-slate-500 font-semibold uppercase tracking-widest">
          Add reels: edit <code className="bg-slate-100 px-1.5 py-0.5 rounded">content/reels.json</code>. Fields: id, title, caption, channel, number (1..4).
        </p>
        <p className="mt-2 text-xs text-slate-500">
          For more reels, visit us on Instagram —{' '}
          <a href={INSTAGRAM_HANDLE} target="_blank" rel="noreferrer" className="text-amber-600 underline">
            @multani_motor_body
          </a>
        </p>
      </div>
    </section>
  );
}

function ReelCard({ video, number, total }: { video: ReelVideo; number: number; total: number }) {
  const embedUrl = `https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${encodeURIComponent(video.id)}&rel=0&controls=1`;
  return (
    <article className="video-card group">
      <div className="relative aspect-video bg-slate-900">
        <iframe
          src={embedUrl}
          title={video.title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full h-full"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur-md px-4 py-1.5 text-sm font-black text-slate-900 uppercase tracking-widest shadow">
          Reel {pad(number)} / {pad(total)}
        </span>
      </div>
      <div className="p-5">
        <p className="font-black text-slate-800">{video.title}</p>
        {video.caption && <p className="mt-2 text-sm text-slate-600 max-w-prose">{video.caption}</p>}
        {video.channel && <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-slate-500">{video.channel}</p>}
        <a className="video-watch-link" href={`https://www.youtube.com/watch?v=${encodeURIComponent(video.id)}`} target="_blank" rel="noreferrer">Watch on YouTube ↗</a>
      </div>
    </article>
  );
}

function ReelPlaceholder() {
  return (
    <div className="rounded-3xl border-2 border-dashed border-slate-300 px-8 md:px-16 py-14 max-w-3xl">
      <p className="text-center font-black text-lg text-slate-600">Reels will appear here once the team adds them.</p>
      <p className="text-center mt-3 text-sm text-slate-500">
        They&apos;ll edit <code className="bg-slate-100 px-2 py-1 rounded">content/reels.json</code> — add YouTube reels (id, title, caption, channel, number 1–4) when they raise the PR.
      </p>
    </div>
  );
}
