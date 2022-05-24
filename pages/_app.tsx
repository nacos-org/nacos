import type { AppProps } from 'next/app';

function Nacos({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Nacos;
