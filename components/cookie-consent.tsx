"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t p-4 shadow-lg md:flex md:items-center md:justify-between">
      <div className="mb-4 md:mb-0 md:mr-4 pr-8">
        <h3 className="text-sm font-semibold mb-1">Cookie Consent</h3>
        <p className="text-xs text-muted-foreground">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
          traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>
      </div>
      <div className="flex flex-shrink-0 space-x-2">
        <Button variant="outline" size="sm" onClick={declineCookies}>
          Decline
        </Button>
        <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={acceptCookies}>
          Accept All
        </Button>
      </div>
      <button
        className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
        onClick={declineCookies}
        aria-label="Close cookie consent"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

