/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import { above } from "helpers/index.helpers";

export const List = styled.ul`
	position: relative;
	min-width: 100%;
	min-height: var(--tabs-container-height);
	height: auto;
	overflow: scroll;
	list-style-type: none;
	margin: 0;
	padding-top: 0;
	padding-right: 0;
	padding-bottom: var(--bottom-navigation-bar-height, 3.5rem);
	padding-left: 0;
	flex-wrap: wrap;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 0;

	${above.medium`
		grid-template-columns: repeat(2, 1fr);
	`};

	${above.large`
		grid-template-columns: repeat(3, 1fr);
	`};

	.list__item {
		width: auto;
		margin: 0;

		&--first {
			flex-basis: 100%;
			width: 100%;
		}
	}

	&[data-layout="category"],
	&[data-layout="search"] {
		grid-template-columns: repeat(2, 1fr);

		${above.medium`
			grid-template-columns: repeat(3, 1fr);
		`};

		${above.large`
			grid-template-columns: repeat(4, 1fr);
		`};

		.list__item--first {
			grid-column: span 2;

			${above.medium`
				grid-column: span 3;
			`};

			${above.large`
				grid-column: span 2;
			`};
		}
	}

	&[data-layout="search"] {
		min-width: 100%;
	}
`;

export const Item = styled.li`
	width: 100%;
	height: auto;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const TabsWrapper = styled.div`
	height: 100%;
	background-color: var(--tabs-background);
`;
export const TabsContainer = styled(SwipeableViews)`
	background-color: var(--tabs-background);
	height: 100%;
	min-height: var(--tabs-container-height);
	margin-top: var(--top-navigation-bar-height);

	.react-swipeable-view-container {
		/* override to animate height */
		min-height: var(--viewport-height);
		overflow-y: initial;
		background-color: var(--tabs-background);

		[aria-hidden="true"] {
			pointer-events: none;
			user-select: none;
			position: relative;
			overflow-y: hidden !important;
		}

		[aria-hidden="false"] {
			pointer-events: inherit;
			user-select: inherit;
			position: relative;
			overflow-y: scroll !important;
			scroll-behavior: smooth;
			-webkit-overflow-scrolling: touch;
		}
	}
`;
