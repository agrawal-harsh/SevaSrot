"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface SevakProfile {
  id: number
  name: string
  role: string
  story: string
  image: string
  years: number
}

const sevakProfiles: SevakProfile[] = [
  {
    id: 1,
    name: "Ananya Singh",
    role: "Sanctuary Caretaker",
    story:
      "I've been with SevaSrot for 5 years, caring for our rescued cows daily. The bond I've formed with these gentle creatures has changed my life. Each cow has a unique personality and story, and I'm honored to be part of their healing journey.",
    image: "/placeholder.svg?height=300&width=300",
    years: 5,
  },
  {
    id: 2,
    name: "Vikram Patel",
    role: "Rescue Coordinator",
    story:
      "Coordinating rescue operations for the past 3 years has been challenging but incredibly rewarding. I've helped save over 100 cows from dangerous situations, and seeing them thrive in our sanctuary makes every difficult moment worthwhile.",
    image: "/placeholder.svg?height=300&width=300",
    years: 3,
  },
  {
    id: 3,
    name: "Meera Joshi",
    role: "Veterinary Assistant",
    story:
      "Working alongside our veterinarians for 2 years has taught me so much about animal care. I assist with medical treatments and health check-ups, ensuring our cows remain healthy and happy. The resilience these animals show is truly inspiring.",
    image: "/placeholder.svg?height=300&width=300",
    years: 2,
  },
]

export default function SevakShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextProfile = () => {
    setActiveIndex((current) => (current + 1) % sevakProfiles.length)
  }

  const prevProfile = () => {
    setActiveIndex((current) => (current - 1 + sevakProfiles.length) % sevakProfiles.length)
  }

  const activeSevak = sevakProfiles[activeIndex]

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Meet Our Sevaks</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our dedicated volunteers are the heart of SevaSrot. Their compassion and commitment make our mission
            possible.
          </p>
        </div>

        <Card className="border-none shadow-lg overflow-hidden max-w-5xl mx-auto">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-[300px] md:h-auto">
                <Image
                  src={activeSevak.image || "/placeholder.svg"}
                  alt={activeSevak.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-primary/10 text-primary text-sm font-medium px-2.5 py-0.5 rounded-full mb-4">
                    {activeSevak.years} {activeSevak.years === 1 ? "year" : "years"} of service
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{activeSevak.name}</h3>
                  <p className="text-primary font-medium mb-4">{activeSevak.role}</p>
                  <p className="text-muted-foreground mb-6">{activeSevak.story}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={prevProfile} aria-label="Previous sevak">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={nextProfile} aria-label="Next sevak">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button asChild variant="link" className="text-primary">
                    <Link href="/become-sevak">Become a Sevak</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

