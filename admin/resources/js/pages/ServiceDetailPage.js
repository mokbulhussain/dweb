import React, {Component,Fragment} from 'react';
import TopMenu from "../components/TopMenu/TopMenu";
import Sidebar from "../components/Sidebar/Sidebar";
import ServiceDetail from "../components/ServiceDetail/ServiceDetail";

class ServiceDetailPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Sidebar/>
                <ServiceDetail/>
            </Fragment>
        );
    }
}

export default ServiceDetailPage;
