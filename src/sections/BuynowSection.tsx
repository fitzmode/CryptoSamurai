import React from "react";
import { injected } from "../connectors";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useEagerConnect, useInactiveListener } from "../hooks";

import useStepper from "use-stepper";
// import web3 from "../ethereum/web3";
import detectEthereumProvider from "@metamask/detect-provider";

import { Box, Button, Text, Stack } from "@chakra-ui/react";

import { ContractContext } from "../context/ContractContext";
import SectionHeader from "../components/SectionHeader";

const min = 1;
const defaultValue = 1;
const max = 10;

enum ConnectorNames {
  Injected = "Injected",
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
};
function MintComponent() {
  const [supply, setTotalSupply] = React.useState(0);
  const { mint, connect } = React.useContext(ContractContext);
  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>();
  const [instance, setInstance] = React.useState<any>(null);

  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);
  const currentConnector = connectorsByName["Injected"];
  const activating = currentConnector === activatingConnector;
  const connected = currentConnector === connector;
  const disabled = !triedEager || !!activatingConnector || connected || !!error;

  function validValueClosestTo(desiredNumericValue) {
    return String(Math.min(max, Math.max(desiredNumericValue, min)));
  }

  function integerReducer(state, action) {
    const integerValue = parseInt(state.value, 10);
    switch (action.type) {
      case useStepper.actionTypes.increment: {
        return { value: validValueClosestTo(integerValue + 1) };
      }
      case useStepper.actionTypes.decrement: {
        return { value: validValueClosestTo(integerValue - 1) };
      }
      case useStepper.actionTypes.coerce: {
        if (Number.isNaN(integerValue)) {
          return { value: String(defaultValue) };
        }
        const newValue = validValueClosestTo(integerValue);
        if (newValue !== state.value) {
          return { value: newValue };
        }
        return state;
      }
      default:
        return useStepper.defaultReducer(state, action);
    }
  }

  const {
    getInputProps,
    getIncrementProps,
    getDecrementProps,
    value: count,
  } = useStepper({
    min,
    max,
    defaultValue,
    stateReducer: integerReducer,
  });

  return (
    <Box
      width="100%"
      px={{ base: 8, md: 28 }}
      fontFamily="Space Mono"
      id="mint"
    >
      <Box bg="background.light" py={{ base: 4, md: 6 }}>
        <Stack
          w="100%"
          p={{ base: 4, md: 6 }}
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-around"
          fontSize="3xl"
        >
          <Box>
            <Stack direction="row">
              <Text>TOTAL AMOUNT</Text>
              <Text fontWeight="bold">/ 3, 333</Text>
            </Stack>
          </Box>
          <Box>
            <Text>All ninjas have been sold out!</Text>
          </Box>
          <Box>
            <Button
              size="lg"
              rounded="full"
              variant="outline"
              colorScheme="background.theme"
            >
              Buy On OpenSea
            </Button>
          </Box>
        </Stack>
      </Box>
      <Stack mt="16">
        <SectionHeader text="Who are the Cyber Samurais?" />

        <Text mt="8" color="white" fontSize="xl" w="70%">
          The Cyber Samurai's are a collection of programmatically generated
          NFTs on the Ethereum Blockchain. They are a collection of 5,000
          randomly generated Samurai's, with over 50+ total traits, all with
          different rarities. Some of the different traits include amour, masks,
          weapons, and more!
        </Text>

        {/* {active && (
          <Stack direction="row" align="center" justify="center">
            <Button
              {...getDecrementProps()}
              background="#264653"
              borderRadius="50px"
              color="#fff"
              size="lg"
            >
              -
            </Button>
            <input
              {...getInputProps()}
              style={{
                height: 80,
                width: 80,
                color: "#fff",
                fontSize: 40,
                textAlign: "center",
                userSelect: "none",
                background: "transparent",
                cursor: "pointer",
                border: "none",
                borderWidth: 0,
                fontFamily: "Rubik",
                fontWeight: 700,
              }}
              readOnly
            />

            <Button
              background="#264653"
              borderRadius="30px"
              color="#fff"
              size="lg"
              {...getIncrementProps()}
            >
              +
            </Button>
          </Stack>
        )}

        {active && (
          <Box
            style={{
              paddingLeft: 40,
              fontSize: "1.2rem",
              display: "flex",
              justifyContent: "center",

              alignItems: "center",
              height: 80,
            }}
          >
            <Box textAlign="center" color="red" letterSpacing="0.15em">
              <Text>Cost: 0.03 ETH + Gas Fees</Text>
              <Text fontSize="2xl">
                Total cost: {(0.03 * (count as any)).toFixed(2)} ETH + Gas Fees
              </Text>
            </Box>
          </Box>
        )}
        {!active && (
          <Button
            py={{ base: 10, md: 12 }}
            px={{ base: 14, md: 30 }}
            width={{ base: "90%", md: "40%" }}
            background="#000"
            // bg={["white", "white", "primary.500", "primary.500"]}
            color="white"
            fontWeight="500"
            fontSize="30px"
            rounded="none"
            // disabled={disabled}
            onClick={connect}
          >
            Connect Wallet
          </Button>
        )}

        {active && (
          <Button
            py={{ base: 10, md: 12 }}
            px={{ base: 14, md: 30 }}
            width={{ base: "90%", md: "40%" }}
            background="#264653"
            color="white"
            fontWeight="500"
            rounded="none"
            fontSize="30px"
            onClick={() => mint(count)}
          >
            Mint Now
          </Button>
        )} */}
      </Stack>
    </Box>
  );
}

export default MintComponent;
