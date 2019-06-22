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
} from './news-detail.styled';

// Components
import {
	Container,
	Layout,
	LazyLoadingImage,
	TopNavigationWithClose,
	Modal,
	ShareSheetPortal,
} from '../../../components/index.components';
import { NEWS_PAGE } from '../../../data/constants/index.constants';
import { INewsArticleItem } from '../../../data/interfaces/news.interface';
import { EModalAlignType } from '../../../data/interfaces/modal.interface';

enum EModalType {
	SHARE = 'SHARE',
	DIALOG = 'DIALOG',
}

interface IArticleDetailPageProps {
	authenticated: boolean;
	location: H.Location;
}

interface IArticleDetailPageState {
	showShareSheet: boolean;
	showDialog: boolean;
}

class ArticleDetailPage extends React.Component<
	IArticleDetailPageProps,
	IArticleDetailPageState
> {
	private hero = React.createRef<HTMLDivElement>();

	constructor(props: IArticleDetailPageProps) {
		super(props);

		this.state = {
			showShareSheet: false,
			showDialog: false,
		};
	}

	/**
	 * @description
	 * @author João Dias
	 * @date 2019-04-30
	 * @param {React.SyntheticEvent} event
	 * @param {EModalType} type
	 * @returns
	 * @memberof GroupDetailPage
	 */
	handleClickToOpenModal(event: React.SyntheticEvent, type: EModalType) {
		event.preventDefault();

		const { showShareSheet, showDialog } = this.state;

		switch (type) {
			case EModalType.SHARE:
				this.setState({
					showShareSheet: !showShareSheet,
				});
				return true;

			case EModalType.DIALOG:
				this.setState({
					showDialog: !showDialog,
				});
				return true;

			default:
				return false;
		}
	}

	handleClickToCloseModal(
		event: React.MouseEvent<HTMLElement, MouseEvent>,
		type: EModalType,
	): boolean {
		event.preventDefault();

		const { showShareSheet, showDialog } = this.state;

		switch (type) {
			case EModalType.SHARE:
				this.setState({
					showShareSheet: !showShareSheet,
				});
				return true;

			case EModalType.DIALOG:
				this.setState({
					showDialog: !showDialog,
				});
				return true;

			default:
				return false;
		}
	}

	public render() {
		const { showShareSheet } = this.state;
		const { location } = this.props;
		const { state } = location;
		if (state) {
			const data: INewsArticleItem = state;
			return (
				<Layout header={false} bottomNavigation={false}>
					{showShareSheet && (
						<Modal
							align={EModalAlignType.BOTTOM}
							isModalOpen={showShareSheet}
							handleClickToCloseModal={(
								event: React.MouseEvent<
									HTMLElement,
									MouseEvent
								>,
							) =>
								this.handleClickToCloseModal(
									event,
									EModalType.SHARE,
								)
							}
						>
							<React.Suspense fallback={<div>Loading...</div>}>
								<ShareSheetPortal articleData={data} />
							</React.Suspense>
						</Modal>
					)}
					<TopNavigationWithClose
						title={data.title}
						handleOnClickToShare={(
							event: React.MouseEvent<
								HTMLButtonElement,
								MouseEvent
							>,
						) => {
							this.handleClickToOpenModal(
								event,
								EModalType.SHARE,
							);
						}}
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
