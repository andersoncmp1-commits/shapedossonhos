import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/AuthContext';
import './globals.css';
import { FirebaseErrorListener } from '@/components/FirebaseErrorListener';

export const metadata: Metadata = {
  title: 'Shape dos Sonhos',
  description: 'Sua área de membros exclusiva.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Playfair+Display:wght@400;700&family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#deaa2c" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <AuthProvider>
          {children}
          <Toaster />
          <FirebaseErrorListener />
        </AuthProvider>
      </body>
    </html>
  );
}
