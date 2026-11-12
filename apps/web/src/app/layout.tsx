import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IKAK Members Portal',
  description: 'International Karate Alliance KyokushinRyu Members Portal',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
