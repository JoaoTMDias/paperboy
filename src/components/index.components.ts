// GENERAL
import Portal from './general/portal/portal.component';
import Audit from './general/support/audit.support';
import ViewportHeight from './general/support/viewport-height.support';
import ChangeAppTheme from './general/support/change-theme.support';

// LAYOUT
import Container from './layout/container.component';
import Layout from './layout/layout.component';

// A11Y
import A11yPageTitle from './a11y/a11ypagetitle.component';
import ArticleTypeset from './a11y/ArticleTypeset/index';

// NAVIGATION
import BottomNavigation from './navigation/bottom-navigation/bottom-navigation.component';
import { UIAnchor, UIButton } from './navigation/buttons/buttons.theme';
import UICallToAction from './navigation/buttons/cta.component';
import TopNavigationWithClose from './navigation/header/top-navigation-with-close.component';
import TopNavigationWithTitle from './navigation/header/top-navigation-with-title.component';
import TabItem from './navigation/navigation-item.component';

import TopNavigation from './navigation/header/top-navigation.component';
import MainNavigation from './navigation/main/main-navigation.component';

// UI
import { LatestNewsTab, NewsTabs } from './data-display/news/index.news';
import ThumbnailSmall from './data-display/thumbnails/thumbnails-small.component';
import ThumbnailLarge from './data-display/thumbnails/thumbnails-large.component';
import ThumbnailImage from './data-display/thumbnails/thumbnails-image.component';
import UISearchForm from './data-entry/forms/search-form.component';
import SourceCard from './data-entry/sources/source-card.component';
import SourceListItem from './data-entry/sources/source-list-item.component';
import SourcesList from './data-entry/sources/source-list.component';
import Confirm from './feedback/dialog/confirm.component';
import UIDialog from './feedback/dialog/dialog.component';
import LazyLoadingImage from './general/images/image.lazyload.component';
import Modal from './general/modal/modal.component';
import AddToHomeScreen from './general/pwa/add-to-homescreen.component';
import UIContentSpinner from './general/spinners/content-spinner.component';
import {
	UIDisplay,
	UILead,
	UISubtitle,
} from './general/typography/typography.theme';
import UISection from './layout/section.component';
import FormSwitch from './data-entry/forms/switch/form-switch.component';
import AddToHomeScreenWithInstall from './general/pwa/add-to-homescreen-with-install.component';
import ShareSheetPortal from './general/social/ShareSheet/index';

// ICONOGRAPHY
export * from './general/icons/icons';
export * from './data-display/lists/index.lists';

export {
	Audit,
	ViewportHeight,
	ChangeAppTheme,
	Portal,
	Container,
	Layout,
	Modal,
	Confirm,
	A11yPageTitle,
	TabItem,
	BottomNavigation,
	UIAnchor,
	UIButton,
	UICallToAction,
	TopNavigationWithTitle,
	TopNavigationWithClose,
	TopNavigation,
	MainNavigation,
	SourceCard,
	SourcesList,
	SourceListItem,
	UIDisplay,
	UILead,
	UISubtitle,
	UISection,
	UISearchForm,
	AddToHomeScreen,
	UIDialog,
	UIContentSpinner,
	LatestNewsTab,
	NewsTabs,
	ThumbnailSmall,
	ThumbnailLarge,
	ThumbnailImage,
	LazyLoadingImage,
	FormSwitch,
	AddToHomeScreenWithInstall,
	ShareSheetPortal,
	ArticleTypeset,
};
