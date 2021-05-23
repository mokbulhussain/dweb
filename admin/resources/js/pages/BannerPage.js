import React, {Component,Fragment} from 'react';
import TopMenu from "../components/TopMenu/TopMenu";
import Sidebar from "../components/Sidebar/Sidebar";
import Banner from "../components/Banner/Banner";

class BannerPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Sidebar/>
                <Banner/>
            </Fragment>
        );
    }
}

export default BannerPage;
