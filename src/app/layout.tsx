import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Providers } from './provider';

import './globals.css';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} bg-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
