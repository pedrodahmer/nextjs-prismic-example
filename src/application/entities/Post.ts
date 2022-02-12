export interface Post {
  slug: string,
  title: string,
  content: string
  image: string
}

export interface PostArray {
  posts: Post[]
}