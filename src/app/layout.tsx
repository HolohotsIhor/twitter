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
  type User = {
    name: string;
    age: number;
  };

  type PartialUser = Omit<User, 'name'>;

  const user: PartialUser = { age: 123 };
  console.log(user);

  return (
    <html lang='en'>
      <body className={`${inter.variable} ${robotoMono.className}`}>{children}</body>
    </html>
  );
}
