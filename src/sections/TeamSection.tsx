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
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat px={{ base: 2, md: 4 }} py={"5"} rounded={"md"}>
      <Stack
        spacing={{ base: 5 }}
        w="100%"
        justify="center"
        align="center"
        width="100%"
      >
        <Box
          my={"auto"}
          alignContent={"center"}
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Box alignItems="center" justifyContent="center" display="flex">
            {icon}
          </Box>
        </Box>
        <Box pl={{ base: 2, md: 4 }}>
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
      px={{ base: 4, md: 28 }}
      color="white"
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
        MEET THE TEAM
      </chakra.h1>

      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 2, md: 4 }}>
        {team.map((member, idx) => (
          <StatsCard
            key={member.name}
            title={member.name}
            stat={member.role}
            icon={<Image boxSize="200px" rounded="lg" src={member.image} />}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
