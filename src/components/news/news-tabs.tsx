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
	function handleOnSwipeToChangeIndex(index: number, indexLatest: number) {
		Logger({
			type: "log",
			message: `previous tab index: ${indexLatest}`,
		});

		setCurrentTab(index);
	}

	/**
	 * @description On Clicking on a Tab changes the Index
	 * @memberof NewsTabs
	 */
	function handleOnClickToChangeTab(value: number) {
		setCurrentTab(value);
	}

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
				animateHeight
				onChangeIndex={handleOnSwipeToChangeIndex}
				disableLazyLoading={false}
				hysteresis={0.6}
				enableMouseEvents
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
