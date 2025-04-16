import type { MenuItem } from "bigcommerce-design-patterns";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import MemoryIcon from '@mui/icons-material/Memory';

export const menuItems: MenuItem[] = [
  {
    hash: "sidebar-home",
    label: "Home",
    href: "/",
    icon: HomeOutlinedIcon,
  },
  {
    hash: "sidebar-sample-flows",
    label: "Sample Flows",
    icon: AutoAwesomeMotionIcon,
    items: [
      {
        hash: "sidebar-page-crud-list",
        label: "CRUD flow (Page)",
        href: "/page-crud-list",
      },
      {
        hash: "sidebar-page-crud-add",
        label: "CRUD Add",
        href: "/page-crud-add",
      },
    ]
  },
  {
    hash: "sidebar-single-page-patterns",
    label: "Single Page Patterns",
    icon: WebAssetIcon,
    items: [
      {
        hash: "sidebar-page-list",
        label: "List Page",
        href: "/page-list",
      },
      {
        hash: "sidebar-page-featured-content",
        label: "Featured Content Page",
        href: "/page-featured-content",
      },
      {
        hash: "sidebar-page-form",
        label: "Form Page",
        href: "/page-form",
      },
      {
        hash: "sidebar-page-anchor-nav",
        label: "Anchor Navigation Page",
        href: "/page-anchor-nav",
      },
    ]
  },
  {
    hash: "sidebar-data-filtering",
    label: "List View Patterns",
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
    hash: "sidebar-pattern-components",
    label: "Pattern Components",
    icon: DashboardOutlinedIcon,
    items: [
      {
        hash: "sidebar-feature-tag",
        label: "Feature Tags",
        href: "/feature-tag",
      },
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
        hash: "sidebar-dashboard-layout",
        label: "Dashboard Layout",
        href: "/dashboard-layout",
      },
      {
        hash: "sidebar-install-screen-app",
        label: "Install Apps",
        href: "/install-screen-app",
      },
      {
        hash: "sidebar-install-screen-channel",
        label: "Install Channels",
        href: "/install-screen-channel",
      },
    ]
  },
  {
    hash: "ai-prompt",
    label: "BigDesign AI Prompt",
    href: "https://github.com/bigcommerce/big-design-patterns-sandbox/tree/main/.github/prompts/BigDesignPatterns.prompt.md",
    icon: MemoryIcon,
    target: "_blank", // Open in a new tab
  },
];
