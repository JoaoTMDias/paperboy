import { IChosenNewsSourcesItems, IBasePageProps } from "data/interfaces/index";

export interface IHeaderTabs {
	id: string;
	label: string;
}

export interface INewsTabsProps extends IBasePageProps {
	id: string;
	items: IChosenNewsSourcesItems;
	style?: React.CSSProperties;
}

export interface INewsTabsState {
	trigger: number | undefined;
	tabBarHeader: HTMLDivElement | null;
	currentTabIndex: number;
	hasChangedTabs: boolean;
}

interface INewsArticleTabProps extends IBasePageProps {
	id: string;
	sources: string[];
}
