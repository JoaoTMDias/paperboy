// Libraries
import { rem } from "polished";
import * as React from "react";
import styled, { css } from "styled-components";

// Component Props
interface IUISectionProps {
  theme?: any;
  layout?: "vertical" | "horizontal";
  title?: string;
  id: string;
  role?: string;
  grouped?: boolean;
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
    id, title, children, role, layout, grouped,
  } = props;

  const renderTitle = () => {
    if (title) {
      return (
        <SectionTitle id={`${id}-section-title`} grouped={grouped}>
          {title}
        </SectionTitle>
      );
    }

    return null;
  };

  if (grouped) {
    return (
      <SectionWrapper
        id={id}
        aria-labelledby={`${id}-section-title`}
        title={title}
        layout={layout}
        role={`${role}`}
        grouped={grouped}
      >
        {renderTitle()}
        <Wrapper>{children}</Wrapper>
      </SectionWrapper>
    );
  }
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
  grouped: false,
};

// Styling
const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const SectionWrapper = styled.section`
  width: 100%;
  max-width: 100%;
  padding: 0 ${(props: IUISectionProps) => (props.grouped === true ? "0" : "1rem")};

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
  padding: 0;

  ${(props: IUISectionProps) => props.grouped
    && css`
      padding-left: 1rem;
      padding-right: 1rem;
    `};
`;

export default UISection;
