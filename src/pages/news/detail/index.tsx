import { Redirect } from "@reach/router";
import React, { useState, useRef, Suspense } from "react";
import { connect } from "react-redux";
import * as H from "history";

import { Article, Hero, HeroCopy, ArticleContent, ArticleLink, BottomOptionsBar } from "./styles";

// Components
import {
	Container,
	Layout,
	LazyLoadingImage,
	TopNavigationWithClose,
	Modal,
	ShareSheetPortal,
	ArticleTypeset,
} from "components/index.components";
import { IconTypeset, IconBookmark } from "components/icons/index";
import { NEWS_PAGE } from "data/constants/index.constants";
import { INewsArticleItem } from "data/interfaces/news";
import { EModalAlignType } from "data/interfaces/modal";
import Meta from "components/meta";
import useWebShare from 'helpers/custom-hooks/useWebShare';
import { IGlobalStoreState } from 'data/interfaces';

enum EModalType {
	SHARE = "SHARE",
	PANEL = "PANEL",
}

interface IArticleDetailPageProps {
	authenticated: boolean;
	location: H.Location<INewsArticleItem>;
}

const ArticleDetailPage: React.FunctionComponent<IArticleDetailPageProps> = ({
	authenticated,
	location
}) => {
	const { loading, isSupported, share } = useWebShare(() => handleClickToCloseModal(EModalType.SHARE), () => handleClickToCloseModal(EModalType.SHARE));
	const hero = useRef();
	const [showShareSheet, setShowShareSheet] = useState(false);
	const [showTypesetPanel, setshowTypesetPanel] = useState(false);
	const { state: data } = location;

	/**
	 *
	 *
	 * @returns {JSX.Element | null}
	 */
	function handleShareContent() {
		if (!isSupported) {
			return (
				<Modal
					align={EModalAlignType.BOTTOM}
					isModalOpen={showShareSheet}
					handleClickToCloseModal={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
						event.preventDefault();
						handleClickToCloseModal(EModalType.SHARE);
					}
					}
				>
					<Suspense fallback={<div>Loading...</div>}>
						<ShareSheetPortal articleData={data} />
					</Suspense>
				</Modal>
			);
		}

		share({
			title: data.title,
			text: data.description,
			url: data.url,
		});
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
	function handleClickToOpenModal(type: EModalType) {
		switch (type) {
			case EModalType.SHARE:
				setShowShareSheet(!showShareSheet);

				return true;

			case EModalType.PANEL:
				setshowTypesetPanel(!showTypesetPanel);

				return true;

			default:
				return false;
		}
	}

	function handleClickToCloseModal(type: EModalType): boolean {
		switch (type) {
			case EModalType.SHARE:
				setShowShareSheet(!showShareSheet);

				return true;

			case EModalType.PANEL:
				setshowTypesetPanel(!showTypesetPanel);

				return true;

			default:
				return false;
		}
	}

	if (data) {
		return (
			<Layout header={false} bottomNavigation={false}>
				<Meta title="News Detail" />
				{showShareSheet && handleShareContent()}
				{showTypesetPanel && <ArticleTypeset />}
				<TopNavigationWithClose title={data.title} source="source" />
				<Container fullwidth fullheight title="Current Page is: News Detail." offsetTop="0">
					<Article>
						<Hero ref={hero.current} id="hero" className="above-the-fold">
							<HeroCopy className="hero__title">
								<h2 id="hero-cover-title--id" className="title">
									{data.title}
								</h2>
								<div className="metadata">
									<h3 className="metadata__source">{data.source.name}</h3>
									<time className="metadata__time">About 1 hour ago</time>
								</div>
							</HeroCopy>
							<LazyLoadingImage src={data.urlToImage} alt="Image" />
						</Hero>
						<ArticleContent id="article-content">
							<HeroCopy className="hero__title">
								<h2 id="hero-cover-title--id" className="title">
									{data.title}
								</h2>
								<div className="metadata">
									<h3 className="metadata__source">{data.source.name}</h3>
									<time className="metadata__time">About 1 hour ago</time>
								</div>
							</HeroCopy>
							<h4 className="lead">{data.description}</h4>
							<ArticleLink href={data.url} target="_blank" rel="noreferrer noopener" tabIndex={0}>
								<span className="article-link__title">View Article</span>
								<span className="article-link__source">{`Open on ${data.source.name} website`}</span>
							</ArticleLink>
						</ArticleContent>
					</Article>
					<BottomOptionsBar id="bottom-options-bar" className="bottom-options-bar">
						<button
							type="button"
							className="bottom-options-bar__button"
							aria-label="Choose the font size you prefer"
							onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
								event.preventDefault();
								handleClickToOpenModal(EModalType.PANEL);
							}}
						>
							<IconTypeset isActive={showTypesetPanel} />
						</button>
						<button
							type="button"
							className="bottom-options-bar__button"
							aria-label="Save this icon for a later reading"
						>
							<IconBookmark isActive={false} />
						</button>
						<button
							type="button"
							className="bottom-options-bar__button"
							aria-label="Save this icon for a later reading"
							onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
								event.preventDefault();
								!loading && handleClickToOpenModal(EModalType.SHARE);
							}}
						>
							<IconBookmark isActive={false} />
						</button>
					</BottomOptionsBar>
				</Container>
			</Layout>
		);
	}

	return <Redirect to={NEWS_PAGE} noThrow />;
}

const mapStateToProps = (state: IGlobalStoreState) => ({
	authenticated: state.preferences.authenticated,
});

export default connect(mapStateToProps)(ArticleDetailPage);
