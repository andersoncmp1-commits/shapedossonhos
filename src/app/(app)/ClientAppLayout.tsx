"use client";

import { Header } from "@/components/layout/Header";

export function ClientAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in">
          {children}
      </main>
    </div>
  );
}
