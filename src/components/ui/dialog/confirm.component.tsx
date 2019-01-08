import { rem } from "polished";
import * as React from "react";
import styled, { css } from "styled-components";

interface IConfirmProps {
  theme?: any;
  title: string;
  description: string;
  onCancel: any;
  onConfirm: any;
  primary?: boolean;
}

/**
 * @description Dialog that invites the user to take an action.
 * @date 2019-01-06
 * @class Confirm
 * @extends {React.Component<IConfirmProps, any>}
 */

const Confirm: React.FunctionComponent<IConfirmProps> = props => {
  const { title, description, onCancel, onConfirm } = props;
  return (
    <React.Fragment>
      <Content className="dialog__content">
        <h2 id="dialog__title" className="dialog__content__title">
          {title}
        </h2>
        <p id="dialog__description" className="dialog__content__description">
          {description}
        </p>
      </Content>
      <Row>
        <Button onClick={onConfirm} tabIndex={0}>
          Yes, allow
        </Button>
        <Button primary={true} onClick={onCancel} tabIndex={0}>
          No, thanks
        </Button>
      </Row>
    </React.Fragment>
  );
};

const Content = styled.div`
  width: 100%;
  margin: 0 auto;

  .dialog__content {
    &__title,
    &__description {
      text-align: left !important;
    }
  }
`;

const Row = styled.div`
  width: 100%;
  flex: 0 0 auto;
  padding: ${rem("8px")} ${rem("16px")};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.button`
  -webkit-appearance: none;
  padding: ${rem("8px")} ${rem("16px")};
  background-color: var(--color-white);
  color: var(--color-gray7);
  box-shadow: none;
  border: none;
  border-radius: var(--global-radius);

  &:first-child {
    margin-right: 16px;
  }

  ${(props: IConfirmProps) =>
    props.primary &&
    css`
      background-color: var(--color-select);
      color: var(--color-white);
    `}
`;

export default Confirm;
