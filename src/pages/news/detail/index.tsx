import { Redirect } from "@reach/router";
import isEmpty from "lodash/isEmpty";
import React, { useState, useEffect, useRef, useContext, useCallback } from "react";
import * as H from "history";
import { Article, Hero, HeroCopy, ArticleContent, ArticleLink, BottomOptionsBar } from "./styles";
import {
	Container,
	LazyLoadingImage,
	TopNavigationWithClose,
	ShareSheetPortal,
	ArticleTypeset,
} from "components/index.components";
import { IconTypeset, IconBookmark, IconShare } from "components/icons/index";
import { NEWS_PAGE } from "data/constants/index.constants";
import { INewsArticleItem } from "data/interfaces/news";
import { EModalAlignType } from "data/interfaces/modal";
import useWebShare from "helpers/custom-hooks/useWebShare";
import { PrivateRoute } from "helpers/index.helpers";
import PreferencesContext from "./../../../containers/preferences/context";
import useModal from "components/general/modal";
import AuditContext from "src/containers/audit/context";
interface IArticleDetailPageProps {
	location: H.Location<INewsArticleItem>;
}

interface IGetArticleFromList {
	saved: boolean;
	index: number;
}

/**
 * Removes an article from the list
 *
 * @param {INewsArticleItem[]} list
 * @param {number} index
 * @returns {INewsArticleItem[]}
 */
function removeArticleFromList(list: INewsArticleItem[], index: number): INewsArticleItem[] {
	const result = Array.from(list);

	result.splice(index, 1);

	return result;
}

/**
 * Adds an article to the saved list
 *
 * @param {INewsArticleItem[]} list
 * @param {INewsArticleItem} article
 * @returns {INewsArticleItem[]}
 */
function addArticleToList(list: INewsArticleItem[], article: INewsArticleItem | null): INewsArticleItem[] {
	if (!article) {
		return list;
	}

	const result = Array.from(list);

	result.push(article);

	return result;
}

/**
 * Checks if the articles are the same
 *
 * @param {INewsArticleItem} savedArticle
 * @param {INewsArticleItem} article
 * @returns {boolean}
 */
function isSameArticle(savedArticle: INewsArticleItem, article: INewsArticleItem): boolean {
	return savedArticle.url === article.url;
}

/**
 *
 *
 * @param {INewsArticleItem[]} list
 * @param {INewsArticleItem} article
 * @returns
 */
function getArticleFromList(list: INewsArticleItem[], article: INewsArticleItem): IGetArticleFromList {
	const index = list.findIndex((item) => item.url === article.url);

	return {
		saved: !!(index !== -1),
		index,
	};
}

const ArticleDetailPage: React.FunctionComponent<IArticleDetailPageProps> = ({ location }) => {
	const { platform } = useContext(AuditContext);
	const { saved, setSaved } = useContext(PreferencesContext);
	const [isSaved, setIsSaved] = useState(false);
	const [TypesetModal, openTypeset, closeTypeset, showTypesetPanel] = useModal({});
	const [ShareModal, openShareSheet, closeShareSheet, showShareSheet] = useModal({});
	const { loading, isSupported, share } = useWebShare(
		() => closeShareSheet(),
		() => closeShareSheet(),
	);
	const hero = useRef();
	const { state: data } = location;

	useEffect(() => {
		if (saved) {
			const result = getArticleFromList(saved, data);

			setIsSaved(result.saved);
		}
	}, [saved, setSaved]);

	const handleClickOpenShare = useCallback(() => {
		switch (isSupported) {
			case true:
				!loading &&
					share({
						title: data.title,
						text: data.description,
						url: data.url,
					});
				break;
			case false:
				openShareSheet();
				break;

			default:
				break;
		}
	}, []);

	const handleClickSaved = useCallback(() => {
		let newList: INewsArticleItem[] = [];

		if (saved && !isEmpty(saved)) {
			const articleIndex = getArticleFromList(saved, data).index;
			const isSame = isSameArticle(saved[articleIndex], data);

			if (isSaved) {
				newList = removeArticleFromList(saved, articleIndex);
			} else {
				const article = !isSame ? data : null;
				newList = addArticleToList(saved, article);
			}
		} else {
			newList = addArticleToList(newList, data);
		}

		setSaved(newList);
	}, [isSaved, saved, data]);

	function renderShareSheetModal() {
		return (
			<ShareModal>
				<ShareSheetPortal articleData={data} close={closeShareSheet} />
			</ShareModal>
		);
	}

	function renderTypesetPanel() {
		return (
			<TypesetModal>
				<ArticleTypeset close={closeTypeset} />
			</TypesetModal>
		);
	}

	const onClickTypeset = useCallback(
		(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			event.preventDefault();

			showTypesetPanel ? closeTypeset() : openTypeset();
		},
		[showTypesetPanel, closeTypeset, openTypeset],
	);

	const onClickShare = useCallback(
		(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			event.preventDefault();

			handleClickOpenShare();
		},
		[handleClickOpenShare],
	);

	if (data) {
		return (
			<PrivateRoute title="News Detail" bottomNavigation={false}>
				{showShareSheet && renderShareSheetModal()}
				{showTypesetPanel && renderTypesetPanel()}
				<TopNavigationWithClose title={data.title} source="source" />
				<Container fullwidth fullheight offsetTop="0">
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
							onClick={onClickTypeset}
						>
							<IconTypeset isActive={showTypesetPanel} />
						</button>
						<button
							type="button"
							className="bottom-options-bar__button"
							aria-label={isSaved ? "Unsave this article from the list" : "Save this icon for a later reading"}
							onClick={handleClickSaved}
						>
							<IconBookmark isActive={isSaved} />
						</button>
						<button
							type="button"
							className="bottom-options-bar__button"
							aria-label="Share this article"
							onClick={onClickShare}
						>
							<IconShare platform={platform} />
						</button>
					</BottomOptionsBar>
				</Container>
			</PrivateRoute>
		);
	}

	return <Redirect to={NEWS_PAGE} noThrow />;
};

export default ArticleDetailPage;
