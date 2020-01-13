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
export const SectionListItem: React.FunctionComponent<ISectionListItemProps> = props => {
	const { id, children } = props;

	return (
		<ListWrapper aria-labelledby={id} className="section-list__item">
			{children}
		</ListWrapper>
	);
};

export default React.memo(SectionListItem);
