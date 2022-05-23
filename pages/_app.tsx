import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer } from '../components/foot/foot'
import { Navbar } from '../components/navbar/nav'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp
