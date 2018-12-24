// Libraries
import { rem } from "polished";
import * as React from "react";
import styled from "styled-components";

// Component Props
interface IUISectionProps {
  theme?: any;
  layout?: "vertical" | "horizontal";
  title: string;
  id: string;
  children?: React.ReactNode;
}

/**
 * @description Page Section Component
 * @author  João Dias
 * @date  24/December/2018 at 01:23
 * @extends {React.SFC}
 */
const UISection: React.FunctionComponent<IUISectionProps> = (props) => {
  const {
    id, title, children, layout,
  } = props;
  return (
    <SectionWrapper id={id} aria-labelledby={`${id}-section-title`} title={title} layout={layout}>
      <SectionTitle id={`${id}-section-title`}>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
};

UISection.defaultProps = {
  layout: "vertical",
  title: "Section Title",
  id: `${Math.random()}`,
};

// Styling
const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: ${(props: IUISectionProps) => {
    if (props.layout === "horizontal") {
      return "row";
    }
    return "column";
  }};
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: ${rem("48px")};

  &:only-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-family: var(--body-font-family);
  font-size: ${rem("14px")};
  color: var(--color-gray8);
  letter-spacing: ${rem("0.17px")};
  line-height: ${rem("14px")};
  margin-bottom: var(--global-padding);
`;

export default UISection;
