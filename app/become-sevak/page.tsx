import Image from "next/image"
import type { Metadata } from "next"
import SevakRegistrationForm from "@/components/sevak-registration-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Heart, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Become a Sevak",
  description: "Join our team of dedicated volunteers and make a difference in the lives of cows.",
}

export default function BecomeSevakPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative h-[40vh] w-full">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Volunteers caring for cows"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white mb-4">Become a Sevak</h1>
            <p className="max-w-[700px] mx-auto text-white/90 md:text-xl">
              Join our community of compassionate volunteers dedicated to cow welfare
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Join Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Sevaks (volunteers) are the backbone of our organization. By becoming a Sevak, you contribute directly
                to the welfare of cows and help create a more compassionate world.
              </p>

              <h3 className="text-xl font-semibold mb-4">Volunteering Opportunities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Card className="border border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">Cow Care</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Help with feeding, grooming, and general care of cows at our sanctuaries.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">Outreach</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Spread awareness about cow welfare through community events and educational programs.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">Event Support</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Help organize and manage fundraising events, awareness campaigns, and community activities.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">Administrative</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Assist with office work, documentation, social media management, and other administrative tasks.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mb-4">Upcoming Volunteer Events</h3>
              <div className="space-y-4 mb-8">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-1">Cow Care Workshop</h4>
                  <p className="text-sm text-muted-foreground mb-2">Learn essential skills for cow care and welfare.</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>June 15, 2023</span>
                    <Clock className="h-4 w-4 ml-3" />
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-1">Community Awareness Drive</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Join us in spreading awareness about cow welfare in local communities.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>June 28, 2023</span>
                    <Clock className="h-4 w-4 ml-3" />
                    <span>4:00 PM - 7:00 PM</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is the minimum time commitment?</AccordionTrigger>
                  <AccordionContent>
                    We appreciate any time you can give. Most Sevaks commit to at least 4 hours per week, but we have
                    flexible options for those with limited availability.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do I need prior experience with cows?</AccordionTrigger>
                  <AccordionContent>
                    No prior experience is necessary. We provide comprehensive training for all our volunteers. Your
                    willingness to learn and compassion for animals are the most important qualities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I volunteer remotely?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we have remote volunteering opportunities in areas such as social media management, content
                    creation, fundraising, and administrative support.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is there an age requirement?</AccordionTrigger>
                  <AccordionContent>
                    Volunteers must be at least 18 years old for most roles. However, we do have family-friendly events
                    where younger participants can join with parental supervision.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Will I receive a certificate for my volunteer work?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we provide certificates of appreciation and recognition for our dedicated volunteers. These can
                    be valuable for your resume and personal growth.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <SevakRegistrationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

