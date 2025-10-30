"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./useAuth";

const ADMIN_EMAIL = "andersoncmp1@gmail.com";

export function useAdminAuth() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user || user.email !== ADMIN_EMAIL) {
        router.replace("/courses");
      }
    }
  }, [user, loading, router]);
}