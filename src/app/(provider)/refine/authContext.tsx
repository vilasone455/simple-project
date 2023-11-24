/* eslint-disable @typescript-eslint/require-await */

"use client";

import { type AuthBindings } from "@refinedev/core";
import { type AuthActionResponse, type CheckResponse, type OnErrorResponse } from "@refinedev/core/dist/interfaces";
import type React from "react";
import { createContext, useContext } from "react";

const authProvider: AuthBindings = {
  login: async function(params: unknown): Promise<AuthActionResponse> {
    throw new Error("Function not implemented.");
  },
  logout: async function(params: unknown): Promise<AuthActionResponse> {
    throw new Error("Function not implemented.");
  },
  check: async function(params?: unknown): Promise<CheckResponse> {
    throw new Error("Function not implemented.");
  },
  // eslint-disable-next-line n/handle-callback-err
  onError: async function(error: unknown): Promise<OnErrorResponse> {
    throw new Error("Function not implemented.");
  },
};

export const authContext: React.Context<AuthBindings> = createContext(authProvider);

export const useAuth = (): AuthBindings => {
  return useContext(authContext);
};
