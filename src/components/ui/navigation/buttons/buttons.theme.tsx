// Libraries
import { Link } from "gatsby";
import { darken, rem } from "polished";
import * as React from "react";
import styled, { css } from "styled-components";

// Component Props
interface IUIButtonProps {
  type: string;
  text: string;
  label: string;
  onClick?: any;
  disabled?: boolean;
}

/**
 * @description Button: Primary
 * @author  João Dias
 * @date  11/December/2018 at 00:03
 * @extends {React.SFC}
 */
const UIButton: React.FunctionComponent<IUIButtonProps> = (props) => {
  const {
    type, text, label, onClick, disabled,
  } = props;

  const linkText = disabled ? "Select at least 3 sources " : text;

  return (
    <Btn type={type} onClick={onClick} aria-label={label} tabIndex={0} disabled={disabled}>
      {linkText}
    </Btn>
  );
};

interface IUIAnchorProps {
  to: string;
  text: string;
  label: string;
  disabled: boolean;
}

const UIAnchor: React.FunctionComponent<IUIAnchorProps> = (props) => {
  const {
    to, text, label, disabled,
  } = props;

  const linkText = disabled ? "Select at least 3 sources " : text;
  return (
    <Anchor to={to} aria-label={label} tabIndex={0} disabled={disabled}>
      {linkText}
    </Anchor>
  );
};

// Styling
const Btn = styled.button`
  width: 100%;
  height: var(--bottom-navigation-bar-height, ${rem("48px")});
  background-color: var(--color-primary);
  color: var(--color-white);
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: var(--button-radius);
  transform: scale(1);
  transition: all 200ms var(--default-timing-function);

  &:focus,
  &:hover,
  &:active {
    background-color: ${darken(0.5, "#e74c3c")};
    color: currentColor;
    outline: 1px solid var(--color-gray3);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Anchor = styled(Link)`
  width: 100%;
  height: var(--bottom-navigation-bar-height, ${rem("48px")});
  background-color: var(--color-primary);
  color: var(--color-white);
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: var(--button-radius);
  transform: scale(1);
  transition: all 200ms var(--default-timing-function);
  pointer-events: all;

  &:focus,
  &:hover,
  &:active {
    background-color: ${darken(0.1, "#e74c3c")};
    color: currentColor;
    outline: 1px solid var(--color-gray3);
  }

  &:active {
    transform: scale(0.98);
  }

  ${(props: IUIAnchorProps) => props.disabled
    && css`
      background-color: var(--color-gray3);
      color: var(--color-gray8);
      cursor: no-drop;
      user-select: none;
      pointer-events: none;
      box-shadow: none !important;

      &:focus,
      &:hover,
      &:active {
        background-color: var(--color-gray5);
        color: var(--color-gray8);
        outline: none;
      }
    `};
`;

export { UIButton, UIAnchor };
