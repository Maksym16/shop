import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/Navbar';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-comm Store',
  description: 'E-comm Store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
