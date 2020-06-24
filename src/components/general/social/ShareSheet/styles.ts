import styled from "styled-components";
import { rem } from "polished";
import { flexRow } from "../../../../helpers/index.helpers";
import { theme } from "helpers/theme.helper";

export const ShareSheet = styled.aside`
	--share-sheet-title: var(--color-gray6);
	--share-sheet-name: var(--color-gray8);

	width: 100%;
	height: auto;
	padding-top: 0;
	padding-right: ${rem("16px")};
	padding-bottom: ${rem("16px")};
	padding-left: ${rem("16px")};

	${flexRow({
		direction: "column",
		justifyContent: "flex-end",
		alignItems: "center",
	})};

	--item-height: ${rem("48px")};

	.share-sheet {
		&__title {
			width: 100%;
			font-family: var(--heading-font-family);
			font-size: ${rem("12px")};
			color: var(--share-sheet-title);
			letter-spacing: ${rem("1px")};
			margin-bottom: ${rem("16px")};
			text-transform: uppercase;
		}

		&__list {
			width: 100%;
			list-style-type: none;
			margin: 0;
			padding: 0;

			${flexRow({
				direction: "column",
				justifyContent: "flex-start",
				alignItems: "center",
			})};
		}

		&__option {
			width: 100%;
			height: var(--item-height);

			${flexRow({
				direction: "row",
				justifyContent: "flex-start",
				alignItems: "center",
			})};

			button,
			.react-share__ShareButton,
			.SocialMediaShareButton {
				width: 100%;
				height: 100%;
				background: transparent;
				border: none;
				padding: 0;

				${flexRow({
					direction: "row",
					justifyContent: "flex-start",
					alignItems: "center",
				})};
			}

			&__icon {
				width: ${rem("30px")};
				height: var(--item-height);
				${flexRow()};
				margin: 0;
				padding: 0;
			}

			&__name {
				width: calc(100% - var(--item-height));
				margin-top: 0;
				margin-right: 0;
				margin-bottom: 0;
				margin-left: ${rem("16px")};
				padding: 0;
				height: var(--item-height);
				color: var(--share-sheet-name);

				${flexRow({
					direction: "row",
					justifyContent: "flex-start",
					alignItems: "center",
				})};
			}
		}
	}

	${theme.dark`
		--share-sheet-title: var(--color-gray2);
		--share-sheet-name: var(--color-gray1);
	`};
`;

export default ShareSheet;
