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

// next나 remix에서 css-in-js가 지원 안 됨
// serverside 에서는 css-in-js 를 지원 안 해서 
// styled component는 지원하고 있음

/*
css-in-js는 css를 동적으로 js가 조작
https://junghan92.medium.com/%EB%B2%88%EC%97%AD-%EC%9A%B0%EB%A6%AC%EA%B0%80-css-in-js%EC%99%80-%ED%97%A4%EC%96%B4%EC%A7%80%EB%8A%94-%EC%9D%B4%EC%9C%A0-a2e726d6ace6
런타임에서 스타일을 하니까 성능 상 좀 느릴 수 있음

tailwindcss
단축어 태그를 인라인에 넣는 느낌이다
컴파일단에서 스타일로 만들어짐

*/

// https://www.deepl.com/translator
// react와 react-dom 차이: react에서만 쓸 거는 아님

// Next13 fetch가 나올 수 있는 서비스
// imdb pokeAPI

// hola

// prosemirror
// https://prosemirror.net/docs/guide/

// Strapi 1년이면 풀스택을 읊는다 Part (1/2)
//https://medium.com/pinkfong/strapi-1%EB%85%84%EC%9D%B4%EB%A9%B4-%ED%92%80%EC%8A%A4%ED%83%9D%EC%9D%84-%EC%9D%8A%EB%8A%94%EB%8B%A4-part-1-2-5641f5651097