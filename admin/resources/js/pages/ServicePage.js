import React, {Component,Fragment} from 'react';
import TopMenu from "../components/TopMenu/TopMenu";
import Sidebar from "../components/Sidebar/Sidebar";
import Service from "../components/Service/Service";

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Sidebar/>
                <Service/>
            </Fragment>
        );
    }
}

export default ServicePage;
