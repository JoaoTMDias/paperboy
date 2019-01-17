// Libraries
import { Link } from "gatsby";
import { rem } from "polished";
import * as React from "react";
import styled from "styled-components";

// Component Props
interface IBottomTabItemProps {
  to: string;
  label: string;
}

/**
 * @description Bottom Tab Item
 * @author  João Dias
 * @date  08/December/2018 at 15:41
 * @extends {React.SFC}
 */
class BottomTabItem extends React.Component<IBottomTabItemProps> {
  static defaultProps = {
    to: "/",
    label: "Label",
  };

  shouldComponentUpdate(nextProps: IBottomTabItemProps, nextState: any) {
    const { to, label } = this.props;

    if (nextProps.to !== to || nextProps.label !== label) {
      return true;
    }
    return false;
  }

  public render() {
    const { to, label, children } = this.props;
    return (
      <Wrapper>
        <TabLink
          to={to}
          activeClassName="is-active"
          aria-label={`Click/Tap to go to the page: ${label}`}
          tabIndex={0}
        >
          <Icon>{children}</Icon>
          <Label className="label">{label}</Label>
        </TabLink>
      </Wrapper>
    );
  }
}

// Styling
const Wrapper = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${rem("4px")} 0;
  flex: 1;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const TabLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &.is-active {
    .tab__icon  {
      &--default,
      &--negative {
        fill: var(--color-white);
      }

      &--positive {
        fill: var(--color-gray9);
      }
    }

    .label {
      color: var(--color-white);
    }
  }
`;

const Icon = styled.figure`
  width: ${rem("26px")};
  height: ${rem("26px")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${rem("4px")} 0;
`;

const Label = styled.span`
  font-size: ${rem("10px")};
  text-align: center;
  color: var(--color-gray3);
`;
export default BottomTabItem;
