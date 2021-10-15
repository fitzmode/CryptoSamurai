import React from "react";
// import Swiper core and required modules

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import {
  Box,
  Flex,
  Image,
  IconButton,
  SimpleGrid,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import one from "../assets/1.png";
import two from "../assets/2.jpg";
import three from "../assets/3.png";
import four from "../assets/4.jpg";
import five from "../assets/5.png";
import six from "../assets/6.png";
import seven from "../assets/7.png";
import eight from "../assets/8.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gato from "../assets/Hipster.png";
import vercho from "../assets/Franchute.png";
import ducktist from "../assets/Krusty.png";
import franni from "../assets/1.png";

const examples = [
  { name: "Gato", role: "The father of the creature.", image: gato },
  {
    name: "Frani",
    role: "The artist, the one in charge on making your ducks look amazing.",
    image: franni,
  },
  {
    name: "Vercho",
    role: "We dont know really what he does. But we love Vercho!",
    image: vercho,
  },
  {
    name: "Ducktist",
    role: "He is in charge of the community growth on Discord and Twitter.",
    image: ducktist,
  },
];

function ExampleSection() {
  const prev = React.useRef();
  const next = React.useRef();
  return (
    <Flex flex={1} padding={{ base: 4, md: 28 }}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 2, md: 8 }}>
        {examples.map((each) => (
          <GridItem>
            <Image
              rounded={{ base: "md", md: "lg" }}
              height="100%"
              width="100%"
              src={each.image}
            />
          </GridItem>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default ExampleSection;
