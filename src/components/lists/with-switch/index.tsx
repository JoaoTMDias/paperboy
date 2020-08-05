// Libraries
import React, { memo, useCallback } from "react";
import FormSwitch from "components/data-entry/forms/switch/form-switch.component";
import { KEY_CODES } from "helpers/key-codes";
import { Label } from "../styles";
import { IListItemWithSwitchProps } from "../list-types";

/**
 * @description List Item with a Toggle Switch
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IListItemWithSwitchProps>}
 */
export const ListItemWithSwitch: React.FunctionComponent<IListItemWithSwitchProps> = ({
	id,
	title,
	subtitle,
	onChange,
	defaultValue,
	value,
}) => {
	const onKeyUp = useCallback(
		(event: React.KeyboardEvent<HTMLLabelElement>) => {
			switch (event.keyCode) {
				case KEY_CODES.ENTER:
				case KEY_CODES.SPACE:
					if (onChange) {
						onChange();
					}
					break;

				default:
					break;
			}
		},
		[onChange],
	);

	return (
		<Label
			htmlFor={`${id}-input`}
			className="section-list__item__label"
			onClick={onChange}
			onKeyUp={onKeyUp}
			tabIndex={0}
		>
			<div className="text">
				<h3 className="text__title">{title}</h3>
				{subtitle && <h6 className="text__subtitle">{subtitle}</h6>}
			</div>
			<div className="icon toggle">
				<FormSwitch id={id} value={defaultValue} checked={value === defaultValue} />
			</div>
		</Label>
	);
};

export default memo(ListItemWithSwitch);
