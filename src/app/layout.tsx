import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/AuthContext';
import { Cinzel_Decorative, Playfair_Display, Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { FirebaseErrorListener } from '@/components/FirebaseErrorListener';

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-headline',
});

const fontDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

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
      <body className={cn("font-body antialiased", fontBody.variable, fontHeadline.variable, fontDisplay.variable)} suppressHydrationWarning>
        <AuthProvider>
          {children}
          <Toaster />
          <FirebaseErrorListener />
        </AuthProvider>
      </body>
    </html>
  );
}
