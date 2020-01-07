import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
	colorPrimary: "var(--color-primary)",
	colorSelect: "var(--color-select)",
	colorWhite: "var(--color-white)",
	colorGray0: "var(--color-gray0)",
	colorGray1: "var(--color-gray1)",
	colorGray2: "var(--color-gray2)",
	colorGray3: "var(--color-gray3)",
	colorGray4: "var(--color-gray4)",
	colorGray5: "var(--color-gray5)",
	colorGray6: "var(--color-gray6)",
	colorGray7: "var(--color-gray7)",
	colorGray8: "var(--color-gray8)",
	colorGray9: "var(--color-gray9)",
	colorBlack: "var(--color-black)",
	bodyBackground: "var(--body-background)",
	bodyFontColor: "var(--body-font-color)",
	bottomNavigationBarHeight: "var(--bottom-navigation-bar-height)",
	headingFontFamily: "var(--heading-font-family)",
	bodyFontFamily: "var(--body-font-family)",
	globalMargin: "var(--global-margin)",
	globalPadding: "var(--global-padding)",
	globalFontSize: "var(--global-font-size)",
	globalWidth: "var(--global-width)",
	globalLineheight: "var(--global-lineheight)",
	globalShadow: "var(--global-shadow)",
	globalWeightNormal: "var(--global-weight-normal)",
	globalWeightBold: "var(--global-weight-bold",
	globalRadius: "var(--global-radius)",
	bodyAntialiased: "var(--body-antialiased)",
	colorAnchor: "var(--color-white)",
	anchorTextDecoration: "var(--anchor-text-decoration)",
	anchorTextDecorationHover: "var(--anchor-text-decoration-hover)",
	defaultTimingFunction: "var(--default-timing-function)",
	breakpointMedium: "all and (min-width: #{$breakpoint-medium})",
	breakpointLarge: "all and (min-width: #{$breakpoint-large})",
	breakpointXlarge: "all and (min-width: #{$breakpoint-xlarge})",
	breakpointXxlarge: "all and (min-width: #{$breakpoint-xxlarge})",
};

export const Provider: React.FunctionComponent = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
