import { useLocation, useNavigate, Link as ReactRouterLink } from "react-router-dom";
import { ReactNode } from "react";
import { RouterContextType } from "../../../patterns/src/components/sidebar/hooks/router-context";

// React Router adapter for the RouterContext
export const ReactRouterAdapter = (): RouterContextType => {
  const location = useLocation();
  const navigate = useNavigate();

  return {
    pathname: location.pathname,
    navigate: (path: string) => navigate(path),
    Link: ({ href, className, children }: { href: string; className?: string; children: ReactNode }) => (
      <ReactRouterLink to={href} className={className}>
        {children}
      </ReactRouterLink>
    ),
  };
};

// Component that provides the router context using React Router
export const ReactRouterProviderAdapter = ({ children }: { children: ReactNode }) => {
  const routerAdapter = ReactRouterAdapter();
  
  return (
    <RouterProvider value={routerAdapter}>
      {children}
    </RouterProvider>
  );
};

// Need to import RouterProvider here since it's used in the component
import { RouterProvider } from "../../../patterns/src/components/sidebar/hooks/router-context";
