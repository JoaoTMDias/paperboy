type ShareData = {
	title?: string;
	text?: string;
	url?: string;
};

export interface INavigator extends Navigator {
	share?: (data?: ShareData) => Promise<void>;
}
