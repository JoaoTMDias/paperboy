// Libraries
import * as React from "react";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";

import { IconFacebook, IconWhatsapp, IconTwitter, IconSMS } from "../../../icons/icons";

import ShareSheet from "./ShareSheet.styled";
import { INewsArticleItem } from "../../../../data/interfaces/news.interface";
import { INavigator } from "../../../../global";

// Interface
interface IShareSheetPortalProps {
	articleData: INewsArticleItem | null;
	handleClickOnWhatsapp?(): void;
	handleClickOnFacebook?(): void;
	handleClickOnTwitter?(): void;
}

/**
 * @description Share Sheet Portal
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IShareSheetPortalProps>}
 */
const ShareSheetPortal: React.FunctionComponent<IShareSheetPortalProps> = props => {
	const { articleData } = props;
	const shareUri = articleData && articleData.url;
	const shareMessage = `${articleData && articleData.title}`;
	const shareMessageWithUri = `${shareMessage} ${shareUri}`;
	const shareUriMessageSMS = `sms:?&body=${shareMessageWithUri}`;

	const windowNavigator: INavigator = window.navigator;

	if (articleData) {
		if (windowNavigator && windowNavigator.share) {
			windowNavigator
				.share({
					title: articleData.title,
					text: "Check out this article",
					url: articleData.url,
				})
				.then(() => {
					console.log("shared");
				})
				.catch((err: any) => {
					console.error("error: ", err);
				});
		}
		return (
			<ShareSheet className="share-sheet" data-testid="share-sheet">
				<h3 className="share-sheet__title">Share this article</h3>
				<ul className="share-sheet__list">
					<li className="share-sheet__option">
						<FacebookShareButton url={`${shareUri}`} quote={`${shareMessageWithUri}`}>
							<figure className="share-sheet__option__icon">
								<IconFacebook />
							</figure>
							<span className="share-sheet__option__name">Facebook</span>
						</FacebookShareButton>
					</li>
					<li className="share-sheet__option">
						<WhatsappShareButton separator="" title={`${shareMessage}`} url={`${shareUri}`}>
							<figure className="share-sheet__option__icon">
								<IconWhatsapp />
							</figure>
							<span className="share-sheet__option__name">Whatsapp</span>
						</WhatsappShareButton>
					</li>
					<li className="share-sheet__option">
						<TwitterShareButton title={`${shareMessage}`} url={`${shareUri}`}>
							<figure className="share-sheet__option__icon">
								<IconTwitter />
							</figure>
							<span className="share-sheet__option__name">Twitter</span>
						</TwitterShareButton>
					</li>
					<li className="share-sheet__option">
						<button
							type="button"
							className="SocialMediaShareButton"
							onClick={() => window.open(shareUriMessageSMS, "_blank")}
						>
							<figure className="share-sheet__option__icon">
								<IconSMS />
							</figure>
							<span className="share-sheet__option__name">SMS</span>
						</button>
					</li>
				</ul>
			</ShareSheet>
		);
	}

	return null;
};

export default React.memo(ShareSheetPortal);
