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
      px={{ base: 2, md: 28 }}
      fontFamily="Space Mono"
      id="mint"
    >
      <Box bg="background.light" py={{ base: 4, md: 6 }}>
        <Stack
          w="100%"
          p={{ base: 2, md: 6 }}
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-around"
          fontSize="3xl"
          textAlign={{ base: "center" }}
        >
          <Box>
            <Stack direction="row" fontFamily="Anyconv" fontSize="2xl">
              <Text>TOTAL AMOUNT</Text>
              <Text fontWeight="bold">/ 2,500</Text>
            </Stack>
          </Box>
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Mint Opens Oct. 30!
            </Text>
          </Box>
          <Box>
            <Button
              size="lg"
              rounded="full"
              variant="outline"
              colorScheme="background.theme"
            >
              Mint Oct. 30!
            </Button>
          </Box>
        </Stack>
      </Box>

      <Stack mt="16" w="100%" textAlign={{ base: "center", md: "left" }}>
        <SectionHeader text="Who are the Cyber Samurais?" />

        <Text
          mt="8"
          color="white"
          fontSize="xl"
          w={{ base: "100%", md: "70%" }}
        >
          The Cyber Samurai's are a collection of programmatically generated
          NFTs on the Ethereum Blockchain. They are a collection of 2,500
          randomly generated Samurai's, with over 14+ total traits, all with
          different rarities. Some of the different traits include amour, masks,
          weapons, and more!
        </Text>
      </Stack>
    </Box>
  );
}

export default MintComponent;
