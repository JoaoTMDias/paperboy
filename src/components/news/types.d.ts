import { IChosenNewsSourcesItems } from "data/interfaces/index";
import { Dispatch, AnyAction } from "redux";

export interface IHeaderTabs {
	id: string;
	label: string;
}

export interface INewsTabsProps {
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

interface INewsArticleTabActions {
	getAllLatestNewsFromSource: (source: string[]) => (dispatch: Dispatch<AnyAction>) => void;
}

interface INewsArticleTabProps {
	sources: string[];
}
