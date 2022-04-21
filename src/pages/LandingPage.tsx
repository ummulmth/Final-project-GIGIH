import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Center,
  Image,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
import { authorize } from "../libs/spotify";
import { useAuth } from "../libs/auth";

const Landing = () => {
  const { colorMode } = useColorMode();
  useAuth();

  return (
    <Box maxW="100vw">
      <Grid
        as={"main"}
        templateColumns="1fr 1fr"
        gap="5vw"
        minH="100vh"
        p={"2rem"}
      >
        <Flex direction={"column"} justify={"center"}>
          <Heading as={"h1"} fontSize={"6xl"}>
            Listen your Music
          </Heading>
          <Text my={4} color={"gray.400"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            similique nobis atque fuga, quasi omnis odit sunt placeat magni
            voluptate ratione incidunt quas ad blanditiis, soluta vitae aut
            velit. Magni.
          </Text>
          <Box>
            <Button size={"lg"} leftIcon={<FaSpotify />} onClick={authorize}>
              Login with Spotify
            </Button>
          </Box>
        </Flex>
        <Center>
          <Image src={"https://picsum.photos/500"} />
        </Center>
      </Grid>
      <Center
        as={"footer"}
        h={"10vh"}
        bg={colorMode === "light" ? "gray.300" : "gray.800"}
      >
        Made with 💛 by ayang
      </Center>
    </Box>
  );
};

export default Landing;
