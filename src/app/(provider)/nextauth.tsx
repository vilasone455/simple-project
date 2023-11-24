"use client";

import { SessionProvider } from "next-auth/react";

interface Props {
  children?: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const NextAuthProvider = ({ children }: Props): JSX.Element => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};
