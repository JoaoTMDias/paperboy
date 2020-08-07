/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Libraries
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Logger, withMemo } from "helpers/index.helpers";
import { INewsPageHeaderItems } from "data/interfaces";
import { TabsContainer, TabsWrapper } from "./styles";
import { INewsTabsProps } from "./types";
import LatestNewsCategoryTab from "./latest-category";
import LatestNewsTab from "./latest-news-tab";
import { TabList } from "./tabs/tablist";

/**
 * @description Returns the hash...without the hash, just the name :)
 * @author João Dias
 * @date 2019-04-02
 * @returns
 */
function getHash(): string {
	const hash = window.location.hash.slice(1);
	return hash;
}

const DEFAULT_TABS: INewsPageHeaderItems = {
	id: "latest",
	sources: [],
};

/**
 * @description News Page Tab
 * @date 2019-01-17
 * @class NewsTabs
 * @extends {React.Component<INewsTabsProps, any>}
 */
export const NewsTabs: React.FC<INewsTabsProps> = ({ id, items, location }) => {
	const { current: tabs } = useRef([
		{
			...DEFAULT_TABS,
			sources: [...items.latest],
		},
		...items.tabs,
	]);
	const [currentTab, setCurrentTab] = useState(0);

	/**
	 * @description Handles the swipe to change the index
	 * @author João Dias
	 * @date 2019-03-26
	 * @param {number} index
	 * @returns {boolean}
	 * @memberof NewsTabs
	 */
	const handleOnSwipeToChangeIndex = useCallback(
		(index: number, indexLatest: number) => {
			Logger({
				type: "log",
				message: `previous tab index: ${indexLatest}`,
			});

			setCurrentTab(index);
		},
		[setCurrentTab],
	);

	const setFocusOnFirstLink = useCallback(() => {
		const activeTabContent: HTMLDivElement | null = document.querySelector("[aria-hidden='false']");

		if (activeTabContent) {
			const allThumbnails: HTMLAnchorElement[] | null = Array.from(activeTabContent.querySelectorAll("a.article-thumbnail"));
			const firstLink = allThumbnails && allThumbnails.length > 0 ? allThumbnails[0] : null;

			if (firstLink) {
				firstLink.focus();
			}
		}
	}, []);

	/**
	 * @description On Clicking on a Tab changes the Index
	 * @memberof NewsTabs
	 */
	const handleOnClickToChangeTab = useCallback(
		(value: number, focusOnSelect?: boolean) => {
			setCurrentTab(value);

			if (focusOnSelect) {
				setFocusOnFirstLink();
			}
		},
		[setCurrentTab, setFocusOnFirstLink],
	);

	/**
	 * @description Change Tab
	 * @author João Dias
	 * @date 2019-04-02
	 * @param {string} hash
	 * @memberof NewsTabs
	 */
	const checkIfHashExists = useCallback(
		(hash: string) => {
			const current = tabs.findIndex((tab) => tab.id === hash);

			setCurrentTab(current);
		},
		[tabs],
	);

	useEffect(() => {
		const hasHashOnUrl = getHash();

		if (hasHashOnUrl) {
			checkIfHashExists(hasHashOnUrl);
		}
	}, [checkIfHashExists]);

	/**
	 * @description Renders the Tab Header of the container
	 * @memberof NewsTabs
	 */
	function renderTabHeader() {
		return <TabList list={tabs} activeTab={currentTab} onSelect={handleOnClickToChangeTab} />;
	}

	/**
	 * @description Renders the Tab Items. When the component starts only renders one child.
	 * @author João Dias
	 * @date 2019-05-03
	 * @returns
	 * @memberof TabsPages
	 */
	function renderTabItems() {
		const mappedItems = tabs.map((tab) => {
			if (tab.id === "latest") {
				return <LatestNewsTab key={tab.id} id={tab.id} sources={tab.sources} location={location} />;
			}

			return <LatestNewsCategoryTab key={tab.id} id={tab.id} sources={tab.sources} location={location} />;
		});

		return (
			<TabsContainer
				id="tabs-page--content"
				className="tabs-page--content"
				index={currentTab}
				onChangeIndex={handleOnSwipeToChangeIndex}
				disableLazyLoading={false}
				hysteresis={0.75}
				enableMouseEvents
				animateHeight={false}
			>
				{mappedItems}
			</TabsContainer>
		);
	}

	return (
		<TabsWrapper id={id} className="tabs-page--wrapper">
			{renderTabHeader()}
			{renderTabItems()}
		</TabsWrapper>
	);
};

export default withMemo(NewsTabs, ["id", "tabsHeader"]);
