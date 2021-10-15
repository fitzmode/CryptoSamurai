import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/fonts/sakurata/font.css";
import "./assets/fonts/anyconv/font.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContractProvider } from "./context/ContractContext";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E",
  },
  secondary: {
    100: "#e76f51",
  },

  background: {
    theme: "#040d18",
    secondary: "#e76f51",
    light: "#98b7b1",
  },
};

const theme = extendTheme({ colors });

function getLibrary(provider: any): Web3Provider {
  console.log(provider, "Provider");
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <ContractProvider>
        <ChakraProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ChakraProvider>
      </ContractProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
