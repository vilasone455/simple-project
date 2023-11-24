import { signIn, signOut } from "next-auth/react";
import { type Session } from "next-auth";
import { type Credential } from "@/lib/provider/auth/interface";

export function getLogin(to: string) {
  return async({
    providerName,
    username,
    password,
  }: Credential,
  ) => {
    if (providerName !== undefined) {
      await signIn(providerName, { callbackUrl: (to !== "") ? to.toString() : "/", redirect: true });
      return {
        success: true,
      };
    }
    const signInResponse = await signIn("Credentials", {
      username,
      password,
      callbackUrl: (to !== "") ? to.toString() : "/",
      redirect: false,
    });
    if (signInResponse == null) {
      return { success: false };
    }
    const { ok, error } = signInResponse;
    if (ok) {
      return {
        success: true,
        redirectTo: "/",
      };
    }
    return {
      success: false,
      error: new Error(error?.toString()),
    };
  };
}
export function getLogout() {
  return async() => {
    await signOut({
      redirect: true,
      callbackUrl: "/login",
    });

    return {
      success: true,
    };
  };
}

export function getIdentity(data: Session | null) {
  return () => {
    if ((data?.user) != null) {
      const { user } = data;
      return {
        name: user.name,
        avatar: user.image,
      };
    }
    return null;
  };
}

