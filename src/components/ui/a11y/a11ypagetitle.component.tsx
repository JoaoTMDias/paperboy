// Libraries
import * as React from "react";
import styled from "styled-components";

// Component Props
interface IA11yPageTitleProps {
  title: string;
}

/**
 * @description Accessible Page Title for Reach Router
 * @author  João Dias
 * @date  29/November/2018 at 23:42
 * @extends {React.FunctionComponent}
 */
const A11yPageTitle: React.FunctionComponent<IA11yPageTitleProps> = (props) => {
  const { title } = props;
  return (
    <Title id="page-title" role="alert" aria-live="polite" aria-atomic="true" tabIndex={0}>
      {`Page Title: ${title}`}
    </Title>
  );
};

const Title = styled.h1`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute !important;
  width: 1px;
  opacity: 0;
`;

A11yPageTitle.defaultProps = {
  title: "Page Title",
};

export default A11yPageTitle;
