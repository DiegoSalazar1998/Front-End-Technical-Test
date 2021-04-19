import React from 'react'
import Home from './container/home/home'
//import SandboxDiego from './container/sandbox/sandboxDiego'

import {
    validationNotNeeded
} from './guard'

export const path = {
    home : '/home',
    default : '/', 
}

const newRoute = (path,defaultUrl, view, validator) => {
    return {
        path : path,
        defaultUrl : defaultUrl, 
        view : view,
        validator : validator 
    }
}

export const generateRoutes = () => {
    let home =<Home/>
    //let exampleDiego = <SandboxDiego/>
    
    let routes = []

    routes.push(newRoute(path.home,path.default,home, () => validationNotNeeded()));
    //routes.push(newRoute(path.sandoboxDiego,path.default,exampleDiego, () => validationNotNeeded()));

    return routes;
}