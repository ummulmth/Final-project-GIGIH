import { Box, Image, Text, Link, useColorModeValue } from "@chakra-ui/react";
import { Album, Artist } from "../types/spotify";

const AlbumCard = ({ album }: { album: Album }) => {
  const artists = album.artists?.map((artist: Artist, index: number, array) => {
    const isLast: boolean = index === array.length - 1;
    return (
      <Link href={artist?.external_urls?.spotify} key={artist.id} isExternal>
        {artist.name + (isLast ? "" : ", ")}
      </Link>
    );
  });
  const image = album.images.find((image) => image.width === 300);

  const bg = useColorModeValue("gray.200", "gray.800");
  const color = useColorModeValue("brand.400", "brand.600");

  return (
    <Box p={4} maxW={image?.width} bg={bg} borderRadius={"md"}>
      <Image w={image?.width} h={image?.height} src={image?.url} />
      <Text fontWeight={"bold"} mt={2}>
        {album.name}
      </Text>
      <Text color={"gray.400"}>{artists}</Text>
      <Link isExternal color={color} href={album.external_urls.spotify}>
        Check on Spotify!
      </Link>
    </Box>
  );
};

export default AlbumCard;