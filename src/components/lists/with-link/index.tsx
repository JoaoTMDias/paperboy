// Libraries
import * as React from "react";
import { IconArrowRight } from "components/icons/index";
import { IListItemWithLinkProps } from "../list-types";
import { Action } from "../styles";

/**
 * @description List Item with a Toggle Switch
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IListItemWithLinkProps>}
 */
export const ListItemWithLink: React.FunctionComponent<IListItemWithLinkProps> = props => {
	const { id, to, title, subtitle } = props;
	return (
		<Action id={`${id}-link`} to={to} className="section-list__item__label" tabIndex={0}>
			<div className="text">
				<h3 className="text__title">{title}</h3>
				{subtitle && <h6 className="text__subtitle">{subtitle}</h6>}
			</div>
			<div className="icon">
				<IconArrowRight />
			</div>
		</Action>
	);
};

export default React.memo(ListItemWithLink);
