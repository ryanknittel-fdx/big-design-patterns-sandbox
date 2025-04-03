export type MenuItem = Readonly<{
  hash: string;
  label: string;
  isActive?: boolean;
  icon?: React.ElementType;
  external?: boolean;
  href?: string;
  items?: SubMenuItem[];
}>;

/**
 * We're only supporting single-level nested menu so we need the children to have hrefs.
 */
type SubMenuItem = Omit<MenuItem, "href"> & {
  href: string;
};
