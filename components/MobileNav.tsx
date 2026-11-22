'use client';

import { useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our work' },
  { href: '#youtube', label: 'Videos' },
  { href: '#reels', label: 'Reels' },
  { href: '#contact', label: 'Contact' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-nav">
      <button type="button" className="mobile-nav-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '×' : '☰'}</span>
      </button>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav-panel">
        {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<span aria-hidden="true">↗</span></a>)}
      </nav>}
    </div>
  );
}
