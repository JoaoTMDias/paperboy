// Libraries
import React from "react";
import { InstallButton } from "./styles";
import { IAddToHomeScreenWithInstallProps } from "./types";
import { useAddToHomescreenPrompt } from 'helpers/custom-hooks/useAddToHomescreenPrompt';
import ContentSpinner from 'components/content-spinner';
import { SectionListItem } from 'components/lists';

/**
 * @description Component Description
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IAddToHomeScreenWithInstallProps>}
 */
export const AddToHomeScreenWithInstall: React.FunctionComponent<IAddToHomeScreenWithInstallProps> = (props) => {
	const { id, title, subtitle, isStandalone } = props;
	const [isready, prompt, promptToInstall] = useAddToHomescreenPrompt();


	/**
	 * @description
	 * @author João Dias
	 * @date 2019-06-07
	 * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
	 */
	function handleClickToInstall() {
		if (prompt) {
			promptToInstall();
		}
	}

	function renderButton() {
		const classes = `banner ${isStandalone ? "is-standalone" : ""}`;
		const text = isStandalone ? "Installed" : "Install";

		return (
			<div className={classes}>
				{text}
			</div>
		)
	}

	const description = isready ? subtitle : "Checking if is installed...";

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
				{renderButton()}
			</InstallButton>
		</SectionListItem>
	) : <ContentSpinner temporary />;
};

export default AddToHomeScreenWithInstall;
