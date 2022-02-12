import * as Prismic from '@prismicio/client'

const endpoint = process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT as String
const accessToken = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN as string

const prismic = Prismic.createClient(endpoint, { accessToken })

export { prismic }