// Libraries
import * as React from "react";
import styled from "styled-components";

// Component Props
interface IIconCategoriesProps {
	theme?: any;
}

/**
 * @description Tab Icon: Categories
 * @author  João Dias
 * @date  09/December/2018 at 16:22
 * @extends {React.SFC}
 */
const IconCategories: React.FunctionComponent<IIconCategoriesProps> = props => (
	<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" aria-labelledby="categories-icon-title" tabIndex={-1}>
		<title id="categories-icon-title">Tab Icon: Categories</title>
		<path
			className="tab__icon--default"
			d="M9.68,0H3.05A2.19,2.19,0,0,0,.84,2.17h0V9.75a2.2,2.2,0,0,0,2.21,2.17H9.68a2.2,2.2,0,0,0,2.21-2.17V2.17A2.19,2.19,0,0,0,9.68,0Z"
		/>
		<path
			className="tab__icon--default"
			d="M23,0H16.32a2.19,2.19,0,0,0-2.21,2.17h0V9.75a2.2,2.2,0,0,0,2.21,2.17H23a2.2,2.2,0,0,0,2.21-2.17V2.17A2.19,2.19,0,0,0,23,0Z"
		/>
		<path
			className="tab__icon--default"
			d="M23,14.08H16.32a2.2,2.2,0,0,0-2.21,2.17v7.58A2.19,2.19,0,0,0,16.32,26H23a2.19,2.19,0,0,0,2.21-2.17h0V16.25A2.2,2.2,0,0,0,23,14.08Z"
		/>
		<path
			className="tab__icon--default"
			d="M9.68,14.08H3.05A2.2,2.2,0,0,0,.84,16.25v7.58A2.19,2.19,0,0,0,3.05,26H9.68a2.19,2.19,0,0,0,2.21-2.17h0V16.25A2.2,2.2,0,0,0,9.68,14.08Z"
		/>
		<polygon className="tab__icon--negative" points="9.68 4.33 9.68 9.75 3.05 9.75 3.05 2.17 9.69 2.17 9.68 4.33" />
		<polygon className="tab__icon--negative" points="23 4.33 23 9.75 16.32 9.75 16.32 2.17 23 2.17 23 4.33" />
		<polygon className="tab__icon--negative" points="23 18.42 23 23.83 16.32 23.83 16.32 16.25 23 16.25 23 18.42" />
		<polygon
			className="tab__icon--negative"
			points="9.68 18.42 9.68 23.83 3.05 23.83 3.05 16.25 9.69 16.25 9.68 18.42"
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

export default IconCategories;
