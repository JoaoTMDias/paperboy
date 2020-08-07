/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Libraries
import { formatDistanceToNow } from "date-fns";
import * as React from "react";
import { NEWS_DETAIL_PAGE } from "data/constants/router.constants";
import { Anchor, Article, Copy } from "./styles";
import LazyLoadingImage from "../general/images/image.lazyload.component";
import { EThumbnailType, IArticleThumbnailProps } from "./types.d";
import ThumbnailImage from "./thumbnails-image.component";

/**
 * @description Article Thumbnail: Large

 * @date  17/January/2019 at 00:05
 * @extends {React.FC}
 */
const ArticleThumbnail: React.FunctionComponent<IArticleThumbnailProps> = (props) => {
	const { id, type, options, location } = props;
	const { title, urlToImage, source, publishedAt } = options;
	const timestamp = Date.parse(publishedAt);
	const time = `${formatDistanceToNow(timestamp)} ago`;
	const logo = {
		src: `/logos/${source.id}.png`,
		alt: `${source.name} logo`,
	};

	return (
		<Anchor
			id={`thumbnail--${id}`}
			className="article-thumbnail"
			to={NEWS_DETAIL_PAGE}
			aria-labelledby={`thumbnail__title--${id}`}
			data-testid="article-thumbnail"
			type={type}
			options={options}
			state={{
				...options,
				prevPath: location ? location.pathname : window.location.pathname,
			}}
		>
			<Article id={`thumbnail__article--${id}`} type={type} options={options}>
				{type === EThumbnailType.LARGE ? (
					<ThumbnailImage
						src={urlToImage}
						width="100%"
						height="100%"
						alt={title}
						placeholderColor="var(--color-gray6)"
					/>
				) : (
					<LazyLoadingImage
						className="thumbnail__image"
						src={urlToImage}
						width="100%"
						height="100%"
						alt={title}
						placeholderColor="var(--color-gray4)"
					/>
				)}
				<Copy id={`thumbnail__copy--${id}`} className="thumbnail__copy" type={type} options={options}>
					<h2 id={`thumbnail__title--${id}`} className="thumbnail__title">
						{title}
					</h2>
					<div className="thumbnail__metadata">
						<div className="thumbnail__metadata__source">
							<LazyLoadingImage
								className="thumbnail__metadata__logo"
								src={logo.src}
								width="16"
								height="16"
								alt={logo.alt}
								placeholderColor="var(--color-gray4)"
							/>
							<p className="thumbnail__metadata__name">{source.name}</p>
						</div>

						<time className="thumbnail__metadata__time">{time}</time>
					</div>
				</Copy>
			</Article>
		</Anchor>
	);
};

ArticleThumbnail.defaultProps = {
	type: EThumbnailType.LARGE,
};

export default ArticleThumbnail;
