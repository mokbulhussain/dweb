import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import {ToastContainer} from "react-toastify";
import Axios from "axios";

class Info extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            infoId:'',
            phone1:'',
            phone2:'',
            address:'',
            office_time:'',
            office_day:'',
            email1:'',
            email2:'',
            facebook:'',
            twitter:'',
            instagram:'',
            linkdin:'',
            img:'',
            imgvalue:false,
        }

    }



    componentDidMount() {
        let cthis=this;
        Axios.get('/getInfo')
            .then(function(response){
                cthis.setState({datalist:response.data});
                cthis.setState({infoId:cthis.state.datalist[0].id});
                cthis.setState({phone1:cthis.state.datalist[0].phone1});
                cthis.setState({phone2:cthis.state.datalist[0].phone2});
                cthis.setState({address:cthis.state.datalist[0].address});
                cthis.setState({office_time:cthis.state.datalist[0].office_time});
                cthis.setState({office_day:cthis.state.datalist[0].office_day});
                cthis.setState({email1:cthis.state.datalist[0].email1});
                cthis.setState({email2:cthis.state.datalist[0].email2});
                cthis.setState({facebook:cthis.state.datalist[0].facebook});
                cthis.setState({twitter:cthis.state.datalist[0].twitter});
                cthis.setState({instagram:cthis.state.datalist[0].instagram});
                cthis.setState({linkdin:cthis.state.datalist[0].linkdin});
                cthis.setState({img:cthis.state.datalist[0].logo});
            })
    }

    render() {
        return (
            <Fragment>
                <Container className={"mainContent"}>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <ToastContainer />
                                    Banner
                                </Card.Header>
                                <Card.Body>
                                    <Form onSubmit={this.handleForm}>
                                        <Row>
                                            <Col lg={6} md={6}>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Phone 1</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.phone1} onChange={this.phone1} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Phone 2</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.phone2} onChange={this.phone2} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>address </Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.address} onChange={this.address} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Office Time </Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.office_time} onChange={this.office_time} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Office Day </Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.office_day} onChange={this.office_day} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Email 1 </Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.email1} onChange={this.email1} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Email 2 </Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.email2} onChange={this.email2} />
                                                </Form.Group>

                                            </Col>
                                            <Col lg={6}>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>FB Page</Form.Label>
                                                    <Form.Control type="text" onChange={this.facebook} defaultValue={this.state.facebook} />

                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Twitter</Form.Label>
                                                    <Form.Control type="text" onChange={this.twitter} defaultValue={this.state.twitter} />

                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Linkedin</Form.Label>
                                                    <Form.Control type="text" onChange={this.linkdin} defaultValue={this.state.linkdin} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Instagram</Form.Label>
                                                    <Form.Control type="text" onChange={this.instagram} defaultValue={this.state.instagram} />
                                                </Form.Group>

                                                <Image src={this.state.img} className={"aboutImg"}/>
                                                <Form.Group controlId="formBasicPassword">
                                                    <Form.Label>Image</Form.Label>
                                                    <Form.Control type="file" onChange={this.files}  />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Button variant="primary" type="submit" className={"mt-3"}>
                                            Update
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Info;
