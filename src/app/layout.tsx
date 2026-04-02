import type { Metadata } from 'next/types';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s - X Twitter',
    default: 'Twitter',
  },
  description: 'Home page description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang='en'>
      <body className={`${inter.variable} ${robotoMono.className}`}>{children}</body>
    </html>
  );
}
