/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Libraries
import React, { useCallback } from "react";
import { useVibrate, useToggle } from "react-use";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { INewsArticleItem } from "data/interfaces/news";
import { IconFacebook, IconWhatsapp, IconTwitter, IconSMS, IconClose } from "components/icons/index";
import { VIBRATION_PATTERNS } from "data/constants/index.constants";
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
	const [vibrating, toggleVibrating] = useToggle(false);

	useVibrate(vibrating, VIBRATION_PATTERNS.CLOSE_MODAL, false);

	const handleClickOnButton = useCallback(() => {
		toggleVibrating();
		close();
	}, [toggleVibrating, close]);

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
					<button
						type="button"
						id="close-button"
						data-testid="close-button"
						className="round-button"
						onClick={handleClickOnButton}
						aria-label="Close the typeset panel and go back to news detail page"
					>
						<IconClose />
					</button>
				</div>
			</ShareSheet>
		);
	}

	return null;
};

export default React.memo(ShareSheetPortal);
