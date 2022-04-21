import { Box } from "@chakra-ui/react";
import { useAppSelector } from "../store";
import Track from "./Track";

const TrackList = () => {
	const { tracks } = useAppSelector((state) => state.playlist);

	return (
		<Box w={"100%"}>
			{tracks.map((track) => (
				<Track track={track} key={track.id} />
			))}
		</Box>
	);
};

export default TrackList;