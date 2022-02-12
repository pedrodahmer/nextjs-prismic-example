import { Flex, Heading, Link } from "@chakra-ui/react"

export function Header () {
  return (
    <Flex as="header" w="100%" justify="space-between" align="center">
      <Heading>
        Pedraos Blog
      </Heading>

      <Flex>
        <Link href="/posts" fontSize="1.5em">
          Posts
        </Link>
      </Flex>
    </Flex>
  )
}