import NewsSection from "@/components/news-section";
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "impact",
  description: "Support our mission to protect and care for cows through your generous donations.",
}


export default function impact() {
  return (
    <NewsSection/>
  )
}

