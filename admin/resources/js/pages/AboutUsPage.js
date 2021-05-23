import React, {Component,Fragment} from 'react';
import TopMenu from "../components/TopMenu/TopMenu";
import Sidebar from "../components/Sidebar/Sidebar";
import AboutUs from "../components/AboutUs/AboutUs";

class AboutUsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Sidebar/>
                <AboutUs/>
            </Fragment>
        );
    }
}

export default AboutUsPage;
