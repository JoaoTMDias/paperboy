// Component Props
export interface IUIButtonProps extends React.HTMLProps<HTMLButtonElement> {
	flavour?: "primary" | "secondary";
	text: string;
	label?: string;
}

export interface IUIAnchorProps {
	to: string;
	text: string;
	label: string;
	disabled?: boolean;
}
