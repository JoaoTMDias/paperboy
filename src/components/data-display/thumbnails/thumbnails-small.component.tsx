// Libraries
import { distanceInWordsToNow } from 'date-fns';
import { Link } from 'gatsby';
import { rem } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

import { INewsArticleItem } from '../../../data/interfaces/index.interface';

import { LazyLoadingImage } from '../../index.components';
import { NEWS_DETAIL_PAGE } from '../../../data/constants/router.constants';

// Component Props
interface IThumbnailSmallProps {
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
const ThumbnailSmall: React.FunctionComponent<IThumbnailSmallProps> = props => {
	const { id, options } = props;
	const { title, urlToImage, url, source, publishedAt } = options;

	const time = `${distanceInWordsToNow(publishedAt)} ago`;

	return (
		<Anchor
			to={NEWS_DETAIL_PAGE}
			aria-labelledby={`thumbnail__title--${id}`}
			tabIndex={0}
			state={options}
		>
			<Article>
				<LazyLoadingImage
					className="thumbnail__image"
					src={urlToImage}
					width="100%"
					height="100%"
					alt={title}
					placeholderColor="var(--color-gray4)"
				/>
				<Copy>
					<h3
						id={`thumbnail__title--${id}`}
						className="thumbnail__title"
					>
						{title}
					</h3>
					<div className="thumbnail__metadata">
						<h4 className="thumbnail__metadata__source">
							{source.name}
						</h4>
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
	min-height: ${rem('230px')};
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: var(--color-white);
	outline: 1px solid var(--color-gray1);
	padding: 0;
	position: relative;
	overflow: hidden;

	&:hover,
	&:focus {
		article {
			transform: scale(0.95);
		}
	}
`;

const Article = styled.article`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	background-color: var(--color-white);
	padding: var(--global-padding) var(--global-padding)
		calc(var(--global-padding) * 0.5) var(--global-padding);
	margin: 0;
	position: relative;
	overflow: hidden;
	transition: transform 128ms ease-out;

	.thumbnail__image {
		width: 100%;
		height: ${rem('96px')};
		margin-top: 0;
		margin-right: 0;
		margin-bottom: calc(var(--global-padding) * 0.5);
		margin-left: 0;
		border-radius: ${rem('2px')};
	}
`;

const Copy = styled.div`
	--number-of-lines: 3;
	width: 100%;
	display: flex;
	flex-direction: column;
	z-index: 1;

	font-family: GothamRounded-Book;
	font-size: 14px;
	color: #000000;
	letter-spacing: 0;
	line-height: 16px;

	.thumbnail {
		&__title {
			width: 100%;
			font-family: var(--body-font-family);
			font-weight: 300;
			font-size: ${rem('13px')};
			color: var(--color-black);
			letter-spacing: 0;
			text-align: left;
			line-height: 1.22222222;
			margin-bottom: calc(var(--global-margin) * 1.5);

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
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;

			&__source,
			&__time {
				color: var(--color-gray8);
				font-size: ${rem('10px')};
				letter-spacing: ${rem('0.25px')};
			}

			&__source {
				width: 100%;
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

export default ThumbnailSmall;
