import { rem } from "polished";
import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { IconBrandingSmall, IconSafariShare } from "../../index.components";
import { IGlobalStoreState } from "../../../data/interfaces/index.interface";

interface IAddToHomeScreenProps {
	theme?: any;
}

/**
 * @description Dialog that invites the user to add to the homescreen
 * @date 2019-01-06
 * @class AddToHomeScreen
 * @extends {React.Component<IAddToHomeScreenProps, any>}
 */
class AddToHomeScreen extends React.PureComponent<IAddToHomeScreenProps, any> {
	constructor(props: IAddToHomeScreenProps) {
		super(props);
	}

	/**
	 * @description
	 * @author João Dias
	 * @date 2019-06-10
	 * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
	 * @memberof AddToHomeScreen
	 */
	handleOnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		event.preventDefault();
		const windowNavigator = window.navigator as any;

		if (windowNavigator && windowNavigator.share) {
			windowNavigator
				.share({
					title: "Web Fundamentals",
					text: "Check out Web Fundamentals — it rocks!",
					url: "https://developers.google.com/web",
				})
				.then(() => console.log("Successful share"))
				.catch(error => console.log("Error sharing", error));
		}
	}

	render() {
		return (
			<Wrapper
				id="add-to-homescreen-modal"
				type="button"
				onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => this.handleOnClick(event)}
				tabIndex={1}
			>
				<IconStrip className="dialog__logo" tabIndex={-1}>
					<IconBrandingSmall />
				</IconStrip>

				<Content className="dialog__content">
					<h2 id="dialog__title" className="dialog__content__title">
						Add to Home Screen?
					</h2>
					<p id="dialog__description" className="dialog__content__description">
						Install the app on your home screen for instant and easy access while you're on the go.
					</p>
					<p id="dialog__tip" className="dialog__content__tip">
						Tap <IconSafariShare /> and then 'Add to homescreen'{" "}
					</p>
				</Content>
			</Wrapper>
		);
	}
}

const Wrapper = styled.button`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	-webkit-appearance: none;
	border: none;
	background-color: transparent;
`;

const IconStrip = styled.figure`
	margin-top: 0;
	margin-right: 0;
	margin-bottom: ${rem("16px")};
	margin-left: 0;
	width: 100%;
	height: auto;

	svg {
		border-radius: 4px;
	}
`;

const Content = styled.div`
	width: 100%;
	margin: 0 auto;

	html[data-theme="DARK"] & {
		.dialog {
			&__content {
				&__title {
					color: var(--color-gray4);
				}

				&__description {
					color: var(--color-gray5);
				}

				&__tip {
					border-top: 1px solid var(--color-gray9);
					background-color: var(--body-background);
					color: var(--color-gray5);
				}
			}
		}

		#safari-share-icon path {
			fill: var(--color-white);
		}
	}
`;

const mapStateToProps = (state: IGlobalStoreState) => ({
	isStandalone: state.general.isStandalone,
});

export default connect(mapStateToProps)(AddToHomeScreen);
