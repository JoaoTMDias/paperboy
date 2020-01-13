import React from "react";

export interface ITabItemProps {
	to: string;
	label: string;
	layout?: "vertical" | "horizontal";
	children?: React.ReactNode;
}
