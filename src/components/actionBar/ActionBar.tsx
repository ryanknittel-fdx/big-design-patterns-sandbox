import React, { FunctionComponent, ReactNode } from "react";
import { StyledActionBar, StyledActionBarContents } from "./ActionBar.styled";

/**
 * Component interface defining the props for ActionBar.
 * @interface
 */
interface ActionBarProps {
  /** ReactNode - Children elements or components to be rendered within the ActionBar. */
  children: ReactNode;
}

/**
 * A styled action bar component that wraps its children within styled div elements.
 *
 * This component serves as a container for action elements like buttons or links,
 * typically used at the bottom or top of a modal or form.
 *
 * @param {ActionBarProps} props - The props object containing the children to be rendered.
 * @returns {JSX.Element} A React functional component rendering a styled action bar.
 */
const ActionBar: FunctionComponent<ActionBarProps> = ({ children }) => {
  return (
    <StyledActionBar>
      <StyledActionBarContents>{children}</StyledActionBarContents>
    </StyledActionBar>
  );
};

export default ActionBar;
