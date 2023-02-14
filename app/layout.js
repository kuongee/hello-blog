import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="">
        <nav className="relative py-4 px-6 text-sm font-medium sticky top-0 bg-lime-100 z-10">
          <ul className="flex space-x-3">
            <Link className={`block px-3 py-2 rounded-md`} href="/">
              BLOG
            </Link>
            <Link className={`block px-3 py-2 rounded-md`} href="/about">
              ABOUT
            </Link>
          </ul>
        </nav>
        <div className="relative left-0 md:left-1/4 top-0 h-full w-full md:w-1/2">
          <section className="px-6 pt-6">{children}</section>
        </div>
      </body>
    </html>
  );
}
