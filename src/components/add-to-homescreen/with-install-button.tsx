// Libraries
import * as React from "react";
import { AddToHomeWrapper } from "./styles";
import { IAddToHomeScreenWithInstallProps } from "./types";

/**
 * @description Component Description
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IAddToHomeScreenWithInstallProps>}
 */
export const AddToHomeScreenWithInstall: React.FunctionComponent<IAddToHomeScreenWithInstallProps> = props => {
	const { id, title, subtitle, isStandalone } = props;

	/**
	 * @description
	 * @author João Dias
	 * @date 2019-06-07
	 * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
	 */
	function handleClickToInstall(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		event.preventDefault();

		console.log("click to install");
	}

	return (
		<AddToHomeWrapper
			id={id}
			type="button"
			className="section-list__item__label"
			tabIndex={0}
			disabled={isStandalone}
			onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClickToInstall(event)}
		>
			<div className="text">
				<h3 className="text__title">{title}</h3>
				{subtitle && <h6 className="text__subtitle">{subtitle}</h6>}
			</div>
			<div className={`banner ${isStandalone ? "is-standalone" : ""}`}>
				{isStandalone && isStandalone === true ? "Installed" : "Install"}
			</div>
		</AddToHomeWrapper>
	);
};

export default AddToHomeScreenWithInstall;
