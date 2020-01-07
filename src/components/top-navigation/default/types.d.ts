// Component Props
export enum ETopNavigationType {
	STICKY = "sticky",
	FIXED = "fixed",
	RELATIVE = "relative",
}

export interface ITopNavigationProps {
	isSticky?: boolean;
	shadow?: "default" | "hairline" | "none";
	style?: React.CSSProperties;
}

export interface ITopNavigationState {
	containerElement: HTMLElement | null;
	navigationElement: HTMLElement | null;
	rootContainer: {
		parentContainer: HTMLElement | null;
		threshold: number;
	};
	hasInitializedIntersectionObserver: boolean;
}
