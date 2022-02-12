import {Client} from '@prismicio/client'
import { RichText } from 'prismic-reactjs'

export const queryPostByUID = async (client: Client, slug: string) => {
  const response = await client.getByUID('post', slug)
  
  const post = {
    slug: response.uid,
    title: RichText.asText(response.data.title),
    content: RichText.asText(response.data.content),
    image: response.data.image.url
  }

  return post
}