import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import ReactQuill from "react-quill";
import Axios from "axios";

class ServiceDetail extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            serviceDetailId:'',
            title:'',
            detail:'',
            img:'',
            imgvalue:false,
        }
        this.title=this.title.bind(this);
        this.files=this.files.bind(this);
        this.detail=this.detail.bind(this);
        this.handleForm=this.handleForm.bind(this);

    }

    componentDidMount() {
        let cthis=this;
        Axios.get('/getServiceDetail')
            .then(function(response){
                cthis.setState({datalist:response.data});
                cthis.setState({serviceDetailId:cthis.state.datalist[0].id});
                cthis.setState({title:cthis.state.datalist[0].title});
                cthis.setState({detail:cthis.state.datalist[0].detail});
                cthis.setState({img:cthis.state.datalist[0].img});
                console.log(cthis.state.datalist)
            })
            .catch(function(error){
                console.log(error);
            })
    }



    title(event){

        let title=event.target.value;
        this.setState({title:title})
    }

    detail(event){

        // let detail=event.target.value;
        this.setState({detail:event})
    }


    files(event){

        this.setState({imgvalue:true})

        let image=event.target.files[0];

        this.setState({img:image})

    }




    handleForm(event) {
        event.preventDefault();


        if(this.state.imgvalue){
            let id=this.state.serviceDetailId;
            let title = this.state.title;
            let detail = this.state.detail;
            let img = this.state.img;

            let url='/updateServiceDetailWithImg'

            let data = new FormData();
            data.append('id', id);
            data.append('title', title);
            data.append('detail', detail);
            data.append('img', img);

            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rethis=this;


            Axios.post(url, data,config).then(function (response) {
                if(response.data){
                    rethis.componentDidMount();
                    toast("Data Update Successfully");
                }
            })
                .catch(function (error) {
                    console.log(error);
                });

        }

        else{

            let id=this.state.serviceDetailId;
            let title = this.state.title;
            let detail = this.state.detail;

            let url='/updateServiceDetail';

            let data = new FormData();
            data.append('id', id);
            data.append('title', title);
            data.append('detail', detail);


            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rethis=this;

            Axios.post(url, data,config).then(function (response) {
                if(response.data){
                    rethis.componentDidMount();
                    toast("Data Update Successfully");
                }
            })
                .catch(function (error) {
                    console.log(error);
                });
        }

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
                                    About Us
                                </Card.Header>
                                <Card.Body>
                                    <Form onSubmit={this.handleForm}>
                                        <Row>
                                            <Col lg={6} md={6}>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Title</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.title} onChange={this.title} />
                                                </Form.Group>
                                                <ReactQuill value={this.state.detail} onChange={this.detail}/>
                                            </Col>
                                            <Col lg={6}>
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

export default ServiceDetail;
