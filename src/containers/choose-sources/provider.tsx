/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import React, { useState, useEffect, useReducer } from "react";
import { IChosenSource } from "pagesonboarding/choose-sources";
import ChooseSourcesContext, { IChooseSourcesContext, defaultChooseSourcesContext } from "./context";
import { updateListReducer } from "./update-list-reducer";

const ChooseSourcesProvider: React.FunctionComponent = ({ children }) => {
	const [list, updateList] = useReducer(updateListReducer, defaultChooseSourcesContext.list);

	/**
	 *
	 *
	 * @param {IChosenSource} value
	 */
	function onChangeOption(value: IChosenSource) {
		const index = list.findIndex((source) => {
			source.name === value.name;
		});

		const existsInList = !!(index > 0);

		updateList({
			type: existsInList ? "REMOVE" : "ADD",
			payload: existsInList ? index : value,
		});
	}

	const value: IChooseSourcesContext = {
		list,
		onChangeOption,
	};

	return <ChooseSourcesContext.Provider value={value}>{children}</ChooseSourcesContext.Provider>;
};

export default ChooseSourcesProvider;
