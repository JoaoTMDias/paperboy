// Libraries
import * as React from "react";
import styled from "styled-components";
import { theme } from "helpers/theme.helper";

// Interface
interface IIconBookmarkProps {
	isActive: boolean;
}

/**
 * @description Bookmark Icon
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IIconBookmarkProps>}
 */
export const IconBookmark: React.FunctionComponent<IIconBookmarkProps> = (props) => {
	const { isActive } = props;

	return (
		<Icon
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			className={isActive ? "is-active" : ""}
			aria-hidden="true"
			tabIndex={-1}
		>
			<path
				fill="var(--color-icon-border)"
				fillRule="evenodd"
				d="M29.71 13H18.29A2.25 2.25 0 0 0 16 15.2v18.7a1.09 1.09 0 0 0 .6 1 1.21 1.21 0 0 0 1.18 0l6.22-4 6.22 4a1.21 1.21 0 0 0 .64.18 1.16 1.16 0 0 0 .54-.13 1.09 1.09 0 0 0 .6-1V15.2a2.25 2.25 0 0 0-2.29-2.2z"
			/>
			<path
				fill="var(--color-icon-fill)"
				fillRule="evenodd"
				d="M29.71 31.85l-5.08-3.27a1.19 1.19 0 0 0-1.26 0l-5.08 3.27V15.2h11.42z"
			/>
		</Icon>
	);
};

// Styling
const Icon = styled.svg`
	--color-icon-fill: var(--color-gray8);
	--color-icon-border: var(--color-gray1);

	&.is-active {
		--color-icon-fill: var(--color-icon-border) !important;
	}

	${theme.dark`
		--color-icon-fill: var(--color-black);
		--color-icon-border: var(--color-gray4);
	`};

	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export default React.memo(IconBookmark);
