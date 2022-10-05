import '../styles/globals.scss'
import '../../public/iconfont/iconfont.css'
import '@/styles/mdx.scss';
import '@/styles/dracula.scss';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
