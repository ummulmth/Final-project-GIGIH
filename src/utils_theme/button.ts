import { ComponentStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "full",
  },
  variants: {
    solid: (props) => ({
      bg: mode("brand.500", "brand.600")(props),
      _hover: {
        bg: mode("brand.400", "brand.700")(props),
        _disabled: {
          bg: mode("brand.400", "brand.700")(props),
        },
      },
    }),
    ghost: {
      color: "brand.400",
      _hover: {
        color: "brand.300",
      },
    },
  },
};
