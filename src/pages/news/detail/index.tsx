import { Redirect } from '@reach/router';
import { rem } from 'polished';
import React from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import * as H from 'history';

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
						fullwidth={true}
						fullheight={true}
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
										id={`hero-cover-title--id`}
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
								<p>
									Midterm elections are historically terrible
									for the president's party. In 18 of the last
									20 midterm elections, the president's party
									has lost seats. In those 18 elections, the
									average seat loss is 33. Those numbers are
									even more daunting for presidents under 50%
									job approval -- as Donald Trump is right
									now. Since 1946, the average seat loss in
									the House in that situation is 36 seats.
								</p>
							</ArticleContent>
						</Article>
					</Container>
				</Layout>
			);
		}

		return <Redirect to={NEWS_PAGE} noThrow={true} />;
	}
}

const OpeningAnimation = keyframes`
  from {
    clip-path: circle(0% at center 5%);
  }

  to {
    clip-path: circle(120% at center 5%);
  }
`;

const Article = styled.article`
	clip-path: circle(0% at center 5%);

	animation-name: ${OpeningAnimation};
	animation-fill-mode: forwards;
	animation-duration: 500ms;
	animation-timing-function: var(--default-timing-function);

	position: relative;
`;

const Hero = styled.div`
	width: 100%;
	height: 72vh;
	overflow: hidden;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	z-index: 1;

	img,
	svg.image__placeholder {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		object-fit: cover;
		object-position: center center;
		width: 100%;
		height: 100%;

		z-index: -1;
	}

	&:after {
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.9)
		);
		height: 75%;
		width: 100%;
		overflow: hidden;
		content: '';
	}
`;

const HeroCopy = styled.div`
	--number-of-lines: 3;
	width: 100%;
	display: flex;
	flex-direction: column;
	z-index: 1;
	padding: 0 ${rem('32px')} ${rem('16px')} ${rem('16px')};

	.title {
		width: 100%;
		font-family: var(--body-font-family);
		font-weight: normal;
		font-size: ${rem('22px')};
		color: var(--color-white);
		letter-spacing: 0;
		text-align: left;
		line-height: 1.333;
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
			var(--number-of-lines) * var(--global-lineheight) * 1.1rem
		);
	}

	.metadata {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		opacity: 0.8;

		&__source,
		&__time {
			color: var(--color-white);
			font-size: ${rem('11px')};
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
`;

const ArticleContent = styled.div`
	padding: calc(var(--global-padding) * 1.5) var(--global-padding);
	z-index: 2;

	.lead {
		color: var(--content-lead-color);
		font-family: var(--body-font-family);
		font-weight: 300;
		font-size: ${rem('18px')};
		letter-spacing: ${rem('0.22px')};
		line-height: ${rem('32px')};
		margin-bottom: ${rem('24px')};
	}

	p {
		font-family: var(--content-font-family);
		color: var(--content-paragraph-color);
		font-size: ${rem('17px')};
		letter-spacing: ${rem('0.4px')};
		line-height: ${rem('28px')};
	}
`;

const mapStateToProps = (state: IGlobalStoreState) => ({
	authenticated: state.preferences.authenticated,
});

export default connect(mapStateToProps)(ArticleDetailPage);
