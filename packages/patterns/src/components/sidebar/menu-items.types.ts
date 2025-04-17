export type MenuItem = Readonly<{
  hash: string;
  label: string;
  isActive?: boolean;
  icon?: React.ElementType;
  external?: boolean;
  href?: string;
  items?: SubMenuItem[];
  target?: string; // e.g., "_blank" for external links
  hasDivider?: boolean;
}>;

/**
 * We're only supporting single-level nested menu so we need the children to have hrefs.
 */
type SubMenuItem = Omit<MenuItem, "href"> & {
  href: string;
};
