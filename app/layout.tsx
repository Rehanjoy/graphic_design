import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Sidebar from '@/components/sidebar';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Design Lab - Creative Community',
  description: 'Join the Ultimate Community for Designers and Creatives',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="design-lab-theme"
        >
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1">{children}</main>
            
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}