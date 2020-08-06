/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React from "react";
import { withMemo } from "helpers/index.helpers";
import { Anchor } from "./styles";
import { IUIAnchorProps } from "./types";

export const UIAnchor: React.FunctionComponent<IUIAnchorProps> = ({ to, text, label, disabled }) => {
	return (
		<Anchor to={to} text={text} label={label} data-testid="ui-anchor" disabled={disabled} aria-disabled={disabled}>
			{text}
		</Anchor>
	);
};

export default withMemo(UIAnchor, ["disabled"]);
