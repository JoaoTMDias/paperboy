// Component Props
export interface IUIButtonProps {
	type: "button" | "submit" | "reset";
	text: string;
	label: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	disabled: boolean;
}

export interface IUIAnchorProps {
	to: string;
	text: string;
	label: string;
	disabled?: boolean;
}
