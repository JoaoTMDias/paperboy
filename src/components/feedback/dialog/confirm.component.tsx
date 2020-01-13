import { rem } from "polished";
import * as React from "react";
import styled from "styled-components";

interface IConfirmProps {
	title: string;
	description: string;
	onCancel: any;
	onConfirm: any;
}

/**
 * @description Dialog that invites the user to take an action.
 *
 * @class Confirm
 * @extends {React.Component<IConfirmProps, any>}
 */

const Confirm: React.FunctionComponent<IConfirmProps> = props => {
	const { title, description, onCancel, onConfirm } = props;
	return (
		<>
			<Content className="dialog__content">
				<h2 id="dialog__title" className="dialog__content__title">
					{title}
				</h2>
				<p id="dialog__description" className="dialog__content__description">
					{description}
				</p>
			</Content>
			<Row>
				<Button type="button" onClick={onConfirm}>
					Yes, allow
				</Button>
				<Button type="button" className="is-primary" onClick={onCancel}>
					No, thanks
				</Button>
			</Row>
		</>
	);
};

const Content = styled.div`
	width: 100%;
	margin: 0 auto;
	background-color: var(--body-background);

	.dialog__content {
		&__title,
		&__description {
			text-align: left !important;
			color: var(--body-font-color);
		}
	}
`;

const Row = styled.div`
	width: 100%;
	flex: 0 0 auto;
	padding: ${rem("8px")} ${rem("16px")};
	display: flex;
	align-items: center;
	justify-content: flex-end;
	background-color: var(--body-background);
`;

const Button = styled.button`
	-webkit-appearance: none;
	padding: ${rem("8px")} ${rem("16px")};
	background-color: var(--body-background);
	color: var(--body-font-color);
	box-shadow: none;
	border: none;
	border-radius: var(--global-radius);

	&:first-child {
		margin-right: 16px;
	}

	&.is-primary {
		background-color: var(--color-select);
		color: var(--color-white);
	}
`;

export default Confirm;
