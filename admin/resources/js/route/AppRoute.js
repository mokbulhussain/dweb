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
import ServiceDetailPage from "../pages/ServiceDetailPage";
import CoursePage from "../pages/CoursePage";
import BlogCatPage from "../pages/BlogCatPage";
import BlogPage from "../pages/BlogPage";
import InfoPage from "../pages/InfoPage";
import ProjectCatPage from "../pages/ProjectCatPage";
import ProjectPage from "../pages/ProjectPage";
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
                <Route exact path="/serviceDetail">
                    <ServiceDetailPage/>
                </Route>
                <Route exact path="/course">
                    <CoursePage/>
                </Route>
                <Route exact path="/blogCat">
                    <BlogCatPage/>
                </Route>
                <Route exact path="/blog">
                    <BlogPage/>
                </Route>
                <Route exact path="/info">
                   <InfoPage/>
                </Route>
                <Route exact path="/projectCat">
                    <ProjectCatPage/>
                </Route>
                <Route exact path="/project">
                    <ProjectPage/>
                </Route>
            </Switch>
        );
    }
}

export default AppRoute;
