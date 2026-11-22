type IconName = 'phone' | 'whatsapp' | 'pin' | 'arrow' | 'play' | 'menu' | 'close' | 'truck' | 'spark' | 'clock';

const paths: Record<IconName, React.ReactNode> = {
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9Z" />,
  whatsapp: <><path d="M20.5 11.8a8.5 8.5 0 0 1-12.5 7.5L3.5 20.5l1.2-4.4a8.5 8.5 0 1 1 15.8-4.3Z" /><path d="M8.5 8.2c.2-.5.4-.5.7-.5h.4c.2 0 .4.1.5.4l.7 1.6c.1.3 0 .5-.2.7l-.5.6c.5 1.1 1.3 2 2.5 2.5l.6-.7c.2-.2.4-.2.7-.1l1.6.8c.3.1.4.3.4.5v.5c-.1.6-.8 1-1.4 1.1-1.1.2-3.1-.6-4.7-2.2-1.5-1.5-2.4-3.5-2.2-4.6.1-.3.3-.5.5-.6Z" /></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
  play: <path d="m8 5 11 7-11 7V5Z" />,
  menu: <><path d="M3 7h18" /><path d="M3 12h18" /><path d="M3 17h18" /></>,
  close: <><path d="M5 5l14 14" /><path d="M19 5 5 19" /></>,
  truck: <><path d="M3 5h11v11H3zM14 9h4l3 3v4h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /><path d="M9 18h7" /></>,
  spark: <><path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
};

export default function Icon({ name, className }: { name: IconName; className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>;
}
