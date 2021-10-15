import React from "react";
import { Text } from "@chakra-ui/react";

function SectionHeader({ text }) {
  return (
    <Text
      fontSize="4xl"
      lineHeight="40px"
      fontFamily="Anyconv"
      textTransform="uppercase"
      color="#fff"
      mb="4"
    >
      {text}
    </Text>
  );
}

export default SectionHeader;
