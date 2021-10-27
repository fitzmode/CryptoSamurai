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
import SectionHeader from "../components/SectionHeader";

const team = [
  { name: "Nick", role: "Owner", image: gato },
  {
    name: "$Matt",
    role: "Marketing",
    image: franni,
  },
  {
    name: "Alex",
    role: "Community",
    image: vercho,
  },
  {
    name: "Fitz",
    role: "Developer",
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
        <Box
          w="100%"
          textAlign={{ base: "center", md: "left" }}
          fontSize={"2xl"}
        >
          <StatNumber fontWeight="normal">{title}</StatNumber>
          <StatLabel fontSize={"lg"}>{stat}</StatLabel>
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
      px={{ base: 2, md: 28 }}
      color="white"
      id="team"
      width="100%"
    >
      <Stack align="center">
        <SectionHeader text="Meet the team" />
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 2, md: 4 }}>
          {team.map((member, idx) => (
            <StatsCard
              key={member.name}
              title={member.name}
              stat={member.role}
              icon={
                <Image
                  boxSize={{ md: "200px", base: "100%" }}
                  rounded="lg"
                  src={member.image}
                />
              }
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
