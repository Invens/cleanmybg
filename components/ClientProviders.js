"use client";

import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@/context/UserContext";
import useFirebaseAnalytics from "@/lib/useFirebaseAnalytics";

export default function ClientProviders({ children }) {
    useFirebaseAnalytics();
  return (
    <SessionProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </SessionProvider>
  );
}
