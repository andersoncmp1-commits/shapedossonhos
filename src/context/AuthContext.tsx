
"use client";

import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { getFirebase } from "@/lib/firebase";
import { Loader } from "@/components/ui/loader";

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { auth } = getFirebase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // Store the ID token in a cookie for server-side verification
      if (user) {
        try {
          const token = await user.getIdToken();
          // Set cookie to be used by server components/api routes
          document.cookie = `firebaseIdToken=${token}; path=/; max-age=3600; samesite=lax`;
        } catch (error) {
            console.error("Error getting ID token:", error);
            document.cookie = 'firebaseIdToken=; path=/; max-age=0';
        }
      } else {
        // Clear the cookie on logout
        document.cookie = 'firebaseIdToken=; path=/; max-age=0';
      }
      
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const value = { user, loading };

  // This loading state is important. It prevents child components from rendering
  // before the auth state is determined and the cookie is set.
  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader className="h-8 w-8 text-primary" />
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
