/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

export interface ITopNavigationWithCloseProps {
	title: string;
	source: string | null;
	prevPath?: string;
}

export interface IHeroTitle {
	element: HTMLDivElement | null;
	height: number;
}

export interface IHeroT {
	element: HTMLDivElement | null;
	title: IHeroTitle;
	height: number;
	trigger: number;
}

export interface ITopNavigationWithCloseState {
	root: HTMLElement | null;
	speed?: number;
	hero: IHeroT;
	navbar: HTMLDivElement | null;
}
