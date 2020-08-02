// Libraries
import * as React from "react";
import { ISourceCardProps } from "./types";
import LazyLoadingImage from "components/general/images/image.lazyload.component";
import { SourceCardWrapper, SourceCardInput, SourceCardIcon, SourceCardLogo, SourceCardName } from "./styles";
import KEY_CODES from "helpers/key-codes";
import { withMemo } from "helpers/index.helpers";

/**
 * @description Source List Item
 * @extends {React.FC}
 */
const SourceCard: React.FC<ISourceCardProps> = ({ id, label, src, category, checked, style, handleChange }) => {
	const status: string = checked ? "is-checked" : "";

	function onKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
		switch (event.keyCode) {
			case KEY_CODES.ENTER:
			case KEY_CODES.SPACE:
				const target = event.target as HTMLInputElement;
				handleChange(target.value);
				break;

			default:
				break;
		}
	}

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		handleChange(event.target.value);
	}

	return (
		<SourceCardWrapper className={`source__item ${status}`} style={style}>
			<label htmlFor={`source-${id}-input`} tabIndex={0}>
				<SourceCardIcon role="image" className="source__status" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<circle className="icon__circle" cx="12" cy="12" r="12" fill="var(--color-gray2)" />
					<path
						className="icon__check"
						d="M8.75,17.4l-4.3-4.31A1.2,1.2,0,0,1,6.14,11.4l3.47,3.46L17.86,6.6a1.2,1.2,0,0,1,1.69,1.69l-9.1,9.11A1.2,1.2,0,0,1,8.75,17.4Z"
						fill="var(--color-gray2)"
					/>
				</SourceCardIcon>
				<SourceCardLogo className="source__cover">
					<LazyLoadingImage src={src} width="105" height="105" alt={`${label} logo`} />
				</SourceCardLogo>
				<SourceCardName className="source__label">
					<h4 id={`source-label-${id}-card`} className="source__label__title">
						{label}
					</h4>
				</SourceCardName>
			</label>
			<SourceCardInput
				id={`source-${id}-input`}
				className="source__input"
				type="checkbox"
				data-category={category}
				value={`${id}`}
				name="source-input"
				checked={checked}
				onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => onKeyUp(event)}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event)}
			/>
		</SourceCardWrapper>
	);
};

SourceCard.defaultProps = {
	checked: false,
};

export default withMemo(SourceCard, ["checked"]);
