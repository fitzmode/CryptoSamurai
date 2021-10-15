import React, { useContext } from "react";
import { Link } from "wouter";
import { Box, Flex, Text, Button, IconButton } from "@chakra-ui/react";
import Logo from "./Logo";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { Link as MenuLink } from "react-scroll";
import { ContractContext } from "../context/ContractContext";

export function NavLink({ path, label, children, ...rest }) {
  return (
    <MenuLink
      to={path}
      spy={true}
      offset={0}
      smooth={true}
      duration={500}
      className="nav-item"
      activeClass="active"
      {...rest}
    >
      {children}
    </MenuLink>
  );
}

const MenuItem = ({ children, isLast, to = "/", ...rest }: any) => {
  return (
    <NavLink
      to={to}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      activeClass="active"
      {...rest}
    >
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
        cursor="pointer"
        {...rest}
      >
        {children}
      </Text>
    </NavLink>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Header = (props: any) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);
  const { connected, active, connect, mint } = useContext(ContractContext);

  React.useEffect(() => {
    console.log(connect, "COnnect");
  }, []);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg={"transparent"}
      position="absolute"
      top="0"
      fontWeight="500"
      textShadow="0 0 3px #000"
      color={"white"}
      {...props}
    >
      <Flex align="center">
        <Logo
          // w="100px"
          // color={["white", "white", "primary.500", "primary.500"]}
          color="#e76f51"
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem external to="twitter">
            <IconButton
              bg="background.theme"
              rounded="full"
              size="lg"
              aria-label="Twitter"
              shadow="lg"
              onClick={() => {
                window.open("https://twitter.com/noncoducks", "_blank");
              }}
              icon={<FaTwitter color="#1DA1F2" size="26" />}
              _hover={{
                bg: "whiteAlpha",
              }}
            />
          </MenuItem>
          <MenuItem external to="discord">
            <IconButton
              bg="background.theme"
              shadow="lg"
              rounded="full"
              aria-label="Discord Link"
              size="lg"
              icon={<FaDiscord color="#1DA1F2" size="26" />}
              onClick={() => {
                window.open("https://discord.gg/EFV9qCTAxC", "_blank");
              }}
              _hover={{
                bg: "whiteAlpha",
              }}
            />
          </MenuItem>

          <MenuItem to="mint" isLast>
            {!(connected || active) && (
              <Button
                size="lg"
                rounded="full"
                px="16"
                color="black"
                bg="white"
                shadow="lg"
                _hover={{
                  bg: "whiteAlpha.500",
                }}
                onClick={connect}
              >
                Connect Wallet
              </Button>
            )}
            {active && (
              <Button
                size="lg"
                px="16"
                color="white"
                bg="black"
                rounded="none"
                _hover={{
                  bg: "black.alpha",
                }}
              >
                Mint
              </Button>
            )}
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
