import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.scss'
import ScrollToTop from "./ScrollToTop";
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect } from "@thirdweb-dev/react";
import { WalletContextProvider } from '@mintbase-js/react'
import '@near-wallet-selector/modal-ui/styles.css';
import { Polygon } from "@thirdweb-dev/chains";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(            
    <WalletContextProvider>  
        <React.Fragment>
            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </React.Fragment>
    </WalletContextProvider>
);

