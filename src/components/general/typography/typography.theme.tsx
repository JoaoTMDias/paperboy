// Libraries
import { rem } from 'polished';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';

// Interface
interface IHeadingsProps {
	text: string;
	theme?: any;
}

/**
 * @description Display Heading: Level 1
 * @author  João Dias
 * @date  10/December/2018 at 23:15
 * @extends {React.SFC}
 */
const UIDisplay: React.FunctionComponent<IHeadingsProps> = props => {
	const { text } = props;
	return <Heading1 id="page-display-heading">{text}</Heading1>;
};

/**
 * @description Subtitle Heading
 * @author  João Dias
 * @date  10/December/2018 at 23:15
 * @extends {React.SFC}
 */
const UISubtitle: React.FunctionComponent<IHeadingsProps> = props => {
	const { text } = props;
	return <Subtitle id="page-subtitle-heading">{text}</Subtitle>;
};

/**
 * @description Lead Heading
 * @author  João Dias
 * @date  10/December/2018 at 23:15
 * @extends {React.SFC}
 */
const UILead: React.FunctionComponent<IHeadingsProps> = props => {
	const { text } = props;
	return <Lead id="page-lead">{text}</Lead>;
};

const onEnter = keyframes`
    from {
        transform: translate3d(0, var(--bottom-navigation-bar-height), 0);
        opacity: 0;
    }

    to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
`;

const Heading1 = styled.h2`
	width: 100%;
	font-size: ${rem('36px')};
	line-height: 1.15;
	font-family: var(--heading-font-family);
	color: var(--heading-1-color);
	margin-bottom: ${rem('16px')};

	animation-name: ${onEnter};
	animation-duration: 300ms;
	animation-timing-function: var(--default-timing-function);
	animation-fill-mode: both;
	animation-delay: 250ms;
`;

const Subtitle = styled.h3`
	width: 100%;
	letter-spacing: -0.24px;
	line-height: 20px;
	font-size: ${rem('16px')};
	line-height: 1.25;
	color: var(--subtitle-color);
	font-family: var(--heading-font-family);
	margin-bottom: ${rem('8px')};

	animation-name: ${onEnter};
	animation-duration: 300ms;
	animation-timing-function: var(--default-timing-function);
	animation-fill-mode: both;
	animation-delay: 125ms;
`;

const Lead = styled.p`
	width: 100%;
	letter-spacing: -0.48px;
	line-height: 20px;
	font-size: ${rem('20px')};
	line-height: var(--global-lineheight);
	color: var(--lead-color);
	font-family: var(--body-font-family);

	animation-name: ${onEnter};
	animation-duration: 300ms;
	animation-timing-function: var(--default-timing-function);
	animation-fill-mode: both;
	animation-delay: 500ms;
`;

export { UIDisplay, UISubtitle, UILead };
