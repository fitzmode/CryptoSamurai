import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Stack,
  chakra,
} from "@chakra-ui/react";

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

export default function FAQSection() {
  return (
    <Flex
      justifyContent="center"
      width="100%"
      py={{ base: 20 }}
      background="#711717"
      color="white"
      fontFamily="Rubik"
      id="faq"
    >
      <Stack width="100%" align="center">
        <chakra.h1
          textAlign={"center"}
          py={10}
          fontWeight={"bold"}
          fontSize="5xl"
          letterSpacing="0.2rem"
          fontFamily="Sakurata"
        >
          FAQs
        </chakra.h1>
        <Accordion allowToggle width={{ base: "100%", md: "60%" }}>
          {faqs.map((faq) => (
            <AccordionItem border="none" mb={4} p={4}>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    color="white"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="2xl"
                    fontFamily="Kamikaze"
                    letterSpacing="0.2em"
                  >
                    {faq.q}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                fontSize="xl"
                pb={4}
                fontWeight="300"
                fontFamily="Rubik"
              >
                {faq.a}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Stack>
    </Flex>
  );
}
