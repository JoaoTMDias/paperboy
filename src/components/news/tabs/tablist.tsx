import React from "react";
import { useSpring, config, animated } from "react-spring";
import { INewsPageHeaderItems } from 'data/interfaces';
import Tab from './tab';
import { Wrapper, List, TabIndicator } from './styles';

interface ITabListProps {
	list: INewsPageHeaderItems[];
	activeTab: number;
	onSelect: (value: number) => void;
}

const DEFAULT_TAB_SIZE = 76;

export const TabList: React.FunctionComponent<ITabListProps> = ({
	list,
	activeTab,
	onSelect
}) => {
	const { transform } = useSpring({
		transform: `translateX(${activeTab * DEFAULT_TAB_SIZE}px)`,
		from: { transform: `translateX(-76px)`, },
		config: {
			...config.stiff,
			duration: 200
		},
	});
	const Indicator = animated(TabIndicator);

	function renderList() {
		const items = list.map((item, index) => {
			const isSelected = !!(list[activeTab].id === item.id);

			if (item.id === "latest") {
				return (
					<Tab
						key={item.id}
						id={item.id}
						index={index}
						selected={isSelected}
						name="latest"
						onSelect={onSelect}
					/>
				);
			}

			return (
				<Tab
					key={item.id}
					id={item.id}
					index={index}
					selected={isSelected}
					name={item.id}
					onSelect={onSelect}
				/>
			);
		});

		return (
			<Wrapper className="tab-list--wrapper">
				<Indicator style={{
					transform
				}} />
				<List role="tablist" className="tab-list--header">
					{items}
				</List>
			</Wrapper>
		)
	}

	return renderList();
};
