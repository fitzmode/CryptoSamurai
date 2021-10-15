import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";

export default function LandingLayout(props: any) {
  return (
    <Flex
      direction="column"
      bg="background.theme"
      align="center"
      position="relative"
      fontFamily="Space Mono"
      {...props}
    >
      <Header />
      {props.children}
    </Flex>
  );
}
