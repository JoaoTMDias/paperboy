import React from "react";
import { IUISectionProps } from "./types";
import { SectionWrapper, SectionTitle, Wrapper } from "./styles";

/**
 * @description Page Section Component
 * @author  João Dias
 * @date  24/December/2018 at 01:23
 * @extends {React.FC}
 */
class UISection extends React.PureComponent<IUISectionProps> {
	static defaultProps = {
		layout: "vertical",
		id: `${Math.random()}`,
		grouped: false,
	};

	renderTitle() {
		const { id, title, grouped } = this.props;

		if (title) {
			return (
				<SectionTitle id={`${id}-section-title`} grouped={grouped}>
					{title}
				</SectionTitle>
			);
		}

		return null;
	}

	public render() {
		const { id, title, children, style, role, layout, grouped } = this.props;

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
					{this.renderTitle()}
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
				{this.renderTitle()}
				{children}
			</SectionWrapper>
		);
	}
}

export default UISection;
