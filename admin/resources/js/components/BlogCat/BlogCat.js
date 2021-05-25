import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {ToastContainer} from "react-toastify";
import Axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import Icofont from "react-icofont";
import ReactQuill from "react-quill";

class BlogCat extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            editDatalist:[],
            rowid:'',
            title:'',
            detail:'',
            img:'',
            imgValue:false,
            show:false,
        }
        this.handleShow=this.handleShow.bind(this);
        this.handleClose=this.handleClose.bind(this);
    }

    componentDidMount() {
        let cthis=this;
        Axios.get('/getBlogCat')
            .then(function (response) {
                cthis.setState({datalist:response.data});
                console.log(cthis.state.datalist);
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




    render() {

        const selectRow = {
            mode: 'radio',
            onSelect: (row, isSelect, rowIndex) => {
                this.setState({rowid:row['blog_cat_id']})
                console.log(this.state.rowid);
            }
        };

        const data = this.state.datalist;
        const columns = [

            {
                dataField: 'title',
                text: 'Title'
            },

            {
                dataField: 'image',
                text: 'Image',
                formatter: imageFormatter

            }

        ];

        function imageFormatter(cell,row){

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
                        <Modal.Title><Icofont icon="list"/><span className="ml-2">Add Course</span></Modal.Title>
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

export default BlogCat;
