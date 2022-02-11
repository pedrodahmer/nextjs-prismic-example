import { Flex } from "@chakra-ui/react"
import { ReactNode} from "react"

interface ContainerProps {
  children: ReactNode
}

export function Container ({ children }: ContainerProps) {
  return (
    <Flex w="100vw" px="15vw" py="1vw" direction="column">
      { children }
    </Flex>
  )
}