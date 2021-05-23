import React, {Component,Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {ToastContainer} from "react-toastify";

class Banner extends Component {
    render() {
        return (
            <Fragment>
                <Container className={"mainContent"}>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                   Banner
                                </Card.Header>
                                <Card.Body>
                                    <h2>Hello</h2>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Banner;
