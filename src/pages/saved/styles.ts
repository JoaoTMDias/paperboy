import styled from "styled-components";
import { rem } from "polished";

export const List = styled.div`
	width: 100%;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-rows: ${`repeat(auto, ${rem("128px")})`};
	grid-row-gap: ${rem("4px")};
`;

export default List;
