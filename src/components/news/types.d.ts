/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

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
