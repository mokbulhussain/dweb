import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import Axios from "axios";
import ReactQuill from "react-quill";

class Banner extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            bannerId:'',
            title:'',
            subTitle:'',
            img:'',
            imgvalue:false,
        }

        this.title=this.title.bind(this);
        this.subTitle=this.subTitle.bind(this);
        this.files=this.files.bind(this);
        this.handleForm=this.handleForm.bind(this);
    }

    componentDidMount() {
        let cthis=this;
        Axios.get('/getBanner')
            .then(function(response){
                cthis.setState({datalist:response.data});
                cthis.setState({bannerId:cthis.state.datalist[0].banner_id});
                cthis.setState({title:cthis.state.datalist[0].title});
                cthis.setState({subTitle:cthis.state.datalist[0].subtitle});
                cthis.setState({img:cthis.state.datalist[0].img});
            })
    }


    title(event){

        let title=event.target.value;
        this.setState({title:title})
    }

    subTitle(event){

        let subtitle=event.target.value;
        this.setState({subTitle:subtitle})
    }


    files(event){
        this.setState({imgvalue:true})
        let image=event.target.files[0];
        this.setState({img:image})
    }

    handleForm(event) {
        event.preventDefault();


        if(this.state.imgvalue){

            let url='/updateBannerWithImg'

            let data = new FormData();
            data.append('banner_id', this.state.bannerId);
            data.append('title', this.state.title);
            data.append('subtitle', this.state.subTitle);
            data.append('img', this.state.img);




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



            let url='/updateBanner'

            let data = new FormData();
            data.append('banner_id', this.state.bannerId);
            data.append('title', this.state.title);
            data.append('subtitle', this.state.subTitle);
            data.append('img', this.state.img);


            let rethis=this;

            Axios.post(url, data).then(function (response) {
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
                                   Banner
                                </Card.Header>
                                <Card.Body>
                                    <Form onSubmit={this.handleForm}>
                                        <Row>
                                            <Col lg={6} md={6}>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Title</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.title} onChange={this.title} />
                                                </Form.Group>

                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Sub Title</Form.Label>
                                                    <Form.Control type="text" defaultValue={this.state.subTitle} onChange={this.subTitle} />
                                                </Form.Group>

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

export default Banner;
