import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
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
            editModal:false,
            rowid:'',
            title:'',
            imgValue:false,
            show:false,
        }

        this.handleShow=this.handleShow.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.handleForm=this.handleForm.bind(this);
        this.title=this.title.bind(this);
        this.editModal=this.editModal.bind(this);
        this.EdithandleClose=this.EdithandleClose.bind(this);
        this.EdithandleForm=this.EdithandleForm.bind(this);
        this.delete=this.delete.bind(this);
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

    title(event){
        let title=event.target.value;
        this.setState({title:title})
    }

    handleForm(){
        event.preventDefault();

        let url='/addBlogCategory';

        let data=new FormData();
        data.append('title',this.state.title);
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


    // Edit Course

    editModal(){
        if(this.state.rowid){
            let ethis=this;
            Axios.post('/editBlogCat', {
                id: this.state.rowid
            })
                .then(function(response){
                    if(response.status==200){
                        ethis.setState({editDatalist:response.data});
                        ethis.setState({title:ethis.state.editDatalist[0].title})
                        ethis.setState({editModal:true})
                    }
                })

        }

    }

    EdithandleClose(){
        this.setState({editModal:false})
    }




    EdithandleForm(){
        event.preventDefault();


            let url = '/updateBlogCat';

            let data = new FormData();
            data.append('id', this.state.rowid);
            data.append('title', this.state.title);


            let config = {
                headers: {'content-type': 'multipart/form-data'}
            };

            let rthis = this;

            Axios.post(url, data, config).then(function (response) {
                if (response.data) {
                    rthis.componentDidMount();
                    toast("Data Update Successfully");
                    rthis.setState({editModal: false})
                }
            })
                .catch(function (error) {
                    console.log(error);
                });


    }


    delete(){
        if(this.state.rowid){
            if(confirm("Do you want to delete")){
                let ethis=this;
                Axios.post('/deleteBlogCat', {
                    id: this.state.rowid
                })
                    .then(function(response){
                        if(response.status==200){
                            ethis.componentDidMount();
                            toast("Data Delete Successfully");
                        }
                    })
            }
        }
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
                        <Modal.Title><Icofont icon="list"/><span className="ml-2">Add Blog Category</span></Modal.Title>
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


                {/*Data Edit Model Start*/}
                <Modal show={this.state.editModal} onHide={this.EdithandleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title><Icofont icon="list"/><span className="ml-2">Edit / View Service</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.EdithandleForm}>


                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" defaultValue={this.state.title} onChange={this.title} required />
                            </Form.Group>

                            <Button variant="primary" type="submit" className={"mt-3"}>
                                Update
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.EdithandleClose}>
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
