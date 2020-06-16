// Libraries
import React, { useState, useEffect, useRef } from "react";
import Tab from "@material-ui/core/Tab";
import { Logger, withMemo } from "helpers/index.helpers";
import { TabsContainer, TabsHeader, TabsWrapper } from "./styles";
import { INewsTabsProps } from "./types";
import LatestNewsCategoryTab from "./latest-category";
import LatestNewsTab from "./latest-news-tab";
import { INewsPageHeaderItems } from "data/interfaces";

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

const TAB_CLASSES = {
	root: "tabs-page--tab",
	selected: "tabs-page--is-selected",
};

/**
 * @description News Page Tab
 * @date 2019-01-17
 * @class NewsTabs
 * @extends {React.Component<INewsTabsProps, any>}
 */
export const NewsTabs: React.FC<INewsTabsProps> = ({ id, items, children, style }) => {
	const { current: tabs } = useRef([
		{
			...DEFAULT_TABS,
			sources: [...items.latest],
		},
		...items.tabs,
	]);
	const [currentTab, setCurrentTab] = useState(0);

	useEffect(() => {
		const hasHashOnUrl = getHash();

		if (hasHashOnUrl) {
			checkIfHashExists(hasHashOnUrl);
		}
	}, []);

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
	function handleOnClickToChangeTab(event: React.ChangeEvent<{}>, value: number) {
		setCurrentTab(value);
	}

	/**
	 * @description Change Tab
	 * @author João Dias
	 * @date 2019-04-02
	 * @param {string} hash
	 * @memberof NewsTabs
	 */
	function checkIfHashExists(hash: string) {
		const current = tabs.findIndex((tab) => tab.id === hash);

		setCurrentTab(current);
	}

	/**
	 * @description Renders the Tab Header of the container
	 * @memberof NewsTabs
	 */
	function renderTabHeader() {
		const list = tabs.map((tab, index: number) => {
			if (tab.id === "latest") {
				const id = `tab-${index}-${tab.id}`;
				return <Tab key={id} id={id} label={tab.id} classes={TAB_CLASSES} />;
			}

			const id = `tab-${index}-${tab.id}`;

			return <Tab key={id} id={id} label={tab.id} classes={TAB_CLASSES} />;
		});

		return (
			<TabsHeader
				classes={{
					root: "tabs-page--header",
					indicator: "tabs-page--indicator",
				}}
				children={list}
				className="tabs-page--header"
				onChange={handleOnClickToChangeTab}
				orientation="horizontal"
				scrollButtons="auto"
				style={style}
				value={currentTab}
				variant="scrollable"
			/>
		);
	}

	/**
	 * @description Renders the Tab Items. When the component starts only renders one child.
	 * @author João Dias
	 * @date 2019-05-03
	 * @returns
	 * @memberof TabsPages
	 */
	function renderTabItems() {
		const items = tabs.map((tab) => {
			if (tab.id === "latest") {
				return <LatestNewsTab key={tab.id} sources={tab.sources} />;
			}

			return <LatestNewsCategoryTab key={tab.id} sources={tab.sources} />;
		});

		return (
			<TabsContainer
				id="tabs-page--content"
				className="tabs-page--content"
				index={currentTab}
				animateHeight={false}
				onChangeIndex={handleOnSwipeToChangeIndex}
				disableLazyLoading={false}
				hysteresis={1}
				enableMouseEvents
			>
				{items}
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
