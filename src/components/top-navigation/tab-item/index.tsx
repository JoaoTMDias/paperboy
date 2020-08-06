/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React from "react";
import { withMemo } from "helpers/index.helpers";
import { ITabItemProps } from "./types";
import { Wrapper, TabLink, Icon, Label } from "./styles";

/**
 * @description Bottom Tab Item

 * @date  08/December/2018 at 15:41
 * @extends {React.FC}
 */
export const TabItem: React.FunctionComponent<ITabItemProps> = (props) => {
	const { to, label, layout, children } = props;

	return (
		<Wrapper to={to} label={label} layout={layout}>
			<TabLink to={to} activeClassName="is-active" aria-label={`Go to ${label} page`} layout={layout} label={label}>
				{children && <Icon className="tab__icon">{children}</Icon>}
				<Label className="label">{label}</Label>
			</TabLink>
		</Wrapper>
	);
};

TabItem.defaultProps = {
	to: "/",
	label: "Label",
	layout: "horizontal",
};

export default withMemo(TabItem, ["to", "label"]);
