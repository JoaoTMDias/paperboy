// Libraries
import * as React from "react";
import { LazyLoadingImage } from "components/index.components";
import { ISourceCardProps } from "./types";
import { SourceCardWrapper, SourceCardInput, SourceCardIcon, SourceCardLogo, SourceCardName } from "./styles";

/**
 * @description Source List Item
 * @extends {React.FC}
 */
const SourceCard: React.FC<ISourceCardProps> = ({ id, label, src, category, checked, style }) => {
	const status: string = checked ? "is-checked" : "";

	function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { handleChange } = this.props;

		event.preventDefault();
		handleChange(event);
	}

	return (
		<SourceCardWrapper className={`source__item ${status}`} style={style}>
			<label htmlFor={`source-${id}-input`} tabIndex={0}>
				<SourceCardInput
					id={`source-${id}-input`}
					className="source__input"
					type="checkbox"
					data-category={category}
					value={`${id}`}
					name="source-input"
					checked={checked}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnChange(event)}
					tabIndex={-1}
				/>
				<SourceCardIcon
					role="image"
					className="source__status"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<title>check</title>
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
		</SourceCardWrapper>
	);
}

SourceCard.defaultProps = {
	checked: false,
};

export default SourceCard;
