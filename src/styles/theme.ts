import { extendTheme, Theme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles = {
  global: {
    body: {
      color: 'white',
      bg: '#333333'
    }
  }
}

export const theme = extendTheme({
  config,
  styles
})