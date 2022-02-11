import type { NextPage } from 'next'

import { Flex, Heading, Text } from '@chakra-ui/react'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Flex h="90vh" direction="column" justify="center" align="center">
        <Heading>
          Esta é a Home
        </Heading>

        <Text>
          Clique em posts para acessar os posts
        </Text>
      </Flex> 
    </>
  )
}

export default Home
