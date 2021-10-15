import React from "react";
import { Box, Button, Text, Stack, Image, SimpleGrid } from "@chakra-ui/react";
import SectionHeader from "../components/SectionHeader";
import ninja from "../assets/ninja.jpeg";

function RaritySection() {
  return (
    <Box
      width="100%"
      px={{ base: 8, md: 28 }}
      fontFamily="Space Mono"
      id="mint"
      textAlign={{ base: "center", md: "left" }}
    >
      <Stack mt="16" w="100%" columns={{ base: 1, md: 2 }}>
        <SectionHeader text="Rarity" />
        <Stack direction={{ base: "column-reverse", md: "row" }}>
          <Box maxW={{ base: "100%", md: "55%" }}>
            <Text mt="8" color="white" fontSize="xl">
              Each Ninja is comprised of a head, face, body, Shinobi Shōzoku
              (clothing), weapons, and background colors. Each reflecting the
              ninjas unique personalities. When going out on a mission they
              express themselves through their attire. Of course every clan has
              their Jōnin ("upper person"), so some Ninjas are extra special,
              meaning no one’s ever gonna see them coming.
            </Text>
          </Box>
          <Box p={{ md: 8 }}>
            <Image rounded={{ base: "md", md: "lg" }} src={ninja} />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default RaritySection;
