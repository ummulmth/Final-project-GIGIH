import { Link, useLocation } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import SwitchTheme from "./SwitchTheme";
import SearchBar from "./SearchBar";
import { Grid, Center } from "@chakra-ui/react";
import { useAppSelector } from "../store";

const Header = () => {
	const { isAuthenticated } = useAppSelector((state) => state.auth);
	const location = useLocation();

	return (
		<Grid as={"header"} templateColumns={"10vw 1fr 10vw"} gap={"2rem"} p={"1rem"}>
			<Center>
				<Link fontSize="xl" fontWeight="black" href="/" _hover={{ opacity: 0.8 }}>
					Gigih Playlist
				</Link>
                <Link href="/" to={""} >
					Gigih Playlist
				</Link>
			</Center>
			<Center minW={"100%"}>
				{location.pathname === "/create-playlist" && <SearchBar />}
			</Center>
			<Center>
				{isAuthenticated ? <UserDropdown /> : <SwitchTheme withIcon />}
			</Center>
		</Grid>
	);
};
export default Header;