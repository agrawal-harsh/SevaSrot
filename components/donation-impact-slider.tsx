"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

interface ImpactItem {
  id: number
  amount: number
  title: string
  description: string
}

export default function DonationImpactSlider() {
  const [donationAmount, setDonationAmount] = useState(1000)
  const [visibleImpacts, setVisibleImpacts] = useState<ImpactItem[]>([])

  // Define impact items
  const impactItems: ImpactItem[] = [
    {
      id: 1,
      amount: 500,
      title: "Feed a cow for a week",
      description: "Provides nutritious food for one cow for an entire week",
    },
    {
      id: 2,
      amount: 1000,
      title: "Veterinary check-up",
      description: "Covers a complete health check-up for two cows",
    },
    {
      id: 3,
      amount: 2000,
      title: "Medical treatment",
      description: "Provides necessary medicines and treatment for injured cows",
    },
    {
      id: 4,
      amount: 5000,
      title: "Sponsor a cow for a month",
      description: "Covers all expenses for one cow for an entire month",
    },
    {
      id: 5,
      amount: 10000,
      title: "Rescue operation",
      description: "Helps fund a rescue operation to save cows in danger",
    },
    {
      id: 6,
      amount: 25000,
      title: "Shelter improvements",
      description: "Contributes to improving living conditions in our sanctuaries",
    },
    {
      id: 7,
      amount: 50000,
      title: "New sanctuary equipment",
      description: "Helps purchase essential equipment for our sanctuaries",
    },
  ]

  // Update visible impacts based on donation amount
  useEffect(() => {
    const visible = impactItems.filter((item) => item.amount <= donationAmount)
    setVisibleImpacts(visible)
  }, [donationAmount])

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">See Your Impact</h2>
          <p className="text-center text-muted-foreground mb-10">
            Move the slider to see what different donation amounts can accomplish
          </p>

          <div className="mb-10">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground">₹500</span>
              <span className="text-xl font-bold">₹{donationAmount.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground">₹50,000</span>
            </div>
            <Slider
              defaultValue={[1000]}
              min={500}
              max={50000}
              step={500}
              onValueChange={(value) => setDonationAmount(value[0])}
              className="py-4"
            />
          </div>

          <div className="grid gap-4">
            {visibleImpacts.map((impact) => (
              <Card key={impact.id} className="border border-primary/20">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{impact.title}</h3>
                    <p className="text-sm text-muted-foreground">{impact.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {visibleImpacts.length === 0 && (
              <p className="text-center text-muted-foreground italic">
                Increase the donation amount to see potential impacts
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

