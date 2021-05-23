import React, {Component,Fragment} from 'react';
import {NavLink} from "react-router-dom";
import {Nav} from "react-bootstrap";
import Icofont from 'react-icofont';



class Sidebar extends Component {
    render() {
        return (
            <Fragment>
                <div className="sidebar">
                    <h1>Admin</h1>
                    <Nav defaultActiveKey="/home" className="flex-column sidebarNav">
                        <NavLink exact to="/home"><Icofont icon="bell"/> Dashboard</NavLink>
                        <NavLink exact to="/about"><Icofont icon="adjust"/> About</NavLink>
                        <NavLink exact to="/banner"><Icofont icon="package"/> Banner</NavLink>
                    </Nav>
                </div>
            </Fragment>
        );
    }
}

export default Sidebar;
