// Libraries
import * as React from "react";
import { FormSwitch } from "components/index.components";
import { Label } from "../styles";
import { IListItemWithSwitchProps } from "../list-types";

/**
 * @description List Item with a Toggle Switch
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IListItemWithSwitchProps>}
 */
export const ListItemWithSwitch: React.FunctionComponent<IListItemWithSwitchProps> = (props) => {
	const { id, title, subtitle, onClick, defaultValue, value } = props;
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

export default React.memo(ListItemWithSwitch);
