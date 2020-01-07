import * as React from "react";
import { connect } from "react-redux";
import { Wrapper, IconStrip, Content } from "./styles";
import { IconBrandingSmall, IconSafariShare } from "../index.components";
import { IGlobalStoreState } from "../../data/interfaces/index.interface";
import { IAddToHomeScreenProps } from "./types";

/**
 * @description Dialog that invites the user to add to the homescreen
 * @date 2019-01-06
 * @class AddToHomeScreen
 * @extends {React.Component<IAddToHomeScreenProps, any>}
 */
class AddToHomeScreen extends React.PureComponent<IAddToHomeScreenProps, any> {
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

const mapStateToProps = (state: IGlobalStoreState) => ({
	isStandalone: state.general.isStandalone,
});

export default connect(mapStateToProps)(AddToHomeScreen);
