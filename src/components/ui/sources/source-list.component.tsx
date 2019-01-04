// Libraries
import * as React from "react";
import styled, { css } from "styled-components";
import { SourceItem } from "../..";

// Component Props
interface ISourcesListProps {
  theme?: any;
  layout?: "grid" | "horizontal" | "vertical";
  label: string;
  data?: any;
}

/**
 * @description Sources: List of Sources
 * @author  João Dias
 * @date  24/December/2018 at 01:43
 * @extends {React.SFC}
 */
const SourcesList: React.FunctionComponent<ISourcesListProps> = (props) => {
  const renderData = (data: any, layout: string | undefined) => {
    if (data) {
      let item = [];

      if (layout === "horizontal") {
        item = data.map((source: any) => (
          <SourceItem
            key={source.id}
            id={source.id}
            label={source.name}
            cover={`https://paperboy-icon-service.herokuapp.com/icon?url=${
              source.url
            }&size=70..120..200`}
          />
        ));
      }

      return item;
    }
    return null;
  };

  return (
    <SourcesListWrapper role="group" aria-label={props.label}>
      {renderData(props.data, props.layout)}
    </SourcesListWrapper>
  );
};

SourcesList.defaultProps = {
  layout: "vertical",
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
  padding: 4px;
  width: 100%;
  scroll-snap-type: x proximity;
  -webkit-overflow-scrolling: touch;

  .source__item {
    flex: 1;
    margin-right: 1rem;
  }
`;
export default SourcesList;
