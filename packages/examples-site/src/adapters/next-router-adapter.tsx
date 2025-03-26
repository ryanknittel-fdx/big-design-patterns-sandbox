/*
// This file is provided as a reference for implementing a Next.js router adapter
// If needed in the future, uncomment and adapt to your specific Next.js version

import { useRouter } from 'next/router';
import Link from 'next/link';
import { ReactNode } from 'react';
import { RouterContextType } from "../../../patterns/src/contexts/router-context";
import { RouterProvider } from "../../../patterns/src/contexts/router-context";

// Next.js Router Adapter
export const NextRouterAdapter = (): RouterContextType => {
  const router = useRouter();

  return {
    pathname: router.pathname,
    navigate: (path: string) => router.push(path),
    Link: ({ href, className, children }: { href: string; className?: string; children: ReactNode }) => (
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    ),
  };
};

// Usage Example:
export const NextRouterProviderAdapter = ({ children }: { children: ReactNode }) => {
  const routerAdapter = NextRouterAdapter();
  
  return (
    <RouterProvider value={routerAdapter}>
      {children}
    </RouterProvider>
  );
};
*/
