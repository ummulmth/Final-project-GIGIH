import {
  Box,
  Flex,
  Center,
  Heading,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "../store";
import { clearSelectedTracks } from "../store/playlist";
import TrackList from "../component/TrackList";
import CreatePlaylistModal from "../component/create-playlist-modal";

const CreatePlaylist = () => {
  const dispatch = useAppDispatch();
  const { selectedTracks } = useAppSelector((state) => state.playlist);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w={"100%"} p={"2rem"}>
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="lg">
          Create Playlist
        </Heading>
        <Center>
          <Button
            leftIcon={<DeleteIcon />}
            onClick={() => dispatch(clearSelectedTracks())}
            type="button"
            variant="ghost"
            disabled={selectedTracks.length === 0}
          >
            Clear Selection
          </Button>
          <Button
            leftIcon={<AddIcon />}
            onClick={onOpen}
            disabled={selectedTracks.length === 0}
            ml={2}
          >
            Create Playlist
          </Button>
        </Center>
      </Flex>
      <TrackList />
      <CreatePlaylistModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default CreatePlaylist;