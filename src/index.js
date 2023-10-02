import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.scss'
import ScrollToTop from "./ScrollToTop";
import { setupAuthWallet } from "@mintbase-js/wallet";
import { WalletContextProvider } from '@mintbase-js/react'
import '@near-wallet-selector/modal-ui/styles.css';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Polygon } from "@thirdweb-dev/chains";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(            
    <WalletContextProvider
        contractAddress="woaps.mintbase1.near"
        network="mainnet"
    >
        <ThirdwebProvider activeChain={Polygon} clientId="cdb37afed606732ba95f37d916ad79c2">
        <React.Fragment>
            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </React.Fragment>
        </ThirdwebProvider>
    </WalletContextProvider>
);

