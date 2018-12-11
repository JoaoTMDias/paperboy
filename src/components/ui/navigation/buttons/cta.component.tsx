// Libraries
import { rem } from "polished";
import * as React from "react";
import { Spring } from "react-spring";
import styled, { css } from "styled-components";

// Component Props
interface IUICallToActionProps {
  isTop?: boolean;
  float?: boolean;
  theme?: any;
}

/**
 * @description CallToAction
 * @author  João Dias
 * @date  21/November/2018 at 13:38
 * @extends {React.FunctionComponent}
 */
const UICallToAction: React.FunctionComponent<IUICallToActionProps> = (props) => {
  const { children, ...ctaProps } = props;
  return <Wrapper {...ctaProps}>{children}</Wrapper>;
};

// Styling
const Wrapper = styled.nav`
  width: 100%;
  padding: ${rem("10px")} 0;

  ${(props: IUICallToActionProps) => !props.float
    && css`
      position: fixed;
      left: 0;
      right: 0;
      top: ${(props: IUICallToActionProps) => (props.isTop ? 0 : "auto")};
      bottom: ${(props: IUICallToActionProps) => (props.isTop ? "auto" : 0)};
    `}

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button,
  a {
    &:only-child {
      width: calc(100% - 1rem);
      margin: 0 auto;
    }
  }
`;

UICallToAction.defaultProps = {
  isTop: false,
  float: false,
};

export default UICallToAction;
