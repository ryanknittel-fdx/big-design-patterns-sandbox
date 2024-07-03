import React, { FunctionComponent, ReactNode } from "react";
import { StyledAnchorNav } from "./AnchorNav.styled";
import { useIntersection } from "../../helpers/useIntersection";

interface AnchorNavElement {
  label: string;
  element: ReactNode;
  id: string;
}

interface AnchorNavProps {
  elements: AnchorNavElement[];
}

const AnchorNav: FunctionComponent<AnchorNavProps> = ({ elements }) => {
  const [anchorVisible, setAnchorVisible] = React.useState(0);
  const handleVisibility = (elementIndex:number) => {
    setAnchorVisible(elementIndex);
  };

  // let's use the intersection observer on the various element divs
  // to trigger the anchor nav to highlight the corresponding anchor
  // when the element is in view

  const anchorPanels = elements.map((element, i) => {
    const elementRef = React.useRef(null);
    const isVisible = useIntersection(elementRef, "0px");

    React.useEffect(() => {
      if (isVisible) {
        // highlight the anchor
        handleVisibility(i);
      }
    }, [handleVisibility, isVisible]);

    return (
      <div key={element.id} ref={elementRef} id={element.id} className="anchor-nav__element">
        {element.element}
      </div>
    );
  });
  return (
    <StyledAnchorNav>
      <nav className="anchor-nav__list">
        <ul>
          {elements.map((element, i) => {
            return (
              <li key={element.id}>
                <a
                  className={i === anchorVisible ? `active` : ``}
                  id={`anchor_${element.id}`}
                  href={`#${element.id}`}
                  onClick={() => setAnchorVisible(i)}
                >
                  {element.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="anchor-nav__elements">{anchorPanels}</div>
    </StyledAnchorNav>
  );
};

export default AnchorNav;
