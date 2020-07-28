type ShareData = {
	title?: string;
	text?: string;
	url?: string;
};

export interface INavigator extends Navigator {
	share?: (data?: ShareData) => Promise<void>;
}

declare namespace JSX {
	interface IntrinsicElements {
		"pwa-install": any;
	}
}
