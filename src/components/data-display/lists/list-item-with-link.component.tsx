// Libraries
import * as React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { Link } from "gatsby";
import { FormSwitch } from "../../index.components";
import flexRow from "../../../helpers/row.helper";
import { IconArrowRight } from "../../icons/icons";

// Interface
interface IListItemWithLinkProps {
	id: string;
	to: string;
	title: string;
	subtitle?: string | null;
}

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

// Styling
const Action = styled(Link)`
	--icon-size: ${rem("48px")};
	--list-item-title-color: var(--color-gray9);
	--list-item-subtitle-color: var(--color-gray8);

	html[data-theme="DARK"] & {
		--list-item-title-color: var(--color-gray0);
		--list-item-subtitle-color: var(--color-gray3);
	}

	width: 100%;
	margin: 0;
	${flexRow({
		direction: "row",
		justifyContent: "space-between",
		alignItems: "center",
	})};

	&:focus {
		outline-color: transparent;
	}

	.icon {
		width: var(--icon-size);
		height: var(--icon-size);
		margin-right: calc(var(--global-margin) * -1);
	}

	.text {
		width: calc(100% - var(--icon-size));

		&__title,
		&__subtitle {
			width: 100%;
			font-family: var(--body-font-family);
			text-align: left;
			font-weight: 300;
			line-height: 1;
			margin: 0;
			padding: 0;
		}

		&__title {
			font-size: ${rem("14px")};
			color: var(--list-item-title-color);
			letter-spacing: 0.4px;
			line-height: 1;
			margin: 0;
			padding: 0;
		}

		&__subtitle {
			font-size: ${rem("13px")};
			color: var(--list-item-subtitle-color);
			margin-top: 0.25rem;
		}
	}
`;

export default React.memo(ListItemWithLink);
