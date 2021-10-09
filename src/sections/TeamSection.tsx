import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Stack,
  Avatar,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import gato from "../assets/Hipster.png";
import vercho from "../assets/Franchute.png";
import ducktist from "../assets/Krusty.png";
import franni from "../assets/1.png";

const team = [
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

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
  side: any;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon, side } = props;
  return (
    <Stat px={{ base: 2, md: 4 }} py={"5"} rounded={"md"}>
      <Stack
        spacing={{ base: 5 }}
        direction={side as any}
        justify="center"
        align="center"
        width="100%"
      >
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            bg="#e76f51"
          >
            {icon}
          </Box>
        </Box>
        <Box pl={{ base: 2, md: 4 }} textAlign="left" maxW="40%">
          <StatNumber fontSize={"5xl"} mb="3" fontWeight={"medium"}>
            {title}
          </StatNumber>
          <StatLabel fontWeight={"medium"}>{stat}</StatLabel>
        </Box>
      </Stack>
    </Stat>
  );
}

export default function TeamSection() {
  return (
    <Box
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      background="black"
      color="white"
      fontFamily="Kamikaze"
      id="team"
      width="100%"
    >
      <chakra.h1
        textAlign={"center"}
        py={10}
        fontWeight={"bold"}
        fontSize="5xl"
        letterSpacing="0.2rem"
        textShadow="2px 2px 8px #711717"
      >
        THE Senseis
      </chakra.h1>

      <SimpleGrid
        columns={{ base: 1, md: 1 }}
        padding={{ base: 8, md: 12 }}
        spacing={{ base: 5, lg: 8 }}
      >
        {team.map((member, idx) => (
          <StatsCard
            key={member.name}
            side={idx % 2 == 0 ? "row" : "row-reverse"}
            title={member.name}
            stat={member.role}
            icon={<Image boxSize="200px" rounded="none" src={member.image} />}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
