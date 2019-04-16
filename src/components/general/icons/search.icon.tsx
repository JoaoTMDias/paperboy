// Libraries
import * as React from 'react';
import styled from 'styled-components';

// Component Props
interface IIconSearchProps {
	theme?: any;
}

/**
 * @description Tab Icon: Search
 * @author  João Dias
 * @date  09/December/2018 at 16:22
 * @extends {React.SFC}
 */
const IconSearch: React.FunctionComponent<IIconSearchProps> = props => (
	<Icon
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 26 26"
		aria-labelledby="search-icon-title"
		tabIndex={-1}
	>
		<title id="search-icon-title">Tab Icon: Search</title>
		<path
			className="tab__icon--default"
			d="M18.4,16.3H17.3l-.4-.4a9.17,9.17,0,0,0,2.2-6.3A9.5,9.5,0,0,0,9.8-.1,9.65,9.65,0,0,0,.5,9.7a9.5,9.5,0,0,0,9.3,9.7,8.82,8.82,0,0,0,6-2.3l.4.4v1.2l7.2,7.4,2.1-2.2Zm-8.6,0A6.57,6.57,0,0,1,3.4,9.6,6.55,6.55,0,0,1,9.8,3a6.57,6.57,0,0,1,6.4,6.7A6.43,6.43,0,0,1,9.8,16.3Z"
		/>
		<path
			className="tab__icon--negative"
			d="M9.8,5.9A3.67,3.67,0,0,0,6.2,9.6a3.61,3.61,0,0,0,3.6,3.7,3.7,3.7,0,0,0,0-7.4Z"
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

export default IconSearch;
