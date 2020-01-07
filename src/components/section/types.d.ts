export interface IUISectionProps {
	theme?: any;
	layout?: "vertical" | "horizontal";
	title?: string;
	id: string;
	role?: string;
	grouped?: boolean;
	children?: React.ReactNode;
	style?: React.CSSProperties;
}
