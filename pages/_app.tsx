import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Loading } from '../components/Loading'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  )
}
