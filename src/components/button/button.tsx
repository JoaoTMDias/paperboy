import React from "react";
import { withMemo } from "helpers/index.helpers";
import { Button } from "./styles";
import { IUIButtonProps } from "./types";

/**
 * @description Button: Primary
 * @extends {React.FC}
 */
export const UIButton: React.FunctionComponent<IUIButtonProps> = props => {
	const { text, disabled } = props;
	const linkText = disabled ? "Select at least 3 sources " : text;

	return <Button {...props}>{linkText}</Button>;
};

UIButton.defaultProps = {
	text: "button text",
	label: "button aria label",
	disabled: false,
};

export default withMemo(UIButton, ["disabled"]);
