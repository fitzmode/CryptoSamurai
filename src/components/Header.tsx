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
      fontFamily="Sakurata"
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
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="team">Team</MenuItem>
          <MenuItem to="faq">FAQ</MenuItem>
          <MenuItem external to="twitter">
            <IconButton
              variant="ghost"
              aria-label="Twitter"
              onClick={() => {
                window.open("https://twitter.com/noncoducks", "_blank");
              }}
              icon={<FaTwitter color="#fff" size="26" />}
              _hover={{
                bg: "none",
              }}
            />
          </MenuItem>
          <MenuItem external to="discord">
            <IconButton
              variant="ghost"
              aria-label="Discord Link"
              leftIcon={<FaDiscord color="#fff" size="26" />}
              onClick={() => {
                window.open("https://discord.gg/EFV9qCTAxC", "_blank");
              }}
              _hover={{
                bg: "none",
              }}
            />
          </MenuItem>
          <MenuItem external to="opensea">
            <IconButton
              variant="ghost"
              aria-label="Discord Link"
              onClick={() => {
                window.open(
                  "https://opensea.io/collection/nonconformistducks",
                  "_blank"
                );
              }}
              leftIcon={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.0023 14C27.0023 21.7316 20.9572 28 13.5011 28C6.04508 28 0 21.7316 0 14C0 6.26844 6.04508 0 13.5011 0C20.9588 0 27.0023 6.26844 27.0023 14Z"
                    fill="white"
                  />
                  <path
                    d="M6.66091 14.4705L6.71915 14.3755L10.2313 8.67815C10.2827 8.59474 10.4033 8.60336 10.4422 8.69397C11.0289 10.0575 11.5352 11.7534 11.298 12.8092C11.1968 13.2436 10.9194 13.8318 10.6072 14.3755C10.567 14.4547 10.5226 14.5323 10.4755 14.6071C10.4533 14.6416 10.4158 14.6618 10.3756 14.6618H6.76354C6.66644 14.6618 6.60958 14.5525 6.66091 14.4705Z"
                    fill="#250b28"
                  />
                  <path
                    d="M22.3159 15.5291V16.4309C22.3159 16.4827 22.2854 16.5287 22.241 16.5488C21.9691 16.6697 21.0384 17.1127 20.6514 17.6708C19.6637 19.0962 18.9091 21.1344 17.2224 21.1344H10.1855C7.69153 21.1344 5.67049 19.0315 5.67049 16.4366V16.3532C5.67049 16.2842 5.72457 16.2281 5.79116 16.2281H9.71394C9.7916 16.2281 9.84847 16.3029 9.84156 16.382C9.8138 16.6466 9.86097 16.9171 9.98164 17.163C10.2147 17.6535 10.6974 17.9599 11.2189 17.9599H13.1609V16.3878H11.2411C11.1427 16.3878 11.0844 16.2698 11.1413 16.1864C11.1621 16.1533 11.1857 16.1188 11.2106 16.08C11.3924 15.8124 11.6517 15.3967 11.9097 14.9235C12.0859 14.6042 12.2565 14.2633 12.3938 13.921C12.4216 13.8591 12.4438 13.7958 12.466 13.7339C12.5034 13.6246 12.5423 13.5225 12.57 13.4204C12.5978 13.3341 12.6199 13.2435 12.6421 13.1586C12.7073 12.868 12.7351 12.5602 12.7351 12.2409C12.7351 12.1158 12.7295 11.9849 12.7184 11.8598C12.7129 11.7231 12.6962 11.5865 12.6796 11.4498C12.6685 11.329 12.6477 11.2096 12.6255 11.0845C12.5978 10.9018 12.5589 10.7206 12.5145 10.5379L12.4993 10.4689C12.466 10.3437 12.4382 10.2243 12.3994 10.0992C12.2898 9.70651 12.1636 9.32392 12.0304 8.96577C11.9819 8.82336 11.9264 8.68672 11.8709 8.55008C11.7891 8.3444 11.7058 8.15741 11.6295 7.98048C11.5907 7.89992 11.5574 7.82656 11.5241 7.75178C11.4867 7.66691 11.4478 7.58204 11.409 7.50151C11.3813 7.43966 11.3493 7.38212 11.3271 7.32458L11.09 6.87006C11.0567 6.8082 11.1121 6.73484 11.1773 6.75355L12.6616 7.17066H12.6657C12.6685 7.17066 12.6699 7.17212 12.6713 7.17212L12.8668 7.2282L13.0819 7.29151L13.1609 7.3145V6.39971C13.1609 5.95812 13.5021 5.59998 13.9238 5.59998C14.1347 5.59998 14.3261 5.68916 14.4634 5.83442C14.6007 5.97971 14.6867 6.1782 14.6867 6.39971V7.75754L14.8449 7.80355C14.8574 7.80789 14.8698 7.81363 14.8809 7.82225C14.9198 7.85246 14.9753 7.89704 15.046 7.95172C15.1015 7.99773 15.1611 8.05384 15.2333 8.11138C15.3761 8.23074 15.5468 8.38466 15.734 8.56159C15.7839 8.60617 15.8325 8.6522 15.8769 8.69823C16.1183 8.93125 16.3887 9.20453 16.6468 9.50659C16.7189 9.59146 16.7896 9.67776 16.8617 9.76836C16.9339 9.86043 17.0102 9.95104 17.0767 10.0417C17.1641 10.1625 17.2585 10.2876 17.3403 10.4185C17.3791 10.4804 17.4235 10.5437 17.461 10.6055C17.5664 10.7709 17.6593 10.9421 17.7481 11.1133C17.7856 11.1924 17.8244 11.2787 17.8577 11.3635C17.9562 11.5922 18.0339 11.8252 18.0838 12.0583C18.099 12.1086 18.1101 12.1633 18.1157 12.2122V12.2237C18.1323 12.2927 18.1379 12.3661 18.1434 12.4409C18.1656 12.6796 18.1545 12.9184 18.1046 13.1586C18.0838 13.2607 18.0561 13.3571 18.0228 13.4592C17.9895 13.557 17.9562 13.6592 17.9132 13.7555C17.83 13.9555 17.7315 14.1554 17.6149 14.3424C17.5775 14.4114 17.5331 14.4848 17.4887 14.5538C17.4402 14.6272 17.3902 14.6962 17.3458 14.7638C17.2848 14.8501 17.2196 14.9407 17.153 15.0213C17.0934 15.1062 17.0324 15.191 16.9658 15.2658C16.8728 15.3795 16.7841 15.4873 16.6911 15.5909C16.6357 15.6585 16.576 15.7275 16.515 15.7894C16.4553 15.8584 16.3943 15.9203 16.3388 15.9778C16.2459 16.0742 16.1682 16.149 16.103 16.2108L15.9504 16.3561C15.9282 16.3763 15.8991 16.3878 15.8686 16.3878H14.6867V17.9599H16.1737C16.5066 17.9599 16.8229 17.8376 17.0781 17.6132C17.1655 17.5341 17.547 17.1918 17.9978 16.6754C18.013 16.6582 18.0325 16.6452 18.0547 16.6395L22.1619 15.4082C22.2382 15.3852 22.3159 15.4456 22.3159 15.5291Z"
                    fill="#250b28"
                  />
                </svg>
              }
              _hover={{
                bg: "none",
              }}
            />
          </MenuItem>
          <MenuItem to="mint" isLast>
            {!(connected || active) && (
              <Button
                size="md"
                px="16"
                rounded="none"
                color={["primary.500", "primary.500", "white", "white"]}
                bg={["white", "white", "primary.500", "primary.500"]}
                _hover={{
                  bg: [
                    "primary.100",
                    "primary.100",
                    "primary.600",
                    "primary.600",
                  ],
                }}
                onClick={connect}
              >
                Connect Wallet
              </Button>
            )}
            {active && (
              <Button
                size="md"
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
