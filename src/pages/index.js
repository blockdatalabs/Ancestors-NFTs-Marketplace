import BearsBuilders from "./BearsBuilders";
import CollectiblesAnkemons from "./CollectiblesAnkemons";
import FlowersMarket from "./FlowersMarket";
import Home from "./Home";
import ShareFlowers from "./ShareFlowers";

const routes = [
    { path: "/", component: <Home /> },
    { path: "/share-tree-flowers", component: <ShareFlowers /> },
    { path: "/flowers-market", component: <FlowersMarket /> },
    { path: "/bears-builders", component: <BearsBuilders /> },
    { path: "/ankemons-cards", component: <CollectiblesAnkemons /> }
];

export default routes;
