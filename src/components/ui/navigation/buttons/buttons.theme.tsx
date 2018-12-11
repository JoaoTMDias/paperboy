// Libraries
import { rem } from "polished";
import * as React from "react";
import styled, { keyframes } from "styled-components";

// Component Props
interface IUIButtonProps {
  type: string;
  text: string;
  label: string;
  onClick?: any;
}

/**
 * @description Button: Primary
 * @author  João Dias
 * @date  11/December/2018 at 00:03
 * @extends {React.SFC}
 */
const UIButton: React.FunctionComponent<IUIButtonProps> = (props) => {
  const {
    type, text, label, onClick,
  } = props;
  return (
    <Wrapper type={type} onClick={onClick} aria-label={label}>
      {text}
    </Wrapper>
  );
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

const Wrapper = styled.button`
  width: 100%;
  height: var(--bottom-navigation-bar-height, ${rem("48px")});
  background-color: var(--color-primary);
  color: var(--color-white);
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: var(--global-radius);

  animation-name: ${onEnter};
  animation-duration: 300ms;
  animation-timing-function: var(--default-timing-function);
  animation-fill-mode: both;
  animation-delay: 1000ms;
`;

export { UIButton };
