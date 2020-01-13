import { rem } from "polished";
import styled from "styled-components";
import { above } from "helpers/index.helpers";

export const Wrapper = styled.div`
	width: 100%;
	max-width: ${rem("200px")};
	min-height: 100vh;
	color: var(--color-white);
	background-color: var(--color-black);
	padding: 0;

	position: fixed;
	top: 0;
	left: 0;

	display: none;

	${above.large`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

      & ~ main {
        width: calc(100vw - ${rem("200px")});
        margin-left: ${rem("200px")};
      }

  `};
`;

export const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export const List = styled.ul`
	margin: 0;
	margin-bottom: var(--global-margin);
	list-style-type: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	text-align: left;
	width: 100%;
`;
