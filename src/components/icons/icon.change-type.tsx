// Libraries
import * as React from "react";
import styled from "styled-components";
import { rem } from "polished";

// Interface
export enum EIconChangeTypeSize {
	SMALL = "SMALL",
	LARGE = "LARGE",
}

interface IIconChangeTypeSizeProps {
	type: EIconChangeTypeSize;
}

/**
 * @description Change Type Size Icon
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IIconChangeTypeSizeProps>}
 */
export const IconChangeTypeSize: React.FunctionComponent<IIconChangeTypeSizeProps> = props => {
	const { type } = props;

	return (
		<Wrapper>
			<Icon
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 48 48"
				className={type === EIconChangeTypeSize.SMALL ? "" : "is-large"}
				type={type}
			>
				<path
					fill="var(--letters)"
					fillRule="evenodd"
					d="M22.09 24.85l-1.5-3.45-1.47 3.45zm-2.17-5.26h1.4l3.8 8.69h-1.6l-.88-2.09h-4.08l-.89 2.09h-1.55zm10.52 6a4.43 4.43 0 0 0-1.44-.3c-.94 0-1.5.39-1.5 1 0 .62.56 1 1.26 1 1 0 1.73-.55 1.73-1.37zm0 2.73v-.8a2.62 2.62 0 0 1-2.11.93 2.08 2.08 0 0 1-2.31-2c0-1.44 1.12-2.13 2.63-2.13a5.46 5.46 0 0 1 1.8.27v-.13c0-.9-.56-1.39-1.6-1.39a4.46 4.46 0 0 0-1.86.41l-.41-1.2a5.62 5.62 0 0 1 2.42-.61c1.92 0 2.86 1 2.86 2.75v3.86z"
				/>
			</Icon>
		</Wrapper>
	);
};

IconChangeTypeSize.defaultProps = {
	type: EIconChangeTypeSize.SMALL,
};

// Styling
const Wrapper = styled.figure`
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	width: ${rem("56px")};
	height: ${rem("56px")};
`;

const Icon = styled.svg`
	width: ${rem("48px")};
	height: ${rem("48px")};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	--letters: var(--color-gray7);

	&.is-large {
		width: ${rem("56px")};
		height: ${rem("56px")};
	}
`;

export default React.memo(IconChangeTypeSize);
