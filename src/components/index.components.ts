// GENERAL
import Portal from "./general/portal/portal.component";
import Audit from "./general/support/audit";
import ViewportHeight from "./general/support/viewport-height.support";
import ChangeAppTheme from "./general/support/change-theme/change-theme.support";

// LAYOUT
import Container from "./container";
import Layout from "./layout";

// A11Y
import A11yPageTitle from "./a11y/a11ypagetitle.component";
import ArticleTypeset from "./ArticleTypeset/index";

// NAVIGATION
import BottomNavigation from "./bottom-navigation";
import { UIAnchor, UIButton } from "./button";
import UICallToAction from "./call-to-action";
import TopNavigationWithClose from "./top-navigation/with-close";
import TopNavigationWithTitle from "./top-navigation/with-title";
import TabItem from "./top-navigation/tab-item";

import TopNavigation from "./top-navigation/default";
import MainNavigation from "./main-navigation";

// UI
import { LatestNewsTab, NewsTabs } from "./data-display/news/index.news";
import ArticleThumbnail from "./data-display/thumbnails/thumbnails-large.component";
import ThumbnailImage from "./data-display/thumbnails/thumbnails-image.component";
import UISearchForm from "./data-entry/forms/search-form.component";
import SourceCard from "./data-entry/sources/source-card.component";
import SourceListItem from "./data-entry/sources/source-list-item.component";
import SourcesList from "./data-entry/sources/source-list.component";
import Confirm from "./feedback/dialog/confirm.component";
import UIDialog from "./feedback/dialog/dialog.component";
import LazyLoadingImage from "./general/images/image.lazyload.component";
import Modal from "./general/modal";
import AddToHomeScreen from "./add-to-homescreen";
import UIContentSpinner from "./general/spinners/content-spinner.component";
import { UIDisplay, UILead, UISubtitle } from "./general/typography/typography.theme";
import UISection from "./section";
import FormSwitch from "./data-entry/forms/switch/form-switch.component";
import AddToHomeScreenWithInstall from "./add-to-homescreen/with-install-button";
import ShareSheetPortal from "./general/social/ShareSheet/index";

// ICONOGRAPHY
export * from "./icons/icons";
export * from "./data-display/lists/index.lists";

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
	ArticleThumbnail,
	ThumbnailImage,
	LazyLoadingImage,
	FormSwitch,
	AddToHomeScreenWithInstall,
	ShareSheetPortal,
	ArticleTypeset,
};
