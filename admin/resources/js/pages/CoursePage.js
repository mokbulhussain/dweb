import React, {Component,Fragment} from 'react';
import TopMenu from "../components/TopMenu/TopMenu";
import Sidebar from "../components/Sidebar/Sidebar";
import Course from "../components/Course/Course";

class CoursePage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Sidebar/>
                <Course/>
            </Fragment>
        );
    }
}

export default CoursePage;
