"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ToastProvider } from "@/components/toast-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Suspense } from "react"
import { Provider as JotaiProvider } from "jotai"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen bg-background text-foreground`}>
        <JotaiProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <Suspense>
              <main className="flex-1">{children}</main>
            </Suspense>
            <Footer />
            <ToastProvider />
            <ThemeToggle />
            <Analytics />
          </div>
        </JotaiProvider>
      </body>
    </html>
  )
}
