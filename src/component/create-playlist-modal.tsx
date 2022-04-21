import { Box, Wrap, Text } from "@chakra-ui/layout";
import {
	Tag,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Button,
	useToast,
} from "@chakra-ui/react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/modal";
import {
	clearForm,
	clearSelectedTracks,
	setFormTitle,
	setFormDescription,
} from "../store/playlist";
import { useAppDispatch, useAppSelector } from "../store";
import { postPlaylist, postPlaylistTracks } from "../libs/spotify";
import * as React from "react";

const CreatePlaylistModal = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	const dispatch = useAppDispatch();
	const toast = useToast();
	const { accessToken, user } = useAppSelector((state) => state.auth);
	const { selectedTracks, form } = useAppSelector((state) => state.playlist);

	const handleSubmit: React.FormEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();

		const { title, description } = form;
		const uris = selectedTracks.map((track) => track.uri);

		if (title.length <= 10) {
			return toast({
				description: "Title at least should have 10 characters",
				status: "error",
			});
		}

		if (description.length <= 20) {
			return toast({
				description: "Description at least should have 20 characters",
				status: "error",
			});
		}

		postPlaylist(accessToken, user?.id as string, {
			name: title,
			description: description,
			public: false,
		})
			.then(({ data }) => {
				dispatch(clearForm());
				return postPlaylistTracks(accessToken, data.id, {
					uris,
				});
			})
			.then(() => {
				dispatch(clearSelectedTracks());
				onClose();
				return toast({
					title: "Woohoo!",
					description: "Playlist has been created successfully!",
					status: "success",
				});
			});
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
			<ModalOverlay />
			<ModalContent as="form">
				<ModalHeader>Create New Playlist</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<FormControl id="title">
						<FormLabel>Title</FormLabel>
						<Input
							type="text"
							name="title"
							onChange={(e) => dispatch(setFormTitle(e.target.value))}
						/>
					</FormControl>
					<FormControl id="description">
						<FormLabel>Description</FormLabel>
						<Textarea
							name="description"
							onChange={(e) => dispatch(setFormDescription(e.target.value))}
						/>
					</FormControl>
					<SelectedTracks />
				</ModalBody>
				<ModalFooter>
					<Button colorScheme="brand" onClick={handleSubmit}>
						Create
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

const SelectedTracks = () => {
	const { selectedTracks } = useAppSelector((state) => state.playlist);

	return (
		<Box mt={2}>
			<Text>{selectedTracks.length} tracks selected</Text>
			<Wrap spacing={1}>
				{selectedTracks.map((track) => {
					const artists = track.artists.map((artist, index) => {
						const isLast: boolean = index === track.artists.length - 1;
						return artist.name + (isLast ? "" : ", ");
					});
					return (
						<Tag key={track.uri}>
							{track.name} by {artists}
						</Tag>
					);
				})}
			</Wrap>
		</Box>
	);
};

export default CreatePlaylistModal;