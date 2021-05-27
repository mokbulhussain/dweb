import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import BootstrapTable from "react-bootstrap-table-next";
import Axios from "axios";
import Icofont from "react-icofont";
import ReactQuill from "react-quill";

class Blog extends Component {
    constructor() {
        super();
        this.state={
            datalist:[],
            editDatalist:[],
            categoryList:[],
            blogCatId:'',
            rowid:'',
            title:'',
            detail:'',
            img:'',
            imgValue:false,
            show:false,
        }
        this.handleShow=this.handleShow.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.handleForm=this.handleForm.bind(this);
        this.detail=this.detail.bind(this);
        this.title=this.title.bind(this);
        this.files=this.files.bind(this);
        this.blogCat=this.blogCat.bind(this);
        this.editModal=this.editModal.bind(this);
        this.EdithandleClose=this.EdithandleClose.bind(this);
        this.EdithandleForm=this.EdithandleForm.bind(this);
        this.delete=this.delete.bind(this);
    }


    componentDidMount() {
        let cthis=this;
        Axios.get('/getBlog')
            .then(function (response) {
                cthis.setState({datalist:response.data});
                console.log(cthis.state.datalist);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })


        Axios.get('/getBlogCat')
            .then(function (response) {
                cthis.setState({categoryList:response.data});
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



    files(event){
        this.setState({imgvalue:true})
        let image=event.target.files[0];
        this.setState({img:image})
        console.log("change");
    }

    detail(event){
        this.setState({detail:event})
        console.log(this.state.detail);
    }


    blogCat(event){
        let cid=event.target.value;
        this.setState({blogCatId:cid})

    }

    handleForm(event) {
        event.preventDefault();


        let url='/addBlog'

        let data = new FormData();

        data.append('title', this.state.title);
        data.append('blogCatId', this.state.blogCatId);
        data.append('detail', this.state.detail);
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




    // Edit Course

    editModal(){
        if(this.state.rowid){
            let ethis=this;
            Axios.post('/editBlog', {
                id: this.state.rowid
            })
                .then(function(response){
                    if(response.status==200){
                        ethis.setState({editDatalist:response.data});
                        ethis.setState({title:ethis.state.editDatalist[0].blog_title})
                        ethis.setState({detail:ethis.state.editDatalist[0].detail})
                        ethis.setState({blogCatId:ethis.state.editDatalist[0].blog_cat_id})
                        ethis.setState({img:ethis.state.editDatalist[0].img})
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

        if(this.state.imgValue==true){

            let url='/updateBlogWithImg';

            let data=new FormData();
            data.append('id', this.state.rowid);
            data.append('blogCatId', this.state.blogCatId);
            data.append('title',this.state.title);
            data.append('detail',this.state.detail);
            data.append('image',this.state.img);


            let config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            let rthis=this;

            Axios.post(url, data,config).then(function (response) {
                if(response.data){
                    rthis.componentDidMount();
                    toast("Data Update Successfully");
                    rthis.setState({editModal:false})
                }
            })
                .catch(function (error) {
                    console.log(error);
                });


        }

        else {

            let url = '/updateBlog';

            let data = new FormData();
            data.append('id', this.state.rowid);
            data.append('blogCatId', this.state.blogCatId);
            data.append('title', this.state.title);
            data.append('detail', this.state.detail);


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

    }


    delete(){
        if(this.state.rowid){
            if(confirm("Do you want to delete")){
                let ethis=this;
                Axios.post('/deleteBlog', {
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
                this.setState({rowid:row['blog_id']})
                console.log(this.state.rowid);
            }
        };

        const data = this.state.datalist;
        const columns = [

            {
                dataField: 'blog_title',
                text: 'Title'
            },

            {
                dataField: 'title',
                text: 'Category'
            },

            {
                dataField: 'date',
                text: 'Date'
            },

            {
                dataField: 'img',
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
                                    Blog
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
                                    <BootstrapTable keyField='blog_id' data={ data } columns={ columns } selectRow={ selectRow }>
                                    </BootstrapTable>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                {/*Data Add Model Start*/}
                <Modal show={this.state.show} onHide={this.handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title><Icofont icon="list"/><span className="ml-2">Add Blog</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleForm}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" defaultValue={this.state.title} onChange={this.title} required />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Detail</Form.Label>
                            <ReactQuill  onChange={this.detail} required/>
                            </Form.Group>



                            <Form.Group controlId="formBasicEmail">

                                <Form.Label>Blog Category</Form.Label>

                                <Form.Control  as="select"  onChange={this.blogCat}>
                                    <option>Select Blog Cat</option>

                                    {
                                        this.state.categoryList.map((d)=>

                                            <option value={d.blog_cat_id}>{d.title}</option>

                                        )
                                    }

                                </Form.Control>


                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" onChange={this.files}  required/>
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

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Detail</Form.Label>
                                <ReactQuill value={this.state.detail}  onChange={this.detail} required/>
                            </Form.Group>



                            <Form.Group controlId="formBasicEmail">

                                <Form.Label>Blog Category</Form.Label>

                                <Form.Control defaultValue={this.state.blogCatId} as="select"  onChange={this.blogCat}>
                                    <option>Select Blog Cat</option>

                                    {
                                        this.state.categoryList.map((d)=>

                                        <option value={d.blog_cat_id} selected={this.state.blogCatId == d.blog_cat_id}>{d.title}</option>


                                        )
                                    }

                                </Form.Control>


                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" onChange={this.files} />
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

export default Blog;
