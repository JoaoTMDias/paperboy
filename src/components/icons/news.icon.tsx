// Libraries
import * as React from "react";
import styled from "styled-components";

// Component Props
interface IIconNewsProps {}

/**
 * @description Tab Icon: News

 * @date  09/December/2018 at 16:22
 * @extends {React.FC}
 */
export const IconNews: React.FunctionComponent<IIconNewsProps> = (props) => (
	<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" aria-hidden="true" tabIndex={-1}>
		<path className="tab__icon--default" d="M23,0H3A2,2,0,0,0,1,2V24a2,2,0,0,0,2,2H23a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2" />
		<path
			className="tab__icon--negative"
			d="M22.09,2.09A.91.91,0,0,1,23,3V23a.91.91,0,0,1-.91.91H3.91A.91.91,0,0,1,3,23V3a.91.91,0,0,1,.91-.91H22.09"
		/>
		<path
			className="tab__icon--positive"
			d="M4.29,5.63a.52.52,0,0,1,.52-.52H11.3a.52.52,0,0,1,.52.52h0V12a.51.51,0,0,1-.51.51H4.82A.52.52,0,0,1,4.29,12h0ZM21,21.36H4.53A.46.46,0,0,1,4,21a.47.47,0,0,1,.39-.53H21a.46.46,0,0,1,.53.4.47.47,0,0,1-.39.53.33.33,0,0,1-.14,0M4.29,18.11a.47.47,0,0,1,.47-.47h6.59a.47.47,0,1,1,0,.93H4.76a.47.47,0,0,1-.47-.45h0m8.47,0a.47.47,0,0,1,.14-.33.5.5,0,0,1,.67,0,.46.46,0,0,1,0,.65h0a.51.51,0,0,1-.33.13.51.51,0,0,1-.34-.13.47.47,0,0,1-.14-.33m8.47.46H15.12a.47.47,0,0,1-.47-.45h0a.47.47,0,0,1,.47-.47h6.11a.47.47,0,0,1,.47.45v0a.45.45,0,0,1-.44.46h0m0-2.78H4.76a.47.47,0,0,1-.46-.46h0a.45.45,0,0,1,.44-.46H21.23a.45.45,0,0,1,.47.43v0a.47.47,0,0,1-.45.47h0m0-3.25H15.12a.46.46,0,0,1-.53-.4.47.47,0,0,1,.39-.53h6.25a.46.46,0,0,1,.53.4.47.47,0,0,1-.39.53.33.33,0,0,1-.14,0m0-3.25H15.12a.47.47,0,0,1-.47-.47h0a.47.47,0,0,1,.46-.46h6.12a.45.45,0,0,1,.47.43v0a.47.47,0,0,1-.45.47h0m0-3.29H15.12a.46.46,0,0,1-.53-.4A.47.47,0,0,1,15,5.07a.33.33,0,0,1,.14,0h6.11a.46.46,0,0,1,.53.4.47.47,0,0,1-.39.53h-.14"
		/>
	</Icon>
);

// Styling
const Icon = styled.svg`
	width: 100%;
	height: 100%;

	.tab__icon {
		&--default,
		&--positive {
			fill: var(--color-gray3);
		}

		&--negative {
			fill: var(--color-gray9);
		}
	}
`;

export default IconNews;
