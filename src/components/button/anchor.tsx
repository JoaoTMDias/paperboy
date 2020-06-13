import React from "react";
import { withMemo } from "helpers/index.helpers";
import { Anchor } from "./styles";
import { IUIAnchorProps } from "./types";

export const UIAnchor: React.FunctionComponent<IUIAnchorProps> = ({ to, text, label, disabled }) => {
	const linkText = disabled ? "Select at least 3 sources " : text;
	return (
		<Anchor to={to} text={text} label={label} data-testid="ui-anchor" disabled={disabled} aria-disabled={disabled}>
			{linkText}
		</Anchor>
	);
};

export default withMemo(UIAnchor, ["disabled"]);
