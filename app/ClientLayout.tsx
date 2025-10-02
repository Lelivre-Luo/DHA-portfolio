"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import { ToastProvider } from "@/components/toast-provider"
import { Suspense } from "react"
import { Provider as JotaiProvider } from "jotai"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased min-h-screen bg-background text-foreground`}>
        <JotaiProvider>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <Suspense>
              <main className="flex-1">{children}</main>
            </Suspense>
            <Footer />
            <ToastProvider />
            <Analytics />
          </div>
        </JotaiProvider>
      </body>
    </html>
  )
}
