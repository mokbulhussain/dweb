import React, {Component,Fragment} from 'react';
import TopMenu from "../components/TopMenu/TopMenu";
import Sidebar from "../components/Sidebar/Sidebar";
import ProjectCat from "../components/ProjectCat/ProjectCat";

class ProjectCatPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Sidebar/>
                <ProjectCat/>
            </Fragment>
        );
    }
}

export default ProjectCatPage;
