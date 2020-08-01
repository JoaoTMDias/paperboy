import React, { FunctionComponent, useRef, useEffect } from "react";
import { NEWS_PAGE } from "data/constants/index.constants";
import { LazyLoadingImage } from "components/index.components";
import { IconClose } from "components/icons/index";
import { Container, TopBarLink } from "./styles";
import CNN_LOGO from "../../../assets/images/sources/icon-cnn.svg";

// Constants
import { ITopNavigationWithCloseProps } from "./types";

/**
 * @description Navigation with Title

 * @date  12/December/2018 at 16:40
 * @extends {React.FC}
 */
const TopNavigationWithClose: FunctionComponent<ITopNavigationWithCloseProps> = ({ source }) => {
	const closeButtonRef = useRef();

	useEffect(() => closeButtonRef?.current.focus(), []);

	return (
		<Container>
			<TopBarLink
				ref={closeButtonRef}
				className="close"
				to={NEWS_PAGE}
				aria-label="Close this window and go back to the news page"
			>
				<IconClose />
			</TopBarLink>
			<figure className="brand-color-figure">
				<LazyLoadingImage id="brand-logo" width="24" height="24" src={CNN_LOGO} alt="CNN Logo" />
			</figure>
		</Container>
	);
};

export default TopNavigationWithClose;
