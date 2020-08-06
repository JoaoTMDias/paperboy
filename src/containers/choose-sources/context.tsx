/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React from "react";
import { IChosenSource } from "pages/onboarding/choose-sources";

export interface IChooseSourcesContext {
	list: IChosenSource[];
	onChangeOption(value: IChosenSource): void;
}

export const defaultChooseSourcesContext: IChooseSourcesContext = {
	list: [],
	onChangeOption: () => {},
};

/**
 * @description Context for Choose Sources
 * @author João Dias
 * @param {IChooseSourcesContext}
 * @returns
 */
const ChooseSourcesContext = React.createContext<IChooseSourcesContext>(defaultChooseSourcesContext);

export default ChooseSourcesContext;
