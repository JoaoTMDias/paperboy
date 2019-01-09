// Libraries
import { rem } from "polished";
import * as React from "react";
import styled from "styled-components";
import { LazyLoadingImage } from "../../index";

// Component Props
interface ISourceListItemProps {
  theme?: any;
  id: string;
  label: string;
  cover: string;
  handleChange: any;
  checked: boolean;
}

/**
 * @description Source List Item
 * @author  João Dias
 * @date  27/December/2018 at 00:57
 * @extends {React.SFC}
 */
class SourceListItem extends React.Component<ISourceListItemProps, any> {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.checked !== this.props.checked;
  }

  public render() {
    const { id, label, cover, handleChange, checked } = this.props;

    const status: string = checked ? "is-checked" : "";

    return (
      <Wrapper className={`source__item ${status}`}>
        <label htmlFor={`source-${id}-input`} tabIndex={0}>
          <Input
            id={`source-${id}-input`}
            className="source__input"
            type="checkbox"
            value={`${id}`}
            name={`source-${id}-input`}
            checked={checked}
            onChange={handleChange}
            tabIndex={-1}
          />
          <Logo className="source__cover">
            <LazyLoadingImage
              cover={cover}
              width="105"
              height="105"
              alt={`${label} logo`}
            />
          </Logo>
          <Name className="source__label">
            <h4 id="source-label-cnn" className="source__label__title">
              {label}
            </h4>
          </Name>
          <Icon
            role="image"
            className="source__status"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>check</title>
            <circle
              className="icon__circle"
              cx="12"
              cy="12"
              r="12"
              fill="var(--color-gray2)"
            />
            <path
              className="icon__check"
              d="M8.75,17.4l-4.3-4.31A1.2,1.2,0,0,1,6.14,11.4l3.47,3.46L17.86,6.6a1.2,1.2,0,0,1,1.69,1.69l-9.1,9.11A1.2,1.2,0,0,1,8.75,17.4Z"
              fill="var(--color-gray2)"
            />
          </Icon>
        </label>
      </Wrapper>
    );
  }
}

// Styling
const Wrapper = styled.li`
  max-height: ${rem("64px")};
  width: 100%;
  display: flex;
  margin: 0;

  * {
    &:active,
    &:focus {
      outline: none;
    }
  }

  &.is-checked {
    transform: scale(1);
    background-image: linear-gradient(
      45deg,
      var(--color-select),
      var(--color-select-gradient)
    );

    .source__status {
      .icon__circle {
        fill: var(--color-white);
      }

      .icon__check {
        fill: var(--color-select);
      }
    }

    label {
      box-shadow: 0 0px 8px 2px rgba(0, 0, 0, 0.08),
        0 0 6px 0 rgba(0, 0, 0, 0.16);
    }

    .source__label {
      background-color: transparent;
      .source__label__title {
        color: var(--color-white);
        text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
      }
    }
  }

  label {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding-top: ${rem("8px")};
    padding-right: 0;
    padding-bottom: ${rem("8px")};
    padding-left: ${rem("8px")};

    box-shadow: 0 2px 0 0px rgba(0, 0, 0, 0.05);
    border-radius: 0;
    transform: scale(0.98);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    &:active {
      box-shadow: 0 0px 8px 2px rgba(0, 0, 0, 0.04),
        0 0 4px 0 rgba(0, 0, 0, 0.08);
      transform: scale(0.96);
    }
  }
`;

const Icon = styled.svg`
  position: absolute;
  top: ${rem("20px")};
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
  width: 100%;
  max-width: ${rem("48px")};
  height: auto;
  overflow: hidden;
  position: relative;
  border-radius: 8px;

  img {
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: auto;
    background-color: var(--color-gray3);
  }
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
  width: calc(100% - ${rem("72px")});
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: var(--color-white);
  height: ${rem("48px")};
  line-height: ${rem("48px")};

  .source__label {
    &__title {
      width: 100%;
      text-align: left;
      font-family: var(--body-font-family);
      font-size: ${rem("12px")};
      line-height: 1.333;
      color: var(--color-gray8);
      letter-spacing: 0;
      margin: 0;
      padding: ${rem("4px")} ${rem("8px")};
      text-shadow: 0px 1px 1px rgba(255, 255, 255, 0.2);
      text-transform: capitalize;
    }
  }
`;

SourceListItem.defaultProps = {
  checked: false,
};

export default SourceListItem;
