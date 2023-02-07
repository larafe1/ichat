import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    brand: {
      100: `#3d84f7`,
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: `whiteAlpha.200`,
      },
    }),
  },
});
