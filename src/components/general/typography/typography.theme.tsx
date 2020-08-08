/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Libraries
import { rem } from "polished";
import * as React from "react";
import styled from "styled-components";
import fluidFontSize from "helpers/fluid-typography";

// Interface
interface IHeadingsProps {
	text: string;
}

/**
 * @description Display Heading: Level 1

 * @date  10/December/2018 at 23:15
 * @extends {React.FC}
 */
const UIDisplay: React.FunctionComponent<IHeadingsProps> = (props) => {
	const { text } = props;
	return (
		<Heading1 id="page-display-heading" data-testid="ui-display-title">
			{text}
		</Heading1>
	);
};

/**
 * @description Subtitle Heading

 * @date  10/December/2018 at 23:15
 * @extends {React.FC}
 */
const UISubtitle: React.FunctionComponent<IHeadingsProps> = (props) => {
	const { text } = props;
	return (
		<Subtitle id="page-subtitle-heading" data-testid="ui-subtitle-title">
			{text}
		</Subtitle>
	);
};

/**
 * @description Lead Heading

 * @date  10/December/2018 at 23:15
 * @extends {React.FC}
 */
const UILead: React.FunctionComponent<IHeadingsProps> = ({ text }) => {
	return (
		<Lead id="page-lead" data-testid="ui-lead-title">
			{text}
		</Lead>
	);
};

const Heading1 = styled.h2`
	width: 100%;
	max-width: 40rem;
	${fluidFontSize(36, "8.75vw", 40)};
	line-height: 1.15;
	font-family: var(--heading-font-family);
	color: var(--heading-1-color);
	margin-left: auto;
	margin-right: auto;
	margin-bottom: ${rem("16px")};
`;

const Subtitle = styled.p`
	width: 100%;
	max-width: 40rem;
	letter-spacing: -0.24px;
	line-height: 20px;
	${fluidFontSize(16, "2.25vw", 18)};
	line-height: 1.25;
	color: var(--subtitle-color);
	font-family: var(--heading-font-family);
	margin-left: auto;
	margin-right: auto;
	margin-bottom: ${rem("8px")};
`;

const Lead = styled.p`
	width: 100%;
	max-width: 40rem;
	letter-spacing: -0.48px;
	line-height: 20px;
	line-height: var(--global-lineheight);
	color: var(--heading-1-color);
	font-family: var(--body-font-family);
	margin-left: auto;
	margin-right: auto;
	opacity: 1;
	transition: none;
	transition-duration: 0.01ms;
	animation-duration: 0ms;
	${fluidFontSize(20, "2.5vw", 22)};
`;

export { UIDisplay, UISubtitle, UILead };
