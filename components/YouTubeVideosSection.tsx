const videos = [
  { id: 'vKyyUFQ_U0c', title: 'मुलतानी मोटर बॉडी के चाहने वालों का डांस — Bolero Pickup Lover' },
  { id: 'lW-VyJ1Y--8', title: 'Bolero Pickup — a pickup like no other' },
  { id: '0uj0yefFBWs', title: 'A spectacular pickup body — built here' },
  { id: '7Zp_37xlIgA', title: 'Pickup body and cabin decoration' },
  { id: '0JH5Figr-J8', title: 'Pickup body work from Rajasthan' },
];

export default function YouTubeVideosSection() {
  return <section id="youtube" className="section youtube-section"><div className="container"><div className="section-heading"><div><p className="eyebrow">Stories from the workshop</p><h2>See the work <em>come to life.</em></h2><p>Follow the builds, the details and the people behind them.</p></div><a className="text-link" href="https://www.youtube.com/@Multanimotorbodymakers" target="_blank" rel="noreferrer">Visit our YouTube ↗</a></div><div className="youtube-rail" role="region" aria-label="Workshop videos, scroll horizontally for more" tabIndex={0}>{videos.map((video, index) => <article className="youtube-card" key={video.id}><div className="youtube-frame"><iframe src={`https://www.youtube.com/embed/${video.id}`} title={video.title} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div className="youtube-copy"><span className="micro">WORKSHOP FILM / 0{index + 1}</span><h3>{video.title}</h3><a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer">Watch on YouTube ↗</a></div></article>)}</div><p className="fine-print">Swipe or scroll to explore. If a video cannot play here, open it on YouTube.</p></div></section>;
}
