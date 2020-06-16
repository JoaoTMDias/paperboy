export interface IUISectionProps {
	layout?: "vertical" | "horizontal";
	title?: string;
	id: string;
	role?: string;
	grouped?: boolean;
	amount?: number;
	children?: React.ReactNode;
	style?: React.CSSProperties;
}
