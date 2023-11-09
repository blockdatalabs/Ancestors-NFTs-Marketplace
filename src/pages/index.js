import IconicArt from "../components/generators/IconicArt";
import BearsBuilders from "./BearsBuilders";
import CollectiblesAnkemons from "./CollectiblesAnkemons";
import FlowersMarket from "./FlowersMarket";
import GalleryArt from "./GalleryArt";
import Home from "./Home";
import ShareFlowers from "./ShareFlowers";

const routes = [
    { path: "/", component: <Home /> },
    { path: "/share-tree-flowers", component: <ShareFlowers /> },
    { path: "/flowers-market", component: <FlowersMarket /> },
    { path: "/bears-builders", component: <BearsBuilders /> },
    { path: "/ankemons-cards", component: <CollectiblesAnkemons /> },
    { path: "/iconic-art", component: <IconicArt /> },
    { path: "/art-gallery", component: <GalleryArt /> }
];

export default routes;
