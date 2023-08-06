import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '@/components/ui/changeThemeModeButton'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { DialogDemo } from '@/components/loginNRegister'

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
      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <div className="relative flex min-h-screen flex-col">
            <div className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
              <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                  <Link href={"/"} className="mr-6 flex items-center space-x-2">
                    Donace
                    <span className="hidden font-bold sm:inline-block">Donace</span>
                  </Link>
                  <nav className="flex items-center space-x-6 text-sm font-medium">
                    <p className="transition-colors hover:text-foreground/80 text-foreground/60">
                      Documentation
                    </p>
                    <p className="transition-colors hover:text-foreground/80 text-foreground">
                      FUckme
                    </p>
                  </nav>

                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                  <div className="w-full flex-1 md:w-auto md:flex-none">
                    <Input className="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64" type="text" placeholder="Search..." />
                  </div>
                  <nav className="flex items-center">
                    <DialogDemo />
                    <ModeToggle />
                  </nav>
                </div>

              </div>
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
