const videos = [
  { id: 'vKyyUFQ_U0c', title: 'मुलतानी मोटर बॉडी के चाहने वालों का डांस — Bolero Pickup Lover' },
  { id: 'lW-VyJ1Y--8', title: 'Bolero Pickup — a pickup like no other' },
  { id: '0uj0yefFBWs', title: 'A spectacular pickup body — built here' },
  { id: '7Zp_37xlIgA', title: 'Pickup body and cabin decoration' },
  { id: '0JH5Figr-J8', title: 'Pickup body work from Rajasthan' },
];

export default function YouTubeVideosSection() {
  return <section id="youtube" className="youtube-section section-space"><div className="container">
    <div className="section-heading"><div><p className="eyebrow light"><span /> STORIES FROM THE SHOP</p><h2>SEE THE WORK<br /><em>COME TO LIFE.</em></h2></div><div className="section-intro"><p>Go behind the build with videos from the Multani Motor Body Makers YouTube channel.</p><span>05 / WATCH &amp; DISCOVER</span></div></div>
    <div className="youtube-rail" role="region" aria-label="Workshop videos, scroll horizontally for more" tabIndex={0}>{videos.map((video, index) => <article className="youtube-card" key={video.id}>
      <div className="youtube-frame"><iframe src={`https://www.youtube.com/embed/${video.id}`} title={video.title} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
      <div className="youtube-copy"><span>WORKSHOP FILM / 0{index + 1}</span><h3>{video.title}</h3><a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer">WATCH ON YOUTUBE ↗</a></div>
    </article>)}</div>
    <div className="youtube-bottom"><span>SWIPE OR SCROLL TO EXPLORE →</span><a href="https://www.youtube.com/@Multanimotorbodymakers" target="_blank" rel="noreferrer">VISIT OUR CHANNEL ↗</a></div>
  </div></section>;
}
