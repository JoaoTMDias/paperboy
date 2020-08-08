/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { rem } from "polished";
import styled, { css } from "styled-components";
import { theme } from "helpers/theme.helper";
import { IUICallToActionProps } from "./types";

export const Wrapper = styled.nav`
	width: 100%;
	height: auto;
	padding: ${rem("10px")} 0;
	position: fixed;
	left: 0px;
	right: 0px;
	bottom: ${(props: IUICallToActionProps) => (props.isTop ? "auto" : "0px")};
	background-color: var(--body-background, rgba(255, 255, 255, 1));
	transform: translate3d(0, 4.5rem, 0);
	${(props: IUICallToActionProps) =>
		props.blurred &&
		css`
			background-color: var(--body-background, rgba(255, 255, 255, 0.95));
		`}

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	box-shadow: ${(props: IUICallToActionProps) =>
		props.isTop ? "0px 4px 20px 0px rgba(255,255,255,0.5)" : "0px -4px 20px 0px rgba(255,255,255,1)"};
	z-index: 100;

	button,
	a {
		&:last-child {
			margin-top: 0.5rem;
		}

		&:only-child {
			width: calc(100% - 1rem);
			max-width: ${rem("640px")};
			margin: 0 auto;
		}
		box-shadow: ${(props: IUICallToActionProps) =>
			props.float
				? "0px 4px 16px 4px hsla(var(--cta-shadow-color-hue), 78%, 57%, 0.24)"
				: "0px 2px 0px 2px hsla(var(--cta-shadow-color-hue),78%,57%,0.24)"};
	}

	${theme.dark`
		box-shadow: ${(props: IUICallToActionProps) =>
			props.isTop ? "0px 4px 20px 0px rgba(0,0,0,0.5)" : "0px -4px 20px 0px rgba(0,0,0,1)"};
	`};
`;
