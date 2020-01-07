import styled from "styled-components";
import { IModalProps } from "./types";

export const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 103;
	overflow: hidden;
	background-color: ${(props: IModalProps) => `rgba(0,0,0,${props.backgroundOpacity})`};

	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: ${(props: IModalProps) => {
		switch (props.align) {
			case "top":
				return "flex-start";

			case "middle":
				return "center";

			case "bottom":
				return "flex-end";

			default:
				return "flex-end";
		}
	}};
`;

export default ModalWrapper;
