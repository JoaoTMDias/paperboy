import styled, { css } from "styled-components";
import { rem } from "polished";
import { Link } from "gatsby";
import { flexRow, elevation } from "helpers/index.helpers";
import { theme } from "helpers/theme.helper";
import { IListItemWithButtonProps, EListItemButtonType, ISectionListItemProps } from "./list-types";

// Styling
export const Button = styled.button`
	--button-background: var(--body-background);
	--button-color: var(--color-gray9);
	--button-border-color: var(--color-gray9);

	--icon-size: ${rem("48px")};
	--list-item-title-color: var(--button-color);
	--list-item-subtitle-color: var(--button-color);

	border-radius: var(--global-radius);

	${({ flavour }: IListItemWithButtonProps) => {
		switch (flavour) {
			default:
			case EListItemButtonType.NORMAL:
				return css`
					--button-background: var(--body-background);
					--button-color: var(--color-gray9);
					--button-border-color: var(--color-gray9);
				`;

			case EListItemButtonType.PRIMARY:
				return css`
					--button-background: var(--color-primary);
					--button-color: var(--color-white);
					--button-border-color: var(--color-primary);
				`;

			case EListItemButtonType.SECONDARY:
				return css`
					--button-background: var(--color-secondary);
					--button-color: var(--color-white);
					--button-border-color: var(--color-secondary);
				`;
		}
	}};

	background-color: var(--button-background);
	color: var(--button-color);
	border: 1px sollid var(--button-border-color);
	${elevation[1]};

	width: 100%;
	height: 100%;
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
		width: 100%;

		.has-icon & {
			width: calc(100% - var(--icon-size));
		}

		&__title,
		&__subtitle {
			width: 100%;
			font-family: var(--body-font-family);
			text-align: center;
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

	${theme.dark`
		--list-item-title-color: var(--color-gray0);
		--list-item-subtitle-color: var(--color-gray3);
	`};
`;

export const Action = styled(Link)`
	--icon-size: ${rem("48px")};
	--list-item-title-color: var(--color-gray9);
	--list-item-subtitle-color: var(--color-gray8);

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

	${theme.dark`
		--list-item-title-color: var(--color-gray0);
		--list-item-subtitle-color: var(--color-gray3);
	`};
`;

export const Label = styled.label`
	--icon-size: ${rem("48px")};
	--list-item-title-color: var(--color-gray9);
	--list-item-subtitle-color: var(--color-gray8);

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

		&.toggle {
			width: ${rem("80px")};
			margin: 0;
		}
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

	${theme.dark`
		--list-item-title-color: var(--color-gray0);
		--list-item-subtitle-color: var(--color-gray3);
	`};
`;

export const ListWrapper = styled.li`
	--section-list-item-height: ${rem("64px")};
	--list-item-border-bottom-color: var(--color-gray1);
	--list-item-background-color: var(--body-background);
	--list-item-background-color-hover: var(--color-gray1);

	width: 100%;
	height: var(--section-list-item-height, 4rem);
	padding: calc(var(--global-padding) * 0.5) 0;
	margin: 0;
	border-bottom: 1px solid var(--list-item-border-bottom-color);
	background-color: var(--list-item-background-color);
	transition: all 120ms ease;

	${(props: ISectionListItemProps) => {
		if (props.center) {
			return css`
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			`;
		}
	}};

	&:only-child,
	&:last-child {
		border-bottom-color: transparent;
	}

	&:hover {
		background-color: var(--list-item-background-color-hover);
	}

	${(props: ISectionListItemProps) => {
		if (props.center) {
			return css`
				${flexRow({
					direction: "row",
					justifyContent: "center",
					alignItems: "center",
				})};
			`;
		}

		return css`
			${flexRow({
				direction: "row",
				justifyContent: "flex-start",
				alignItems: "center",
			})};
		`;
	}};

	${theme.dark`
		--list-item-border-bottom-color: var(--color-gray9);
		--list-item-background-color-hover: var(--color-gray8);
	`};
`;

export const List = styled.ul`
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;
