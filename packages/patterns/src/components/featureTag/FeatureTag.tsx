import React, { FunctionComponent, ReactElement, ReactNode } from "react";
import { StyledFeatureTag, StyledFeatureTagIcon } from "./FeatureTag.styled";
import { Flex, FlexItem } from "@bigcommerce/big-design";
import { IconProps } from "@bigcommerce/big-design-icons";

/**
 * Props for the FeatureTag component.
 * @typedef {Object} FeatureTagProps
 * @property {string} label - The text label displayed next to the icon in the tag.
 * @property {ReactNode} icon - The icon displayed within the tag.
 * @property {number} [tabIndex=0] - The tabIndex attribute specifies the tab order of an element (when the "tab" button is used for navigating).
 * @property {boolean} [isActive=false] - Indicates whether the feature tag is currently active.
 */
export interface FeatureTagProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  label: string;
  icon?: ReactElement<IconProps>;
  isActive?: boolean;
}

/**
 * A component that displays a stylized feature tag with an icon and text.
 * This component can be used to represent features or options with a visual cue (icon) and descriptive label.
 *
 * @param {FeatureTagProps} props - The properties passed to the feature tag component.
 * @returns {JSX.Element} A styled feature tag element.
 */
export const FeatureTag: FunctionComponent<FeatureTagProps> = ({
  label,
  icon,
  isActive = false,
}) => {
  const iconSize = icon && icon.props.size ? icon.props.size : "";
  return (
    <StyledFeatureTag className={isActive ? "active" : ""}>
      {icon ? (
        <StyledFeatureTagIcon className={`icon-${iconSize}`}>
          {icon}
        </StyledFeatureTagIcon>
      ) : null}
      {label}
    </StyledFeatureTag>
  );
};
