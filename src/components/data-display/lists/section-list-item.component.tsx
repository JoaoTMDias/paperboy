// Libraries
import * as React from "react";
import styled from "styled-components";
import { rem } from "polished";


import { flexRow } from '../../../helpers/index.helpers';

interface ISectionListItemProps {
    id: string;
}


/**
 * @description Section List Item
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<ISectionListItemProps>}
 */
export const SectionListItem: React.FunctionComponent<ISectionListItemProps> = (props) => {
    const { id, children } = props;

    return (
        <ListWrapper aria-labelledby={id} className="section-list__item">
            {children}
        </ListWrapper>
    );
};

// Styling
const ListWrapper = styled.li`
    --section-list-item-height: ${rem('64px')};
    --list-item-border-bottom-color: var(--color-gray1);
    --list-item-background-color: var(--body-background);
    --list-item-background-color-hover: var(--color-gray1);


    html[data-theme="DARK"] & {
        --list-item-border-bottom-color: var(--color-gray8);
        --list-item-background-color-hover: var(--color-gray8);
    }

    width: 100%;
    height: var(--section-list-item-height, 4rem);
    padding: calc(var(--global-padding) * 0.5) 0;
    margin: 0;
    border-bottom: 1px solid var(--list-item-border-bottom-color);
    background-color: var(--list-item-background-color);

    &:only-child,
    &:last-child {
        border-bottom-color: transparent;
    }

    &:hover,
    &:focus {
        background-color: var(--list-item-background-color-hover);
    }

    ${flexRow({
    direction: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
})};
`;

export default React.memo(SectionListItem);
