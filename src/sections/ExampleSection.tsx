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
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const examples = [
  {
    image: one,
  },
  {
    image: two,
  },
  {
    image: three,
  },
  {
    image: four,
  },
  {
    image: five,
  },
  {
    image: six,
  },
  {
    image: seven,
  },
  {
    image: eight,
  },
];

function ExampleSection() {
  const prev = React.useRef();
  const next = React.useRef();
  return (
    <Flex width="100%">
      <SimpleGrid columns={{ base: 2, md: 4 }}>
        {examples.map((each) => (
          <GridItem>
            <Image height="100%" width="100%" src={each.image} />
          </GridItem>
        ))}
      </SimpleGrid>
      {/* <Box>
        <IconButton aria-label="left" icon={<FaArrowLeft />} ref={prev} />
        <Swiper
          spaceBetween={1}
          slidesPerView={5}
          style={{ maxWidth: "100%" }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          onInit={(swiper) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = prev.current;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = next.current;
            // swiper.navigation.init();
            swiper.navigation.update();
          }}
          pagination
        >
          {examples.map((each) => (
            <SwiperSlide key={each.image}>
              <Box height="300px" width="300px">
                <Image height="100%" width="100%" src={each.image} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={next}>Next</div>
      </Box> */}
    </Flex>
  );
}

export default ExampleSection;
