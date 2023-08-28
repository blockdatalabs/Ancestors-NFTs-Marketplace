import FlowersMarket from "./FlowersMarket";
import Home from "./Home";
import ShareFlowers from "./ShareFlowers";

const routes = [
    { path: "/", component: <Home /> },
    { path: "/share-tree-flowers", component: <ShareFlowers /> },
    { path: "/flowers-market", component: <FlowersMarket /> }
];

export default routes;
