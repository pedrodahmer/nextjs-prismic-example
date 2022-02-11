import * as Prismic from '@prismicio/client'

const endpoint = 'https://prismicnextest.prismic.io/api/v2'
const accessToken = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN as string

const prismic = Prismic.createClient(endpoint, { accessToken })

export { prismic }