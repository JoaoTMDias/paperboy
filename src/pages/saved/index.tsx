// Libraries
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';
import {
	Container,
	Layout,
	TopNavigation,
	TopNavigationWithTitle,
	UISection,
	ArticleThumbnail,
} from '../../components/index.components';

import {
	ONBOARDING_PAGE,
	SAVED_PAGE,
} from '../../data/constants/router.constants';
import {
	IGlobalStoreState,
	INewsArticleItem,
} from '../../data/interfaces/index.interface';
import { EThumbnailType } from '../../components/data-display/thumbnails/thumbnails-large.component';

// Interface
interface ISavedPageProps {
	dispatch?: any;
	authenticated: boolean;
	children?: any;
	saved: INewsArticleItem[];
}

/**
 * @description Settings Page
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<ISavedPageProps>}
 */
class SavedPage extends React.Component<ISavedPageProps> {
	handleRemoveItemFromList(
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) {
		event.preventDefault();
	}

	renderListOfArticles() {
		const { saved } = this.props;

		const list = saved.map(
			(savedArticle: INewsArticleItem, index: number) => {
				const keyIndex = `thumbnail__saved--${index}`;

				return (
					<ArticleThumbnail
						key={keyIndex}
						id={keyIndex}
						options={savedArticle}
						type={EThumbnailType.SAVED}
					/>
				);
			},
		);

		return <ul>{list}</ul>;
	}

	render() {
		const { authenticated, saved } = this.props;
		const numberOfArticles = saved ? saved.length : 0;

		if (!authenticated) {
			return <Redirect from={SAVED_PAGE} to={ONBOARDING_PAGE} noThrow />;
		}
		return (
			<Layout authenticated={authenticated} header={false}>
				<TopNavigation
					shadow="hairline"
					style={{
						marginBottom: '1.25rem',
					}}
				>
					<TopNavigationWithTitle
						title="Saved"
						subtitle="Read the news anytime"
					/>
				</TopNavigation>
				<Container
					fullwidth
					fullheight
					isFixed={false}
					title="Current Page is: Saved"
					offsetTop="5.875rem"
				>
					<UISection
						id="saved-list"
						title={`Inbox (${numberOfArticles})`}
					>
						{this.renderListOfArticles()}
					</UISection>
				</Container>
			</Layout>
		);
	}
}

const mapState2Props = (state: IGlobalStoreState) => ({
	authenticated: state.preferences.authenticated,
	saved: state.preferences.saved,
});

export default connect(mapState2Props)(SavedPage);
