/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { IAllAvailableNewsSource, IListOfCategorizedSources } from "data/interfaces";

/**
 * @description Receives the raw data from the service and returns an organized list of news sources
 * @author João Dias
 * @param {IAllAvailableNewsSource[]} data
 * @returns {(IListOfCategorizedSources[] | null)}
 */
export function filterData(data: IAllAvailableNewsSource[] | undefined): IListOfCategorizedSources[] | null {
	// Gets only the items that are categorized
	const allItemsWithCategory = data?.filter((source: IAllAvailableNewsSource) => source.category !== null);

	// Returns all the categories in all the items
	const allAppearingCategories = allItemsWithCategory?.map((source: IAllAvailableNewsSource) => {
		const { category } = source;

		return category;
	});

	// Returns the final list of categories
	const reducedCategories = allAppearingCategories?.reduce((previousValue: string[], currentValue: string) => {
		if (previousValue.indexOf(currentValue) < 0) {
			previousValue.push(currentValue);
		}
		return previousValue;
	}, []);

	const newData: IListOfCategorizedSources[] = [];

	reducedCategories?.forEach((category: string) => {
		const filterData = data?.filter((source: IAllAvailableNewsSource) => source.category === category);

		const entry = {
			name: category,
			items: filterData || undefined,
			length: filterData?.length,
		};

		newData.push(entry);
		return entry;
	});

	if (newData && newData.length > 0) {
		return newData;
	}

	return null;
}
