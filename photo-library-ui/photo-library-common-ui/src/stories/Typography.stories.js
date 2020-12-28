import React from "react";
import SCList from "./utilis/SCList";

export default {
	title: 'Miscellaneous/Typography',
}

export const All = () => (
	<SCList>
		<h1>Heading 1</h1>
		<h2>Heading 2</h2>
		<h3>Heading 3</h3>
		<h4>Heading 4</h4>
		<h5>Heading 5</h5>
		<div>Regular</div>
		<div className="caption">Caption</div>
	</SCList>
)