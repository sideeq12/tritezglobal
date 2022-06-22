import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer } from '../components/foot/foot'
import { Navbar } from '../components/navbar/nav'
import Head from 'next/head'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  let ShowContext = React.createContext(false)
  return (
    <>
    <ShowContext.Provider value={false}>
    <Navbar /> 
    <Component {...pageProps} />
    <Footer />
    </ShowContext.Provider>
    </>
  )
}

export default MyApp
