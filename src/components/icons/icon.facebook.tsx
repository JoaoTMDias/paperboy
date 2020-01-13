// Libraries
import * as React from "react";
import styled, { css } from "styled-components";
import { rem } from "polished";

interface IconProps {
	width?: string;
	height?: string;
}

/** ********
 ** Component: IconDislike
 ** @type: functional stateless component
 ** @description:  Facebook Icon
 ********* */
export const IconFacebook = (props: IconProps) => {
	return (
		<Icon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
			<title>ic_modal_share_facebook</title>
			<path
				fill="#4065b4"
				fillRule="evenodd"
				d="M24.85 4H7.25a3.16 3.16 0 0 0-3.2 3.2v17.5a3.18 3.18 0 0 0 3.2 3.3h8.6v-8.6h-2.2a.47.47 0 0 1-.5-.5v-2.8a.47.47 0 0 1 .5-.5h2.2v-2.7c0-3.1 1.9-4.8 4.7-4.8h2.3a.47.47 0 0 1 .5.5V11a.47.47 0 0 1-.5.5h-1.4c-1.5 0-1.8.7-1.8 1.8v2.3H23a.5.5 0 0 1 .5.6l-.3 2.8a.54.54 0 0 1-.5.5h-3v8.6h5.1a3.16 3.16 0 0 0 3.2-3.2V7.15A3 3 0 0 0 24.85 4"
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

export default IconFacebook;
