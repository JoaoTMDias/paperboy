// Libraries
import * as React from "react";
import { SourceCard, SourceListItem } from "components/index.components";

// Assets
import IconBBCNews from "../../../assets/images/sources/icon-bbc-news.svg";
import IconCNN from "../../../assets/images/sources/icon-cnn.svg";
import IconFoxNews from "../../../assets/images/sources/icon-fox-news.svg";
import IconGoogleNews from "../../../assets/images/sources/icon-google-news.svg";
import IconGuardian from "../../../assets/images/sources/icon-guardian.svg";
import IconNewYorkTimes from "../../../assets/images/sources/icon-new-york-times.svg";
import IconTimesOfIndia from "../../../assets/images/sources/icon-times-of-india.svg";
import IconUSAToday from "../../../assets/images/sources/icon-usa-today.svg";
import IconWallStreetJournal from "../../../assets/images/sources/icon-wall-street-journal.svg";
import { ISourcesListProps } from "./types";
import { IAllAvailableNewsSource } from "data/interfaces/index";
import { IChosenSource } from "../../../pages/onboarding/choose-sources";

import { SourcesListWrapper } from "./styles";

/**
 * @description Sources: List of Sources

 * @date  24/December/2018 at 01:43
 * @extends {React.FC}
 */
class SourcesList extends React.PureComponent<ISourcesListProps> {
	static defaultProps = {
		layout: "vertical",
		label: "label",
	};

	/**
	 * @description Returns the news source cover
	 * @author João Dias
	 * @date 2019-06-21
	 * @param {string} id
	 * @returns
	 * @memberof SourcesList
	 */
	getNewsSourceCover(source: IAllAvailableNewsSource): string {
		let cover;

		switch (source.id) {
			case "bbc-news":
				cover = IconBBCNews;
				break;

			case "cnn":
				cover = IconCNN;
				break;

			case "fox-news":
				cover = IconFoxNews;
				break;

			case "google-news":
				cover = IconGoogleNews;
				break;

			case "the-times-of-india":
				cover = IconTimesOfIndia;
				break;

			case "the-new-york-times":
				cover = IconNewYorkTimes;
				break;

			case "the-guardian-uk":
				cover = IconGuardian;
				break;

			case "usa-today":
				cover = IconUSAToday;
				break;

			case "the-wall-street-journal":
				cover = IconWallStreetJournal;
				break;

			default:
				cover = `https://paperboy-icon-service.herokuapp.com/icon?url=${source.url}&size=70..120..200`;
				break;
		}

		return cover;
	}

	/**
	 * @description
	 * @author João Dias
	 * @date 2019-06-21
	 * @returns
	 * @memberof SourcesList
	 */
	renderData() {
		const { data, layout, handleChange, selectedOptions } = this.props;

		if (data) {
			const item = data.map((source: IAllAvailableNewsSource, index: number) => {
				const cover: string = this.getNewsSourceCover(source);

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
							handleChange={(event: React.SyntheticEvent) => {
								return handleChange(event, index, source.category);
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
						handleChange={(event: React.SyntheticEvent) => {
							return handleChange(event, index, source.category);
						}}
						checked={isChecked}
					/>
				);
			});

			return item;
		}
	}

	render() {
		const { label, data, layout } = this.props;
		const { ...sourceListProps } = this.props;

		if (data) {
			return (
				<SourcesListWrapper
					role="group"
					aria-label={label}
					{...sourceListProps}
					style={{
						flexDirection: layout === "horizontal" ? "row" : "column",
					}}
				>
					{data && this.renderData()}
				</SourcesListWrapper>
			);
		}

		return null;
	}
}

export default SourcesList;
