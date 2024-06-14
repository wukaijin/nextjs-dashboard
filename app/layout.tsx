import '@/app/ui/global.css';
import { inter, lusitana } from './ui/fonts';
import clsx from 'clsx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(lusitana.className, 'antialiased')}>
        {children}
      </body>
      {/* <body>{children}</body> */}
    </html>
  );
}
