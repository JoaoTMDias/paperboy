// Libraries
import * as React from "react";
import styled, { css } from "styled-components";
import { rem } from "polished";
import {flexRow, elevation} from "../../../helpers/index.helpers";

// Interface
export enum EListItemButtonType {
    NORMAL = 'NORMAL',
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
};

interface IListItemWithButtonProps {
    id: string;
    title: string;
    type: EListItemButtonType;
    subtitle?: string | null;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    style?: React.CSSProperties;
}


/**
 * @description List Item with a Toggle Switch
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IListItemWithButtonProps>}
 */
export const ListItemWithButton: React.FunctionComponent<IListItemWithButtonProps> = (props) => {
    const { id, title, subtitle, style, type, onClick, children } = props;
    return (
        <Action
            id={`${id}-button ${children && 'has-icon'}`}
            className="section-list__item__label"
            onClick={onClick}
            type={type}
            tabIndex={0}
            style={style}
        >
            {children && (
                <div className="icon">
                    {children}
                </div>
            )}
            <div className="text">
                <h3 className="text__title">{title}</h3>
                {subtitle && (
                    <h6 className="text__subtitle">{subtitle}</h6>
                )}
            </div>
        </Action>
    );
};

ListItemWithButton.defaultProps = {
    type: EListItemButtonType.NORMAL,
};

// Styling
const Action = styled.button`
    --button-background: var(--body-background);
    --button-color: var(--color-gray9);
    --button-border-color: var(--color-gray9);

    --icon-size: ${rem('48px')};
    --list-item-title-color: var(--button-color);
    --list-item-subtitle-color: var(--button-color);

    border-radius: var(--global-radius);

    ${(props: IListItemWithButtonProps) => {
        switch (props.type) {
            default:
            case EListItemButtonType.NORMAL:
                return css`
                    --button-background: var(--body-background);
                    --button-color: var(--color-gray9);
                    --button-border-color: var(--color-gray9);
                `;

            case EListItemButtonType.PRIMARY:
                return css`
                    --button-background: var(--color-primary);
                    --button-color: var(--color-white);
                    --button-border-color: var(--color-primary);
                `;

            case EListItemButtonType.SECONDARY:
                return css`
                    --button-background: var(--color-secondary);
                    --button-color: var(--color-white);
                    --button-border-color: var(--color-secondary);
                `;
        }
    }};

    background-color: var(--button-background);
    color: var(--button-color);
    border: 1px sollid var(--button-border-color);
    ${elevation[1]};


    html[data-theme="DARK"] & {
        --list-item-title-color: var(--color-gray0);
        --list-item-subtitle-color: var(--color-gray3);
    }

    width: 100%;
    height: 100%;
    margin: 0;
    ${flexRow({
        direction: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    })};

    &:focus {
        outline-color: transparent;
    }

    .icon {
        width: var(--icon-size);
        height: var(--icon-size);
        margin-right: calc(var(--global-margin) * -1);
    }

    .text {
        width: 100%;

        .has-icon & {
            width: calc(100% - var(--icon-size));
        }

        &__title,
        &__subtitle {
            width: 100%;
            font-family: var(--body-font-family);
            text-align: center;
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
`;

export default React.memo(ListItemWithButton);
