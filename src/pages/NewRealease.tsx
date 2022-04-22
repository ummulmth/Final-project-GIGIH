import { Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { getNewReleases } from "../libs/spotify";
import { useAppSelector } from "../store";
import { useEffect, useState } from "react";
import { Album } from "../types/spotify";
import AlbumCard from "../component/albumCard";

const NewReleases = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const { accessToken } = useAppSelector((state) => state.auth);

  useEffect(() => {
    getNewReleases(accessToken).then((res) => setAlbums(res.data.albums.items));
  }, [accessToken]);

  return (
    <Box w={"100%"} p={"2rem"}>
      <Heading as="h1" size="lg" mb={4}>
        New Releases
      </Heading>
      <Wrap spacing={4}>
        {albums.map((album: Album) => (
          <WrapItem key={album.id}>
            <AlbumCard album={album} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default NewReleases;