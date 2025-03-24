"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"

export default function DonationCounter() {
  const [totalDonations, setTotalDonations] = useState(0)
  const [goal, setGoal] = useState(1000000) // ₹10,00,000
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate fetching current donation amount
    const fetchDonations = async () => {
      // In a real app, you would fetch from an API
      // const response = await fetch('/api/donations/total')
      // const data = await response.json()

      // For demonstration, we'll use a mock value and animate it
      const mockTotal = 650000 // ₹6,50,000

      // Animate the counter
      let current = 0
      const increment = mockTotal / 100
      const timer = setInterval(() => {
        current += increment
        if (current >= mockTotal) {
          clearInterval(timer)
          current = mockTotal
        }
        setTotalDonations(Math.floor(current))
      }, 20)

      return () => clearInterval(timer)
    }

    fetchDonations()
  }, [])

  useEffect(() => {
    // Calculate progress percentage
    setProgress((totalDonations / goal) * 100)
  }, [totalDonations, goal])

  // Format number as Indian currency
  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Donation Progress</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We believe in complete transparency. Track our fundraising progress in real-time.
          </p>

          <div className="bg-secondary/10 p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div className="text-left mb-4 md:mb-0">
                <p className="text-sm text-muted-foreground">Current</p>
                <p className="text-3xl font-bold text-primary">{formatIndianCurrency(totalDonations)}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Goal</p>
                <p className="text-3xl font-bold">{formatIndianCurrency(goal)}</p>
              </div>
            </div>

            <Progress value={progress} className="h-4 mb-4" />

            <p className="text-sm text-muted-foreground mt-4">
              {progress.toFixed(1)}% of our goal achieved. Thank you for your generosity!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

