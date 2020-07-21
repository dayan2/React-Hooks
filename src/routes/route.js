import {Route} from "react-router-dom";
import React from "react"
import Loader from "../Components/Loader"
import ErrorBoundary from "../Components/ErrorBoundary"

const RouteComponent = (props) => {
    return (
        <ErrorBoundary>
            { props.loading ? <Loader /> : null}
            <Route {...props} />
        </ErrorBoundary>
    )
}

export default React.memo(RouteComponent)
