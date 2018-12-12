// Libraries
import { rem } from "polished";
import * as React from "react";
import styled, { css, keyframes } from "styled-components";

// Component Props
interface IUICallToActionProps {
  isTop?: boolean;
  float?: boolean;
  theme?: any;
  blurred?: boolean;
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
const onEnter = keyframes`
  from {
    transform: translate3d(0, var(--bottom-navigation-bar-height), 0);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

const Wrapper = styled.nav`
  width: 100%;
  padding: ${rem("10px")} 0;
  position: fixed;
  left: 0;
  right: 0;
  top: ${(props: IUICallToActionProps) => (props.isTop ? 0 : "auto")};
  bottom: ${(props: IUICallToActionProps) => (props.isTop ? "auto" : 0)};
  background-color: rgba(255, 255, 255, 1);

  ${(props: IUICallToActionProps) => props.blurred
    && css`
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
    `}

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${(props: IUICallToActionProps) => (props.isTop
    ? "0px 4px 20px 0px rgba(255,255,255,0.5)"
    : "0px -4px 20px 0px rgba(255,255,255,1)")};

  animation-name: ${onEnter};
  animation-duration: 300ms;
  animation-timing-function: var(--default-timing-function);
  animation-fill-mode: both;
  animation-delay: 1500ms;

  button,
  a {
    &:only-child {
      width: calc(100% - 1rem);
      margin: 0 auto;
    }

    box-shadow: ${(props: IUICallToActionProps) => (props.float
    ? "0px 4px 16px 4px hsla(6, 78%, 57%, 0.24)"
    : "0px 2px 0px 2px hsla(6,78%,57%,0.24)")};
  }
`;

UICallToAction.defaultProps = {
  isTop: false,
  float: false,
  blurred: false,
};

export default UICallToAction;
