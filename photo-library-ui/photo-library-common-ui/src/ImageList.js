import React from "react"
import "./imageList.css"


export function ImageList(props) {

	return (
		<div className="image-list">
			{
				props.images.map(entry => renderImageEntry(entry))
			}
		</div>
	);


	function renderImageEntry(entry) {
		return (
			<div className="image-entry">
				<div className="image-container">
					<img src={`data:image/${entry.type};base64,${entry.thumbnail}`} alt={entry.name}/>
				</div>
				<div className="image-data">
					<div className="image-name">
						{entry.name}
					</div>
					<div className="image-path">
						{entry.path}
					</div>
					<div className="image-type">
						{entry.type}
					</div>
				</div>
			</div>
		);
	}

}