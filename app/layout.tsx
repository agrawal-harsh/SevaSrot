import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "SevaSrot - The Source of Charity",
    template: "%s | SevaSrot - The Source of Charity",
  },
  description: "Dedicated to cow welfare and protection through compassion, care, and community action.",
  keywords: ["cow welfare", "charity", "animal protection", "donation", "volunteer", "sevak"],
  authors: [{ name: "SevaSrot" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sevasrot.org",
    title: "SevaSrot - The Source of Charity",
    description: "Dedicated to cow welfare and protection through compassion, care, and community action.",
    siteName: "SevaSrot",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <CookieConsent />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'