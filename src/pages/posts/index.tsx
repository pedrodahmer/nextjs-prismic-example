import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Flex, Heading, Text, Image } from "@chakra-ui/react"

import { queryAllPosts } from '../../utils/helpers/query-all-posts'
import { prismic } from '../../services/prismic'
import { PostArray } from '../../application/entities/Post'

export default function Posts ({ posts }: PostArray) {
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
            mb="50px"
            borderRadius="8"
            _hover={{background: '#555555', cursor: 'pointer'}}
            onClick={e => router.push(`/posts/${post.slug}`)}>
            <Heading>
              {post.title}
            </Heading>

            <Text mt="20px">
              {post.content.slice(0, 500) + "..."}
            </Text>

            <Text mt="20px">
              Click to read more!!!
            </Text>
          </Flex>
        ))
      }
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await queryAllPosts(prismic)
  return {
    props: {
      posts
    }
  }
}