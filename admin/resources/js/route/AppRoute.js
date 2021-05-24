import React, {Component} from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import AboutUsPage from "../pages/AboutUsPage";
import Banner from "../components/Banner/Banner";
import BannerPage from "../pages/BannerPage";
import ServicePage from "../pages/ServicePage";
class AppRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/home">
                    <DashboardPage/>
                </Route>
                <Route exact path="/about">
                    <AboutUsPage/>
                </Route>
                <Route exact path="/banner">
                    <BannerPage/>
                </Route>
                <Route exact path="/service">
                    <ServicePage/>
                </Route>
            </Switch>
        );
    }
}

export default AppRoute;
