import React, {Component,Fragment} from 'react';
import Axios from "axios";
import {Button, Card, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import BootstrapTable from "react-bootstrap-table-next";
import Icofont from "react-icofont";
import ReactQuill from "react-quill";

class Project extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            title:'',
            url:'',
            img:'',
            imgValue:false,
            projectCatId:'',
            projectCatList:[],
        }

        this.handleShow=this.handleShow.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.handleForm=this.handleForm.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.url=this.url.bind(this);
        this.title=this.title.bind(this);
        this.files=this.files.bind(this);
    }

    componentDidMount() {
        let cthis=this;

        Axios.get('/getProject')
            .then(function (response) {
                cthis.setState({datalist:response.data});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })


        Axios.get('/getProjectCat')
            .then(function (response) {
                cthis.setState({projectCatList:response.data});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }


    handleShow(){
        this.setState({show:true});
    }

    handleClose(){
        this.setState({show:false});

    }


    title(event){

        let title=event.target.value;
        this.setState({title:title})
    }

    url(event){

        let purl=event.target.value;
        this.setState({url:purl})
    }


    files(event){

        let image=event.target.files[0];
        this.setState({img:image})
    }


    handleChange(event){
        let cid=event.target.value;
        this.setState({projectCatId:cid})

    }


    handleForm(event) {
        event.preventDefault();


        let url='/addProject'

        let data = new FormData();
        data.append('project_cat_id', this.state.projectCatId);
        data.append('title', this.state.title);
        data.append('url', this.state.url);
        data.append('img', this.state.img);


        let config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

        let rthis=this;


        Axios.post(url, data,config).then(function (response) {
            if(response.data){

                rthis.componentDidMount();
                toast("Data insert Successfully");
                rthis.setState({show:false})
            }
        })
            .catch(function (error) {
                console.log(error);
            });



    }






    render() {
        const selectRow = {
            mode: 'radio',
            onSelect: (row, isSelect, rowIndex) => {
                this.setState({rowid:row['project_id']})
            }
        };

        const data = this.state.datalist;
        const columns = [


            {
                dataField: 'project_title',
                text: 'Title'
            },

            {
                dataField: 'title',
                text: 'Category'
            },

            {
                dataField: 'url',
                text: 'Link',

            },

            {
                dataField: 'image',
                text: 'Image',
                formatter: priceFormatter
            }

        ];

        function priceFormatter(cell,row){

            return (

                <img  className={"tableImg"} src={cell}/>
            );
        }

        return (
            <Fragment>
                <Container className={"mainContent"}>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <ToastContainer />
                                    Course
                                </Card.Header>
                                <Card.Body>
                                    <Button variant="primary" className="m-1" onClick={this.handleShow}>
                                        Add
                                    </Button>
                                    <Button variant="primary" onClick={this.editModal}>
                                        Update / View
                                    </Button>

                                    <Button variant="primary" className="m-1" onClick={this.delete}>
                                        Delete
                                    </Button>
                                    <BootstrapTable keyField='project_id' data={ data } columns={ columns } selectRow={ selectRow }>
                                    </BootstrapTable>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>


                {/*Data Add Model Start*/}
                <Modal show={this.state.show} onHide={this.handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title><Icofont icon="list"/><span className="ml-2">Add Course</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleForm}>


                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" onChange={this.title} />

                            </Form.Group>


                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Url</Form.Label>
                                <Form.Control type="text" onChange={this.url} />

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" onChange={this.files}  required/>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">

                                <Form.Label>Project Category</Form.Label>

                                <Form.Control defaultValue={this.state.projectCatId} as="select"  onChange={this.handleChange}>
                                    <option>Select Project Category</option>

                                    {
                                        this.state.projectCatList.map((d)=>

                                            <option value={d.project_cat_id} >{d.title}{d.project_cat_id}</option>

                                        )
                                    }

                                </Form.Control>


                            </Form.Group>

                            <Button variant="primary" type="submit" className={"mt-3"}>
                                Add
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
                {/*Data Add Model End*/}
            </Fragment>
        );
    }
}

export default Project;
