// GENERAL
import Portal from "./general/portal/portal";
import Audit from "./general/support/audit";
import ViewportHeight from "./general/support/viewport-height.support";
import ChangeAppTheme from "./general/support/change-theme/change-theme.support";

// LAYOUT
import Container from "./container";
import Layout from "./layout";

// A11Y
import ArticleTypeset from "./ArticleTypeset/index";

// NAVIGATION
import BottomNavigation from "./bottom-navigation";
import { UIAnchor, UIButton } from "./button";
import UICallToAction from "./call-to-action";
import TopNavigationWithClose from "./top-navigation/with-close";
import TopNavigationWithTitle from "./top-navigation/with-title";
import TabItem from "./top-navigation/tab-item";

import TopNavigation from "./top-navigation/default";
import ArticleThumbnail from "./thumbnails/thumbnails-large.component";
import ThumbnailImage from "./thumbnails/thumbnails-image.component";
import UISearchForm from "./data-entry/forms/search-form.component";
import SourceCard from "./data-entry/sources/source-card.component";
import SourceListItem from "./data-entry/sources/source-list-item.component";
import SourcesList from "./data-entry/sources/source-list.component";
import Confirm from "./feedback/dialog/confirm.component";
import UIDialog from "./feedback/dialog/dialog.component";
import LazyLoadingImage from "./general/images/image.lazyload.component";
import Modal from "./general/modal";
import AddToHomeScreen from "./add-to-homescreen";
import ContentSpinner from "./content-spinner";
import { UIDisplay, UILead, UISubtitle } from "./general/typography/typography.theme";
import FormSwitch from "./data-entry/forms/switch/form-switch.component";
import { AddToHomeScreenWithInstall } from "./add-to-homescreen/with-install-button";
import { ShareSheetPortal } from "./general/social/ShareSheet/index";

// UI
export * from "./news";

export * from "./section";

// ICONOGRAPHY
export * from "./lists";

export { siteMetadata as config } from "../../gatsby-config";

export {
	Audit,
	ViewportHeight,
	ChangeAppTheme,
	Portal,
	Container,
	Layout,
	Modal,
	Confirm,
	TabItem,
	BottomNavigation,
	UIAnchor,
	UIButton,
	UICallToAction,
	TopNavigationWithTitle,
	TopNavigationWithClose,
	TopNavigation,
	SourceCard,
	SourcesList,
	SourceListItem,
	UIDisplay,
	UILead,
	UISubtitle,
	UISearchForm,
	AddToHomeScreen,
	UIDialog,
	ContentSpinner,
	ArticleThumbnail,
	ThumbnailImage,
	LazyLoadingImage,
	FormSwitch,
	AddToHomeScreenWithInstall,
	ShareSheetPortal,
	ArticleTypeset,
};
