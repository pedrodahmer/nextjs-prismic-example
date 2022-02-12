import {Client} from '@prismicio/client'
import { RichText } from 'prismic-reactjs'

export const queryAllPosts = async (client: Client) => {
  const response = await client.getByType('post')

  const posts = response.results.map(post => {
    return {
        slug: post.uid,
        title: RichText.asText(post.data.title),
        content: RichText.asText(post.data.content),
        image: post.data.image.url
    }
  })

  return posts
}