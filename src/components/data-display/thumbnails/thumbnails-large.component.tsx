// Libraries
import { distanceInWordsToNow } from 'date-fns';
import { Link } from 'gatsby';
import { rem } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

import { INewsArticleItem } from '../../../data/interfaces/index.interface';

import { ThumbnailImage } from '../../index';
import { NEWS_DETAIL_PAGE } from '../../../data/constants/router.constants';

// Component Props
interface IThumbnailLargeProps {
	theme?: any;
	id: number;
	options: INewsArticleItem;
}

/**
 * @description Article Thumbnail: Large
 * @author  João Dias
 * @date  17/January/2019 at 00:05
 * @extends {React.SFC}
 */
const ThumbnailLarge: React.FunctionComponent<IThumbnailLargeProps> = props => {
	const { id } = props;
	const { title, urlToImage, url, source, publishedAt } = props.options;

	const time: string = `${distanceInWordsToNow(publishedAt)} ago`;

	return (
		<Anchor
			to={NEWS_DETAIL_PAGE}
			aria-labelledby={`thumbnail__title--${id}`}
			tabIndex={0}
			state={props.options}
		>
			<Article>
				<div className="thumbnail-image__gradient" />
				<ThumbnailImage
					src={urlToImage}
					width="100%"
					height="100%"
					alt={title}
					placeholderColor={`var(--color-gray6)`}
				/>
				<Copy>
					<h2
						id={`thumbnail__title--${id}`}
						className="thumbnail__title"
					>
						{title}
					</h2>
					<div className="thumbnail__metadata">
						<h3 className="thumbnail__metadata__source">
							{source.name}
						</h3>
						<time className="thumbnail__metadata__time">
							{time}
						</time>
					</div>
				</Copy>
			</Article>
		</Anchor>
	);
};

// Styling
const Anchor = styled(Link)`
	width: 100%;
	height: 40vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: var(--color-gray1);
	padding: 0;
	position: relative;
	overflow: hidden;

	&:hover,
	&:focus {
		transform: scale(1);
	}
`;

const ExternalAnchor = styled.a`
	width: 100%;
	height: 40vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: var(--color-gray1);
	padding: 0;
	position: relative;
	overflow: hidden;

	&:hover,
	&:focus {
		transform: scale(1);
	}
`;

const Article = styled.article`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	background-color: var(--color-gray1);
	padding: var(--global-padding) 2rem var(--global-padding)
		var(--global-padding);
	margin: 0;
	position: relative;
	overflow: hidden;

	.thumbnail-image {
		&__gradient {
			position: absolute;
			background-image: linear-gradient(
				rgba(0, 0, 0, 0.05) 0%,
				rgba(0, 0, 0, 0.8) 65%
			);
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;

			width: 100%;
			height: 100%;

			z-index: 1;
		}
	}
`;

const Copy = styled.div`
	--number-of-lines: 3;
	width: 100%;
	display: flex;
	flex-direction: column;
	z-index: 1;

	.thumbnail {
		&__title {
			width: 100%;
			font-family: var(--body-font-family);
			font-weight: 300;
			font-size: ${rem('18px')};
			color: var(--color-white);
			letter-spacing: 0;
			text-align: left;
			line-height: 1.4444;
			margin-bottom: var(--global-margin);

			overflow: hidden;
			text-overflow: -o-ellipsis-lastline;
			text-overflow: ellipsis;
			display: flex;
			/* autoprefixer: off */
			display: -webkit-box;
			-webkit-line-clamp: var(--number-of-lines);
			-webkit-box-orient: vertical;
			max-height: calc(
				var(--number-of-lines) * var(--global-lineheight) * 1rem
			);
		}

		&__metadata {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			opacity: 0.8;

			&__source,
			&__time {
				color: var(--color-white);
				font-size: ${rem('11px')};
				letter-spacing: ${rem('0.25px')};
			}

			&__source {
				font-family: var(--heading-font-family);
				letter-spacing: 0;
				margin-bottom: 0;
				text-transform: uppercase;
			}

			&__time {
				font-family: var(--body-font-family);
				text-transform: capitalize;
			}
		}
	}
`;

export default ThumbnailLarge;
