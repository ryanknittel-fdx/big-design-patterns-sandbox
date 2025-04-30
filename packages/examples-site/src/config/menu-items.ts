import type { MenuItem } from "bigcommerce-design-patterns";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import MemoryIcon from '@mui/icons-material/Memory';
import { BigDesignIcon } from "../components/BigDesignIcon";

export const menuItems: MenuItem[] = [
  {
    hash: "sidebar-home",
    label: "Home",
    href: "/",
    icon: HomeOutlinedIcon,
  },
  {
    hash: "sidebar-single-page-patterns",
    label: "Single Pages",
    icon: WebAssetIcon,
    items: [
      {
        hash: "sidebar-dashboard-layout",
        label: "Dashboards",
        href: "/dashboard-layout",
      },
      {
        hash: "sidebar-page-list",
        label: "Lists",
        href: "/page-list",
      },
      {
        hash: "sidebar-page-featured-content",
        label: "Featured Content",
        href: "/page-featured-content",
      },
      {
        hash: "sidebar-page-form",
        label: "Forms",
        href: "/page-form",
      },
      {
        hash: "sidebar-page-anchor-nav",
        label: "Anchor Navigation",
        href: "/page-anchor-nav",
      },
      {
        hash: "sidebar-install-screen-app",
        label: "App Installation",
        href: "/install-screen-app",
      },
      {
        hash: "sidebar-install-screen-channel",
        label: "Channel Installation",
        href: "/install-screen-channel",
      },
    ]
  },
  {
    hash: "sidebar-data-filtering",
    label: "Data Filtering",
    icon: FilterAltOutlinedIcon,
    items: [
      {
        hash: "sidebar-filters-search",
        label: "Simple search",
        href: "/filters-search",
      },
      {
        hash: "sidebar-filters-dropdowns",
        label: "Dropdown filtering",
        href: "/filters-dropdowns",
      },
      {
        hash: "sidebar-filters-advanced",
        label: "Advanced filtering",
        href: "/filters-advanced",
      },
      {
        hash: "sidebar-filters-advanced-additive",
        label: "Advanced additive filtering with views",
        href: "/filters-advanced-additive",
      },
    ]
  },
  {
    hash: "sidebar-sample-flows",
    label: "Sample Flows",
    icon: AutoAwesomeMotionIcon,
    items: [
      {
        hash: "sidebar-page-crud-list",
        label: "Create, Read, Update, Delete",
        href: "/page-crud-list",
      }
    ]
  },
  {
    hash: "sidebar-pattern-components",
    label: "Pattern Components",
    icon: DashboardOutlinedIcon,
    items: [
      {
        hash: "sidebar-card-grid",
        label: "Card Grid",
        href: "/card-grid",
      },
      {
        hash: "sidebar-info-illustration",
        label: "Info Illustrations",
        href: "/info-illustration",
      },
      {
        hash: "panel-contents",
        label: "Panel Contents",
        href: "/panel-contents",
      },
      {
        hash: "stateless-table",
        label: "Stateless Table",
        href: "/stateless-table",
      },
    ]
  },
  {
    hash: "component-library",
    label: "BigDesign Components",
    href: "https://developer.bigcommerce.com/big-design/",
    icon: BigDesignIcon,
    target: "_blank", // Open in a new tab
    hasDivider: true, // Add a divider before this item
  },
  {
    hash: "ai-prompt",
    label: "BigDesign AI Prompt",
    href: "https://github.com/bigcommerce/big-design-patterns-sandbox/tree/main/.github/prompts/BigDesignPatterns.prompt.md",
    icon: MemoryIcon,
    target: "_blank", // Open in a new tab
  },
];
