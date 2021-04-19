import "./App.css";
import { Provider } from "react-redux";
import GuardedRoute from "./hoc/GuardedRoute";
import store from "./data/store";
import { generateRoutes } from "./directory";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
    const directory = generateRoutes();

    const routes = directory.map((route) => (
        <GuardedRoute
            key={route.path}
            validator={route.validator}
            path={route.path}
            notAuthorizedRedirection={route.defaultUrl}
            component={route.view}
        ></GuardedRoute>
    ));

    return (
        <Provider store={store}>
            <Router>
                <Switch>{routes}</Switch>
            </Router>
        </Provider>
    );
}

export default App;
