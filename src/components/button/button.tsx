import React from "react";
import { Button } from "./styles";
import { IUIButtonProps } from "./types";
import { withMemo } from "../../helpers/index.helpers";

/**
 * @description Button: Primary
 * @author  João Dias
 * @date  11/December/2018 at 00:03
 * @extends {React.FC}
 */
export const UIButton: React.FunctionComponent<IUIButtonProps> = ({ type, text, label, disabled, onClick }) => {
	const linkText = disabled ? "Select at least 3 sources " : text;

	return (
		<Button aria-label={label} disabled={disabled} onClick={onClick} tabIndex={0} type={type}>
			{linkText}
		</Button>
	);
};

export default withMemo(UIButton, ["disabled"]);
