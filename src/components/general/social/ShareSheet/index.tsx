// Libraries
import * as React from "react";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { INewsArticleItem } from "data/interfaces/news";
import { IconFacebook, IconWhatsapp, IconTwitter, IconSMS, IconClose } from "components/icons/index";
import { ShareSheet } from "./styles";

// Interface
interface IShareSheetPortalProps {
	close: () => void;
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
export const ShareSheetPortal: React.FunctionComponent<IShareSheetPortalProps> = ({ articleData, close }) => {
	if (articleData) {
		const { url, title } = articleData;
		const message = `${title} ${url}`;
		const sms = `sms:?&body=${message}`;
		return (
			<ShareSheet className="share-sheet" data-testid="share-sheet">
				<h3 className="share-sheet__title">Share this article</h3>
				<ul className="share-sheet__list">
					<li className="share-sheet__option">
						<FacebookShareButton url={url} quote={message}>
							<figure className="share-sheet__option__icon">
								<IconFacebook />
							</figure>
							<span className="share-sheet__option__name">Facebook</span>
						</FacebookShareButton>
					</li>
					<li className="share-sheet__option">
						<WhatsappShareButton separator="" title={title} url={url}>
							<figure className="share-sheet__option__icon">
								<IconWhatsapp />
							</figure>
							<span className="share-sheet__option__name">Whatsapp</span>
						</WhatsappShareButton>
					</li>
					<li className="share-sheet__option">
						<TwitterShareButton title={title} url={url}>
							<figure className="share-sheet__option__icon">
								<IconTwitter />
							</figure>
							<span className="share-sheet__option__name">Twitter</span>
						</TwitterShareButton>
					</li>
					<li className="share-sheet__option">
						<button type="button" className="SocialMediaShareButton" onClick={() => window.open(sms, "_blank")}>
							<figure className="share-sheet__option__icon">
								<IconSMS />
							</figure>
							<span className="share-sheet__option__name">SMS</span>
						</button>
					</li>
				</ul>
				<div className="share-sheet__footer">
					<button id="close-button" data-testid="close-button" className="round-button" onClick={close}>
						<IconClose />
					</button>
				</div>
			</ShareSheet>
		);
	}

	return null;
};

export default React.memo(ShareSheetPortal);
