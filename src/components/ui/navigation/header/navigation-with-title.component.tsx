// Libraries
import { rem } from "polished";
import * as React from "react";
import styled from "styled-components";

// Component Props
interface IUINavigationBarBarWithTitleProps {
  title: string;
  subtitle: string;
  theme?: any;
}

/**
 * @description Navigation with Title
 * @author  João Dias
 * @date  12/December/2018 at 16:40
 * @extends {React.SFC}
 */
const UINavigationBarBarWithTitle: React.FunctionComponent<
IUINavigationBarBarWithTitleProps
> = (props) => {
  const { title, subtitle } = props;

  return (
    <Container>
      <h2 className="top-navigation-with-title__title">{title}</h2>
      <p className="top-navigation-with-title__subtitle">{subtitle}</p>
    </Container>
  );
};

// Styling
const Container = styled.div`
  width: 100%;
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: ${rem("20px")};
  margin-right: ${rem("16px")};
  margin-bottom: ${rem("20px")};
  margin-left: 0;
  background-color: var(--color-white);

  .top-navigation {
    &-with-title {
      &__title {
        font-family: var(--heading-font-family);
        font-size: ${rem("20px")};
        color: var(--color-gray9);
        letter-spacing: 0;
        margin-bottom: ${rem("2px")};
      }

      &__subtitle {
        font-family: var(--body-font-family);
        font-size: ${rem("14px")};
        color: var(--color-gray7);
        letter-spacing: 0;
        margin: 0;
      }
    }
  }
`;

export default UINavigationBarBarWithTitle;
