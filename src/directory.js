import React from "react";
import Home from "./container/home/home";
import FavoriteLocations from "./container/favoriteLocations/favoriteLocations";
//import SandboxDiego from './container/sandbox/sandboxDiego'

import { validationNotNeeded } from "./guard";

export const path = {
    home: "/home",
    favoriteLocations: '/favoriteLocations',
    default: "/home",
};

const newRoute = (path, defaultUrl, view, validator) => {
    return {
        path: path,
        defaultUrl: defaultUrl,
        view: view,
        validator: validator,
    };
};

export const generateRoutes = () => {
    let home = <Home />;
    let favoriteLocations = <FavoriteLocations />;

    let routes = [];

    routes.push(
        newRoute(path.home, path.default, home, () => validationNotNeeded()),
        newRoute(path.favoriteLocations, path.default, favoriteLocations, () => validationNotNeeded())
    );
    //routes.push(newRoute(path.sandoboxDiego,path.default,exampleDiego, () => validationNotNeeded()));

    return routes;
};
