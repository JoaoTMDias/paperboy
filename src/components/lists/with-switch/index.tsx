// Libraries
import React, { memo } from "react";
import { Label } from "../styles";
import { IListItemWithSwitchProps } from "../list-types";
import FormSwitch from "components/data-entry/forms/switch/form-switch.component";

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
	onClick,
	defaultValue,
	value,
}) => {
	return (
		<Label htmlFor={`${id}-input`} className="section-list__item__label" onClick={onClick} tabIndex={0}>
			<div className="text">
				<h3 className="text__title">{title}</h3>
				{subtitle && <h6 className="text__subtitle">{subtitle}</h6>}
			</div>
			<div className="icon toggle">
				<FormSwitch
					id={id}
					value={defaultValue}
					checked={value === defaultValue}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						event.preventDefault();
					}}
				/>
			</div>
		</Label>
	);
};

export default memo(ListItemWithSwitch);
