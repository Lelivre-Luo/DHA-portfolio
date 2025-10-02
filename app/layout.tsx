import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: {
    default: "Giovani Moutinho | Senior Software Engineer",
    template: "%s | Giovani Moutinho",
  },
  description:
    "Senior Software Engineer specializing in backend development with Python, FastAPI, and cloud solutions.",
  keywords: ["Software Engineer", "Python Developer", "FastAPI", "GraphQL", "Backend Development", "Giovani Moutinho"],
  authors: [{ name: "Giovani Moutinho" }],
  creator: "Giovani Moutinho",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mgiovani.com",
    title: "Giovani Moutinho | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in backend development with Python, FastAPI, and cloud solutions.",
    siteName: "Giovani Moutinho Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giovani Moutinho | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in backend development with Python, FastAPI, and cloud solutions.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'
