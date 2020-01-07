import React from "react";
import { ITabItemProps } from "./types";
import { Wrapper, TabLink, Icon, Label } from "./styles";
import { withMemo } from "../../../helpers/index.helpers";

/**
 * @description Bottom Tab Item
 * @author  João Dias
 * @date  08/December/2018 at 15:41
 * @extends {React.FC}
 */
const TabItem: React.FunctionComponent<ITabItemProps> = props => {
	const { to, label, layout, children } = props;
	const { ...navItemProps } = props;

	return (
		<Wrapper layout={layout} {...navItemProps}>
			<TabLink
				to={to}
				activeClassName="is-active"
				aria-label={`Click/Tap to go to the page: ${label}`}
				tabIndex={0}
				layout={layout}
				{...navItemProps}
			>
				<Icon className="tab__icon">{children}</Icon>
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
