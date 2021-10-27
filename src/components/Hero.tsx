import React from "react";
import { Link } from "wouter";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import headerImage from "../assets/Header.png";
import mobileHeader from "../assets/Header.png";
import gif from "../assets/demo.gif";
import SectionHeader from "./SectionHeader";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}: any) {
  return (
    <Flex
      id="home"
      align="center"
      justify="center"
      width="100%"
      minH="100vh"
      color="#fff"
      px={{ base: 2, md: 28 }}
      background="background.theme"
      {...rest}
      backgroundImage={{
        base: `url(${mobileHeader})`,
        md: `url(${headerImage})`,
      }}
      backgroundPosition="bottom center"
      backgroundSize={{ base: "cover", md: "cover" }}
      backgroundRepeat="no-repeat"
      direction="row"
      textAlign={{ base: "center", md: "left" }}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        display="flex"
        h="100%"
        w="100%"
        align="center"
        justify="center"
      >
        <Stack align="center" justify="center" w={{ base: "100%", md: "50%" }}>
          <SectionHeader
            text="5,000 of the most battletested, strongest, and advanced samurai's in
        all the NFT world."
            hero
          />

          <Text fontSize="xl" color={{ base: "#fff", md: "#fff" }}>
            Each Cyber Samurai NFT is a unique ERC-721 digital collectible
            residing on the ETH blockchain, with over 14+ total traits all with
            different rarities.
          </Text>
          <Button
            size="lg"
            rounded="full"
            px="16"
            color="black"
            bg="white"
            shadow="lg"
            _hover={{
              bg: "whiteAlpha.500",
            }}
          >
            Mint Oct. 30
          </Button>
        </Stack>

        <Stack align="center" justify="center">
          <Image
            rounded="md"
            width={{ base: "300px", md: "450px" }}
            src={gif}
          />
        </Stack>
      </Stack>
    </Flex>
  );
}
