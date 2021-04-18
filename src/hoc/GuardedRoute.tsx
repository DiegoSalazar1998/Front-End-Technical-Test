import React from 'react';
import { Route, Redirect } from "react-router-dom";

const GuardedRoute: React.ComponentType<any> = ({ component, validator, notAuthorizedRedirection, ...rest }) => {
    const comp = validator() ? component: <Redirect to={notAuthorizedRedirection} />;
    return <Route {...rest} > {comp}</Route>
}

export default GuardedRoute;