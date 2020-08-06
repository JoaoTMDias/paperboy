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
import { IListItemWithButtonProps, EListItemButtonType } from "../list-types";
import { Button } from "../styles";

/**
 * @description List Item with a Toggle Switch
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IListItemWithButtonProps>}
 */
export const ListItemWithButton: React.FunctionComponent<IListItemWithButtonProps> = (props) => {
	const { id, title, subtitle, style, flavour, onClick, children } = props;

	const buttonId = `${id}-button ${children && "has-icon"}`;
	return (
		<Button
			id={buttonId}
			type="button"
			className="section-list__item__label"
			onClick={onClick}
			flavour={flavour}
			tabIndex={0}
			style={style}
			title={title}
			subtitle={subtitle}
		>
			{children && <div className="icon">{children}</div>}
			<div className="text">
				<h3 className="text__title">{title}</h3>
				{subtitle && <h6 className="text__subtitle">{subtitle}</h6>}
			</div>
		</Button>
	);
};

ListItemWithButton.defaultProps = {
	flavour: EListItemButtonType.NORMAL,
};

export default React.memo(ListItemWithButton);
