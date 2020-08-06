/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Libraries
import React, { useCallback } from "react";
import { UIDisplay, UILead } from "components/general/typography/typography.theme";
import { UIButton } from "components/button";
import { Wrapper } from "./styles";
import { IconOffline } from "../icons/offline";

// Interface
interface IErrorProps {
	title?: string;
	subtitle?: string;
}

/**
 * @description Component Description
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IErrorProps>}
 */
const ErrorMessage: React.FunctionComponent<IErrorProps> = ({ title, subtitle }) => {
	const onClick = useCallback(() => {
		window.location.reload();
	}, []);

	return (
		<Wrapper>
			<IconOffline />
			<div className="error-message__content">
				<UIDisplay text={title} />
				<UILead text={subtitle} />
			</div>
			<UIButton
				id="reload"
				flavour="secondary"
				label="Reload this page and try again"
				text="Try Again"
				onClick={onClick}
			/>
		</Wrapper>
	);
};

ErrorMessage.defaultProps = {
	title: "Ups, you are offline",
	subtitle: "It seems that the connection was lost.",
};

export default React.memo(ErrorMessage);
