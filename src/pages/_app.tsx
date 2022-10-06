import '../styles/globals.scss';
import '../../public/iconfont/iconfont.css';
import '@/styles/mdx.scss';
import '@/styles/dracula.scss';
import { ThemeProvider } from 'next-themes';
import { Lang } from 'context/LangContext';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Lang>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Lang>
  );
}

export default MyApp;
