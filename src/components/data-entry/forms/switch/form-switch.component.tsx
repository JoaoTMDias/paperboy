// Libraries
import * as React from "react";
import styled from "styled-components";
import { rem } from "polished";


// Interface
interface IFormSwitchProps {
    id: string;
    checked: boolean;
    handleOnClickToChange(event: React.ChangeEvent<HTMLInputElement>): void;
}


/**
 * @description Component Description
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IFormSwitchProps>}
 */
const FormSwitch: React.FunctionComponent<IFormSwitchProps> = (props) => {
    const { id, checked, handleOnClickToChange } = props;
    return (
        <SwitchWrapper className="form-switch">
            <input id={`${id}-input`} type="checkbox" className="switch__checkbox" onChange={handleOnClickToChange} checked={checked} />
            <div className="switch__input" />
        </SwitchWrapper>
    );
};

// Styling
const SwitchWrapper = styled.div`
    --bg-disabled-color: rgba(0, 0, 0, .26);
    --bg-enabled-color: rgba(63, 81, 181, .5);
    --lever-disabled-color: #fff;
    --lever-enabled-color: #3f51b5;
    --icon-size: ${rem('48px')};


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
        &__checkbox {
            position: absolute;
            top: 0;
            left: 0;
            width: 36px;
            height: 20px;
            opacity: 0;
            z-index: 0;
        }

        &__input {
            display: block;
            padding: 0;
            cursor: pointer;

            &:before {
                content: '';
                position: absolute;
                top: 5px;
                left: 0;
                width: 36px;
                height: 14px;
                background-color: var(--bg-disabled-color);
                border-radius: 14px;
                z-index: 1;
                transition: background-color 0.28s cubic-bezier(.4, 0, .2, 1);
            }

            &:after {
                content: '';
                position: absolute;
                top: 2px;
                left: 0;
                width: 20px;
                height: 20px;
                background-color: var(--lever-disabled-color);
                border-radius: 14px;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
                z-index: 2;
                transition: all 0.28s cubic-bezier(.4, 0, .2, 1);
                transition-property: left, background-color;
            }
        }

        &__checkbox:checked + &__input {
            &:before {
                background-color: var(--bg-enabled-color);
            }

            &:after {
                left: 16px;
                background-color: var(--lever-enabled-color);
            }
        }

        &__checkbox:focus + &__input {
            &:after {
                outline: 1px dotted currentColor;
            }
        }
    }
`;

export default React.memo(FormSwitch);
