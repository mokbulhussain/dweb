import React, {Component,Fragment} from 'react';
import TopMenu from "../components/TopMenu/TopMenu";
import Sidebar from "../components/Sidebar/Sidebar";
import Info from "../components/Info/Info";

class InfoPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Sidebar/>
                <Info/>
            </Fragment>
        );
    }
}

export default InfoPage;
