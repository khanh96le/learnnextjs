import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme dashboard',
  description: 'The official Next.JS Course Dashboard, built with App Router',
  metadataBase: new URL('https://learnnextjs-phi.vercel.app/')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body>{children}</body> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
