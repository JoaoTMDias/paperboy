import { ListChildComponentProps } from "react-window";
import { INewsArticle } from "data/interfaces/index";
import { Dispatch, AnyAction } from "redux";

export interface IHeaderTabs {
	id: string;
	label: string;
}

export interface INewsTabsProps {
	id: string;
	hasHeader: boolean;
	tabsHeader: IHeaderTabs[];
	style?: React.CSSProperties;
	platform: string;
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

interface IVirtualListProps extends ListChildComponentProps {
	index: number;
	key?: React.Key;
	style: React.CSSProperties;
}
