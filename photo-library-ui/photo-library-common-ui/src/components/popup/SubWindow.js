import {createPortal} from "react-dom";
import React from "react";

export class SubWindow extends React.Component {


	constructor(props, context) {
		super(props, context);
		this.state = {
			window: null
		}
	}


	componentDidMount() {
		this.nativeWindowObject = window.open('', this.props.windowId)
		this.nativeWindowObject.onunload = () => this.props.onClose()
		this.setState({window: this.nativeWindowObject})
	}


	componentWillUnmount() {
		if (this.props.closeOnUnmount) {
			this.nativeWindowObject.close()
		}
	}


	render() {
		return this.state.window
			? createPortal(this.props.children, this.state.window.document.body)
			: null
	}
}