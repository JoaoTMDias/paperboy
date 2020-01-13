// Libraries
import * as React from "react";
import styled from "styled-components";

// Component Props
interface IIconSettingsProps {}

/**
 * @description Tab Icon: Settings

 * @date  09/December/2018 at 16:22
 * @extends {React.FC}
 */
export const IconSettings: React.FunctionComponent<IIconSettingsProps> = props => (
	<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" aria-labelledby="settings-icon-title" tabIndex={-1}>
		<title id="settings-icon-title">Tab Icon: Settings</title>
		<path
			className="tab__icon--default"
			d="M9.19,3.9A3.86,3.86,0,0,0,5.38,0,3.86,3.86,0,0,0,1.57,3.9,3.9,3.9,0,0,0,4.11,7.56V26H6.65V7.56A3.88,3.88,0,0,0,9.19,3.9"
		/>
		<path
			className="tab__icon--default"
			d="M9.19,16.9a3.88,3.88,0,0,0,2.54,3.66V26h2.54V20.56a3.91,3.91,0,0,0,0-7.32V0H11.73V13.24A3.88,3.88,0,0,0,9.19,16.9"
		/>
		<path
			className="tab__icon--default"
			d="M16.81,3.9a3.88,3.88,0,0,0,2.54,3.66V26h2.54V7.56A3.9,3.9,0,0,0,24.43,3.9a3.81,3.81,0,1,0-7.62,0h0"
		/>
		<path className="tab__icon--negative" d="M4.11,3.9A1.27,1.27,0,1,1,5.38,5.2,1.27,1.27,0,0,1,4.11,3.9h0" />
		<path className="tab__icon--negative" d="M14.27,16.9A1.27,1.27,0,1,1,13,15.6a1.27,1.27,0,0,1,1.27,1.3h0" />
		<path className="tab__icon--negative" d="M21.89,3.9a1.27,1.27,0,1,1-1.27-1.3,1.27,1.27,0,0,1,1.27,1.3h0" />
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

export default IconSettings;
