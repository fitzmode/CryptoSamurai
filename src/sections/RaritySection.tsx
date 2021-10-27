import React from "react";
import { Box, Button, Text, Stack, Image, SimpleGrid } from "@chakra-ui/react";
import SectionHeader from "../components/SectionHeader";
import ninja from "../assets/ninja.png";

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
              Each Samurai is comprised of a helmet, amour, background colors,
              and weapons. Each embodying the samurais unique personalities.
              When going into battle they express themselves by their amour.
              There are a couple clan leaders, which are extra special and rare.
              Meaning no one samurai is the same.
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
