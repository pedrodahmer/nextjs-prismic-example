import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import {theme} from '../styles/theme'
import { Container } from '../components/layout/Container'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
