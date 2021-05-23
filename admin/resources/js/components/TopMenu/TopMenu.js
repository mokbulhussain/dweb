import React, {Component,Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";

class TopMenu extends Component {
    render() {
        return (
            <Fragment>
                <Navbar collapseOnSelect expand="lg" className="topNav" >
                    <Navbar.Brand href="#home">Admin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="logout">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopMenu;
