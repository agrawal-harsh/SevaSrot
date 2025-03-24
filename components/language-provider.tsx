"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "hi"

type Translations = {
  [key: string]: {
    en: string
    hi: string
  }
}

// Common translations used across the site
const translations: Translations = {
  donate: {
    en: "Donate",
    hi: "दान करें",
  },
  donateNow: {
    en: "Donate Now",
    hi: "अभी दान करें",
  },
  home: {
    en: "Home",
    hi: "होम",
  },
  about: {
    en: "About Us",
    hi: "हमारे बारे में",
  },
  becomeSevak: {
    en: "Become a Sevak",
    hi: "सेवक बनें",
  },
  awareness: {
    en: "Awareness",
    hi: "जागरूकता",
  },
  transparency: {
    en: "Transparency",
    hi: "पारदर्शिता",
  },
  impact: {
    en: "Impact Stories",
    hi: "प्रभाव कहानियां",
  },
  contact: {
    en: "Contact Us",
    hi: "संपर्क करें",
  },
  subscribe: {
    en: "Subscribe",
    hi: "सदस्यता लें",
  },
  email: {
    en: "Email",
    hi: "ईमेल",
  },
  phone: {
    en: "Phone",
    hi: "फोन",
  },
  address: {
    en: "Address",
    hi: "पता",
  },
  newsletter: {
    en: "Newsletter",
    hi: "न्यूज़लेटर",
  },
  quickLinks: {
    en: "Quick Links",
    hi: "त्वरित लिंक",
  },
  privacyPolicy: {
    en: "Privacy Policy",
    hi: "गोपनीयता नीति",
  },
  termsOfService: {
    en: "Terms of Service",
    hi: "सेवा की शर्तें",
  },
  mission: {
    en: "Our Mission",
    hi: "हमारा मिशन",
  },
  learnMore: {
    en: "Learn more",
    hi: "और जानें",
  },
  ourImpact: {
    en: "Our Impact",
    hi: "हमारा प्रभाव",
  },
  cowsRescued: {
    en: "Cows Rescued",
    hi: "बचाए गए गाय",
  },
  donationsReceived: {
    en: "Donations Received",
    hi: "प्राप्त दान",
  },
  activeSevaks: {
    en: "Active Sevaks",
    hi: "सक्रिय सेवक",
  },
  sanctuaries: {
    en: "Sanctuaries",
    hi: "आश्रय",
  },
  latestNews: {
    en: "Latest News",
    hi: "ताज़ा खबर",
  },
  viewAll: {
    en: "View all",
    hi: "सभी देखें",
  },
  readMore: {
    en: "Read more",
    hi: "और पढ़ें",
  },
  joinMission: {
    en: "Join Our Mission Today",
    hi: "आज हमारे मिशन में शामिल हों",
  },
  supportMessage: {
    en: "Your support can make a significant difference in the lives of cows. Whether through donations, volunteering, or spreading awareness, every contribution counts.",
    hi: "आपका समर्थन गायों के जीवन में महत्वपूर्ण अंतर ला सकता है। चाहे दान के माध्यम से, स्वयंसेवा के माध्यम से, या जागरूकता फैलाने के माध्यम से, हर योगदान मायने रखता है।",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "hi")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language]
    }
    // Return the key if translation not found
    return key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

