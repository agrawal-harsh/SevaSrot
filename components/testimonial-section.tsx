"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Regular Donor",
    content:
      "I've been supporting SevaSrot for over 3 years now. The transparency and dedication they show towards cow welfare is truly inspiring. Every time I visit their sanctuary, I can see the direct impact of my contributions.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Volunteer Sevak",
    content:
      "Being a sevak at SevaSrot has been a life-changing experience. The connection I've developed with these gentle creatures and the community of like-minded individuals has given me a new perspective on compassion and service.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Dr. Amit Verma",
    role: "Veterinarian",
    content:
      "As a veterinarian who works with SevaSrot, I can attest to their exceptional standards of care. Their facilities are well-maintained, and the staff is thoroughly trained in animal welfare practices. The cows here receive the best possible care.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">What Our Community Says</h2>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-md bg-background">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6 text-primary">
                <Quote className="h-12 w-12" />
              </div>

              <p className="text-lg text-muted-foreground text-center mb-8">{testimonials[activeIndex].content}</p>

              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

