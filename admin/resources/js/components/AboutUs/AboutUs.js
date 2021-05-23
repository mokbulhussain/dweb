import React, {Component,Fragment} from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AboutUs extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            aboutId:'',
            title:'',
            detail:'',
            img:'',
            imageUrl:'',
            imgvalue:false,
        }
        this.title=this.title.bind(this);
        this.files=this.files.bind(this);
        this.detail=this.detail.bind(this);
        this.handleForm=this.handleForm.bind(this);

    }

    componentDidMount() {
        let cthis=this;
        Axios.get('/getAbout')
            .then(function(response){
                cthis.setState({datalist:response.data});
                cthis.setState({aboutId:cthis.state.datalist[0].about_id});
                cthis.setState({title:cthis.state.datalist[0].title});
                cthis.setState({detail:cthis.state.datalist[0].detail});
                cthis.setState({img:cthis.state.datalist[0].img});
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

        let imageUrl=URL.createObjectURL(event.target.files[0]);

        this.setState({imageUrl:imageUrl})

        let image=event.target.files[0];

        this.setState({img:image})

    }




    handleForm(event) {
        event.preventDefault();


        if(this.state.imgvalue){
            let about_id=this.state.aboutId;
            let title = this.state.title;
            let detail = this.state.detail;
            let img = this.state.img;

            let url='/updateAboutWithImg'

            let data = new FormData();
            data.append('about_id', about_id);
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

            let about_id=this.state.aboutId;
            let title = this.state.title;
            let detail = this.state.detail;

            let url='/updateAbout';

            let data = new FormData();
            data.append('about_id', about_id);
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

            let imgValue=`storage/uploads/about/${this.state.img}`;



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
                                              <Image src={imgValue} className={"aboutImg"}/>
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

export default AboutUs;
