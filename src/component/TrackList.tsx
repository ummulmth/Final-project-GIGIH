import { Box } from "@chakra-ui/react";
import { useAppSelector } from "../store";
import Track from "./Track";

const TrackList = () => {
	const { tracks } = useAppSelector((state) => state.playlist);

	return (
		<Box w={"100%"}></Box>
			{tracks.map((track) => (
				<Track track={track} key={track.id} />
			))}
		</MotionBox>
	) : (
		<Text>Search Your Music Here...</Text>
	);
};

const Track = ({ track }: { track: SpotifyTrack }) => {
	const dispatch = useAppDispatch();
	const selectedTracks = useAppSelector(
		(state) => state.playlist.selectedTracks
	);

	const isSelected: boolean = selectedTracks.includes(track.uri);

	const handleSelect: React.MouseEventHandler<HTMLButtonElement> = () => {
		if (isSelected) {
			dispatch(substractSelectedTracks(track.uri));
		} else {
			dispatch(addSelectedTracks(track.uri));
		}
	};

	const artists: JSX.Element[] = track.artists.map(
		(artist: Artist, index: number) => {
			const isLast: boolean = index === track.artists.length - 1;
			return (
				<a
					href={artist?.external_urls?.spotify}
					target="_blank"
					rel="noreferrer"
					key={artist.id}
				>
					{artist.name + (isLast ? "" : ", ")}
				</a>
			);
		}
	);

	const image = track.album.images.find(
		(image: SpotifyImage) => image.width === 64
	);

	const bg = useColorModeValue("white", "gray.800");
	const shadow = useColorModeValue("md", "none");

	return (
		<Flex align="center" my={2} p={2} borderRadius="lg" _hover={{ bg, shadow }}>
			<Image
				w={"64px"}
				h={"64px"}
				borderRadius={2}
				src={image?.url}
				alt={track.name}
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
	);
};

export default TrackList;