import {
  Badge,
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
// import "swiper/swiper-bundle.css";?
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: false,
  centerMode: false,

  speed: 500,
  slidesToShow: 3.2,
  slidesToScroll: 1,
  initialSlide: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

SwiperCore.use([Navigation]);

const activations = [
  {
    text: "Nonconformist Ducks Community Launch in Twitter & Discord. Some Nonconformist Ducks will be airedropped to our early adpoters and supporters. We will put focus on social media in order to fly to the moon quickly.",
    icon: "",
    progress: "10%",
  },
  {
    text: "Minting available at a price of 0.03 ETH + Gas fee. Be nonconformist, buying 1 is a will regret!!",
    icon: "",
    progress: "20%",
  },
  {
    text: "When 25% of Nonconformist Ducks sells out, we will airdrop randomly 3 Ducks to the holders. Also we are going to select 5 members of the discord group to be moderators and will be rewarded with a an airdropped Duck.",
    icon: "",
    progress: "30%",
  },
  {
    text: "When Discord Hits 2500 Subscribers  3 Nonconformist ducks will be raffled among discord members",
    icon: "",
    progress: "35%",
  },
  {
    text: 'When 50% of Nonconformist Ducks sells out, we will offer the double to 5 "floor price” ducks from holders in order to raise the floor.  Being nonconformist is mooning, so fuck the floor!',
    icon: "",
    progress: "40%",
  },
  {
    text: "When Twitter Hits 5000 followers  3 Nonconformist ducks will be given in a twitter competition.",
    icon: "",
    progress: "50%",
  },
  {
    text: "When all the Nonconformist Ducks get sold holder ducks will randomly start brooding eggs that will growth into new super rare ducks species.We are nonconformist so why having one duck when you can have and army!",
    icon: "",
    progress: "100%",
  },
];

interface StatsCardProps {
  text: string;
  progress: string;
  icon: ReactNode;
  isFirst: boolean;
  idx: number;
}
function StatsCard(props: StatsCardProps) {
  const { text, icon, progress, isFirst, idx } = props;
  return (
    <Stat
      px={{ base: 3, md: 4 }}
      p={"4"}
      //   shadow={"xl"}
      border={"2px solid rgba(255,255,255,0.07)"}
      rounded={"4px"}
      background="linear-gradient(139.13deg, rgba(255, 255, 255, 0.05) 0.04%, rgba(255, 255, 255, 0) 99.96%)"
      backgroundBlendMode="soft-light"
      height="250px"
      width="300px"
      // mr={{ base: 5, md: 10 }}
      align="center"
      display="inline-block"
      mr="18px"
    >
      <Stack spacing={{ base: 4 }} align={{ base: "center", md: "center" }}>
        <Badge
          alignItems="center"
          justifyContent="center"
          borderRadius="20px"
          display="inline-flex"
          height="30px"
          background="rgba(90, 96, 137, 1)"
          color="white"
          px={{ base: 6, md: 8 }}
        >
          {progress}
        </Badge>

        <Box>
          <StatLabel fontWeight={"medium"}>{text}</StatLabel>
        </Box>
      </Stack>
    </Stat>
  );
}

export default function RoadmapSection() {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  return (
    <Box
      mx={"auto"}
      background="black"
      backgroundBlendMode="overlay, overlay, overlay, normal, normal"
      py={{ base: 20, md: 28 }}
      px={{ base: 2, md: 17 }}
      color="white"
      width="100%"
      textAlign={{ base: "center" }}
      fontFamily="inherit"
    >
      <Stack
        alig="center"
        px={{ base: "1rem", md: "8rem" }}
        py={{ base: 5, md: 10 }}
      >
        <chakra.h1
          fontWeight={"bold"}
          fontSize="5xl"
          position="relative"
          fontFamily="Sakurata"
        >
          Our Kata
        </chakra.h1>
        <Text fontSize="16px">(ROADMAP)</Text>
      </Stack>

      <Box px={{ base: 0, md: 28 }}>
        <VerticalTimeline>
          {activations.map((each) => (
            <VerticalTimelineElement
              key={each.progress}
              iconStyle={{
                background: "#000",
                color: "#fff",
                boxShadow: "0 0 0 5px #711717",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Rubik",
                fontSize: 20,
                fontWeight: 700,
              }}
              icon={<Text children={each.progress} />}
              contentStyle={{
                background: "#711717",
                border: "8px solid #711717",
                boxShadow: "none",
                textAlign: "left",
                borderRadius: "0px !important",
              }}
              children={<Text color="#fff">{each.text}</Text>}
            />
          ))}
        </VerticalTimeline>
      </Box>
    </Box>
  );
}
