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
