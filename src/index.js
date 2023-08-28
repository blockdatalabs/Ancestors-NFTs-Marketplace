import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.scss'
import ScrollToTop from "./ScrollToTop";
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect } from "@thirdweb-dev/react";
import { Polygon } from "@thirdweb-dev/chains";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(            
    <ThirdwebProvider
        activeChain={Polygon} 
        clientId="cdb37afed606732ba95f37d916ad79c2"
    >
        <React.Fragment>
            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </React.Fragment>
    </ThirdwebProvider>
);

