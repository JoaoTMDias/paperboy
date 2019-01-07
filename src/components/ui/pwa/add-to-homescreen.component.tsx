import { rem } from "polished";
import * as React from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";

import { IconBrandingSmall, IconShare } from "../../index";

interface IUIDialogAddToHomescreenProps {
  theme?: any;
  isStandalone: boolean;
}

interface IUIDialogAddToHomescreenState {
  isModalOpen: boolean;
}

/**
 * @description Dialog that invites the user to add to the homescreen
 * @date 2019-01-06
 * @class UIDialogAddToHomescreen
 * @extends {React.Component<IUIDialogAddToHomescreenProps, any>}
 */
class UIDialogAddToHomescreen extends React.Component<
  IUIDialogAddToHomescreenProps,
  IUIDialogAddToHomescreenState
  > {
  constructor(props: IUIDialogAddToHomescreenProps) {
    super(props);

    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.state = {
      isModalOpen: false,
    };
  }

  public timer: any = null;

  /**
   * @description When the component mounts, sets a 15sec timeout and then shows.
   * @date 2019-01-06
   * @memberof UIDialogAddToHomescreen
   */
  componentDidMount() {
    this.timer = setTimeout(() => this.handleOpenModal(), 600000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleOpenModal() {
    this.setState({
      isModalOpen: true,
    });
  }

  /**
   * @description Closes the modal
   * @date 2019-01-06
   * @memberof UIDialogAddToHomescreen
   */
  handleCloseModal() {
    this.setState({
      isModalOpen: false,
    });
  }

  public render() {
    const { isModalOpen } = this.state;
    const { isStandalone } = this.props;

    if (isModalOpen && isStandalone === false) {
      return (
        <Wrapper onClick={this.handleCloseModal} tabIndex={0}>
          <Dialog
            role="dialog"
            aria-labelledby="dialog__title"
            aria-describedby="dialog__description"
            onClick={this.handleCloseModal}
            tabIndex={0}
          >
            <figure className="dialog__logo" tabIndex={-1}>
              <IconBrandingSmall />
            </figure>

            <div className="dialog__content">
              <h2 id="dialog__title" className="dialog__title">
                Install Paperboy
              </h2>
              <p id="dialog__description" className="dialog__description">
                Install the app on your homescreen for quick and easy access when you're on the go.
              </p>
              <p id="dialog__tip" className="dialog__tip">
                Tap
                {" "}
                <IconShare />
                {" "}
and then 'Add to homescreen'
                {" "}
              </p>
            </div>
          </Dialog>
        </Wrapper>
      );
    }
    return null;
  }
}

// Styling
const fadeInDialog = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 14rem, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 102;

  background-color: rgba(0, 0, 0, 0.3);
`;

const Dialog = styled.div`
  width: calc(100% - 1rem);
  max-width: ${rem("343px")};
  margin: 0 auto;
  padding: ${rem("16px")} 0 0 0;

  background-color: ${(props: IUIDialogAddToHomescreenProps) => props.theme.colorWhite};

  position: fixed;
  left: 0;
  right: 0;
  bottom: ${rem("84px")};
  z-index: 101;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: var(--global-radius);

  opacity: 0;
  transform: translate3d(0, 14rem, 0);

  animation-name: ${fadeInDialog};
  animation-duration: 500ms;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation-delay: 500ms;
  animation-fill-mode: forwards;

  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);

  &:after,
  &:before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-top-color: ${(props: IUIDialogAddToHomescreenProps) => props.theme.colorWhite};
    border-width: ${rem("8px")};
    margin-left: -${rem("8px")};
  }

  &:before {
    border-color: transparent;
    border-width: ${rem("14px")};
    margin-left: -${rem("14px")};
  }

  .dialog {
    &__logo {
      margin-top: 0;
      margin-right: 0;
      margin-bottom: ${rem("16px")};
      margin-left: 0;
      width: 100%;
      height: auto;

      svg {
        border-radius: 4px;
      }
    }

    &__content {
      width: 100%;
      margin: 0 auto;
    }

    &__title,
    &__description,
    &__tip {
      text-align: center;
      width: calc(100% - 3rem);
      margin-left: auto;
      margin-right: auto;
    }

    &__title {
      font-size: ${rem("20px")};
      margin-bottom: ${rem("4px")};
      color: var(--color-gray8);
    }

    &__description {
      font-size: ${rem("16px")};
      margin-top: 0;
      margin-bottom: ${rem("24px")};
      color: var(--color-gray7);
    }

    &__tip {
      font-size: ${rem("14px")};
      margin-top: 0;
      margin-bottom: 0;
      color: var(--color-gray8);
      padding: ${rem("8px")};
      width: 100%;
      background-color: var(--color-gray0);

      svg {
        width: ${rem("18px")};
        height: auto;
        display: inline-block;
      }
    }
  }
`;

const mapStateToProps = state => ({
  isStandalone: state.general.isStandalone,
});

export default connect(mapStateToProps)(UIDialogAddToHomescreen);
