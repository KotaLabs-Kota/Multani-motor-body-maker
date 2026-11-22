import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Multani Motor Body Makers — Official Website',
  description:
    "Custom pickup bodies, truck bodies & commercial vehicle bodies from Multani Motor Body Makers, India's No.1 commercial vehicle body maker. Since 1996. Kota, Rajasthan.",
  keywords: [
    'multani motor body makers',
    'pickup body maker kota',
    'bolero pickup body',
    'mahindra pickup body',
    'commercial vehicle body maker',
    'truck body manufacturer india',
    'kota rajasthan',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Multani Motor Body Makers — Official Website',
    description:
      "Custom pickup bodies, truck bodies & commercial vehicle bodies from Multani Motor Body Makers, India's No.1 commercial vehicle body maker.",
    locale: 'en_US',
    type: 'website',
    siteName: 'Multani Motor Body Makers',
  },
  twitter: { card: 'summary_large_image', site: '@multani_motor_body' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
