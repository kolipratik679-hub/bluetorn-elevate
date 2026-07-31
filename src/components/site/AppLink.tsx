import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type Props = Omit<ComponentProps<typeof Link>, "to"> & {
  to: string;
  children?: ReactNode;
};

/**
 * Thin wrapper around TanStack's <Link> that accepts a plain string href,
 * so navigation data can be defined in one place.
 */
export function AppLink({ to, ...rest }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Link to={to as any} {...(rest as any)} />;
}
