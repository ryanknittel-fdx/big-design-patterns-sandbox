import React, { useEffect, useRef, useState } from 'react';
import { StyledAnchorNav } from './AnchorNav.styled';

type AnchorNavElement = {
  id: string;
  label: string;
  element: React.ReactNode;
};

type AnchorNavProps = {
  elements: AnchorNavElement[];
};

export const AnchorNav: React.FC<AnchorNavProps> = ({ elements }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const suspendObserverRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (suspendObserverRef.current) return;

        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: '0px 0px -90% 0px', threshold: 0.1 }
    );

    Object.entries(sectionRefs.current).forEach(([id, el]) => {
      if (el) {
        observerRef.current?.observe(el);
      }
    });

    return () => observerRef.current?.disconnect();
  }, [elements]);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
      suspendObserverRef.current = true;

      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }

      resumeTimeoutRef.current = setTimeout(() => {
        suspendObserverRef.current = false;
      }, 2000);
    }
  };

  return (
    <StyledAnchorNav>
      <div className="anchor-nav__list">
        <ul>
          {elements.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
                className={id === activeId ? 'active' : ''}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="anchor-nav__elements">
        {elements.map(({ id, element }) => (
          <div
            key={id}
            id={id}
            ref={(el) => {
              sectionRefs.current[id] = el;
            }}
            style={{ scrollMarginTop: '80px' }}
          >
            {element}
          </div>
        ))}
      </div>
    </StyledAnchorNav>
  );
};
