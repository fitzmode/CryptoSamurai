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
import headerImage from "../assets/bg.jpg";
import mobileHeader from "../assets/bg.jpg";

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
      // justify={{ base: "center", md: "space-around", xl: "space-between" }}
      // direction={{ base: "column-reverse", md: "row" }}
      // wrap="no-wrap"
      minH="100vh"
      px={8}
      background="background.theme"
      {...rest}
      backgroundImage={{
        base: `url(${mobileHeader})`,
        md: `url(${headerImage})`,
      }}
      backgroundPosition="bottom center"
      backgroundSize={{ base: "cover", md: "cover" }}
      backgroundRepeat="no-repeat"
    >
      <Text
        textAlign="center"
        fontFamily="Sakurata"
        fontSize={{ md: "8xl", base: "xl" }}
        textShadow="0px 0px 5px#fff"
        color="#000"
      >
        CryptoSamurais
      </Text>
    </Flex>
  );
}
