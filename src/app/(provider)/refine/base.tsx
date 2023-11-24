/* eslint-disable  @typescript-eslint/require-await */
"use client";

import restDataProvider from "@/lib/provider/data/custom";
import { type AuthBindings, type HttpError, Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router/app";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { authContext } from "./authContext";
import { getIdentity, getLogin, getLogout } from "@/lib/provider/auth/authOperation";
import { notificationProvider } from "@/lib/provider/notification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { accessControlProvider } from "@/lib/provider/access/control";

interface Props {
  children?: React.ReactNode
}

const resources = [
  {
    name: "user",
    list: "/user",
  },
];
// eslint-disable-next-line @typescript-eslint/naming-convention
export const RefineProvider = ({ children }: Props): JSX.Element => {
  const { data, status } = useSession();
  const to = usePathname();

  const authProvider: AuthBindings = {
    login: getLogin(to),
    logout: getLogout(),
    onError: async(error: HttpError | Error | undefined) => { return { error }; },
    check: async() => {
      if (status === "unauthenticated") {
        return {
          authenticated: false,
          redirectTo: "/",
        };
      }
      return { authenticated: true };
    },
    getPermissions: async() => { return null; },
    getIdentity: async() => getIdentity(data),
  };
  return (
    <authContext.Provider value={authProvider}>
      <Refine
        authProvider={authProvider}
        routerProvider={routerProvider}
        dataProvider={restDataProvider(process.env.NEXT_PUBLIC_API_URL as string)}
        notificationProvider={notificationProvider}
        accessControlProvider={accessControlProvider}
        resources={resources}
        options={{
          syncWithLocation: true,
        }}>
        {children}
        <ToastContainer/>
      </Refine>
    </authContext.Provider>
  );
};
