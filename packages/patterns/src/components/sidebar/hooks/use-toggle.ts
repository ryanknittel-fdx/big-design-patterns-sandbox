"use client";

import { useMemo, useReducer, type Dispatch, type ReactNode } from "react";

export type BooleanHandlers = {
  toggle: Dispatch<boolean>;
  on: () => void;
  off: () => void;
};

const toggler = (currentValue: boolean, newValue: boolean) => {
  return typeof newValue === "boolean" ? newValue : !currentValue;
};

export const useToggle = (initialValue: boolean = false) => {
  return useReducer(toggler, initialValue);
};

export const useBoolean = (
  initialValue: boolean = false,
): [boolean, BooleanHandlers] => {
  const [value, toggle] = useToggle(initialValue);

  const handlers = useMemo(
    () => ({
      toggle,
      on: () => toggle(true),
      off: () => toggle(false),
    }),
    [toggle],
  );

  return [value, handlers];
};

export const BooleanProvider = ({
  children,
}: {
  children: (value: boolean, handlers: BooleanHandlers) => ReactNode;
}) => {
  const [value, handlers] = useBoolean();

  return children(value, handlers);
};
