import React from "react";
import { IconBrandingSmall, IconSafariShare } from "components/icons/index";
import { Wrapper, IconStrip, Content } from "./styles";
import { IAddToHomeScreenProps } from "./types";

/**
 * @description Dialog that invites the user to add to the homescreen
 */
const AddToHomeScreen: React.FC<IAddToHomeScreenProps> = () => {
	/**
	 * @description
	 * @author João Dias
	 * @date 2019-06-10
	 * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
	 * @memberof AddToHomeScreen
	 */
	function handleOnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
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
				.catch((error: string) => console.log("Error sharing", error));
		}
	}

	return (
		<Wrapper
			id="add-to-homescreen-modal"
			type="button"
			onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleOnClick(event)}
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
};

export default AddToHomeScreen;
