/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

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
export const ListItemWithLink: React.FunctionComponent<IListItemWithLinkProps> = (props) => {
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
