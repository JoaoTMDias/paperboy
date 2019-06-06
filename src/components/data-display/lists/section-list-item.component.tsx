// Libraries
import * as React from "react";
import styled from "styled-components";
import { rem } from "polished";

import { flexRow } from '../../../helpers/index.helpers';

// Interface
export enum ESectionListItemType {
    LINK = "LINK",
    BUTTON = "BUTTON",
}

interface ISectionListItemProps {
    id: string;
    title: string;
    subtitle?: string | null;
    type: ESectionListItemType;
}


/**
 * @description Section List Item
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<ISectionListItemProps>}
 */
export const SectionListItem: React.FunctionComponent<ISectionListItemProps> = (props) => {
    const { id, title, subtitle, type, children } = props;

    const renderInnerContent = () => {

    };

    return (
        <ListWrapper id={id} className="section-list__item">
            {type === ESectionListItemType.BUTTON ? (
                <label htmlFor={`${id}-input`} className={`section-list__item__label ${children && 'has-icon'}`}>
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
                </label>
            ) : (
                    <label htmlFor={`${id}-input`}>
                        <div className="section-list__item__text">
                            <h3 className="section-list__item__title">{title}</h3>
                            {subtitle && (
                                <h6 className="section-list__item__subtitle">{subtitle}</h6>
                            )}
                        </div>
                        {type === ESectionListItemType.BUTTON && children && (
                            <div className="section-list__item__icon">
                                {children}
                            </div>
                        )}
                    </label>
            )}
        </ListWrapper>
    );
};

// Styling
const ListWrapper = styled.li`
    --section-list-item-height: ${rem('64px')};
    --icon-size: ${rem('48px')};
    width: 100%;
    height: var(--section-list-item-height, 4rem);
    padding: calc(var(--global-padding) * 0.5) var(--global-padding);
    margin: 0;
    ${flexRow({
        direction: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    })};

    .section-list {
        &__item {
            &__label {
                width: 100%;
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
            }

            &__text {

            }
            &__title {
                width: 100%;
                font-family: var(--body-font-family);
                font-weight: 300;
                font-size: ${rem('16px')};
                line-height: 1;
                margin: 0;
                padding: 0;
            }

            &__icon {
                width: var(--icon-size);
                height: var(--icon-size);
            }
        }
    }
`;

export default React.memo(SectionListItem);
