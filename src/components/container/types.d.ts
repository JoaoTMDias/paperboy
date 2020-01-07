// Component Props
export interface IContainerProps {
	isFixed?: boolean;
	fullheight?: boolean;
	fullwidth?: boolean;
	offsetTop?: string;
	theme?: any;
	title: string;
	style?: string | object;
	children: React.ReactNode;
}
