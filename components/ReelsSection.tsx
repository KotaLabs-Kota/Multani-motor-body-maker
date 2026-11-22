import reelsData from '@/content/reels.json';

type Reel = { src: string; title: string; number: number };

export default function ReelsSection() {
  const reels = [...(reelsData.videos as Reel[])].sort((a, b) => a.number - b.number);
  return (
    <section id="reels" className="reels-section section-space">
      <div className="container">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> THE WORKSHOP, IN MOTION</p><h2>THE LITTLE DETAILS.<br /><em>THE BIG PICTURE.</em></h2></div>
          <div className="section-intro"><p>Come a little closer. These are the moments, details and builds from our workshop.</p><span>04 / WORKSHOP REELS</span></div>
        </div>
        {reels.length > 0 ? <div className="reel-rail" role="region" aria-label="Workshop reels, scroll horizontally for more" tabIndex={0}>
          {reels.map(reel => <article className="reel-card" key={reel.src}>
            <div className="reel-frame"><video controls playsInline preload="metadata" aria-label={reel.title}><source src={reel.src} type="video/mp4" />Your browser does not support video. <a href={reel.src}>Download the video</a>.</video></div>
            <div className="reel-caption"><span>REEL / {String(reel.number).padStart(2, '0')}</span><h3>{reel.title}</h3></div>
          </article>)}
        </div> : <p className="empty-reels">More workshop reels are coming soon.</p>}
        <div className="rail-note"><span>SWIPE OR SCROLL TO EXPLORE →</span><a href="https://www.instagram.com/multani_motor_body/" target="_blank" rel="noreferrer">FOLLOW ON INSTAGRAM ↗</a></div>
      </div>
    </section>
  );
}
