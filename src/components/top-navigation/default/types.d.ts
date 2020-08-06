/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Component Props
export enum ETopNavigationType {
	STICKY = "sticky",
	FIXED = "fixed",
	RELATIVE = "relative",
}

export interface ITopNavigationProps {
	isSticky?: boolean;
	shadow?: "default" | "hairline" | "none";
	style?: React.CSSProperties;
}

export interface ITopNavigationState {
	containerElement: HTMLElement | null;
	navigationElement: HTMLElement | null;
	rootContainer: {
		parentContainer: HTMLElement | null;
		threshold: number;
	};
	hasInitializedIntersectionObserver: boolean;
}
