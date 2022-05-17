import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer } from '../components/foot/foot'
import { Navbar } from '../components/navbar/nav'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js" integrity="sha512-VEBjfxWUOyzl0bAwh4gdLEaQyDYPvLrZql3pw1ifgb6fhEvZl9iDDehwHZ+dsMzA0Jfww8Xt7COSZuJ/slxc4Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> */}
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default MyApp
