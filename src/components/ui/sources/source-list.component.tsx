// Libraries
import * as React from 'react'
import styled from 'styled-components';
import { SourceCard, SourceListItem } from "../..";

// Component Props
interface ISourcesListProps {
  theme?: any
  layout?: "grid" | "horizontal" | "vertical"
  label: string;
  data: any | null;
  handleChange: any;
  selectedOptions: string[];
}

/**
 * @description Sources: List of Sources
 * @author  João Dias
 * @date  24/December/2018 at 01:43
 * @extends {React.SFC}
 */
const SourcesList: React.FunctionComponent<ISourcesListProps> = props => {
  const { data, layout } = props;

  const renderData = () => {
    let item;

    if (layout === "horizontal") {
      item = data.map((source: any, index: number) => {
        return (
          <SourceCard
            key={source.id}
            id={source.id}
            label={source.name}
            cover={`https://paperboy-icon-service.herokuapp.com/icon?url=${
              source.url
            }&size=70..120..200`}
            handleChange={(event: React.SyntheticEvent) =>
              props.handleChange(event, index)
            }
            checked={props.selectedOptions.indexOf(source.id) > -1}
          />
        )
      });
    } else if (layout === "vertical") {
      item = data.map((source: any, index: number) => (
        <SourceListItem
          key={source.id}
          id={source.id}
          label={source.name}
          cover={`https://paperboy-icon-service.herokuapp.com/icon?url=${
            source.url
          }&size=70..120..200`}
          handleChange={(event: React.SyntheticEvent) =>
            props.handleChange(event, index)
          }
          checked={props.selectedOptions.indexOf(source.id) > -1}
        />
      ));
    }

    return item;
  };

  return (
    <SourcesListWrapper
      role="group"
      aria-label={props.label}
      layout={props.layout}
    >
      {props.data ? renderData() : null}
    </SourcesListWrapper>
  );
};

SourcesList.defaultProps = {
  layout: "vertical",
  label: "label",
};

// Styling
const SourcesListWrapper = styled.ul`
  display: flex;
  flex-direction: ${(props: ISourcesListProps) =>
    props.layout === "horizontal" ? "row" : "column"};
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
    margin-right: ${(props: ISourcesListProps) =>
      props.layout === "horizontal" ? "1rem" : "0"};
  }
`;
export default SourcesList;
