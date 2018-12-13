// Libraries
import * as React from "react";
import styled, { css } from "styled-components";
import { A11yPageTitle } from "../index";

// Component Props
interface IContainerProps {
  isFixed?: boolean;
  fullheight?: boolean;
  offsetTop?: string;
  theme?: any;
  title: string;
  style: string | object;
}

/**
 * @description Layout Container
 * @author  João Dias
 * @date  20/November/2018 at 16:55
 * @extends {React.FunctionComponent}
 */
const Container: React.FunctionComponent<IContainerProps> = (props) => {
  const { offsetTop, ...ContainerProps } = props;

  if (offsetTop) {
    const pageBody: HTMLElement | null = document.documentElement;

    if (pageBody) {
      pageBody.style.setProperty("--top-navigation-bar-height", `${offsetTop}`);
    }
  }
  return (
    <div id="main-content" aria-labelledby="page-title">
      <A11yPageTitle title={props.title} />
      <Wrapper {...ContainerProps}>{props.children}</Wrapper>
    </div>
  );
};

// Styling
const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  margin-top: ${(props: IContainerProps) => {
    if (props.theme) {
      const margin = props.fullheight ? "0" : "var(--top-navigation-bar-height)";
      return margin;
    }
    return "0";
  }};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  z-index: 0;
  position: relative;

  ${(props: IContainerProps) => props.isFixed
    && css`
      overflow: hidden;
    `}
`;

Container.defaultProps = {
  isFixed: false,
  fullheight: false,
  title: "page title",
};

export default Container;
