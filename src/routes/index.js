import React from "react"
import {Router, Switch} from "react-router-dom"
import {render} from 'react-dom';
import Login from "../Components/Login"
import Dashboard from "../Components/Dashboard";
import RouteComponent from "./route"
import history from "./history";

const routes = [
    {
        path: "/",
        exact: true,
        isPrivate: false,
        loading: false,
        component: () => <Login/>
    },
    {
        path: "/dashboard",
        exact: false,
        isPrivate: false,
        loading: false,
        component: () => <Dashboard/>
    }
]

export default function Routes() {

    return (
        <Router history={history}>
            <Switch>
                {routes.map((route, index) => (
                    <RouteComponent
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        loading={route.loading}
                        component={route.component}
                    />
                ))}
            </Switch>
        </Router>
    )
}

