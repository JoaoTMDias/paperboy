// LAYOUT
import Container from "./layout/container.component";
import Layout from "./layout/layout.component";

export {
  Container,
  Layout,
};

// A11Y
import A11yPageTitle from "./ui/a11y/a11ypagetitle.component";

export {
  A11yPageTitle,
};

// NAVIGATION
import BottomNavigation from "./ui/navigation/bottom-navigation/bottom-navigation.component";
import { UIAnchor, UIButton } from "./ui/navigation/buttons/buttons.theme";
import UICallToAction from "./ui/navigation/buttons/cta.component";
import UINavigationBarBarWithTitle from "./ui/navigation/header/navigation-with-title.component";
import UINavigationBar from "./ui/navigation/header/top-navigation.component";
import MainNavigation from "./ui/navigation/main/main-navigation";

export {
  BottomNavigation,
  UIAnchor,
  UIButton,
  UICallToAction,
  UINavigationBarBarWithTitle,
  UINavigationBar,
  MainNavigation,
};

// UI
import UISection from "./layout/section.component";
import UISearchForm from "./ui/forms/search-form.component";
import SourceItem from "./ui/sources/source-item.component";
import SourcesList from "./ui/sources/source-list.component";
import { UIDisplay, UILead, UISubtitle } from "./ui/typography/typography.theme";
import LazyLoadingImage from './ui/images/image.lazyload.component';

export {
  SourceItem,
  SourcesList,
  UIDisplay,
  UILead,
  UISubtitle,
  UISection,
  UISearchForm,
  LazyLoadingImage,
};

// ICONOGRAPHY
import {
  IconBrandingLarge,
  IconCategories,
  IconNews,
  IconSaved,
  IconSearch,
  IconSettings,
} from "./ui/icons/icons";

export {
  IconNews,
  IconSaved,
  IconSearch,
  IconCategories,
  IconSettings,
  IconBrandingLarge,
};
