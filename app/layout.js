import { Onest, Unbounded } from 'next/font/google';
import './globals.css';

const body = Onest({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600'], variable: '--f-body', display: 'swap' });
const head = Unbounded({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '600'], variable: '--f-head', display: 'swap' });

export const metadata = {
  title: 'Др. Азиз Каримов — травматолог-ортопед',
  description: 'Бўғим, умуртқа ва суяк шикастлари. Аниқ ташхис ва энг мулойим даво. Қабулга ёзилинг.',
};
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="uz" className={`${body.variable} ${head.variable}`}>
      <body>{children}</body>
    </html>
  );
}
