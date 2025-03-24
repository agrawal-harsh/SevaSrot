import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Users, DollarSign, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import NewsSection from "@/components/news-section"
import DonationCounter from "@/components/donation-counter"
import TestimonialSection from "@/components/testimonial-section"
import EmergencyFund from "@/components/emergency-fund"
import DonationImpactSlider from "@/components/donation-impact-slider"
import SevakShowcase from "@/components/sevak-showcase"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative h-[70vh] w-full">
          <Image
            src="https://saveindiancows.org/wp-content/uploads/2019/01/Cow-feed.jpg"
            alt="Rescued cows at SevaSrot sanctuary"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-6">
              Protecting Cows, Preserving Compassion
            </h1>
            <p className="max-w-[700px] mx-auto text-white/90 md:text-xl mb-8">
              Join us in our mission to provide care, shelter, and dignity to cows in need
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Fund Section */}
      <EmergencyFund />

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At SevaSrot, we are dedicated to the welfare and protection of cows through compassion, care, and
                community action. Our mission is to rescue, rehabilitate, and provide a safe haven for cows that have
                been abandoned, mistreated, or are at risk.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that cows deserve respect and dignity as sentient beings. Through our initiatives, we aim to
                raise awareness about the importance of cow protection and promote sustainable practices that benefit
                both cows and communities.
              </p>
              <Link href="/about" className="inline-flex items-center text-primary font-medium">
                Learn more about our mission
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://cdn.pixabay.com/photo/2017/09/16/13/41/cow-2755520_1280.jpg"
                alt="Happy cows at SevaSrot sanctuary"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-secondary/10">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md bg-background">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2">500+</h3>
                <p className="text-muted-foreground">Cows Rescued</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-background">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2">₹50L+</h3>
                <p className="text-muted-foreground">Donations Received</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-background">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2">1,000+</h3>
                <p className="text-muted-foreground">Active Sevaks</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-background">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2">10+</h3>
                <p className="text-muted-foreground">Sanctuaries</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Impact Slider */}
      <DonationImpactSlider />

      {/* Donation Counter */}
      <DonationCounter />

      {/* Sevak Showcase */}
      <SevakShowcase />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Latest News */}
      <NewsSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Join Our Mission Today</h2>
          <p className="max-w-[700px] mx-auto text-lg text-muted-foreground mb-8">
            Your support can make a significant difference in the lives of cows. Whether through donations,
            volunteering, or spreading awareness, every contribution counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full">
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-full"
            >
              <Link href="/become-sevak">Become a Sevak</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

