import React, { createContext, useContext, ReactNode } from 'react';

export interface RouterContextType {
  pathname: string;
  navigate: (path: string) => void;
  Link: React.ComponentType<{ href: string; className?: string; children: ReactNode }>;
}

const RouterContext = createContext<RouterContextType | null>(null);

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

export interface RouterProviderProps {
  children: ReactNode;
  value: RouterContextType;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children, value }) => {
  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
};
