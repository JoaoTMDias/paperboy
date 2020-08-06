/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React, { FunctionComponent, useRef, useEffect } from "react";
import LazyLoadingImage from "components/general/images/image.lazyload.component";
import { NEWS_PAGE } from "data/constants/index.constants";
import { IconClose } from "components/icons/index";
import { Container, TopBarLink } from "./styles";

// Constants
import { ITopNavigationWithCloseProps } from "./types";

/**
 * @description Navigation with Title

 * @date  12/December/2018 at 16:40
 * @extends {React.FC}
 */
const TopNavigationWithClose: FunctionComponent<ITopNavigationWithCloseProps> = ({ source, prevPath }) => {
	const closeButtonRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		if (closeButtonRef && closeButtonRef.current) {
			closeButtonRef.current.focus();
		}
	}, []);

	const to = prevPath || NEWS_PAGE;
	

	const src = source ? `/logos/${source}.png` : null;

	return (
		<Container>
			<TopBarLink ref={closeButtonRef} className="close" to={to} aria-label="Close this window and go back">
				<IconClose />
			</TopBarLink>
			{src && (
				<figure className="brand-color-figure">
					<LazyLoadingImage id="brand-logo" width="24" height="24" src={src} alt="CNN Logo" />
				</figure>
			)}
		</Container>
	);
};

export default TopNavigationWithClose;
