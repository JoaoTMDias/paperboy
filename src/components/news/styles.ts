import styled from "styled-components";
import { FixedSizeList } from "react-window";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";

export const VirtualizedList = styled(FixedSizeList)`
	position: relative;
	width: 100vw;
	height: calc(var(--viewport-height) - (var(--top-navigation-bar-height) * 2));
	overflow: auto;
	will-change: transform;

	ol {
		width: 100%;
		height: 100%;
		list-style-type: none;
		margin: 0;
		padding: 0;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
`;

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

export const TabsHeader = styled(Tabs)`
	border-bottom: var(--tabs-header-border-bottom);
	position: var(--tabs-header-position);
	background-color: var(--tabs-background) !important;

	width: 100%;
	z-index: 1;

	&.is-scrolling {
		position: var(--tabs-header-position-scrolling);
		top: 0;
	}

	.tabs-page {
		&--header {
			background-color: var(--tabs-background) !important;
		}

		&--indicator {
			background-color: var(--tabs-header-indicator) !important;
			transition: left 250ms var(--default-timing-function), width 64ms var(--default-timing-function);
			height: 3px;
			border-top-left-radius: 3px;
			border-top-right-radius: 3px;
			border-bottom-left-radius: 0px;
			border-bottom-right-radius: 0px;
		}

		&--tab,
		&--label {
			font-size: var(--tabs-header-font-size);
			text-transform: capitalize;
			font-weight: 400;
			font-family: var(--tabs-header-font-family);
			color: var(--tabs-header-color);
			letter-spacing: -0.41px;
			line-height: 1.294117647;
		}

		&--is-selected {
			.tabs-page--label {
				color: var(--tabs-header-color-selected);
				font-weight: 700;
			}
		}
	}
`;
