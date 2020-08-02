import React from "react";
import { withMemo } from "helpers/with-memo.helper";
import { Button } from "./styles";
import { IUIButtonProps } from "./types";

/**
 * @description Button: Primary
 * @extends {React.FC}
 */
export const UIButton: React.FunctionComponent<IUIButtonProps> = ({
	id,
	type,
	text,
	label,
	disabled,
	flavour,
	onClick,
}) => {
	return (
		<Button
			id={id}
			data-testid="ui-button"
			type={type}
			aria-label={label}
			aria-disabled={disabled}
			disabled={disabled}
			flavour={flavour}
			onClick={onClick}
		>
			{text}
		</Button>
	);
};

UIButton.defaultProps = {
	flavour: "primary",
	type: "button",
	text: "button text",
	label: "button aria label",
	disabled: false,
};

export default withMemo(UIButton, ["disabled"]);
