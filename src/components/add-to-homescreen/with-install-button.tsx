// Libraries
import React, { useState, useEffect } from "react";
import { InstallButton } from "./styles";
import { IAddToHomeScreenWithInstallProps } from "./types";
import { useAddToHomescreenPrompt } from 'helpers/custom-hooks/useAddToHomescreenPrompt';
import { SectionListItem } from 'components/lists';

/**
 * @description Component Description
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IAddToHomeScreenWithInstallProps>}
 */
export const AddToHomeScreenWithInstall: React.FunctionComponent<IAddToHomeScreenWithInstallProps> = ({ id, title, subtitle, isStandalone }) => {
	const [isready, promptToInstall] = useAddToHomescreenPrompt();
	const [buttonProps, setButtonProps] = useState({
		text: "checking...",
		classes: "banner"
	});
	const [description, setDescription] = useState("Checking...");

	useEffect(() => {
		setButtonProps({
			text: isStandalone ? "Installed" : "Install Now",
			classes: isStandalone ? "banner is-standalone" : "banner"
		});
		setDescription(isStandalone ? "Already installed" : "The app can be installed")
	}, [isready]);


	/**
	 * @description
	 * @author João Dias
	 * @date 2019-06-07
	 * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
	 */
	function handleClickToInstall() {
		promptToInstall();
	}

	return isready ? (
		<SectionListItem id="add-to-homescreen">
			<InstallButton
				id={id}
				type="button"
				className="section-list__item__label"
				disabled={isStandalone}
				onClick={handleClickToInstall}
			>
				<div className="text">
					<h3 className="text__title">{title}</h3>
					<p className="text__subtitle">{description}</p>
				</div>
				<div data-testid="fake-install-button" className={buttonProps.classes}>
					{buttonProps.text}
				</div>
			</InstallButton>
		</SectionListItem>
	) : null;
};

export default AddToHomeScreenWithInstall;
