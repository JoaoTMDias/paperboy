/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React, { useRef, useLayoutEffect, useState } from "react";
import { useSpring, config, animated } from "react-spring";
import { INewsPageHeaderItems } from "data/interfaces";
import Tab from "./tab";
import { Wrapper, List, TabIndicator } from "./styles";

interface ITabListProps {
	list: INewsPageHeaderItems[];
	activeTab: number;
	onSelect: (value: number, focusOnSelect?: boolean) => void;
}

interface ITabElementDimensions {
	left: number;
	width: number;
}
const DEFAULT_TAB_SIZE = 76;
const DEFAULT_TAB_ELEMENT_DIMENSIONS: ITabElementDimensions[] = [
	{
		left: 0,
		width: DEFAULT_TAB_SIZE,
	},
];

export const TabList: React.FunctionComponent<ITabListProps> = ({ list, activeTab, onSelect }) => {
	const tabListContainer = useRef(null);
	const [tabElements, setTabElements] = useState<ITabElementDimensions[]>(DEFAULT_TAB_ELEMENT_DIMENSIONS);
	const animatedProps = useSpring({
		to: {
			transform: `translateX(${tabElements[activeTab].left}px)`,
			width: `${tabElements[activeTab].width}px`,
		},
		from: {
			transform: `translateX(-${DEFAULT_TAB_SIZE}px)`,
			width: `0px`,
		},
		config: {
			...config.stiff,
			duration: 200,
		},
	});
	const Indicator = animated(TabIndicator);

	useLayoutEffect(() => {
		function getTabsSize() {
			const elements = Array.from(document.querySelectorAll(".tab-list__item"));

			const sizes: ITabElementDimensions[] = [];

			elements.forEach((element) => {
				const dimensions = element.getBoundingClientRect();
				const value = {
					left: dimensions.left,
					width: dimensions.width,
				};
				sizes.push(value);
			});

			return sizes;
		}

		setTabElements(getTabsSize());
	}, []);

	function renderList() {
		const items = list.map((item, index) => {
			const isSelected = !!(list[activeTab].id === item.id);

			if (item.id === "latest") {
				return <Tab key={item.id} id={item.id} index={index} selected={isSelected} name="latest" onSelect={onSelect} />;
			}

			return <Tab key={item.id} id={item.id} index={index} selected={isSelected} name={item.id} onSelect={onSelect} />;
		});

		return (
			<Wrapper className="tab-list--wrapper">
				<h1 className="sr-only">{list[activeTab].id}</h1>
				<Indicator
					style={{
						transform: animatedProps.transform,
						width: animatedProps.width,
					}}
				/>
				<List className="tab-list--header">
					<ul ref={tabListContainer} role="tablist" className="tab-list--container">
						{items}
					</ul>
				</List>
			</Wrapper>
		);
	}

	return renderList();
};
