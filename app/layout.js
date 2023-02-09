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
      <body>
        <nav className="py-4 px-6 text-sm font-medium">
          <ul className="flex space-x-3">
            <Link className={`block px-3 py-2 rounded-md`} href="/">
              홈
            </Link>
            <Link className={`block px-3 py-2 rounded-md`} href="/about">
              About
            </Link>
          </ul>
        </nav>
        <section className="py-4 px-6">{children}</section>
      </body>
    </html>
  );
}
