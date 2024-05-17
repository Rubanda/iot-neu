import './globals.css'
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Toaster } from "@/components/ui/sonner"
import Providers from '../components/query-provider'
import { cn } from '@/lib/utils';
import React from "react";
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Neu IOT',
  description: 'Digital identity for the future.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning 
      className={cn(inter.className, "h-full")}
    >
      <body className={cn(
          "overflow-hidden h-full bg-background "
        )}>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Providers >
            {children}
          </Providers>

          <TailwindIndicator />
          <Toaster />
        </ThemeProvider>

      </body>
    </html>
  )
}
