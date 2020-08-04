import React, { FunctionComponent, useRef, useEffect } from "react";
import LazyLoadingImage from "components/general/images/image.lazyload.component";
import { NEWS_PAGE } from "data/constants/index.constants";
import { IconClose } from "components/icons/index";
import { Link } from "gatsby";
import { Container, TopBarLink } from "./styles";
import CNN_LOGO from "../../../assets/images/sources/icon-cnn.svg";

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

	return (
		<Container>
			<TopBarLink ref={closeButtonRef} className="close" to={to} aria-label="Close this window and go back">
				<IconClose />
			</TopBarLink>
			<figure className="brand-color-figure">
				<LazyLoadingImage id="brand-logo" width="24" height="24" src={CNN_LOGO} alt="CNN Logo" />
			</figure>
		</Container>
	);
};

export default TopNavigationWithClose;
