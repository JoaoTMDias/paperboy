/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { useCallback } from "react";
import { useLocalStorage } from "react-use";
import { DEFAULT_PREFERENCES, IPreferences } from "../../containers/preferences/context";

function useChooseSources() {
	const [value, setValue, remove] = useLocalStorage<IPreferences>("preferences", DEFAULT_PREFERENCES);

	/**
	 * Merges existing column entries with newer ones
	 */
	function replaceValueOnProperty(val: any, property: string) {
		const newValue: any = value || DEFAULT_PREFERENCES;

		newValue[property] = val;

		return newValue;
	}

	const handleSetValue = useCallback(
		(val: any, property: string) => {
			const values = replaceValueOnProperty(val, property);

			setValue(values);
		},
		[setValue],
	);

	const removeValue = useCallback(() => {
		return new Promise((resolve, reject) => {
			try {
				remove();
				resolve();
			} catch (error) {
				reject(error);
			}
		});
	}, [remove, setValue]);

	return {
		storage: value,
		setStorage: handleSetValue,
		removeValue,
	};
}

export default useChooseSources;
