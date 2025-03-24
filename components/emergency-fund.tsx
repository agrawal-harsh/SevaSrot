"use client"

import { useState } from "react"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function EmergencyFund() {
  const [raised, setRaised] = useState(125000)
  const goal = 200000
  const progress = (raised / goal) * 100

  return (
    <section className="bg-destructive/10 py-4 border-y border-destructive/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-destructive animate-pulse" />
            <div>
              <h3 className="font-bold text-lg">Emergency Rescue Fund</h3>
              <p className="text-sm text-muted-foreground">Help us save 20 cows from slaughter</p>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex justify-between text-sm mb-1">
              <span>₹{raised.toLocaleString()}</span>
              <span>₹{goal.toLocaleString()}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Button asChild className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
            <Link href="/donate?campaign=emergency">Save a Cow Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

