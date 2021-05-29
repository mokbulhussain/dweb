import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {ToastContainer} from "react-toastify";
import BootstrapTable from "react-bootstrap-table-next";
import Axios from "axios";

class Dashboard extends Component {
     constructor() {
         super();
         this.state={
             datalist:[],
         }
     }

    componentDidMount() {
        let cthis=this;
        Axios.get('/getStartProject')
            .then(function (response) {
                cthis.setState({datalist:response.data});
                console.log(cthis.state.datalist);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
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
                dataField: 'name',
                text: 'Name'
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
                                        view
                                    </Button>

                                    <Button variant="primary" className="m-1" onClick={this.delete}>
                                        Delete
                                    </Button>
                                    <BootstrapTable keyField='id' data={ data } columns={ columns } selectRow={ selectRow }>
                                    </BootstrapTable>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Dashboard;
