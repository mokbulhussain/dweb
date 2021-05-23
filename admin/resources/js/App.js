import React, {Component,Fragment} from 'react';
import {Container} from "react-bootstrap";

import {BrowserRouter} from "react-router-dom";
import AppRoute from "./route/AppRoute";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <AppRoute/>
            </BrowserRouter>
        );
    }
}

export default App;
