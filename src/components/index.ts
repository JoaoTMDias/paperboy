// LAYOUT
import Container from './layout/container.component';
import Layout from './layout/layout.component';

// A11Y
import A11yPageTitle from './ui/a11y/a11ypagetitle.component';

// NAVIGATION
import BottomNavigation from './ui/navigation/bottom-navigation/bottom-navigation.component';
import { UIAnchor, UIButton } from './ui/navigation/buttons/buttons.theme';
import UICallToAction from './ui/navigation/buttons/cta.component';
import UINavigationBarBarWithTitle from './ui/navigation/header/navigation-with-title.component';
import UINavigationBar from './ui/navigation/header/top-navigation.component';
import MainNavigation from './ui/navigation/main/main-navigation';

// UI
import { UIDisplay, UILead, UISubtitle } from './ui/typography/typography.theme';
import LazyLoadingImage from './ui/images/image.lazyload.component';
import UISection from './layout/section.component';
import UISearchForm from './ui/forms/search-form.component';
import SourceCard from './ui/sources/source-card.component';
import SourcesList from './ui/sources/source-list.component';
import SourceListItem from './ui/sources/source-list-item.component';

// ICONOGRAPHY
import {
  IconBrandingLarge,
  IconCategories,
  IconNews,
  IconSaved,
  IconSearch,
  IconSettings,
} from './ui/icons/icons';

export { Container, Layout };

export { A11yPageTitle };

export {
  BottomNavigation,
  UIAnchor,
  UIButton,
  UICallToAction,
  UINavigationBarBarWithTitle,
  UINavigationBar,
  MainNavigation,
};

export {
  SourceCard,
  SourcesList,
  SourceListItem,
  UIDisplay,
  UILead,
  UISubtitle,
  UISection,
  UISearchForm,
  LazyLoadingImage,
};

export {
  IconNews, IconSaved, IconSearch, IconCategories, IconSettings, IconBrandingLarge,
};
