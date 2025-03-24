import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DonationForm from "@/components/donation-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donate",
  description: "Support our mission to protect and care for cows through your generous donations.",
}

export default function DonatePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative h-[40vh] w-full">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Cows at SevaSrot sanctuary"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white mb-4">Support Our Cause</h1>
            <p className="max-w-[700px] mx-auto text-white/90 md:text-xl">
              Your donation makes a real difference in the lives of cows
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Make a Donation</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your generous contribution helps us provide food, shelter, medical care, and love to cows in need. Every
                donation, no matter the size, makes a significant impact.
              </p>

              <h3 className="text-xl font-semibold mb-4">How Your Donation Helps</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Food and Nutrition (40%)</p>
                    <p className="text-muted-foreground">Providing nutritious feed, hay, and supplements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Medical Care (30%)</p>
                    <p className="text-muted-foreground">Veterinary services, medications, and preventive care</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Shelter and Facilities (20%)</p>
                    <p className="text-muted-foreground">Maintaining and improving living conditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Education and Awareness (10%)</p>
                    <p className="text-muted-foreground">Spreading awareness about cow welfare</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Impact of Your Donation</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">₹500</p>
                    <p className="text-muted-foreground">Feeds one cow for a week</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">₹2,000</p>
                    <p className="text-muted-foreground">Provides medical check-up for 5 cows</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">₹5,000</p>
                    <p className="text-muted-foreground">Sponsors a cow for a month</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">₹60,000</p>
                    <p className="text-muted-foreground">Sponsors a cow for a full year</p>
                  </div>
                </div>
              </div>

              <Card className="border-none bg-primary/5">
                <CardHeader>
                  <CardTitle>Tax Benefits</CardTitle>
                  <CardDescription>All donations are eligible for tax exemption under Section 80G</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your donation to SevaSrot is eligible for tax deduction under Section 80G of the Income Tax Act. You
                    will receive an official receipt that can be used for tax purposes.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <DonationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

