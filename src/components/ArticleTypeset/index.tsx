/*
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2020 joaodias.me, No Rights Reserved.
 */

// Libraries
import React, { FunctionComponent, useRef, useEffect, useCallback, useContext } from "react";
import { IconChangeTypeSize, EIconChangeTypeSize, IconClose } from "components/icons/index";
import { useVibrate, useToggle, useMount } from "react-use";
import { VIBRATION_PATTERNS } from "data/constants/index.constants";
import holdOn from "helpers/hold-on";
import * as S from "./styles";
import PreferencesContext from "../../containers/preferences/context";
import { IArticleTypesetProps } from "./types";

/**
 * @description Article Typographic settings
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IArticleTypesetProps>}
 */
export const ArticleTypeset: FunctionComponent<IArticleTypesetProps> = ({ close }) => {
	const [vibrating, toggleVibrating] = useToggle(false);
	const ref = useRef<HTMLHeadingElement>();
	const { current: htmlElement } = useRef(document.documentElement);
	const { baseFontRatio, setBaseFontRatio } = useContext(PreferencesContext);

	useVibrate(vibrating, VIBRATION_PATTERNS.CLOSE_MODAL, false);

	useMount(async () => {
		await holdOn(500);
		if (ref && ref.current) {
			ref.current.focus();
		}
	});

	/**
	 * @description Updates the Root Element with a new font size value
	 * @author João Dias
	 * @date 2019-06-24
	 * @param {number} size
	 * @memberof ArticleTypeset
	 */
	const setBaseFontRatioProperty = useCallback(
		(size: number | string) => {
			htmlElement.style.setProperty("--base-font-ratio", `${size}`);
		},
		[htmlElement],
	);

	useEffect(() => {
		setBaseFontRatioProperty(baseFontRatio);
	}, [baseFontRatio, setBaseFontRatioProperty]);

	const handleOnChangeRangeValue = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			event.preventDefault();

			const { value } = event.target;

			setBaseFontRatio(parseFloat(value));
			setBaseFontRatioProperty(value);
		},
		[setBaseFontRatio, setBaseFontRatioProperty],
	);

	const handleClickOnButton = useCallback(() => {
		toggleVibrating();
		close();
	}, [toggleVibrating, close]);

	return (
		<S.PanelWrapper id="article-typeset" className="article-typeset">
			<header className="article-typeset__header">
				<h4 ref={ref} className="article-typeset__title" tabIndex={-1}>
					Change font size
				</h4>
			</header>
			<div className="article-typeset__content">
				<IconChangeTypeSize type={EIconChangeTypeSize.SMALL} />
				<label htmlFor="typeset" className="article-typeset__label">
					<input
						id="typeset"
						className="article-typeset__input "
						name="typeset"
						type="range"
						min="0.75"
						max="1.25"
						defaultValue={baseFontRatio}
						step="0.25"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnChangeRangeValue(event)}
					/>
				</label>
				<IconChangeTypeSize type={EIconChangeTypeSize.LARGE} />
			</div>
			<div className="article-typeset__footer">
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
		</S.PanelWrapper>
	);
};

export default ArticleTypeset;
