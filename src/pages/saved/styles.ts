/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

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
