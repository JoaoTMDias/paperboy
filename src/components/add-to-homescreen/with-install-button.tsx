// Libraries
import React from "react";
import { AddToHomeWrapper } from "./styles";
import { IAddToHomeScreenWithInstallProps } from "./types";
import { useAddToHomescreenPrompt } from 'helpers/custom-hooks/useAddToHomescreenPrompt';

/**
 * @description Component Description
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IAddToHomeScreenWithInstallProps>}
 */
export const AddToHomeScreenWithInstall: React.FunctionComponent<IAddToHomeScreenWithInstallProps> = (props) => {
	const { id, title, subtitle, isStandalone } = props;
	const [prompt, promptToInstall] = useAddToHomescreenPrompt();


	/**
	 * @description
	 * @author João Dias
	 * @date 2019-06-07
	 * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
	 */
	function handleClickToInstall() {
		console.log("click to install");

		if (prompt) {
			debugger;
			promptToInstall();
		}
	}

	return (
		<>
			<AddToHomeWrapper
				id={id}
				type="button"
				className="section-list__item__label"
				tabIndex={0}
				disabled={isStandalone}
				onClick={handleClickToInstall}
			>
				<div className="text">
					<h3 className="text__title">{title}</h3>
					{subtitle && <h6 className="text__subtitle">{subtitle}</h6>}
				</div>
				<div className={`banner ${isStandalone ? "is-standalone" : ""}`}>
					{isStandalone && isStandalone === true ? "Installed" : "Install"}
				</div>
			</AddToHomeWrapper>
		</>
	);
};

export default AddToHomeScreenWithInstall;
