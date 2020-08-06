/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

import { IChosenSource } from "pages/onboarding/choose-sources";
import { INewsPageHeaderItems, ChosenNewsSources } from "data/interfaces";

export function filterSources(sources: IChosenSource[]): ChosenNewsSources {
	const reducedCategories = sources
		.map((source: IChosenSource) => {
			const { category } = source;

			return category;
		})
		.reduce((previousValue: string[], currentValue: string) => {
			if (previousValue.indexOf(currentValue) < 0) {
				previousValue.push(currentValue);
			}
			return previousValue;
		}, []);

	const tabs: INewsPageHeaderItems[] = [];
	let allSourcesMerged: string[] = [];
	reducedCategories.forEach((category: string) => {
		const categorySources: string[] = sources
			.map((source: IChosenSource) => {
				if (category && source && source.category === category) {
					return source.name;
				}

				return "";
			})
			.filter((source) => source !== "");

		const tab: INewsPageHeaderItems = {
			id: category,
			sources: [...categorySources],
		};
		tabs.push(tab);

		if (categorySources) {
			allSourcesMerged = [...allSourcesMerged, ...categorySources].filter((source) => source !== "");
		}
	});

	const allItems = {
		latest: allSourcesMerged,
		tabs: [...tabs],
	};

	return {
		quantity: reducedCategories.length,
		items: allItems,
	};
}
