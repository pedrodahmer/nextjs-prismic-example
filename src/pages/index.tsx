import type { NextPage } from 'next'

import { Flex, Heading, Text } from '@chakra-ui/react'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Flex h="90vh" direction="column" justify="center" align="center">
        <Heading>
          This is a homepage!
        </Heading>

        <Text>
          Go to /posts to see all the posts
        </Text>
      </Flex> 
    </>
  )
}

export default Home
