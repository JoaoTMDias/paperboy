// Libraries
import React, { FunctionComponent, useRef, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { IGlobalStoreState } from "data/interfaces/index";
import { setBaseFontRatio } from "data/redux/actions/index.actions";
import { IconChangeTypeSize, EIconChangeTypeSize } from "components/icons/index";
import * as S from "./styles";
import { IArticleTypesetProps } from "./types";
import { Dispatch, bindActionCreators } from 'redux';

/**
 * @description Article Typographic settings
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IArticleTypesetProps>}
 */
export const ArticleTypeset: FunctionComponent<IArticleTypesetProps> = ({
	baseFontRatio,
	actions
}) => {
	const { current: htmlElement } = useRef(document.documentElement);

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
		[htmlElement]
	);

	const handleOnChangeRangeValue = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			event.preventDefault();

			const { value } = event.target;

			actions.setBaseFontRatio(parseFloat(value));
			setBaseFontRatioProperty(value);
		},
		[actions, setBaseFontRatioProperty]
	);

	return (
		<S.PanelWrapper id="article-typeset" className="article-typeset">
			<header className="article-typeset__header">
				<h4 className="article-typeset__title">Change font size</h4>
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
						defaultValue={`${baseFontRatio}`}
						step="0.25"
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnChangeRangeValue(event)}
					/>
				</label>
				<IconChangeTypeSize type={EIconChangeTypeSize.LARGE} />
			</div>
		</S.PanelWrapper>
	);
}

ArticleTypeset.defaultProps = {
	baseFontRatio: 1,
};


function mapStateToProps(state: IGlobalStoreState) {
	return {
		baseFontRatio: state.preferences.baseFontRatio,
	};
}

function mapDispatchToProps(dispatch: Dispatch) {
	return {
		actions: bindActionCreators(
			{
				setBaseFontRatio,
			},
			dispatch,
		),
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleTypeset);
