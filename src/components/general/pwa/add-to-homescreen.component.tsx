import { rem } from 'polished';
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { IconBrandingSmall, IconSafariShare } from '../../index';

interface IAddToHomeScreenProps {
	theme?: any;
}

/**
 * @description Dialog that invites the user to add to the homescreen
 * @date 2019-01-06
 * @class AddToHomeScreen
 * @extends {React.Component<IAddToHomeScreenProps, any>}
 */
class AddToHomeScreen extends React.PureComponent<IAddToHomeScreenProps, any> {
	constructor(props: IAddToHomeScreenProps) {
		super(props);
	}

	public render() {
		return (
			<React.Fragment>
				<IconStrip className="dialog__logo" tabIndex={-1}>
					<IconBrandingSmall />
				</IconStrip>

				<Content className="dialog__content">
					<h2 id="dialog__title" className="dialog__content__title">
						Install Paperboy
					</h2>
					<p
						id="dialog__description"
						className="dialog__content__description"
					>
						Install the app on your homescreen for quick and easy
						access while you're on the go.
					</p>
					<p id="dialog__tip" className="dialog__content__tip">
						Tap <IconSafariShare /> and then 'Add to homescreen'{' '}
					</p>
				</Content>
			</React.Fragment>
		);
	}
}

const IconStrip = styled.figure`
	margin-top: 0;
	margin-right: 0;
	margin-bottom: ${rem('16px')};
	margin-left: 0;
	width: 100%;
	height: auto;

	svg {
		border-radius: 4px;
	}
`;

const Content = styled.div`
	width: 100%;
	margin: 0 auto;
`;

const mapStateToProps = (state: any) => ({
	isStandalone: state.general.isStandalone,
});

export default connect(mapStateToProps)(AddToHomeScreen);
