import { AuthWrapper } from "@/components/auth/AuthWrapper";
import { Header } from "@/components/layout/Header";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthWrapper>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 animate-fade-in">
            {children}
        </main>
      </div>
    </AuthWrapper>
  );
}
