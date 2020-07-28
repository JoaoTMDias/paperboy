import { IChosenSource } from "pages/onboarding/choose-sources"
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
