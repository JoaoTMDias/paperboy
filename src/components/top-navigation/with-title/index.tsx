// Libraries
import React, { memo } from "react";
import { Container } from "./styles";
import { ITopNavigationWithTitleProps } from "./types";

/**
 * @description Navigation with Title

 * @date  12/December/2018 at 16:40
 * @extends {React.FC}
 */
const TopNavigationWithTitle: React.FunctionComponent<ITopNavigationWithTitleProps> = ({ title, subtitle }) => {
	return (
		<Container id="top-navigation-with-title" className="shrink-when-sticky">
			<h2 className="top-navigation-with-title__title title">{title}</h2>
			<p className="hide-when-sticky top-navigation-with-title__subtitle">{subtitle}</p>
		</Container>
	);
};

export default memo(TopNavigationWithTitle);
