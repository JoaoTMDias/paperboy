// Libraries
import * as React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { flexRow, elevation } from "../../../helpers/index.helpers";


// Interface
interface IAddToHomeScreenWithInstallProps {
    id: string;
    title: string;
    subtitle?: string | null;
    isStandalone: boolean;
}


/**
 * @description Component Description
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IAddToHomeScreenWithInstallProps>}
 */
const AddToHomeScreenWithInstall: React.FunctionComponent<IAddToHomeScreenWithInstallProps> = (props) => {
    const { id, title, subtitle, isStandalone } = props;

    /**
     * @description
     * @author João Dias
     * @date 2019-06-07
     * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
     */
    function handleClickToInstall(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();

        console.log('click to install');
    }

    return (
        <Wrapper
            type="button"
            className={`section-list__item__label`}
            tabIndex={0}
            disabled={isStandalone}
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClickToInstall(event)}
        >
            <div className="text">
                <h3 className="text__title">{title}</h3>
                {subtitle && (
                    <h6 className="text__subtitle">{subtitle}</h6>
                )}
            </div>
            <div className={`banner ${isStandalone ? 'is-standalone' : ''}`}>
                {isStandalone && isStandalone === true ? 'Installed' : 'Install'}
            </div>
        </Wrapper>
    );
};

// Styling
const Wrapper = styled.button`
    --icon-size: ${rem('48px')};
    --list-item-title-color: var(--color-gray9);
    --list-item-subtitle-color: var(--color-gray8);


    html[data-theme="DARK"] & {
        --list-item-title-color: var(--color-gray0);
        --list-item-subtitle-color: var(--color-gray3);
    }

    width: 100%;
    margin: 0;
    ${flexRow({
    direction: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
})};

        padding: 0;
        -webkit-appearance: none;
        border: none;
        background: none;
        cursor: pointer;

    .text {
        &__title,
        &__subtitle {
            width: 100%;
            font-family: var(--body-font-family);
            text-align: left;
            font-weight: 300;
            line-height: 1;
            margin: 0;
            padding: 0;
        }

        &__title {
            font-size: ${rem('14px')};
            color: var(--list-item-title-color);
            letter-spacing: 0.4px;
            line-height: 1;
            margin: 0;
            padding: 0;
        }

        &__subtitle {
            font-size: ${rem('13px')};
            color: var(--list-item-subtitle-color);
            margin-top: 0.25rem;
        }
    }

    .banner {
        background-color: var(--color-primary);
        padding: ${rem('8px')} var(--global-padding);
        border-radius: ${rem('34px')};
        color: var(--color-white);
        ${elevation[1]};

        &.is-standalone {
            background-color: var(--color-gray3);
            color: var(--color-gray6);
            box-shadow: none;
        }
    }
`;

export default React.memo(AddToHomeScreenWithInstall);
