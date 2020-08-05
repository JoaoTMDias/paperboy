// Libraries
import React, { memo } from "react";
import { IAllAvailableNewsSource } from "data/interfaces/index";
import { withMemo } from "helpers/index.helpers";
import SourceCard from "./source-card.component";
import SourceListItem from "./source-list-item.component";
import { ISourcesListProps } from "./types";
import { IChosenSource } from "../../../pages/onboarding/choose-sources";
import { SourcesListWrapper } from "./styles";

/**
 * @description Sources: List of Sources

 * @date  24/December/2018 at 01:43
 * @extends {React.FC}
 */
const SourcesList: React.FC<ISourcesListProps> = ({ data, handleChange, label, layout, selectedOptions }) => {
	/**
	 * @description Returns the news source cover
	 * @author João Dias
	 * @date 2019-06-21
	 * @param {string} id
	 * @returns
	 * @memberof SourcesList
	 */
	function getNewsSourceCover(source: IAllAvailableNewsSource): string {
		const cover = `/logos/${source.id}.png`;

		console.log("cover: ", cover);

		return cover;
	}

	if (data) {
		const item = data.map((source: IAllAvailableNewsSource) => {
			const cover = getNewsSourceCover(source);

			const matching: IChosenSource = {
				name: source.id,
				category: source.category,
			};

			const filterCheck = selectedOptions.filter((option: IChosenSource) => option.name === matching.name);
			const isChecked = !!(filterCheck && filterCheck.length > 0);

			if (layout === "horizontal") {
				return (
					<SourceCard
						key={source.id}
						id={source.id}
						label={source.name}
						category={source.category}
						src={cover}
						handleChange={(target: string) => {
							return handleChange(target, source.category);
						}}
						checked={isChecked}
					/>
				);
			}

			return (
				<SourceListItem
					key={source.id}
					id={source.id}
					label={source.name}
					category={source.category}
					src={cover}
					handleChange={(target) => {
						return handleChange(target, source.category);
					}}
					checked={isChecked}
				/>
			);
		});

		return (
			<SourcesListWrapper
				aria-label={label}
				data-layout={layout}
				style={{
					flexDirection: layout === "horizontal" ? "row" : "column",
				}}
			>
				{item}
			</SourcesListWrapper>
		);
	}

	return null;
};

SourcesList.defaultProps = {
	layout: "vertical",
	label: "label",
};

export default memo(SourcesList);
