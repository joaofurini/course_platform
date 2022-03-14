import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import React from 'react'

import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme} >
 

    <Head>
      <link rel="shortcut icon" href="" />
      
      <meta name="theme-color" content="#ffffff" />
      <title>A sua plataforma de cursos</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Component {...pageProps} />

  </ChakraProvider>
}

export default MyApp
