import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource-variable/noto-sans-devanagari';
import './globals.css';

export const metadata: Metadata = {
  title: 'Multani Motor Body Makers — Official Website',
  description:
    "Pickup and commercial vehicle body work from Multani Motor Body Makers in Kota, Rajasthan.",
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
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    title: 'Multani Motor Body Makers — Official Website',
    description:
      "Pickup and commercial vehicle body work from Multani Motor Body Makers in Kota, Rajasthan.",
    locale: 'en_IN',
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
      <body>
        {children}
      </body>
    </html>
  );
}
