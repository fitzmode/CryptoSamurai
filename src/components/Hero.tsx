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
    <SimpleGrid
      id="home"
      align="center"
      justify="center"
      width="100%"
      columns={2}
      // justify={{ base: "center", md: "space-around", xl: "space-between" }}
      // direction={{ base: "column-reverse", md: "row" }}
      // wrap="no-wrap"
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
      <Box height="100%">
        <Stack align="center" justify="center" h="100%" w="100%">
          <SectionHeader
            text="5,000 of the most battletested, strongest, and advanced samurai's in
        all the NFT world."
          />
          <Text fontSize="xl">
            Each Cyber Samurai NFT is a unique ERC-721 digital collectible
            residing on the ETH blockchain, with over 50+ total traits all with
            different rarities.
          </Text>
        </Stack>
      </Box>

      <Stack align="center" justify="center">
        <Image src={gif} />
      </Stack>
    </SimpleGrid>
  );
}
