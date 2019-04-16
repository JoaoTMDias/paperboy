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
