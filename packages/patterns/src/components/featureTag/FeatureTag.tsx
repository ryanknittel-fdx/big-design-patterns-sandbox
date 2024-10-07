import React, { FunctionComponent, ReactNode } from "react";
import { StyledFeatureTag } from "./FeatureTag.styled";

/**
 * Props for the FeatureTag component.
 * @typedef {Object} FeatureTagProps
 * @property {string} label - The text label displayed next to the icon in the tag.
 * @property {ReactNode} icon - The icon displayed within the tag.
 * @property {number} [tabIndex=0] - The tabIndex attribute specifies the tab order of an element (when the "tab" button is used for navigating).
 * @property {boolean} [isActive=false] - Indicates whether the feature tag is currently active.
 */
export interface FeatureTagProps extends React.HTMLAttributes<HTMLAnchorElement> {
  label: string;
  icon?: ReactNode;
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
  return (
    <StyledFeatureTag
      className={isActive ? "active" : ""}
    >
      {icon}
      {label}
    </StyledFeatureTag>
  );
};
