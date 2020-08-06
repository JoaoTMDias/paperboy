/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

export interface IThemeProps {
	colorPrimary: string;
	colorSelect: string;
	colorWhite: string;
	colorGray0: string;
	colorGray1: string;
	colorGray2: string;
	colorGray3: string;
	colorGray4: string;
	colorGray5: string;
	colorGray6: string;
	colorGray7: string;
	colorGray8: string;
	colorGray9: string;
	colorBlack: string;
	bodyBackground: string;
	bodyFontColor: string;
	bottomNavigationBarHeight: string;
	headingFontFamily: string;
	bodyFontFamily: string;
	globalMargin: string;
	globalPadding: string;
	globalFontSize: string;
	globalWidth: string;
	globalLineheight: string;
	globalShadow: string;
	globalWeightNormal: string;
	globalWeightBold: string;
	globalRadius: string;
	bodyAntialiased: string;
	colorAnchor: string;
	anchorTextDecoration: string;
	anchorTextDecorationHover: string;
	defaultTimingFunction: string;
	breakpoints: Breakpoints;
	breakpointMedium: string;
	breakpointLarge: string;
	breakpointXlarge: string;
	breakpointXxlarge: string;
}

export interface Breakpoints {
	medium: number;
	large: number;
	xlarge: number;
	xxlarge: number;
}

export enum EAppThemeType {
	LIGHT = "LIGHT",
	DARK = "DARK",
	AMBIENT = "AMBIENT",
}

export interface IAppTheme {
	theme?: EAppThemeType;
}
