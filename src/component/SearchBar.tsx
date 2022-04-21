import { Search2Icon } from "@chakra-ui/icons";
import { Input, Flex, IconButton, Spinner, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { getTracks } from "../libs/spotify";
import { useAppSelector, useAppDispatch } from "../store";
import { setTracks } from "../store/playlist";

const SearchBar = () => {
	const [query, setQuery] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const toast = useToast();
	const dispatch = useAppDispatch();

	const { isAuthenticated, accessToken } = useAppSelector(
		(state) => state.auth
	);

	const handleSubmit: React.FormEventHandler<HTMLDivElement> = (e) => {
		e.preventDefault();
		if (query.length <= 3) {
			return toast({
				title: "Woops!",
				description: "Please type at least 3 letters.",
				status: "error",
				duration: 9000,
				isClosable: true,
			});
		}
		setIsLoading(true);
		getTracks(accessToken, {
			q: query,
			type: "track",
			limit: "12",
		}).then((res) => {
			dispatch(setTracks(res?.data?.tracks?.items));
			setIsLoading(false);
		});
	};

	return (
		<Flex as={"form"} onSubmit={handleSubmit} w={"100%"}>
			<Input
				type="text"
				placeholder="Search..."
				mr={2}
				borderRadius="full"
				isDisabled={!isAuthenticated}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<IconButton
				isRound
				type={"submit"}
				variant={"ghost"}
				icon={isLoading ? <Spinner /> : <Search2Icon />}
				aria-label="search"
			/>
		</Flex>
	);
};

export default SearchBar;