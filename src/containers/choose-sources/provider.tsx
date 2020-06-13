import React, { useState, useEffect, useReducer } from "react";
import ChooseSourcesContext, { IChooseSourcesContext, defaultChooseSourcesContext } from "./context";
import { updateListReducer } from "./update-list-reducer";
import { IChosenSource } from "pagesonboarding/choose-sources";

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
		onChangeOption: (value) => onChangeOption(value),
	};

	return <ChooseSourcesContext.Provider value={value}>{children}</ChooseSourcesContext.Provider>;
};

export default ChooseSourcesProvider;
