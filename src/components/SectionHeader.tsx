import React from "react";
import { Text } from "@chakra-ui/react";

function SectionHeader({ text, hero }: any) {
  return (
    <Text
      fontSize="4xl"
      lineHeight="40px"
      fontFamily="Anyconv"
      textTransform="uppercase"
      color={{ base: hero ? "#222" : "#fff", md: "#fff" }}
      textShadow={hero ? "#222" : ""}
      mb="4"
    >
      {text}
    </Text>
  );
}

export default SectionHeader;
