import isNil from "lodash/isNil";
import { PropsWithChildren, ReactNode, createElement } from "react";

export interface ComponentProps<T extends Record<string, any>> {
  children: (props: { data: NonNullable<T> }) => ReactNode;
  data?: T;
}

export function IfNotNil<T extends Record<string, any>>(
  props: ComponentProps<T>
) {
  return isNil(props.data) ? null : props.children({ data: props.data });
}
