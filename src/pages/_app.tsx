import '@acab/reset.css';
import type { AppProps } from 'next/app';
import { Noto_Sans_JP } from 'next/font/google';

const NotoSansJP = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '700', '900'], //使う分だけにする
  preload: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-noto-sans-jp: ${NotoSansJP.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
