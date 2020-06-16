import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.div`
	width: 100%;
	height: var(--top-navigation-bar-height, 3rem);
	background-color: var(--tabs-background)
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
`;

export const List = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	height: var(--top-navigation-bar-height, 3rem);
	width: 100%;
	flex-wrap: nowrap;
	margin: 0;
	padding: 0;
	list-style-type: none;
	background-color: var(--tabs-background);
`;

export const ListItem = styled.li`
	width: var(--tabs-header-width);
	height: 100%;

	.tab-list__tab {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border: none;
		background-color: var(--tabs-background);
		padding: 0;
		width: 100%;
		height: 100%;
		font-size: var(--tabs-header-font-size);
		text-transform: capitalize;
		font-weight: 400;
		font-family: var(--tabs-header-font-family);
		color: var(--tabs-header-color);
		letter-spacing: -0.41px;
		line-height: 1.294117647;

		&--selected {
			color: var(--tabs-header-color-selected);
			font-weight: 700;
		}
	}
`;

export const TabIndicator = styled("span")`
	--indicator-height: 0.1875rem;
	height: var(--indicator-height);
	width: var(--tabs-header-width);
	flex-grow: 0;
	flex-shrink: 0;
	background-color: var(--tabs-header-indicator);
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 1;
	border-top-left-radius: var(--indicator-height);
	border-top-right-radius: var(--indicator-height);
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
`;
