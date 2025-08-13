export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen w-full items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-card/50 p-8 shadow-2xl backdrop-blur-lg">
        {children}
      </div>
    </main>
  );
}
