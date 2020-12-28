import React from "react";
import "./storyComponents.css"

export default function SCList({title, children}) {
	return (
		<div className="sc-list">
			{
				title
					? title
					: null
			}
			{children}
		</div>
	)
}
