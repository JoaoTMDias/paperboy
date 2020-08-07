/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React, { useRef } from "react";
import KEY_CODES from "helpers/key-codes";
import classnames from "classnames";
import { withMemo } from "helpers/index.helpers";
import { IBasePageProps } from "data/interfaces/page";
import { Meta } from "components/meta";
import { ListItem } from "./styles";

interface ITabProps extends IBasePageProps {
	id: string;
	index: number;
	name: string;
	selected: boolean;
	onSelect: (value: number, focusOnContent?: boolean) => void;
}

const Tab: React.FunctionComponent<ITabProps> = ({ id, index, name, selected, onSelect, location }) => {
	const { current: tabIdListItem } = useRef(`tab-list-item-${index}-${id}`);
	const { current: tabId } = useRef(`tab-${index}-${id}`);
	const { current: ariaControls } = useRef(`tabpanel-${id}`);
	const classNames = classnames("tab-list__tab", {
		"tab-list__tab--selected": selected,
	});

	function handleOnKeyUp(event: React.KeyboardEvent<HTMLButtonElement>) {
		if (event.keyCode === KEY_CODES.ENTER || event.keyCode === KEY_CODES.SPACE) {
			onSelect(index, selected);
		}
	}

	function handleOnClick() {
		onSelect(index, selected);
	}

	return (
		<ListItem id={tabIdListItem} className="tab-list__item" role="presentation">
			{selected && <Meta title={`${name.charAt(0).toUpperCase() + name.slice(1)} News`} location={location} />}
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
	);
};

export default withMemo(Tab, ["selected", "onSelect"]);
