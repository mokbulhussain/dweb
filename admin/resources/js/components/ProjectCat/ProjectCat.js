import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import BootstrapTable from "react-bootstrap-table-next";
import Axios from "axios";
import Icofont from "react-icofont";

class ProjectCat extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            rowid:'',
            title:'',
            show:false,
        }

        this.handleShow=this.handleShow.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.handleForm=this.handleForm.bind(this);
        this.title=this.title.bind(this);
    }

    componentDidMount() {

        let cthis=this;
        Axios.get('/getProjectCat')
            .then(function (response) {
                cthis.setState({datalist:response.data});
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

    handleForm(event){
        event.preventDefault();

        let title=this.state.title;

        let url='/addProjectCat'

        let data = new FormData();
        data.append('title', title);

        let rthis=this;


        let config = {
            headers: { 'content-type': 'multipart/form-data' }
        };

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
                this.setState({rowid:row['project_cat_id']})
            }
        };

        const data = this.state.datalist;
        const columns = [

            {
                dataField: 'title',
                text: 'Title'
            },


        ];



        return (
            <Fragment>
                <Container className={"mainContent"}>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <ToastContainer />
                                    Blog Category
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
                                    <BootstrapTable keyField='blog_cat_id' data={ data } columns={ columns } selectRow={ selectRow }>
                                    </BootstrapTable>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                {/*Data Add Model Start*/}
                <Modal show={this.state.show} onHide={this.handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title><Icofont icon="list"/><span className="ml-2">Add Portfolio Category</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleForm}>


                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" defaultValue={this.state.title} onChange={this.title} required />
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

export default ProjectCat;
