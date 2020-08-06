/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Component Props
export interface IUIButtonProps extends React.HTMLProps<HTMLButtonElement> {
	flavour?: "primary" | "secondary";
	text: string;
	label?: string;
}

export interface IUIAnchorProps {
	to: string;
	text: string;
	label: string;
	disabled?: boolean;
}
