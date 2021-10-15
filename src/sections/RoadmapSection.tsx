import { Text, Box, Flex, Stack, chakra } from "@chakra-ui/react";
import SectionHeader from "../components/SectionHeader";

const faqs = [
  {
    q: "What is Nonconformist Ducks?",
    a: "It is a collection of 10000  unique NONCONFORMIST DUCKS NFTs living on the Ethereum blockchain. ",
  },
  {
    q: "When will be Launched?",
    a: "Join our Discord or follow us on Twitter for updates. Minting procesa will be start at www.nonconformistducks.com on the 1 October 2021 at 2pm UTC / 7 am PST.",
  },
  {
    q: "How Much Does Each Nonconformist Duck cost?",
    a: "The price is 0.03 ETH per piece + gas fee . Transactions will be limited to 10 Nonconformist Ducks per transaction. If you run late or feel dissatiafied minting only 10 pieces will then be available on OpenSea.io",
  },
  {
    q: "How Was Nonconformist Ducks Created?",
    a: "Each Duck was constructed programatically by mixing a variety of properties with different possibilities in the following categories:Eyes, Mouths, Type, Hats and Clothes and Backgrounds.",
  },
  {
    q: "What’s Next?",
    a: "We are nonconformist so we are not going to stop, never ever. Come join us and decide with us the future of this community.",
  },
  {
    q: "Will There Be Any Royalties?",
    a: "We told you we are nonconformist. 2.5% for the secondary market.",
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
