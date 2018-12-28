// Libraries
import { rem } from "polished";
import * as React from "react";
import styled from "styled-components";

// Component Props
interface IUISectionProps {
  theme?: any;
  layout?: "vertical" | "horizontal";
  title?: string;
  id: string;
  role?: string;
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
    id, title, children, role, layout,
  } = props;

  const renderTitle = () => {
    if (title) {
      return <SectionTitle id={`${id}-section-title`}>{title}</SectionTitle>;
    }

    return null;
  };
  return (
    <SectionWrapper
      id={id}
      aria-labelledby={`${id}-section-title`}
      title={title}
      layout={layout}
      role={`${role}`}
    >
      {renderTitle()}
      {children}
    </SectionWrapper>
  );
};

UISection.defaultProps = {
  layout: "vertical",
  id: `${Math.random()}`,
};

// Styling
const SectionWrapper = styled.section`
  width: 100%;
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow-x: hidden;
  display: flex;
  flex-direction: ${(props: IUISectionProps) => {
    if (props.layout === "horizontal") {
      return "row";
    }
    return "column";
  }};
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
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
