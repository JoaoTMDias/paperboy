// Libraries
import * as React from 'react';
import styled from 'styled-components';
import { SourceCard, SourceListItem } from '../../index';


// Assets
import IconBBCNews from '../../../assets/images/sources/icon-bbc-news.svg';
import IconCNN from '../../../assets/images/sources/icon-cnn.svg';
import IconFoxNews from '../../../assets/images/sources/icon-fox-news.svg';
import IconGoogleNews from '../../../assets/images/sources/icon-google-news.svg';
import IconGuardian from '../../../assets/images/sources/icon-guardian.svg';
import IconNewYorkTimes from '../../../assets/images/sources/icon-new-york-times.svg';
import IconTimesOfIndia from '../../../assets/images/sources/icon-times-of-india.svg';
import IconUSAToday from '../../../assets/images/sources/icon-usa-today.svg';
import IconWallStreetJournal from '../../../assets/images/sources/icon-wall-street-journal.svg';
import { IAllAvailableNewsSource } from '../../../data/interfaces/index.interface';
import { IChosenSource } from '../../../pages/onboarding/choose-sources';

// Component Props
interface ISourcesListProps {
	layout?: 'horizontal' | 'vertical';
	label: string;
	data: IAllAvailableNewsSource[] | null;
	handleChange: any;
	selectedOptions: IChosenSource[];
}

/**
 * @description Sources: List of Sources
 * @author  João Dias
 * @date  24/December/2018 at 01:43
 * @extends {React.SFC}
 */
class SourcesList extends React.PureComponent<ISourcesListProps> {
	static defaultProps = {
		layout: 'vertical',
		label: 'label',
	};

	renderData() {
		const { data, layout, handleChange, selectedOptions } = this.props;

		if (data) {
			const item = data.map((source: IAllAvailableNewsSource, index: number) => {
				let cover;

				if (source.id === 'bbc-news') {
					cover = IconBBCNews;
				} else if (source.id === 'cnn') {
					cover = IconCNN;
				} else if (source.id === 'fox-news') {
					cover = IconFoxNews;
				} else if (source.id === 'google-news') {
					cover = IconGoogleNews;
				} else if (source.id === 'the-times-of-india') {
					cover = IconTimesOfIndia;
				} else if (source.id === 'the-new-york-times') {
					cover = IconNewYorkTimes;
				} else if (source.id === 'the-guardian-uk') {
					cover = IconGuardian;
				} else if (source.id === 'usa-today') {
					cover = IconUSAToday;
				} else if (source.id === 'the-wall-street-journal') {
					cover = IconWallStreetJournal;
				} else {
					cover = `https://paperboy-icon-service.herokuapp.com/icon?url=${
						source.url
						}&size=70..120..200`;
				}

				const matching: IChosenSource = {
					name: source.id,
					category: source.category
				}

				const filterCheck = selectedOptions.filter((option: IChosenSource) => (option.name === matching.name));
				const isChecked = filterCheck && filterCheck.length > 0 ? true : false;

				if (layout === 'horizontal') {

					return (
						<SourceCard
							key={source.id}
							id={source.id}
							label={source.name}
							category={source.category}
							src={cover}
							handleChange={(event: React.SyntheticEvent) =>
								handleChange(event, index, source.category)
							}
							checked={isChecked}
						/>
					)
				}

				return (
					<SourceListItem
						key={source.id}
						id={source.id}
						label={source.name}
						category={source.category}
						src={cover}
						handleChange={(event: React.SyntheticEvent) =>
							handleChange(event, index, source.category)
						}
						checked={isChecked}
					/>
				);

			});

			return item;
		}
	};

	render() {
		const { label, data, layout } = this.props;
		const { ...sourcesListProps } = this.props;

		return (
			<SourcesListWrapper
				role="group"
				aria-label={label}
				layout={layout}
				{...sourcesListProps}
			>
				{data && this.renderData()}
			</SourcesListWrapper>
		);
	}
}

// Styling
const SourcesListWrapper = styled.ul`
	display: flex;
	flex-direction: ${(props: ISourcesListProps) =>
		props.layout === 'horizontal' ? 'row' : 'column'};
	justify-content: flex-start;
	align-items: center;
	flex-wrap: nowrap;
	overflow-x: scroll;
	overflow-y: hidden;
	margin: 0;
	padding: 4px;
	width: 100%;
	scroll-snap-type: x proximity;
	-webkit-overflow-scrolling: touch;
	background-color: var(--body-background);

	.source__item {
		flex: 1;
		margin-right: ${(props: ISourcesListProps) =>
		props.layout === 'horizontal' ? '1rem' : '0'};
	}
`;


export default SourcesList;
