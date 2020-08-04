// Libraries
import * as React from "react";
import styled from "styled-components";

// Component Props
interface IIconSavedProps {}

/**
 * @description Tab Icon: Saved

 * @date  09/December/2018 at 16:22
 * @extends {React.FC}
 */
export const IconSaved: React.FunctionComponent<IIconSavedProps> = (props) => (
	<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" aria-hidden="true" tabIndex={-1}>
		<path
			className="tab__icon--default"
			d="M19.69,0H6.31A2.64,2.64,0,0,0,3.64,2.6V24.7a1.29,1.29,0,0,0,.71,1.15,1.37,1.37,0,0,0,1.37-.07L13,21.06l7.28,4.72A1.3,1.3,0,0,0,21,26a1.36,1.36,0,0,0,.63-.15,1.29,1.29,0,0,0,.71-1.15V2.6A2.63,2.63,0,0,0,19.69,0Z"
		/>
		<path className="tab__icon--negative" d="M19.69,22.27l-6-3.85a1.37,1.37,0,0,0-1.48,0l-5.9,3.85V2.6H19.69Z" />
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

export default IconSaved;
