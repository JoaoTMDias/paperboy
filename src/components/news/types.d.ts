import { ListChildComponentProps } from "react-window";
import { INewsArticle } from "data/interfaces/index";

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

interface INewsArticleTabProps {
	sources: string[];
	latest: INewsArticle;
	dispatch: any;
}

interface IVirtualListProps extends ListChildComponentProps {
	key?: React.Key;
}
