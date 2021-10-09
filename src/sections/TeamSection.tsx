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
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      border={"1px solid"}
      borderColor="#e76f51"
      rounded={"md"}
    >
      <Stack spacing={{ base: 5 }}>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Box
            boxSize="120px"
            alignItems="center"
            justifyContent="center"
            display="flex"
            bg="#e76f51"
            borderRadius="50%"
          >
            {icon}
          </Box>
        </Box>
        <Box pl={{ base: 2, md: 4 }} textAlign="center">
          <StatNumber fontSize={"2xl"} mb="3" fontWeight={"medium"}>
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
    >
      <chakra.h1
        textAlign={"center"}
        py={10}
        fontWeight={"bold"}
        fontSize="5xl"
        letterSpacing="0.2rem"
      >
        THE Senseis
      </chakra.h1>

      <SimpleGrid
        columns={{ base: 1, md: 4, lg: 4 }}
        padding={{ base: 8, md: 12 }}
        spacing={{ base: 5, lg: 8 }}
      >
        {team.map((member) => (
          <StatsCard
            key={member.name}
            title={member.name}
            stat={member.role}
            icon={<Avatar boxSize="120px" src={member.image} />}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
