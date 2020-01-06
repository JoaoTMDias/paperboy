// Libraries
import * as React from "react";
import styled, { css } from "styled-components";
import { rem } from "polished";
interface IconProps {
	width?: string;
	height?: string;
}
/**********
 ** Component: IconDislike
 ** @type: functional stateless component
 ** @description:  Twitter Icon
 **********/
const IconTwitter = (props: IconProps) => {
	return (
		<Icon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
			<title>ic_modal_share_twitter</title>
			<path
				fill="#079ff6"
				fillRule="evenodd"
				d="M28.34 7.6a6.36 6.36 0 0 1-1.8.6A6.08 6.08 0 0 0 28 5.8c.1-.3-.2-.5-.4-.3a9 9 0 0 1-2.7 1.1h-.2c-.2 0-.3-.1-.5-.2A5.49 5.49 0 0 0 20.54 5a5.66 5.66 0 0 0-1.8.3 5.41 5.41 0 0 0-3.6 4 14.77 14.77 0 0 0-.1 2.1c0 .1 0 .1-.1.2a.35.35 0 0 1-.2.1 14.47 14.47 0 0 1-10-5.5c0-.2-.2-.1-.4 0a7.27 7.27 0 0 0-.7 2.9 5.44 5.44 0 0 0 1.7 4A6.94 6.94 0 0 1 4 12.6c-.2-.1-.4 0-.4.3a5.72 5.72 0 0 0 3.2 5.2h-.1a2.77 2.77 0 0 1-.9-.1c-.2 0-.4.2-.3.4a5.67 5.67 0 0 0 4.4 3.9 9.88 9.88 0 0 1-5.7 1.8h-.6c-.2 0-.4.1-.4.3s0 .4.2.5A14.77 14.77 0 0 0 11 27a15.8 15.8 0 0 0 6.5-1.4 15.48 15.48 0 0 0 4.8-3.7 15.61 15.61 0 0 0 2.9-5 15.25 15.25 0 0 0 1-5.5v-.1a.91.91 0 0 1 .4-.8 25.73 25.73 0 0 0 2.1-2.4c.1-.3-.1-.6-.4-.5"
			/>
		</Icon>
	);
};

const Icon = styled("svg")`
	${props => css`
		width: ${(props: IconProps) => (props.width ? `${rem(props.width)}` : `${rem("30px")}`)};
		height: ${(props: IconProps) => (props.height ? `${rem(props.height)}` : `${rem("30px")}`)};
	`}
`;

export default IconTwitter;
