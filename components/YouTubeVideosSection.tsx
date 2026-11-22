import Icon from '@/components/Icon';

const videos = [
  { id: 'vKyyUFQ_U0c', title: 'मुलतानी मोटर बॉडी के चाहने वालों का डांस — Bolero Pickup Lover' },
  { id: 'lW-VyJ1Y--8', title: 'Bolero Pickup — a pickup like no other' },
  { id: '0uj0yefFBWs', title: 'A spectacular pickup body — built here' },
  { id: '7Zp_37xlIgA', title: 'Pickup body and cabin decoration' },
  { id: '0JH5Figr-J8', title: 'Pickup body work from Rajasthan' },
];

export default function YouTubeVideosSection() {
  return <section id="youtube" className="section youtube-section"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span>05</span> WATCH THE WORK</p><h2>Watch it <span>come to life.</span></h2><p>More builds, more details and more of the work we love.</p></div><a className="text-link" href="https://www.youtube.com/@Multanimotorbodymakers" target="_blank" rel="noreferrer">Visit our YouTube <Icon name="arrow" /></a></div><div className="youtube-rail" role="region" aria-label="Workshop videos, scroll horizontally for more" tabIndex={0}>{videos.map((video, index) => <article className="youtube-card" key={video.id}><div className="youtube-frame"><iframe src={`https://www.youtube.com/embed/${video.id}`} title={video.title} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div className="youtube-copy"><span className="micro">WORKSHOP VIDEO / 0{index + 1}</span><h3>{video.title}</h3><a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer">Watch on YouTube <Icon name="arrow" /></a></div></article>)}</div><p className="fine-print">Swipe or scroll to explore. If a video cannot play here, open it on YouTube.</p></div></section>;
}
