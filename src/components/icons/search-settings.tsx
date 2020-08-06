/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Libraries
import * as React from "react";
import styled from "styled-components";
import { theme } from "helpers/theme.helper";

// Interface
interface IIconSearchSettingsProps {
	theme?: any;
	isActive: boolean;
}

/**
 * @description Search Settings icon
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IIconSearchSettingsProps>}
 */
const IconSearchSettings: React.FunctionComponent<IIconSearchSettingsProps> = ({ isActive }) => {
	const className = isActive ? "is-active" : "";

	return (
		<Icon
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			tabIndex={-1}
		>
			<path
				fill="var(--icon-fill-color"
				d="M12.753 24h-1.506a2.212 2.212 0 01-2.21-2.21v-.509a9.69 9.69 0 01-1.504-.624l-.361.36a2.21 2.21 0 01-3.125 0l-1.065-1.064a2.21 2.21 0 010-3.125l.361-.361a9.689 9.689 0 01-.624-1.504h-.51A2.212 2.212 0 010 12.753v-1.506c0-1.218.991-2.21 2.21-2.21h.509a9.692 9.692 0 01.624-1.504l-.36-.361a2.21 2.21 0 010-3.125l1.064-1.065a2.21 2.21 0 013.125 0l.36.361c.484-.25.988-.459 1.505-.624v-.51C9.037.991 10.03 0 11.247 0h1.506c1.218 0 2.21.991 2.21 2.21v.509a9.689 9.689 0 011.504.624l.361-.36a2.21 2.21 0 013.125 0l1.065 1.064c.85.85.875 2.25 0 3.125l-.361.36c.25.484.459.987.624 1.505h.51c1.218 0 2.209.992 2.209 2.21v1.506c0 1.218-.991 2.21-2.21 2.21h-.509a9.695 9.695 0 01-.624 1.504l.36.361a2.21 2.21 0 010 3.125l-1.064 1.065a2.21 2.21 0 01-3.125 0l-.361-.361c-.483.25-.987.459-1.504.624v.51c0 1.218-.992 2.209-2.21 2.209zm-4.985-4.82a8.285 8.285 0 002.148.892c.31.08.528.36.528.68v1.039c0 .442.36.803.803.803h1.506c.443 0 .803-.36.803-.803v-1.038c0-.321.217-.601.528-.681a8.284 8.284 0 002.148-.892.703.703 0 01.855.108l.736.735a.803.803 0 001.135 0l1.065-1.065a.803.803 0 000-1.135l-.735-.736a.703.703 0 01-.108-.855 8.286 8.286 0 00.892-2.148c.08-.31.36-.528.68-.528h1.039c.442 0 .803-.36.803-.803v-1.506a.804.804 0 00-.803-.803h-1.038c-.321 0-.601-.217-.681-.528a8.286 8.286 0 00-.892-2.148.703.703 0 01.108-.855l.735-.735a.803.803 0 000-1.136L18.96 3.977a.803.803 0 00-1.136 0l-.736.735a.703.703 0 01-.855.108 8.289 8.289 0 00-2.148-.892.703.703 0 01-.528-.68V2.209a.804.804 0 00-.803-.803h-1.506a.804.804 0 00-.803.803v1.039c0 .32-.217.6-.528.68a8.288 8.288 0 00-2.148.892.703.703 0 01-.855-.108l-.735-.735a.803.803 0 00-1.136 0L3.977 5.041a.803.803 0 000 1.135l.735.736a.703.703 0 01.108.855 8.286 8.286 0 00-.892 2.148.703.703 0 01-.68.528H2.209a.804.804 0 00-.803.803v1.506c0 .443.36.803.803.803h1.039c.32 0 .6.217.68.528a8.29 8.29 0 00.892 2.148.703.703 0 01-.108.855l-.735.736a.803.803 0 000 1.135l1.065 1.065a.803.803 0 001.135 0l.736-.735a.707.707 0 01.855-.108z"
			/>
			<path
				fill="var(--icon-fill-color"
				d="M12.001 17.222A5.228 5.228 0 016.78 12a5.228 5.228 0 015.222-5.222A5.228 5.228 0 0117.223 12a5.228 5.228 0 01-5.222 5.222zm0-9.038A3.82 3.82 0 008.186 12 3.82 3.82 0 0012 15.816 3.82 3.82 0 0015.817 12 3.82 3.82 0 0012 8.184z"
			/>
		</Icon>
	);
};

// Styling
const Icon = styled.svg`
	--icon-fill-color: var(--color-gray9);

	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	${theme.dark`
		--icon-fill-color: var(--color-gray0);
	`}
`;

export default IconSearchSettings;
