import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";

export const List = styled.ol`
	position: relative;
	margin: 0;
	width: 100vw;
	height: auto;
	overflow: auto;
	will-change: transform;
	list-style-type: none;
	margin: 0;
	padding: 0;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;

	.list__item {
		flex-basis: 50%;
		width: 50%;
		margin: 0;

		&--first {
			flex-basis: 100%;
			width: 100%;
		}
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
	height: auto;
	min-height: var(--tabs-container-height);
	margin-top: var(--top-navigation-bar-height);

	.react-swipeable-view-container {
		/* override to animate height */
		height: var(--tabs-container-height) !important;
		overflow-y: initial;
		-webkit-overflow-scrolling: touch;
		background-color: var(--tabs-background);

		[aria-hidden="true"] {
			pointer-events: none;
			user-select: none;
			position: relative;
		}

		[aria-hidden="false"] {
			pointer-events: inherit;
			user-select: inherit;
			position: relative;
		}
	}
`;
