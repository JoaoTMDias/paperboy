// Libraries
import * as React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

// Interface
interface IIconTypesetProps {
	isActive: boolean;
}

/**
 * @description Typeset Icon
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IIconTypesetProps>}
 */
const IconTypeset: React.FunctionComponent<IIconTypesetProps> = props => {
	const { isActive } = props;

	return (
		<Icon
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			className={isActive ? 'is-active' : ''}
		>
			<path
				fill="var(--outer-ring)"
				fillRule="evenodd"
				d="M32.8 13H15.2a2.21 2.21 0 0 0-2.2 2.2v17.6a2.21 2.21 0 0 0 2.2 2.2h17.6a2.21 2.21 0 0 0 2.2-2.2V15.2a2.21 2.21 0 0 0-2.2-2.2"
			/>
			<path
				fill="var(--inner-background)"
				fillRule="evenodd"
				d="M32.8 14.76a.44.44 0 0 1 .44.44v17.6a.44.44 0 0 1-.44.44H15.2a.44.44 0 0 1-.44-.44V15.2a.44.44 0 0 1 .44-.44h17.6"
			/>
			<path
				fill="var(--letters)"
				fillRule="evenodd"
				d="M22.09 24.85l-1.5-3.45-1.47 3.45zm-2.17-5.26h1.4l3.8 8.69h-1.6l-.88-2.09h-4.08l-.89 2.09h-1.55zm10.52 6a4.43 4.43 0 0 0-1.44-.3c-.94 0-1.5.39-1.5 1 0 .62.56 1 1.26 1 1 0 1.73-.55 1.73-1.37zm0 2.73v-.8a2.62 2.62 0 0 1-2.11.93 2.08 2.08 0 0 1-2.31-2c0-1.44 1.12-2.13 2.63-2.13a5.46 5.46 0 0 1 1.8.27v-.13c0-.9-.56-1.39-1.6-1.39a4.46 4.46 0 0 0-1.86.41l-.41-1.2a5.62 5.62 0 0 1 2.42-.61c1.92 0 2.86 1 2.86 2.75v3.86z"
			/>
		</Icon>
	);
};

// Styling
const Icon = styled.svg`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	--outer-ring: var(--color-gray8);
	--letters: var(--outer-ring);
	--inner-background: var(--color-gray1);

	&.is-active {
		--outer-ring: var(--color-primary);
		--letters: var(--color-white);
		--inner-background: var(--outer-ring);
	}
`;

export default React.memo(IconTypeset);
