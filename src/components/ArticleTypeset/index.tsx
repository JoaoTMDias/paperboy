// Libraries
import React, { FunctionComponent, useRef, useEffect, useCallback, useContext } from "react";
import { IconChangeTypeSize, EIconChangeTypeSize, IconClose } from "components/icons/index";
import * as S from "./styles";
import PreferencesContext from "./../../containers/preferences/context";
import { IArticleTypesetProps } from "./types";

/**
 * @description Article Typographic settings
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IArticleTypesetProps>}
 */
export const ArticleTypeset: FunctionComponent<IArticleTypesetProps> = ({ close }) => {
	const ref = useRef(null);
	const { current: htmlElement } = useRef(document.documentElement);
	const { baseFontRatio, setBaseFontRatio } = useContext(PreferencesContext);

	useEffect(() => {
		if (ref && ref.current) {
			ref.current.focus();
		}
	}, []);

	useEffect(() => {
		setBaseFontRatioProperty(baseFontRatio);
	}, [baseFontRatio]);

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

	const handleOnChangeRangeValue = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			event.preventDefault();

			const { value } = event.target;

			setBaseFontRatio(parseFloat(value));
			setBaseFontRatioProperty(value);
		},
		[setBaseFontRatio, setBaseFontRatioProperty],
	);

	return (
		<S.PanelWrapper id="article-typeset" className="article-typeset">
			<header className="article-typeset__header">
				<h4 ref={ref} className="article-typeset__title">
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
				<button id="close-button" data-testid="close-button" className="round-button" onClick={close}>
					<IconClose />
				</button>
			</div>
		</S.PanelWrapper>
	);
};

export default ArticleTypeset;
