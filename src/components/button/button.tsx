import React from "react";
import { withMemo } from "helpers/index.helpers";
import { Button } from "./styles";
import { IUIButtonProps } from "./types";

/**
 * @description Button: Primary
 * @extends {React.FC}
 */
export const UIButton: React.FunctionComponent<IUIButtonProps> = (props) => {
	const { id, type, text, label, disabled, flavour, onClick } = props;
	const linkText = disabled ? "Select at least 3 sources " : text;

	return <Button id={id} type={type} aria-label={label} disabled={disabled} flavour={flavour} onClick={onClick}>{linkText}</Button>;
};

UIButton.defaultProps = {
	flavour: "primary",
	type: "button",
	text: "button text",
	label: "button aria label",
	disabled: false,
};

export default withMemo(UIButton, ["disabled"]);
