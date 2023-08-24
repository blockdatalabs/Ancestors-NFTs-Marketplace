import Flowers from "../components/Evolutions/Flowers";
import Home from "./Home";

const routes = [
    { path: "/", component: <Home /> },
    { path: "/tree-flowers", component: <Flowers /> }
];

export default routes;
