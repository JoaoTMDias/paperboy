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
import { ListWrapper } from "../styles";
import { ISectionListItemProps } from "../list-types";

/**
 * @description Section List Item
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<ISectionListItemProps>}
 */
export const SectionListItem: React.FunctionComponent<ISectionListItemProps> = ({ id, center, children }) => {
	return (
		<ListWrapper id={id} aria-labelledby={id} center={center} className="section-list__item">
			{children}
		</ListWrapper>
	);
};

export default React.memo(SectionListItem);
