import React, { useRef } from "react";
import KEY_CODES from 'helpers/key-codes';
import { ListItem } from './styles';
import classnames from "classnames";
import { withMemo } from 'helpers/index.helpers';

interface ITabProps {
	id: string;
	index: number;
	name: string;
	selected: boolean;
	onSelect: (value: number) => void;
}

const Tab: React.FunctionComponent<ITabProps> = ({
	id,
	index,
	name,
	selected,
	onSelect
}) => {
	const { current: tabIdListItem } = useRef(`tab-list-item-${index}-${id}`);
	const { current: tabId } = useRef(`tab-${index}-${id}`);
	const { current: ariaControls } = useRef(`tabpanel-${id}`);
	const classNames = classnames("tab-list__tab", {
		"tab-list__tab--selected": selected
	});

	function handleOnKeyUp(event: React.KeyboardEvent<HTMLButtonElement>) {
		if (event.keyCode === KEY_CODES.ENTER || event.keyCode === KEY_CODES.SPACE) {
			onSelect(index);
		}
	}

	function handleOnClick() {
		onSelect(index);
	}

	return (
		<ListItem id={tabIdListItem} role="presentation">
			<button
				id={tabId}
				className={classNames}
				type="button"
				role="tab"
				aria-selected={selected}
				aria-controls={ariaControls}
				onClick={handleOnClick}
				onKeyUp={handleOnKeyUp}
			>
				{name}
			</button>
		</ListItem>
	)
};

export default withMemo(Tab, ["selected", "onSelect"]);
