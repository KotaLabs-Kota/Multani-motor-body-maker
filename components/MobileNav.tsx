'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/Icon';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our work' },
  { href: '#reels', label: 'Reels' },
  { href: '#youtube', label: 'Videos' },
  { href: '#contact', label: 'Contact' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="mobile-nav">
      <button type="button" className="mobile-nav-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
        <Icon name={open ? 'close' : 'menu'} /> {open ? 'Close' : 'Menu'}
      </button>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav-panel" hidden={!open}>
        {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<Icon name="arrow" /></a>)}
        <a href="tel:+919460424711" className="mobile-nav-call"><Icon name="phone" /> Call the workshop</a>
      </nav>
    </div>
  );
}
