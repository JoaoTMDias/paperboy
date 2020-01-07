import { rem } from "polished";
import styled from "styled-components";
import { flexRow, elevation } from "../../helpers/index.helpers";

export const Wrapper = styled.button`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	-webkit-appearance: none;
	border: none;
	background-color: transparent;
`;

// Styling
export const AddToHomeWrapper = styled.button`
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

	padding: 0;
	-webkit-appearance: none;
	border: none;
	background: none;
	cursor: pointer;

	.text {
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

	.banner {
		background-color: var(--color-primary);
		padding: ${rem("8px")} var(--global-padding);
		border-radius: ${rem("34px")};
		color: var(--color-white);
		${elevation[1]};

		&.is-standalone {
			background-color: var(--color-gray3);
			color: var(--color-gray6);
			box-shadow: none;
		}
	}
`;

export const IconStrip = styled.figure`
	margin-top: 0;
	margin-right: 0;
	margin-bottom: ${rem("16px")};
	margin-left: 0;
	width: 100%;
	height: auto;

	svg {
		border-radius: 4px;
	}
`;

export const Content = styled.div`
	width: 100%;
	margin: 0 auto;

	html[data-theme="DARK"] & {
		.dialog {
			&__content {
				&__title {
					color: var(--color-gray4);
				}

				&__description {
					color: var(--color-gray5);
				}

				&__tip {
					border-top: 1px solid var(--color-gray9);
					background-color: var(--body-background);
					color: var(--color-gray5);
				}
			}
		}

		#safari-share-icon path {
			fill: var(--color-white);
		}
	}
`;
