// Libraries
import { rem } from "polished";
import * as React from "react";
import styled from "styled-components";

// Component Props
interface ISourceItemProps {
  theme?: any;
  id: string;
  label: string;
  cover: string;
}

interface ISourceItemState {
  isChecked: boolean;
}

/**
 * @description Source List Item
 * @author  João Dias
 * @date  27/December/2018 at 00:57
 * @extends {React.SFC}
 */
class SourceItem extends React.PureComponent<ISourceItemProps, ISourceItemState> {
  constructor(props: ISourceItemProps) {
    super(props);

    this.state = {
      isChecked: false,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event: any) {
    event.preventDefault();
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  public render() {
    const { id, label, cover } = this.props;

    const status: string = this.state.isChecked ? "is-checked" : "";

    return (
      <Wrapper className={`source__item ${status}`}>
        <label htmlFor={`source-${id}-input`} tabIndex={0} onClick={this.handleOnClick}>
          <Input
            id={`source-${id}-input`}
            className="source__input"
            type="checkbox"
            value={`${label}`}
            name="source-input"
            tabIndex={-1}
          />
          <Icon
            role="image"
            className="source__status"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>check</title>
            <circle className="icon__circle" cx="12" cy="12" r="12" fill="var(--color-gray2)" />
            <path
              className="icon__check"
              d="M8.75,17.4l-4.3-4.31A1.2,1.2,0,0,1,6.14,11.4l3.47,3.46L17.86,6.6a1.2,1.2,0,0,1,1.69,1.69l-9.1,9.11A1.2,1.2,0,0,1,8.75,17.4Z"
              fill="var(--color-gray2)"
            />
          </Icon>
          <Logo className="source__cover">
            <img
              className="source__cover__image"
              src={cover}
              width="105"
              height="105"
              alt="Alt Text"
            />
          </Logo>
          <Name className="source__label">
            <h4 id="source-label-cnn" className="source__label__title">
              CNN
            </h4>
            <img
              className="source__label__image"
              src={cover}
              width="105"
              height="105"
              alt="Alt Text"
            />
          </Name>
        </label>
      </Wrapper>
    );
  }
}

// Styling
const Wrapper = styled.li`
  min-width: ${rem("105px")};
  min-height: ${rem("148px")};
  width: 100%;
  scroll-snap-align: center;
  display: flex;

  * {
    &:active,
    &:focus {
      outline-style: double;
      outline-offset: 2px;
      outline-color: currentColor;
    }
  }

  &.is-checked {
    transform: scale(1);
    .source__status {
      .icon__circle {
        fill: var(--color-select);
      }

      .icon__check {
        fill: var(--color-white);
      }
    }

    .source__label {
      background-color: var(--color-select);

      .source__label__title {
        color: var(--color-white);
      }

      .source__label__image {
        opacity: 0;
      }
    }
  }

  label {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.24);
    border-radius: 8px;
    transform: scale(0.98)

    &:active {
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.32);
      transform: scale(0.96);
    }
  }
`;

const Icon = styled.svg`
  position: absolute;
  top: ${rem("8px")};
  right: ${rem("8px")};
  width: ${rem("24px")};
  height: ${rem("24px")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Logo = styled.figure`
  margin: 0;
  overflow: hidden;
  position: relative;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  margin: 0;
  padding: 0;
  right: 0;
`;

const Name = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  .source__label {
    &__title {
      width: 100%;
      text-align: center;
      font-family: var(--body-font-family);
      font-size: ${rem("12px")};
      color: var(--color-gray8);
      letter-spacing: 0;
      margin: 0;
      padding: ${rem("12px")} ${rem("4px")};
    }

    &__image {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      filter: blur(6px);
      z-index: -1;
      transform: scale(2);
      opacity: 0.25;
    }
  }
`;

export default SourceItem;
