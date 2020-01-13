import styled from "styled-components";
import { above } from "helpers/index.helpers";

export const AppLayout = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	background-color: var(--body-background);

	${above.large`
		display: grid;
		grid-template-columns: minmax(12.5rem, auto) 1fr;
	`};
`;

export default AppLayout;
