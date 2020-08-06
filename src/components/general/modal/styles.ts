/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import styled from "styled-components";
import { IModalProps } from "./types";

export const Wrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	overflow: hidden;

	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: ${(props: IModalProps) => {
		switch (props.align) {
			case "top":
				return "flex-start";

			case "middle":
				return "center";

			case "bottom":
				return "flex-end";

			default:
				return "flex-end";
		}
	}};
`;

export const Mask = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: ${(props: IModalProps) => `rgba(0,0,0,${props.backgroundOpacity})`};
	z-index: 100000;
`;
