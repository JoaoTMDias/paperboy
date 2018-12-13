// Libraries
import { rem } from "polished";
import * as React from "react";
import styled from "styled-components";

// Component Props
interface IUINavigationBarProps {
  children: any;
  theme?: any;
}

/**
 * @description Top Navigation Wrapper
 * @author  João Dias
 * @date  12/December/2018 at 15:42
 * @extends {React.SFC}
 */
const UINavigationBar: React.FunctionComponent<IUINavigationBarProps> = props => (
  <Wrapper>{props.children}</Wrapper>
);

// Styling
const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: ${rem("48px")};
  padding-left: ${rem("16px")};
  padding-right: ${rem("16px")};
  background-color: var(--color-white);
  z-index: 3;
`;

export default UINavigationBar;
