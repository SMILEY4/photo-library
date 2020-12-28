import React from "react";
import SCList from "./utilis/SCList";
import SCColorStrip from "./utilis/SCColorStrip";

export default {
	title: 'Miscellaneous/Colors',
}

export const All = () => (
	<SCList>
		<SCColorStrip colors={[
			"var(--background-color-0)",
			"var(--background-color-1)",
			"var(--base-color-0)",
			"var(--base-color-1)",
			"var(--base-color-2)",
		]}/>
		<SCColorStrip colors={[
			"var(--text-color-0)",
			"var(--text-color-1)",
			"var(--text-color-2)"
		]}/>
		<SCColorStrip colors={[
			"var(--gradient-info-0)",
			"var(--gradient-success-0)",
			"var(--gradient-error-0)",
			"var(--gradient-warn-0)",
			"var(--gradient-info-1)",
			"var(--gradient-success-1)",
			"var(--gradient-error-1)",
			"var(--gradient-warn-1)"
		]}/>
		<SCColorStrip colors={[
			"var(--overlay-color)"
		]}/>
	</SCList>
)