import React from "react";
import { Anchor } from "./styles";
import { withMemo } from "../../helpers/index.helpers";
import { IUIAnchorProps } from "./types";

export const UIAnchor: React.FunctionComponent<IUIAnchorProps> = props => {
	const { disabled, text } = props;
	const linkText = disabled ? "Select at least 3 sources " : text;
	return (
		<Anchor {...props} tabIndex={0}>
			{linkText}
		</Anchor>
	);
};

export default withMemo(UIAnchor, ["disabled"]);
