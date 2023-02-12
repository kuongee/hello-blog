import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-indigo-100">
        <nav className="py-4 px-6 text-sm font-medium">
          <ul className="flex space-x-3">
            <Link className={`block px-3 py-2 rounded-md`} href="/">
              BLOG
            </Link>
            <Link className={`block px-3 py-2 rounded-md`} href="/about">
              ABOUT
            </Link>
          </ul>
        </nav>
        <section className="px-6 pt-6">{children}</section>
      </body>
    </html>
  );
}
