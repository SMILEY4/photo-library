import {ImageList} from "photo-library-common-ui/src/ImageList";
import React from "react"
import "./electronApp.css"


const fetch = require("node-fetch");
const {ipcRenderer} = window.require('electron');

export class ElectronApp extends React.Component {


	constructor(props, context) {
		super(props, context);
		this.state = {
			images: []
		}
		this.updateImageList = this.updateImageList.bind(this);
	}


	componentDidMount() {
		this.updateImageList();
		ipcRenderer.on("UPDATED", (event) => {
			this.updateImageList();
		})
	}



	updateImageList() {
		fetch("http://localhost:8080/photolibrary/api/image")
		.then(data => data.json())
		.then(
			data => this.setState({images: data}),
			err => console.log(err)
		);
	}


	render() {
		return (
			<div>
				<ImageList images={this.state.images}/>
			</div>
		);
	}


}