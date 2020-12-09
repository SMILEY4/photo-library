import {ImageList} from "photo-library-common-ui/src/ImageList";
import React from "react"
import "./webapp.css"


export class WebApp extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            images: []
        }
        this.updateImageList = this.updateImageList.bind(this);
    }


    componentDidMount() {
        this.updateImageList();
    }


    updateImageList() {
        console.log("UPDATE")
        fetch("http://localhost:8080/photolibrary/api/images")
        .then(data => data.json())
        .then(
            data => this.setState({images: data}),
            err => console.log(err)
        );
    }


    render() {
        return (
            <div>
                <div className="toolbar">
                    <div onClick={this.updateImageList}>
                        Refresh
                    </div>
                </div>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

