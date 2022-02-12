import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import {Flex, Heading, Image, Text} from '@chakra-ui/react'
import { RichText } from 'prismic-reactjs'

import { prismic } from '../../../services/prismic'
import { queryAllPosts } from '../../../utils/helpers/query-all-posts'
import { useEffect } from 'react'
import { queryPostByUID } from '../../../utils/helpers/query-post-by-uid'

interface PostProps {
  post: {
    slug: string,
    title: string,
    content: string,
    image: string
  }
}

export default function Post ({ post }: PostProps) {
  useEffect(() => {
    console.log(post)
  }, [post])
  
  return (
    <>
      <Head>
        <title>{ post.title } | Blog do pedrao</title>
      </Head>

      <Flex direction="column">
        <Heading mb="50px">
          Título de post
        </Heading>

        <Text mb="50px">
          { post.content }
        </Text>

        <Image src={post.image} alt="post-image" w="50%" alignSelf="center" />
      </Flex>
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await prismic.getByType('post')

  const paths = posts.results.map(post => {
    return {
        params: {
          slug: post.uid,
        }
    }
  })
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params

  const post = await queryPostByUID(prismic, slug)

  return {
    props: {
      post
    }
  }
}