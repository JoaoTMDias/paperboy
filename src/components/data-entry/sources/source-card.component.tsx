// Libraries
import { rem } from 'polished';
import * as React from 'react';
import styled from 'styled-components';
import { LazyLoadingImage } from '../../index';

// Component Props
interface ISourceCardProps {
	theme?: any;
	id: string;
	label: string;
	category: string;
	src: string;
	handleChange: any;
	checked: boolean;
	style?: React.CSSProperties
}

/**
 * @description Source List Item
 * @author  João Dias
 * @date  27/December/2018 at 00:57
 * @extends {React.SFC}
 */
class SourceCard extends React.Component<ISourceCardProps> {
	static defaultProps = {
		checked: false,
	};

	shouldComponentUpdate(nextProps: ISourceCardProps) {
		return nextProps.checked !== this.props.checked;
	}

	public render() {
		const { id, label, src, category, handleChange, checked, style } = this.props;
		const status: string = checked ? 'is-checked' : '';

		return (
			<Wrapper className={`source__item ${status}`} style={style}>
				<label htmlFor={`source-${id}-input`} tabIndex={0}>
					<Input
						id={`source-${id}-input`}
						className="source__input"
						type="checkbox"
						data-category={category}
						value={`${id}`}
						name="source-input"
						checked={checked}
						onChange={handleChange}
						tabIndex={-1}
					/>
					<Icon
						role="image"
						className="source__status"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<title>check</title>
						<circle
							className="icon__circle"
							cx="12"
							cy="12"
							r="12"
							fill="var(--color-gray2)"
						/>
						<path
							className="icon__check"
							d="M8.75,17.4l-4.3-4.31A1.2,1.2,0,0,1,6.14,11.4l3.47,3.46L17.86,6.6a1.2,1.2,0,0,1,1.69,1.69l-9.1,9.11A1.2,1.2,0,0,1,8.75,17.4Z"
							fill="var(--color-gray2)"
						/>
					</Icon>
					<Logo className="source__cover">
						<LazyLoadingImage
							src={src}
							width="105"
							height="105"
							alt={`${label} logo`}
						/>
					</Logo>
					<Name className="source__label">
						<h4
							id="source-label-cnn"
							className="source__label__title"
						>
							{label}
						</h4>
					</Name>
				</label>
			</Wrapper>
		);
	}
}

// Styling
const Wrapper = styled.li`
	min-width: ${rem('105px')};
	min-height: ${rem('148px')};
	width: 100%;
	scroll-snap-align: center;
	display: flex;
	margin-right: 1rem;

	* {
		&:active,
		&:focus {
			outline: none;
		}
	}

	&.is-checked {
		transform: scale(1);
		.source__status {
			.icon__circle {
				fill: var(--color-select);
			}

			.icon__check {
				fill: var(--color-white);
			}
		}

		label {
			box-shadow: 0 0px 8px 2px rgba(0, 0, 0, 0.08),
				0 0 6px 0 rgba(0, 0, 0, 0.16);
		}

		.source__label {
			background-image: linear-gradient(
				45deg,
				var(--color-select),
				var(--color-select-gradient)
			);

			.source__label__title {
				color: var(--color-white);
				text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
			}
		}
	}

	label {
		position: relative;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.02),
			0 0 3px 1px rgba(0, 0, 0, 0.04);
		border-radius: 8px;
		transform: scale(0.98);

		&:active {
			box-shadow: 0 0px 8px 2px rgba(0, 0, 0, 0.04),
				0 0 4px 0 rgba(0, 0, 0, 0.08);
			transform: scale(0.96);
		}
	}
`;

const Icon = styled.svg`
	position: absolute;
	top: ${rem('8px')};
	right: ${rem('8px')};
	width: ${rem('24px')};
	height: ${rem('24px')};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	z-index: 1;
`;

const Logo = styled.figure`
	margin: 0;
	overflow: hidden;
	position: relative;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;

	img {
		object-fit: cover;
		object-position: center center;
		width: 100%;
		height: auto;
		background-color: var(--color-gray3);
	}
`;

const Input = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	margin: 0;
	padding: 0;
	right: 0;
`;

const Name = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	background-color: var(--color-white);

	html[data-theme="DARK"] & {
		background-color: var(--color-gray9);
	}
	height: ${rem('44px')};

	.source__label {
		&__title {
			--text-shadow-color: rgba(255, 255, 255, 0.2);



			html[data-theme="DARK"] & {
				--text-shadow-color: rgba(0, 0, 0, 0.2);
			}

			width: 100%;
			text-align: center;
			font-family: var(--body-font-family);
			font-size: ${rem('12px')};
			line-height: 1.333;
			color: var(--color-gray8);

			html[data-theme="DARK"] & {
				color: var(--color-gray3);
			}
			letter-spacing: 0;
			margin: 0;
			padding: ${rem('4px')} ${rem('8px')};
			text-shadow: 0px 1px 1px var(--text-shadow-color);
			text-transform: capitalize;
		}
	}
`;

export default SourceCard;
