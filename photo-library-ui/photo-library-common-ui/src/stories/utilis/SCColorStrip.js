import React from "react";
import "./storyComponents.css"

export default function SCColorStrip({colors}) {
	return (
		<div className="sc-color-strip">
			{
				colors.map(color => {
					return <div style={{background: color}}/>
				})
			}
		</div>
	)
}
