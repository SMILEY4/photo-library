import React, {Component} from "react";
import ButtonFilled from "photo-library-common-ui/src/components/button/normal/ButtonFilled";
import TextFieldGhost from "photo-library-common-ui/src/components/textfield/TextFieldGhost";
import FixedTextFieldGhost from "photo-library-common-ui/src/components/textfield/FixedTextFieldGhost";
import SmallButtonFilled from "photo-library-common-ui/src/components/button/normal/SmallButtonFilled";
import Dialog from "photo-library-common-ui/src/components/modals/Dialog";

const electron = window.require('electron');

export default class CreateLibraryDialog extends Component {


	constructor(props, context) {
		super(props, context);
		this.state = {
			libraryName: "",
			targetDir: "",
			libraryNameValid: undefined,
			targetDirValid: undefined,
		}
		this.selectTargetDir = this.selectTargetDir.bind(this)
		this.createLibrary = this.createLibrary.bind(this)
	}


	selectTargetDir() {
		electron.remote.dialog
			.showOpenDialog({
				title: "Select target directory",
				buttonLabel: "Select",
				properties: [
					"openDirectory",
					"createDirectory"
				]
			})
			.then((result) => {
				if (!result.canceled) {
					this.setState({targetDir: result.filePaths[0]})
				}
			});
	}


	createLibrary() {

		const nameValid = this.state.libraryName.length > 0
		const targetDirValid = this.state.targetDir.length > 0

		if (nameValid && targetDirValid) {
			this.props.onCreate(this.state.libraryName, this.state.targetDir)
		} else {
			this.setState({
				libraryNameValid: nameValid,
				targetDirValid: targetDirValid
			})
		}

	}


	render() {

		const onCancel = this.props.onCancel;

		return (
			<Dialog show={true}
					addCloseButton={true}
					title="Create new Library"
					onClose={onCancel}
					footerActions={[
						<ButtonFilled key="cancel" onClick={onCancel}>Cancel</ButtonFilled>,
						<ButtonFilled key="create" onClick={() => this.createLibrary()} type="info">Create</ButtonFilled>
					]}>

				<div className="dialog-create-new-content">

					<TextFieldGhost
						bg="1"
						type={this.state.libraryNameValid===false ? "error" : undefined}
						placeholder="Library Name"
						onChange={(value) => this.setState({libraryName: value})}
					/>

					<FixedTextFieldGhost
						bg="1"
						type={this.state.targetDirValid===false ? "error" : undefined}
						placeholder="No Directory Selected"
						initialValue={this.state.targetDir}>
						<SmallButtonFilled onClick={this.selectTargetDir}>
							Browse
						</SmallButtonFilled>
					</FixedTextFieldGhost>


				</div>

			</Dialog>
		)
	}
}
