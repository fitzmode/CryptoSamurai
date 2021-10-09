import React from "react";
import { injected } from "../connectors";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useEagerConnect, useInactiveListener } from "../hooks";

import useStepper from "use-stepper";
import { Box, Button, Text, Stack } from "@chakra-ui/react";

import { ContractContext } from "../context/ContractContext";

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
    <Box>
      <Stack align="center">
        <Text fontSize="5xl" color="white" fontWeight="500">
          Get Your Nonconformist Duck
        </Text>

        <Stack direction="row">
          <Button
            {...getDecrementProps()}
            style={{
              height: 80,
              width: 50,
              borderWidth: 0,
              fontSize: 40,
              background: "transparent",
              border: "none",
              borderRight: "1px solid #000",
            }}
          >
            -
          </Button>
          <input
            {...getInputProps()}
            style={{
              height: 80,
              width: 80,
              color: "#000",
              fontSize: 30,
              textAlign: "center",
              userSelect: "none",
              background: "transparent",
              cursor: "pointer",
              border: "none",
              borderWidth: 0,
            }}
            readOnly
          />
          <Button
            style={{
              height: 80,
              width: 50,
              borderWidth: 0,
              border: "none",
              fontSize: 40,
              background: "transparent",
              cursor: "pointer",
              borderLeft: "1px solid #000",
            }}
            {...getIncrementProps()}
          >
            +
          </Button>
        </Stack>

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
          <Box textAlign="center">
            <Text>Cost: 0.03 ETH + Gas Fees</Text>
            <Text>
              Total cost: {(0.03 * (count as any)).toFixed(2)} ETH + Gas Fees
            </Text>
          </Box>
        </Box>
        {!active && (
          <Button
            py={{ base: 10, md: 12 }}
            px={{ base: 14, md: 30 }}
            width={{ base: "90%", md: "40%" }}
            background="#264653"
            // bg={["white", "white", "primary.500", "primary.500"]}
            color="white"
            fontWeight="500"
            fontSize="30px"
            // disabled={disabled}
            onClick={connect}
          >
            Connect With Metamask
          </Button>
        )}

        {active && (
          <Button
            py={{ base: 10, md: 12 }}
            px={{ base: 14, md: 30 }}
            width={{ base: "90%", md: "40%" }}
            background="#264653"
            // bg={["white", "white", "primary.500", "primary.500"]}
            color="white"
            fontWeight="500"
            fontSize="30px"
            onClick={() => mint(count)}
          >
            Buy Now!
          </Button>
        )}
      </Stack>
    </Box>
  );
}

export default MintComponent;
