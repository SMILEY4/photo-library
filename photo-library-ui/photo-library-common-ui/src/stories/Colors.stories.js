import Button from "../components/button/Button";
import React from "react";
import SCList from "./utilis/SCList";
import SCColorStrip from "./utilis/SCColorStrip";

export default {
	title: 'Miscellaneous/Colors',
	component: Button,
}

export const All = () => (
	<SCList>
		<SCColorStrip colors={[
			"var(--background-color-0)",
			"var(--background-color-1)",
			"var(--base-color-0)",
			"var(--base-color-1)",
			"var(--base-color-2)",
			""
		]}/>
		<SCColorStrip colors={[
			"var(--text-color-0)",
			"var(--text-color-1)",
			"var(--text-color-2)"
		]}/>
		<SCColorStrip colors={[
			"linear-gradient(155deg, #7bdbff, #4855ff)",
			"linear-gradient(155deg, #a8e063, #56ab2f)",
			"linear-gradient(155deg, #ff512f, #dd2476)",
			"linear-gradient(155deg, #f6d365, #fda085)"
		]}/>
	</SCList>
)