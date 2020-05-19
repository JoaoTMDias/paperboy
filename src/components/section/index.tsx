import React from "react";
import { IUISectionProps } from "./types";
import { SectionWrapper, SectionTitle, Wrapper } from "./styles";

/**
 * @description Page Section Component
 * @extends {React.FC}
 */
export const UISection: React.FC<IUISectionProps> = ({
	id,
	title,
	children,
	style,
	role,
	layout,
	grouped
}) => {
	function renderTitle() {
		const sectionTitle = `${id}-section-title`;

		if (title) {
			return (
				<SectionTitle id={sectionTitle} grouped={grouped}>
					{title}
				</SectionTitle>
			);
		}

		return null;
	}

	if (grouped) {
		return (
			<SectionWrapper
				id={id}
				aria-labelledby={`${id}-section-title`}
				title={title}
				layout={layout}
				role={role}
				grouped={grouped}
				style={style}
			>
				{renderTitle()}
				<Wrapper id={`wrapper-${id}`} grouped={grouped}>
					{children}
				</Wrapper>
			</SectionWrapper>
		);
	}
	return (
		<SectionWrapper
			id={id}
			aria-labelledby={`${id}-section-title`}
			title={title}
			layout={layout}
			role={role}
			style={style}
		>
			{renderTitle()}
			{children}
		</SectionWrapper>
	);
}

UISection.defaultProps = {
	layout: "vertical",
	id: `${Math.random()}`,
	grouped: false,
};

export default UISection;
