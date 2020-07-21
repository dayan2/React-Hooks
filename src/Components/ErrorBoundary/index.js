import React, {Component} from "react"

import "./ErrorBoundary.scss"

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo)
    }

    render() {

        if (this.state.hasError) {
            return (
                <>
                    <div className="error-boundary-wrapper">
                        <h1>Hmm.</h1>
                        <p>It seems that you're lost in a perpetual black hole. Let us help guide you out and get you
                            back
                            home.</p>
                        <div className="buttons">
                            <a href="#">back</a>
                            <a href="#">home</a>
                            <br/>
                            <span>Help me out</span>
                        </div>
                    </div>
                    <div className="space">
                        <div className="blackhole"></div>
                        <div className="ship"></div>
                    </div>
                </>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
