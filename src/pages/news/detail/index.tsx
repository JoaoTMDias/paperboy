import { Redirect } from '@reach/router';
import React from 'react';
import { connect } from 'react-redux';
import * as H from 'history';

import {
	Article,
	Hero,
	HeroCopy,
	ArticleContent,
	ArticleLink,
} from './new-detail.styled';

// Components
import {
	Container,
	Layout,
	LazyLoadingImage,
	TopNavigationWithClose,
} from '../../../components/index.components';
import { NEWS_PAGE } from '../../../data/constants/index.constants';
import { INewsArticleItem } from '../../../data/interfaces/news.interface';

interface IArticleDetailPageProps {
	authenticated: boolean;
	location: H.Location;
}

class ArticleDetailPage extends React.Component<IArticleDetailPageProps, any> {
	private hero = React.createRef<HTMLDivElement>();

	public render() {
		const { state } = this.props.location;
		if (state) {
			const data: INewsArticleItem = state;
			return (
				<Layout header={false} bottomNavigation={false}>
					<TopNavigationWithClose
						title={data.title}
						source="source"
					/>
					<Container
						fullwidth
						fullheight
						title="Current Page is: News Detail."
						offsetTop="0"
					>
						<Article>
							<Hero
								ref={this.hero}
								id="hero"
								className="above-the-fold"
							>
								<HeroCopy className="hero__title">
									<h2
										id="hero-cover-title--id"
										className="title"
									>
										{data.title}
									</h2>
									<div className="metadata">
										<h3 className="metadata__source">
											{data.source.name}
										</h3>
										<time className="metadata__time">
											About 1 hour ago
										</time>
									</div>
								</HeroCopy>
								<LazyLoadingImage
									src={data.urlToImage}
									alt="Image"
								/>
							</Hero>
							<ArticleContent>
								<h4 className="lead">{data.description}</h4>
								<ArticleLink
									href={data.url}
									target="_blank"
									rel="noreferrer noopener"
									tabIndex={0}
								>
									<span className="article-link__title">
										View Article
									</span>
									<span className="article-link__source">{`Open on ${data.source.name}`}</span>
								</ArticleLink>
							</ArticleContent>
						</Article>
					</Container>
				</Layout>
			);
		}

		return <Redirect to={NEWS_PAGE} noThrow />;
	}
}

const mapStateToProps = (state: IGlobalStoreState) => ({
	authenticated: state.preferences.authenticated,
});

export default connect(mapStateToProps)(ArticleDetailPage);
