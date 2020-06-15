// Libraries
import React, { useState, useEffect } from "react";
import Tab from "@material-ui/core/Tab";
import { Logger, withMemo } from "helpers/index.helpers";
import { TabsContainer, TabsHeader, TabsWrapper } from "./styles";
import { INewsTabsProps, IHeaderTabs } from "./types";

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

/**
 * @description News Page Tab
 * @date 2019-01-17
 * @class NewsTabs
 * @extends {React.Component<INewsTabsProps, any>}
 */
export const NewsTabs: React.FC<INewsTabsProps> = ({ id, tabsHeader, children, style }) => {
	const [currentTab, setCurrentTab] = useState(0);
	const [hasChangedTabs, setHasChangedTabs] = useState(false);

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
		!hasChangedTabs && setHasChangedTabs(true);
	}

	/**
	 * @description On Clicking on a Tab changes the Index
	 * @memberof NewsTabs
	 */
	function handleOnClickToChangeTab(event: React.ChangeEvent<{}>, value: number) {
		setCurrentTab(value);
		!hasChangedTabs && setHasChangedTabs(true);
	}

	/**
	 * @description Change Tab
	 * @author João Dias
	 * @date 2019-04-02
	 * @param {string} hash
	 * @memberof NewsTabs
	 */
	function checkIfHashExists(hash: string) {
		const current = tabsHeader.findIndex((tab: IHeaderTabs) => tab.id === hash);

		Logger({
			type: "info",
			message: `index: ${current}`,
		});

		setCurrentTab(current);
	}

	/**
	 * @description Renders the Tab Header of the container
	 * @memberof NewsTabs
	 */
	function renderTabHeader() {
		const tabs: JSX.Element[] = tabsHeader.map((tab: IHeaderTabs, index: number) => {
			return (
				<Tab
					key={tab.id}
					id={`tab-${index}-${tab.id}`}
					label={tab.label}
					classes={{
						root: "tabs-page--tab",
						selected: "tabs-page--is-selected",
					}}
				/>
			);
		});

		return (
			<TabsHeader
				classes={{
					root: "tabs-page--header",
					indicator: "tabs-page--indicator",
				}}
				onChange={handleOnClickToChangeTab}
				className="tabs-page--header"
				orientation="horizontal"
				scrollButtons="auto"
				value={currentTab}
				variant="scrollable"
				children={tabs}
				style={style}
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
		if (hasChangedTabs === false) {
			const filteredChildren = React.Children.map(children, (child: React.ReactNode, childrenIndex: number) => {
				if (childrenIndex === currentTab) {
					return child;
				}
				return <div className="tabs-page--placeholder">&nbsp;</div>;
			});

			return filteredChildren;
		}

		return children;
	}

	return (
		<TabsWrapper id={id} className="tabs-page--wrapper">
			{renderTabHeader()}
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
				{renderTabItems()}
			</TabsContainer>
		</TabsWrapper>
	);
};

export default withMemo(NewsTabs, ["id", "tabsHeader"]);
