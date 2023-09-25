import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.scss'
import ScrollToTop from "./ScrollToTop";
import { setupAuthWallet } from "@mintbase-js/wallet";
import { WalletContextProvider } from '@mintbase-js/react'
import '@near-wallet-selector/modal-ui/styles.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(            
    <WalletContextProvider
        contractAddress="woaps.mintbase1.near"
        network="mainnet"
    >
        <React.Fragment>
            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </React.Fragment>
    </WalletContextProvider>
);

