// lib/useFirebaseAnalytics.js
"use client";

import { useEffect } from "react";
import { getAnalytics, isSupported } from "firebase/analytics";
import { app } from "./firebase";

export default function useFirebaseAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Only initialize analytics if supported (avoids errors on Node.js)
    isSupported().then((supported) => {
      if (supported) {
        try {
          getAnalytics(app);
        } catch (e) {
          // Ignore duplicate init errors
        }
      }
    });
  }, []);
}
