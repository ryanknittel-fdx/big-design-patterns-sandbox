const sidenav = document.querySelector("bc-side-nav");
sidenav.menuItems = [
  {
    label: "Home",
    id: "home",
    icon: "home",
    notifications: 2,
    active: true,
  },
  {
    label: "Storefronts",
    id: "storefronts",
    icon: "store",
    subs: [],
  },
  {
    label: "Orders",
    id: "orders",
    icon: "inventory_2",
    subs: [
      {
        label: "View",
        id: "productsView",
        url: "#",
      },
      {
        label: "Add",
        id: "productsAdd",
        url: "#",
      },
      {
        label: "Search",
        id: "productsSearch",
        url: "#",
      },
    ],
  },
  {
    label: "Products",
    id: "products",
    icon: "local_offer",
    subs: [
      {
        label: "View",
        icon: "local_offer", // just to test if renders an icon at level 2 (it shouldn't)
        id: "productsView",
        subs: [
          {
            label: "View all",
            id: "productsAdd",
            url: "#",
          },
          {
            label: "Filter products",
            id: "productsAdd",
            url: "#",
            badgeLabel: "error",
            badgeStatus: "danger",
          },
        ],
      },
      {
        label: "Add",
        id: "productsAdd",
        url: "#",
      },
      {
        label: "Search",
        id: "productsSearch",
        url: "#",
      },
      {
        label: "Import",
        id: "productsImport",
        url: "#",
      },
      {
        label: "Export",
        id: "productsExport",
        url: "#",
      },
      {
        label: "Categories",
        id: "productsCategories",
        url: "#",
      },
      {
        label: "Options",
        id: "productsOptions",
        url: "#",
      },
      {
        label: "Filtering",
        id: "productsFiltering",
        url: "#",
      },
      {
        label: "Reviews",
        id: "productsReviews",
        url: "#",
      },
      {
        label: "Price lists",
        id: "productsPriceLists",
        url: "#",
      },
      {
        label: "Brands",
        id: "productsBrands",
        url: "#",
      },
      {
        label: "Import SKUs",
        id: "productsImportSKUs",
        url: "#",
      },
      {
        label: "Export SKUs",
        id: "productsExportSKUs",
        url: "#",
      },
      {
        label: "Another example of a long label",
        id: "productsExportSKUs",
        url: "#",
      },
    ],
  },
  {
    label: "Customers",
    id: "customers",
    icon: "face",
    subs: [],
  },
  {
    label: "Marketing",
    id: "marketing",
    icon: "campaign",
    subs: [],
  },
  {
    label: "Analytics",
    id: "analytics",
    icon: "insights",
    subs: [
      {
        label: "Success",
        id: "analyticsSuccess",
        badgeLabel: "new",
        badgeStatus: "success",
      },
      {
        label: "Error",
        id: "analyticsError",
        badgeLabel: "error",
        badgeStatus: "danger",
      },
      {
        label: "Warning",
        id: "analyticsWarning",
        badgeLabel: "warning",
        badgeStatus: "warning",
      },
      {
        label: "Primary",
        id: "analyticsInfo",
        badgeLabel: "primary",
        badgeStatus: "primary",
      },
      {
        label: "Secondary",
        id: "analyticsInfo",
        badgeLabel: "secondary",
        badgeStatus: "secondary",
      },
    ],
  },
  {
    label: "Channels",
    icon: "device_hub",
    id: "channels",
    appMenu: true,
    subs: [
      {
        label: "Google",
        id: "google",
        iconImage: "./assets/images/channel-icons/google.svg",
        subs: [
          {
            label: "Overview",
            id: "googleOverview",
          },
          {
            label: "Product Listings",
            id: "googleProductListings",
          },
          {
            label: "Campaigns",
            id: "googleCampaigns",
          },
          {
            label: "Settings",
            id: "googleSettings",
          },
        ],
      },
      {
        label: "Meta",
        id: "meta",
        iconImage: "./assets/images/channel-icons/meta.png",
        subs: [
          {
            label: "Overview",
            id: "metaOverview",
          },
          {
            label: "Product Listings",
            id: "metaProductListings",
          },
          {
            label: "Campaigns",
            id: "metaCampaigns",
          },
          {
            label: "Settings",
            id: "metaSettings",
          },
        ],
      },
    ],
  },
  {
    label: "Apps & an example of what happens when this gets too long",
    icon: "apps",
    id: "apps",
  },
];
sidenav.footerItems = [
  {
    label: "Settings",
    id: "settings",
    icon: "settings",
  },
  {
    label: "Profile",
    id: "profile",
    icon: "account_circle",
  },
  {
    label: "Help",
    id: "help",
    icon: "help",
  },
];
