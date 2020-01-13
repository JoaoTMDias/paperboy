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
 ** @description:  Whatsapp Icon
 ********* */
export const IconWhatsapp = (props: IconProps) => {
	return (
		<Icon {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
			<title>ic_modal_share_whatsapp</title>
			<path
				fill="#3ac44d"
				fillRule="evenodd"
				d="M23.65 23.5a10.93 10.93 0 0 1-7.6 3.2 11.25 11.25 0 0 1-4.8-1.1l-1-.5-4.25 1 .9-4.4-.5-.9a11.7 11.7 0 0 1-1.1-4.9 10.35 10.35 0 0 1 3.2-7.6 10.93 10.93 0 0 1 7.6-3.2 10.35 10.35 0 0 1 7.6 3.2 10.93 10.93 0 0 1 3.2 7.6 10.93 10.93 0 0 1-3.2 7.6M15.35 2.1a13.9 13.9 0 0 0-13.1 13.8 12.92 12.92 0 0 0 1.5 6.2l-1.5 7.2a.5.5 0 0 0 .6.6l7-1.6a13.15 13.15 0 0 0 5.9 1.4 13.81 13.81 0 1 0-.4-27.6"
			/>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M22.5 18.8l-2.7-.8a1 1 0 0 0-1 .3l-.7.7a.91.91 0 0 1-1.1.2 13.9 13.9 0 0 1-4.6-4.1.91.91 0 0 1 .1-1.1l.6-.7a.92.92 0 0 0 .1-1l-1.1-2.5a1.06 1.06 0 0 0-1.6-.4A5 5 0 0 0 8.9 12c-.2 1.9.6 4.2 3.6 7.1 3.5 3.3 6.3 3.7 8.1 3.3a4.94 4.94 0 0 0 2.4-2.1 1 1 0 0 0-.5-1.5"
			/>
			<path
				fill="#3ac44d"
				fillRule="evenodd"
				d="M22.5 18.8l-2.7-.8a1 1 0 0 0-1 .3l-.7.7a.91.91 0 0 1-1.1.2 13.9 13.9 0 0 1-4.6-4.1.91.91 0 0 1 .1-1.1l.6-.7a.92.92 0 0 0 .1-1l-1.1-2.5a1.06 1.06 0 0 0-1.6-.4A5 5 0 0 0 8.9 12c-.2 1.9.6 4.2 3.6 7.1 3.5 3.3 6.3 3.7 8.1 3.3a4.94 4.94 0 0 0 2.4-2.1 1 1 0 0 0-.5-1.5"
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

export default IconWhatsapp;
