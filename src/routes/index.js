import configRoutes from "../config/routes";
import Home from "../pages/Home";
import { DefaultLayout } from "../layouts";

const publicRoutes = [
    { path: configRoutes.home, component: Home, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
