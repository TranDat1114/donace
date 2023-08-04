import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
 
const inter = Inter({ subsets: ['vietnamese'] })

export const metadata: Metadata = {
  title: 'Donace',
  description: 'Multiple chanel ecomere',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>        
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
