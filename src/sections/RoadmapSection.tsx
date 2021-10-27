import { Text, Box, Flex, Stack, chakra } from "@chakra-ui/react";
import SectionHeader from "../components/SectionHeader";

// Roadmap
// Phase 1
// Pre-Launch

// - Discord NFT and ETH giveaways and collabs
// - Pre-Sale sign up, 500 slots
// - Samurai art contest/challenge
// - AI alerts preview
// - 1/1 katana giveaways

// Phase 3
// Post Launch

// - Rarity tools listing
// - Community NFT fund launch
// - Fractional ownership of community NFT fund to all holders
// - Profits from community NFT fund will be redistributed to holders
// - 'The dojo' samurai arena utility launch
// - Post launch marketing
// - Seasonal events
// - Samurai customization
// - NFT trading platform launch, free for use to all holders
// - Exclusive discord section for holders
// - 3D 1/1 samurais launch
// - Exclusive token airdrop to holders
// - Cyber Samurais videogame launch
// - Metaverse spaces

const faqs = [
  {
    q: "Phase 1",
    a: (
      <Stack>
        <Text>Pre-Launch</Text>
        <Stack>
          <Text>- Discord NFT and ETH giveaways and collabs</Text>
          <Text>- Pre-Sale sign up, 500 slots</Text>
          <Text>- Samurai art contest/challenge</Text>
          <Text>- AI alerts preview</Text>
          <Text>- 1/1 katana giveaways</Text>
        </Stack>
      </Stack>
    ),
  },
  {
    q: "Phase 2",
    a: (
      <Stack>
        <Text>Launch</Text>
        <Stack>
          <Text>- OCT 30</Text>
          <Text>- Pre-Sale members will be given early access to mint</Text>
          <Text>- 2,500 Cyber Samurais will be available for public mint</Text>
          <Text>- Samurai holder giveaways will launch</Text>
          <Text>- AI alerts preview</Text>
          <Text>- Opensea collection verification</Text>
        </Stack>
      </Stack>
    ),
  },
  {
    q: "Phase 3",
    a: (
      <Stack>
        <Text>Post Launch</Text>
        <Stack>
          <Text>- Rarity tools listing</Text>
          <Text>- Community NFT fund launch</Text>
          <Text>
            - Fractional ownership of community NFT fund to all holders
          </Text>
          <Text>
            - Profits from community NFT fund will be redistributed to holders
          </Text>
          <Text>- 'The dojo' samurai arena utility launch</Text>
          <Text>- Post launch marketing</Text>
          <Text>- Seasonal events</Text>
          <Text>- Samurai customization</Text>
          <Text>
            - NFT trading platform launch, free for use to all holders
          </Text>
          <Text>- Exclusive discord section for holders</Text>
          <Text>- 3D 1/1 samurais launch</Text>
          <Text>- Exclusive token airdrop to holders</Text>
          <Text>- Cyber Samurais videogame launch</Text>
          <Text>- Metaverse spaces</Text>
        </Stack>
      </Stack>
    ),
  },
];

export default function RoadmapSection() {
  return (
    <Flex
      justifyContent="center"
      width="100%"
      py={{ base: 10 }}
      color="white"
      id="faq"
      px={{ base: 4, md: 28 }}
      textAlign={{ base: "center", md: "left" }}
    >
      <Stack align="center" spacing={8} width={{ base: "100%", md: "60%" }}>
        <SectionHeader text="Roadmap" />

        <Stack spacing={{ base: 4, md: 8 }} width="100%" align="center">
          {faqs.map((faq) => (
            <Box w="100%">
              <Text fontWeight="bold" fontSize="xl">
                {faq.q}
              </Text>

              <Text mt="4" fontSize="lg">
                {faq.a}
              </Text>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Flex>
  );
}
