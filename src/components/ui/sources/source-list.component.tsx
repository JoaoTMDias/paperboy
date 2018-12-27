// Libraries
import * as React from "react";
import styled, { css } from "styled-components";

// Component Props
interface ISourcesListProps {
  theme?: any;
  layout?: "grid" | "horizontal";
  label: string;
  data?: any;
}

/**
 * @description Sources: List of Sources
 * @author  João Dias
 * @date  24/December/2018 at 01:43
 * @extends {React.SFC}
 */
const SourcesList: React.FunctionComponent<ISourcesListProps> = props => (
  <SourcesListWrapper role="group" aria-label={props.label}>
    {props.children}
  </SourcesListWrapper>
);

SourcesList.defaultProps = {
  layout: "grid",
  label: "label",
  data: {},
};

// Styling
const SourcesListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 0;
  padding: 0;

  scroll-snap-type: x proximity;

  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  .source__item {
    flex: 1;
    margin-right: 1rem;
  }
`;
export default SourcesList;
