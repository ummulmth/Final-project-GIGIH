import { Flex, Switch, Icon, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const SwitchTheme = ({ withIcon = false }: { withIcon?: boolean }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      {withIcon && (
        <Icon ml={4} as={colorMode === "dark" ? MoonIcon : SunIcon} />
      )}
    </Flex>
  );
};

export default SwitchTheme;
