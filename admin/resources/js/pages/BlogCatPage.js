import React, {Component,Fragment} from 'react';
import TopMenu from "../components/TopMenu/TopMenu";
import Sidebar from "../components/Sidebar/Sidebar";
import BlogCat from "../components/BlogCat/BlogCat";

class BlogCatPage extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu/>
                <Sidebar/>
                <BlogCat/>
            </Fragment>
        );
    }
}

export default BlogCatPage;
