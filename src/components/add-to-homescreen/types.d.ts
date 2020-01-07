export interface IAddToHomeScreenProps {
	isStandalone: boolean;
}

export interface IAddToHomeScreenWithInstallProps {
	id: string;
	title: string;
	subtitle?: string | null;
	isStandalone: boolean;
}
