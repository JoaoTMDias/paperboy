/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

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
			<h1 className="top-navigation-with-title__title title">{title}</h1>
			{subtitle && <p className="hide-when-sticky top-navigation-with-title__subtitle">{subtitle}</p>}
		</Container>
	);
};

export default memo(TopNavigationWithTitle);
