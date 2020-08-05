// Libraries
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { rem } from "polished";
import { theme } from "helpers/theme.helper";

// Interface
interface IFormSwitchProps {
	id: string;
	checked: boolean;
	value: string;
}

/**
 * @description Component Description
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IFormSwitchProps>}
 */
const FormSwitch: FunctionComponent<IFormSwitchProps> = (props) => {
	const { id, checked, value } = props;

	const labelValue = checked ? "On" : "Off";

	return (
		<SwitchWrapper
			className={`form-switch ${checked ? "is-checked" : ""}`}
			data-testid="form-switch"
			role="checkbox"
			aria-checked={checked}
		>
			<input
				id={`${id}-input`}
				data-testid="form-switch-input"
				name={`${id}-input`}
				type="checkbox"
				className="switch__input"
				value={value}
				checked={checked}
				tabIndex={-1}
			/>
			<span className="switch__label">{labelValue}</span>
		</SwitchWrapper>
	);
};

FormSwitch.defaultProps = {
	checked: false,
};

// Styling
const SwitchWrapper = styled.div`
	--bg-disabled-color: var(--color-gray3);
	--bg-enabled-color: hsla(215, 78%, 64%);
	--lever-disabled-color: var(--color-white);
	--lever-enabled-color: var(--color-primary);
	--icon-size: ${rem("48px")};
	--form-switch-label: var(--color-gray8);

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: relative;
	margin: 0;
	width: 100%;
	height: 100%;
	font-size: 16px;

	.switch {
		&__input {
			position: absolute;
			top: 17px;
			left: 0;
			width: 36px;
			height: 20px;
			opacity: 0;
			z-index: 0;
		}

		&__label {
			display: block;
			padding: 0 0 0 44px;
			cursor: pointer;
			text-transform: uppercase;
			font-size: 12px;
			color: var(--form-switch-label);

			&:before {
				content: "";
				position: absolute;
				top: 17px;
				left: 0;
				width: 36px;
				height: 14px;
				background-color: var(--bg-disabled-color);
				border-radius: 14px;
				z-index: 1;
				transition: background-color 0.28s cubic-bezier(0.4, 0, 0.2, 1);
			}

			&:after {
				content: "";
				position: absolute;
				top: 14px;
				left: 0;
				width: 20px;
				height: 20px;
				background-color: var(--lever-disabled-color);
				border-radius: 14px;
				box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
				z-index: 2;
				transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
				transition-property: left, background-color;
			}
		}

		/* &__checkbox:focus + .switch__input {
            &:after {
                outline: 1px dotted currentColor;
            }
        } */
	}

	&.is-checked {
		.switch__label {
			&:before {
				background-color: var(--bg-enabled-color);
			}

			&:after {
				left: 16px;
				background-color: var(--lever-enabled-color);
			}
		}
	}

	${theme.dark`
		--form-switch-label: var(--color-gray3);
	`};
`;

export default FormSwitch;
