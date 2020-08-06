/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	margin: 0;
	padding: var(--global-padding);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	svg {
		width: 100%;
		max-width: 4rem;
		height: auto;
	}

	.error-message {
		&__content {
			margin: calc(var(--global-margin) * 2) 0;
			padding: 0;
		}
	}
`;
