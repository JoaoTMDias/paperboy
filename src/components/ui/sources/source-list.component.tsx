// Libraries
import { rem } from "polished";
import * as React from "react";
import styled from "styled-components";

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
  width: 100%;
  padding: 0;
  margin: 0;
`;

export default SourcesList;
