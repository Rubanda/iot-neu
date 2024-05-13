import './globals.css'
import { Inter } from 'next/font/google';
import { Footer } from '@/components/footer';
import { ThemeProvider } from "@/components/theme-provider"
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Toaster } from "@/components/ui/sonner"
import Providers from '@/components/query-provider'
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Masatafit',
  description: 'Fitness for everyone',
}

export default function RootLayout({
  children,
  authModal
}: {
  children: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    <html lang="en"
      className={inter.className}
    >
      <body className='bg-background w-full min-h-screen'>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers >
            <div>{authModal}</div>

            {children}
          </Providers>

          <TailwindIndicator />
          <Toaster />
        </ThemeProvider>

      </body>
    </html>
  )
}
