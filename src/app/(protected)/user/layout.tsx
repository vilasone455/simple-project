"use client";

import { Authenticated } from "@refinedev/core";
import React from "react";

export default function ProtectedLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  return <Authenticated redirectOnFail="/login" v3LegacyAuthProviderCompatible>{children}</Authenticated>;
}
