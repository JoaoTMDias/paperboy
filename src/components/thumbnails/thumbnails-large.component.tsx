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
	const { id, type, options } = props;
	const { title, urlToImage, source, publishedAt } = options;
	const timestamp = Date.parse(publishedAt);
	const time = `${formatDistanceToNow(timestamp)} ago`;

	return (
		<Anchor
			id={`thumbnail--${id}`}
			role="listitem"
			to={NEWS_DETAIL_PAGE}
			aria-labelledby={`thumbnail__title--${id}`}
			tabIndex={0}
			state={options}
			type={type}
			options={options}
		>
			<Article id={`thumbnail__article--${id}`} type={type} options={options}>
				{type === EThumbnailType.LARGE ? (
					<>
						<div className="thumbnail-image__gradient" />
						<ThumbnailImage
							src={urlToImage}
							width="100%"
							height="100%"
							alt={title}
							placeholderColor="var(--color-gray6)"
						/>
					</>
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
						<h3 className="thumbnail__metadata__source">{source.name}</h3>
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
