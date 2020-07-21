import React, {Suspense} from 'react';
import {render} from 'react-dom';
import Loader from "../src/Components/Loader"
import Routes from "../src/routes"
import {Provider} from 'react-redux'
import configureStore from './store';

import 'antd/dist/antd.css';

export default function App() {
    return (
        <Suspense fallback={<Loader/>}>
            <Provider store={configureStore()}>
                <Routes/>
            </Provider>
        </Suspense>
    )
}

render(<App/>, document.getElementById('root'))
