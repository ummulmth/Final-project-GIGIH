import {
	Flex,
	Image,
	Text,
	Button,
	Link,
	SlideFade,
	useColorModeValue,
} from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../store";
import { substractSelectedTracks, addSelectedTracks } from "../store/playlist";
import {
	Artist,
	Track as SpotifyTrack,
	Image as SpotifyImage,
} from "../types/spotify";
import { selectedTrack } from "../types/store";

const Track = ({ track }: { track: SpotifyTrack }) => {
	const dispatch = useAppDispatch();
	const { selectedTracks } = useAppSelector((state) => state.playlist);

	const isSelected: boolean = selectedTracks.some(
		({ uri }) => uri === track.uri
	);

	const handleSelect: React.MouseEventHandler<HTMLButtonElement> = () => {
		const { uri, name, artists } = track;
		const payload: selectedTrack = { uri, name, artists };
		if (!isSelected) return dispatch(addSelectedTracks(payload));
		return dispatch(substractSelectedTracks(uri));
	};

	const artists: JSX.Element[] = track.artists.map(
		(artist: Artist, index: number) => {
			const isLast: boolean = index === track.artists.length - 1;
			return (
				<Link href={artist?.external_urls?.spotify} key={artist.id} isExternal>
					{artist.name + (isLast ? "" : ", ")}
				</Link>
			);
		}
	);

	const image = track.album.images.find(
		(image: SpotifyImage) => image.width === 64
	);

	const bg = useColorModeValue("gray.100", "gray.800");

	return (
		<SlideFade in unmountOnExit>
			<Flex align="center" my={2} p={2} borderRadius="lg" _hover={{ bg }}>
				<Image
					w={"64px"}
					h={"64px"}
					borderRadius={2}
					src={image?.url}
					alt={track.name}
					title={track.name}
				/>
				<Flex mx={4} direction="column" flex={1}>
					<Text fontWeight="bold">{track.name}</Text>
					<Text>{artists}</Text>
				</Flex>
				<Flex>
					<Button
						onClick={handleSelect}
						m={2}
						variant={isSelected ? "ghost" : "solid"}
					>
						{isSelected ? "Deselect" : "Select"}
					</Button>
				</Flex>
			</Flex>
		</SlideFade>
	);
};

export default Track;