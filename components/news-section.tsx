"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

interface NewsItem {
  id: number
  title: string
  summary: string
  date: string
  url: string
}

// Mock news data (in a real app, this would come from an API)
const mockNews: NewsItem[] = [
  {
    id: 1,
    title: "New Cow Sanctuary Opens in Rural District",
    summary: "SevaSrot inaugurates its 10th cow sanctuary, providing shelter to over 100 rescued cows.",
    date: "2023-03-15",
    url: "#",
  },
  {
    id: 2,
    title: "Government Announces New Animal Welfare Policies",
    summary: "New legislation aims to improve conditions for farm animals, including stronger protections for cows.",
    date: "2023-02-28",
    url: "#",
  },
  {
    id: 3,
    title: "Community Outreach Program Reaches Milestone",
    summary: "SevaSrot's awareness campaign has now reached over 100,000 people across the country.",
    date: "2023-02-10",
    url: "#",
  },
]

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    // Simulate API fetch with a delay
    const fetchNews = async () => {
      try {
        // In a real app, you would fetch from an actual API
        // const response = await fetch('/api/news')
        // const data = await response.json()

        // Using mock data for demonstration
        setTimeout(() => {
          setNews(mockNews)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Failed to fetch news:", error)
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">{t("latestNews")}</h2>
          <Link href="/news" className="inline-flex items-center text-primary font-medium">
            {t("viewAll")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading
            ? // Loading skeletons
              Array(3)
                .fill(0)
                .map((_, index) => (
                  <Card key={index} className="border shadow-sm">
                    <CardHeader>
                      <Skeleton className="h-4 w-3/4" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-2/3" />
                    </CardContent>
                    <CardFooter>
                      <Skeleton className="h-4 w-1/4" />
                    </CardFooter>
                  </Card>
                ))
            : // Actual news items
              news.map((item) => (
                <Card key={item.id} className="border shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.summary}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">{new Date(item.date).toLocaleDateString()}</p>
                    <Link href={item.url} className="text-primary text-sm font-medium inline-flex items-center">
                      {t("readMore")}
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
        </div>
      </div>
    </section>
  )
}

