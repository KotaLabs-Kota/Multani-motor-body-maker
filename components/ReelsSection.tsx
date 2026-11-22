'use client';

import { useEffect, useRef, useState } from 'react';
import reelsData from '@/content/reels.json';

type Reel = { src: string; title: string; number: number };
const reels = [...(reelsData.videos as Reel[])].sort((a, b) => a.number - b.number);

export default function ReelsSection() {
  const [selected, setSelected] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userChoseReel = useRef(false);
  const reel = reels[selected];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !reels.length || !('IntersectionObserver' in window)) return;

    let autoplayAttempted = false;
    const observer = new IntersectionObserver(([entry]) => {
      const video = videoRef.current;
      if (!entry.isIntersecting) {
        video?.pause();
        return;
      }
      if (autoplayAttempted) return;
      autoplayAttempted = true;

      // Autoplay is normally permitted only without sound. Do not override a
      // reel the visitor has already chosen, or retry if the browser blocks it.
      if (!userChoseReel.current && video) {
        video.muted = true;
        void video.play().catch(() => {});
      }
    }, { threshold: 0.1 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function chooseReel(index: number) {
    userChoseReel.current = true;
    setSelected(index);
  }

  return (
    <section id="reels" className="section reels-section" ref={sectionRef}>
      <div className="container reels-grid">
        <div className="reels-copy">
          <p className="eyebrow">The workshop reels</p>
          <h2>Inside <em>Multani.</em></h2>
          <p>Come closer to the builds, details and everyday moments from our workshop in Kota.</p>
          <div className="reel-list-header"><span className="micro">Choose a reel</span><span className="micro">{String(reels.length).padStart(2, '0')} clips</span></div>
          {reels.length ? (
            <div className="reel-picks" role="group" aria-label="Choose a workshop reel">
              {reels.map((item, index) => (
                <button key={item.src} className="reel-pick" type="button" aria-pressed={index === selected} aria-controls="reel-player" onClick={() => chooseReel(index)}>
                  <span className="reel-thumb" aria-hidden="true">▹</span>
                  <span><small>Reel {String(index + 1).padStart(2, '0')}</small><strong>{item.title}</strong></span>
                  <span className="reel-pick-arrow" aria-hidden="true">▶</span>
                </button>
              ))}
            </div>
          ) : <p>New workshop clips are coming soon.</p>}
          <p className="reel-help">The first reel may play muted when you arrive. Use the player controls to play or adjust the sound.</p>
          <div className="reels-social"><span>More from the workshop on Instagram.</span><a href="https://www.instagram.com/multani_motor_body/" target="_blank" rel="noreferrer" className="text-link">@multani_motor_body ↗</a></div>
        </div>
        <div className="reel-stage-wrap">
          <div className="reel-stage" id="reel-player">
            {reel && <video key={reel.src} ref={videoRef} controls playsInline preload="metadata" aria-label={reel.title}><source src={reel.src} type="video/mp4" />Your browser can’t play this clip. <a href={reel.src}>Download the video</a>.</video>}
          </div>
          {reel && <div className="reel-nav" aria-label="Reel navigation"><button type="button" aria-label="Previous reel" onClick={() => chooseReel((selected - 1 + reels.length) % reels.length)}>←</button><span>{String(selected + 1).padStart(2, '0')} / {String(reels.length).padStart(2, '0')}</span><button type="button" aria-label="Next reel" onClick={() => chooseReel((selected + 1) % reels.length)}>→</button></div>}
        </div>
      </div>
    </section>
  );
}
