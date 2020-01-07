import styled from "styled-components";

// Styling
export const Wrapper = styled.footer`
	width: 100%;
	max-width: 100vw;
	height: var(--bottom-navigation-bar-height, 3.5rem);
	bottom: 0;
	left: 0;
	right: 0;
	color: var(--color-white);
	background-color: var(--color-black);
	padding: 0;
	position: fixed;
`;

export const Navigation = styled.nav`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const List = styled.ul`
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
