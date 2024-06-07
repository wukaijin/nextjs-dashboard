import '@/app/ui/global.css';
import { inter, lusitana } from './ui/fonts';
import clsx from 'clsx';

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
