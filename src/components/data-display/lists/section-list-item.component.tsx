// Libraries
import * as React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { Link } from 'gatsby';


import { flexRow } from '../../../helpers/index.helpers';

// Interface
export enum ESectionListItemType {
    LINK = "LINK",
    BUTTON = "BUTTON",
}

interface ISectionListItemProps {
    id: string;
    to?: string;
    title: string;
    subtitle?: string | null;
    type: ESectionListItemType;
    onClick?(event: React.MouseEvent<HTMLLabelElement, MouseEvent>): void;
}


/**
 * @description Section List Item
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<ISectionListItemProps>}
 */
export const SectionListItem: React.FunctionComponent<ISectionListItemProps> = (props) => {
    const { id, to, title, subtitle, type, onClick, children } = props;

    return (
        <ListWrapper id={id} className="section-list__item">
            {type === ESectionListItemType.BUTTON ? (
                <label
                    htmlFor={`${id}-input`}
                    className={`section-list__item__label ${children && 'has-icon'}`}
                    onClick={onClick}
                    tabIndex={0}
                >

                    <div className="section-list__item__text">
                        <h3 className="section-list__item__title">{title}</h3>
                        {subtitle && (
                            <h6 className="section-list__item__subtitle">{subtitle}</h6>
                        )}
                    </div>
                    {children && (
                        <div className="section-list__item__icon toggle">
                            {children}
                        </div>
                    )}
                </label>
            ) : (
                    <Link
                        to={to}
                        className={`section-list__item__label`}
                        tabIndex={0}
                    >
                        <div className="section-list__item__text">
                            <h3 className="section-list__item__title">{title}</h3>
                            {subtitle && (
                                <h6 className="section-list__item__subtitle">{subtitle}</h6>
                            )}
                        </div>
                        {children && (
                            <div className="section-list__item__icon">
                                {children}
                            </div>
                        )}
                    </Link>
                )}
        </ListWrapper>
    );
};

SectionListItem.defaultProps = {
    to: '#',
};

// Styling
const ListWrapper = styled.li`
    --section-list-item-height: ${rem('64px')};
    --icon-size: ${rem('48px')};
    --list-item-title-color: var(--color-gray9);
    --list-item-subtitle-color: var(--color-gray8);
    --list-item-border-bottom-color: var(--color-gray1);


    html[data-theme="DARK"] & {
        --list-item-title-color: var(--color-gray0);
        --list-item-subtitle-color: var(--color-gray3);
        --list-item-border-bottom-color: var(--color-gray8);
    }

    width: 100%;
    height: var(--section-list-item-height, 4rem);
    padding: calc(var(--global-padding) * 0.5) 0;
    margin: 0;
    border-bottom: 1px solid var(--list-item-border-bottom-color);

    &:only-child,
    &:last-child {
        border-bottom-color: transparent;
    }

    ${flexRow({
    direction: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
})};

    .section-list {
        &__item {
            &__label {
                width: 100%;
                margin: 0;
                ${flexRow({
    direction: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
})};

                 &.has-icon {
                    .section-list__item__text {
                        width: calc(100% - var(--icon-size));
                    }
                }

                &:focus {
                    outline-color: transparent;
                }
            }

            &__text {
                width: 100%;
                height: ${rem('48px')};
                ${flexRow({
    direction: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
})};
            }
            &__title {
                width: 100%;
                font-family: var(--body-font-family);
                font-weight: 300;
                font-size: ${rem('14px')};
                color: var(--list-item-title-color);
                line-height: 1;
                margin: 0;
                padding: 0;
            }

            &__subtitle {
                width: 100%;
                font-family: var(--body-font-family);
                font-weight: 300;
                font-size: ${rem('14px')};
                color: var(--list-item-subtitle-color);
                line-height: 1;
                margin: 0;
                margin-top: 0.25rem;
                padding: 0;
            }


            &__icon {
                width: var(--icon-size);
                height: var(--icon-size);
                margin-right: calc(var(--global-margin) * -1);

                &.toggle {
                    width: ${rem('80px')};
                    margin: 0;
                }
            }
        }
    }
`;

export default React.memo(SectionListItem);
