import type { AppProps } from 'next/app';
import '../styles/globals.css';

import 'utils/extension';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
