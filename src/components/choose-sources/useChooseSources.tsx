import { useCallback } from "react";
import { useLocalStorage } from "react-use";
import { DEFAULT_PREFERENCES, IPreferences } from "./../../containers/preferences/context";

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

	const removeValue = useCallback(
		() => {
			return new Promise((resolve, reject) => {
				try {
					remove();
					resolve();
				} catch (error) {
					reject(error);
				}
			});
		},
		[remove, setValue]
	);

	return {
		storage: value,
		setStorage: handleSetValue,
		removeValue,
	};
}

export default useChooseSources;
