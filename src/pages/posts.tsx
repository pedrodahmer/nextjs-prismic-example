import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Flex, Heading, Text, Image } from "@chakra-ui/react"
import { RichText } from 'prismic-reactjs'
import Prismic from '@prismicio/client'

import { prismic } from '../services/prismic'


type Post = {
  slug: string,
  title: string,
  content: string
  image: string
}

interface PostProps {
  posts: Post[]
}

export default function Posts ({ posts }: PostProps) {
  const router = useRouter()
  
  useEffect(() => {
    console.log(posts)
  }, [posts])
  
  return (
    <>
      {
        posts.map(post => (
          <Flex 
            key={post.slug} 
            direction='column'
            p='4' 
            borderRadius="8"
            _hover={{background: '#555555', cursor: 'pointer'}}
            onClick={e => router.push(`/${post.slug}`)}>
            <Heading>
              {post.title}
            </Heading>

            <Text mt="20px">
              {post.content}
            </Text>
          </Flex>
        ))
      }
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await prismic.getByType('post')

  const posts = response.results.map(post => {
    return {
        slug: post.uid,
        title: RichText.asText(post.data.title),
        content: RichText.asText(post.data.content),
        image: post.data.image.url
    }
})

  return {
    props: {
      posts
    }
  }
}