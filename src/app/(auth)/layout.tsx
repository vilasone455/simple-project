"use client";

import { useAuth } from "@/app/(provider)/refine/authContext";
import { useRouter } from "next/navigation";
import type React from "react";

export default function ProtectedLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  const router = useRouter();
  const authProvider = useAuth();

  authProvider.check()
    .then(({ authenticated }) => {
      if (authenticated) {
        router.push("/");
      }
    })
    .catch((error) => {
      // Handle any errors that occurred during the async operation
      console.error("Error checking authentication:", error);
    });

  return children;
}
