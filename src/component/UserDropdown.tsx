import {
	Flex,
	Text,
	IconButton,
	Avatar,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuGroup,
	useColorModeValue,
	useColorMode,
} from "@chakra-ui/react";
import {
	ChevronDownIcon,
	MoonIcon,
	SunIcon,
	ArrowBackIcon,
} from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "../store";
import { logout } from "../store/auth";
import SwitchTheme from "./SwitchTheme";

const UserDropdown = () => {
	const dispatch = useAppDispatch();

	const { user } = useAppSelector((state) => state.auth);
	const { colorMode, toggleColorMode } = useColorMode();

	const isDark = colorMode === "dark";

	return (
		<Menu closeOnSelect={false}>
			<MenuButton
				as={IconButton}
				variant={"ghost"}
				aria-label={"user-dropdown"}
				leftIcon={<ChevronDownIcon ml={2} />}
				display={"flex"}
			>
				<Avatar
					name={user?.display_name}
					src={user?.images?.[0].url ?? "https://picsum.photos/36"}
					size={"sm"}
					mr={2}
				></Avatar>
			</MenuButton>
			<MenuList border={"none"}>
				<MenuGroup title={"Hello " + user?.display_name}>
					<MenuItem
						icon={isDark ? <MoonIcon /> : <SunIcon />}
						onClick={toggleColorMode}
					>
						<Flex justify={"space-between"}>
							<Text>Dark Mode</Text>
							<SwitchTheme />
						</Flex>
					</MenuItem>
					<MenuItem
						color={useColorModeValue("red", "red.600")}
						icon={<ArrowBackIcon />}
						onClick={() => dispatch(logout())}
					>
						Logout
					</MenuItem>
				</MenuGroup>
			</MenuList>
		</Menu>
	);
};

export default UserDropdown;