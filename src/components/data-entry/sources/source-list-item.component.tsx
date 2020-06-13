// Libraries
import * as React from "react";
import { LazyLoadingImage } from "components/index.components";
import { ISourceListItemProps } from "./types.d";
import { Wrapper, Input, Logo, Name, Icon } from "./styles";
import { withMemo } from "helpers/index.helpers";
import KEY_CODES from "helpers/key-codes";

/**
 * @description Source List Item

 * @date  27/December/2018 at 00:57
 * @extends {React.FC}
 */
const SourceListItem: React.FunctionComponent<ISourceListItemProps> = ({
	id,
	label,
	src,
	category,
	checked,
	handleChange,
	style,
}) => {
	function onKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
		event.preventDefault();

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

	const status: string = checked ? "is-checked" : "";

	return (
		<Wrapper className={`source__item ${status}`} style={style}>
			<label htmlFor={`source-${id}-input`} tabIndex={0}>
				<Logo className="source__cover">
					<LazyLoadingImage src={src} width="105" height="105" alt={`${label} logo`} />
				</Logo>
				<Name className="source__label">
					<h4 id={`source-label-${id}`} className="source__label__title">
						{label}
					</h4>
				</Name>
				<Icon role="image" className="source__status" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<circle className="icon__circle" cx="12" cy="12" r="12" />
					<path
						className="icon__check"
						d="M8.75,17.4l-4.3-4.31A1.2,1.2,0,0,1,6.14,11.4l3.47,3.46L17.86,6.6a1.2,1.2,0,0,1,1.69,1.69l-9.1,9.11A1.2,1.2,0,0,1,8.75,17.4Z"
					/>
				</Icon>
			</label>
			<Input
				id={`source-${id}-input`}
				className="source__input"
				type="checkbox"
				data-category={category}
				value={id}
				name={`source-${id}-input`}
				checked={checked}
				onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => onKeyUp(event)}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event)}
			/>
		</Wrapper>
	);
};

SourceListItem.defaultProps = {
	checked: false,
};

export default withMemo(SourceListItem, ["checked"]);
