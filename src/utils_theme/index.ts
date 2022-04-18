import { extendTheme, theme as defaultTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { brand, gray } from "./colors";
import { Button } from "./button";
import { Input, Textarea } from "./form";

const theme = extendTheme(
  {
    config: {
      useSystemColorMode: true,
    },
    components: {
      Input,
      Textarea,
      Button,
    },
    fonts: {
      body: `'Poppins', ${defaultTheme.fonts.body}`,
      heading: `'Poppins', ${defaultTheme.fonts.heading}`,
    },
    colors: { brand, gray },
    styles: {
      global: ({ colorMode }) => ({
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          bg: colorMode === "light" ? "white" : "gray.900",
        },
      }),
    },
    radii: {
      "4xl": "2rem",
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

export default theme;
