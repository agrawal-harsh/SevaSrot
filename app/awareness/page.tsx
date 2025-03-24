import Image from "next/image"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Awareness",
  description: "Learn about the importance of cow welfare and how you can help make a difference.",
}

export default function AwarenessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative h-[40vh] w-full">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Cows in natural habitat"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white mb-4">Awareness & Education</h1>
            <p className="max-w-[700px] mx-auto text-white/90 md:text-xl">
              Understanding the importance of cow welfare and protection
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Why Cow Protection Matters</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Cows have been an integral part of Indian culture and agriculture for thousands of years. They provide
              milk, which is a complete food, and their dung and urine have proven medicinal and agricultural benefits.
              Beyond their practical utility, cows are gentle creatures that deserve our respect and protection.
            </p>

            <div className="my-10 relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Cows grazing peacefully"
                width={800}
                height={400}
                className="w-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold mb-4">The Current Crisis</h3>
            <p className="text-muted-foreground mb-6">
              Despite their cultural and ecological importance, cows face numerous challenges today:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <Card className="border border-destructive/20">
                <CardContent className="p-6">
                  <h4 className="font-bold text-destructive mb-2">Abandonment</h4>
                  <p className="text-sm text-muted-foreground">
                    Many cows are abandoned when they stop giving milk, leaving them vulnerable to starvation, disease,
                    and accidents.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-destructive/20">
                <CardContent className="p-6">
                  <h4 className="font-bold text-destructive mb-2">Mistreatment</h4>
                  <p className="text-sm text-muted-foreground">
                    Cows often face cruel treatment, including overcrowding, inadequate nutrition, and lack of proper
                    medical care.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-destructive/20">
                <CardContent className="p-6">
                  <h4 className="font-bold text-destructive mb-2">Illegal Trafficking</h4>
                  <p className="text-sm text-muted-foreground">
                    Despite legal protections, cows are often illegally transported under inhumane conditions for
                    slaughter.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-destructive/20">
                <CardContent className="p-6">
                  <h4 className="font-bold text-destructive mb-2">Environmental Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    Industrial dairy practices contribute to environmental degradation, including water pollution and
                    greenhouse gas emissions.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mb-4">Our Approach to Awareness</h3>
            <p className="text-muted-foreground mb-6">
              At SevaSrot, we believe that awareness is the first step toward change. Our educational initiatives focus
              on:
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-medium">Community Outreach</p>
                  <p className="text-muted-foreground">
                    We conduct workshops, seminars, and awareness camps in schools, colleges, and communities to educate
                    people about cow welfare.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-medium">Digital Campaigns</p>
                  <p className="text-muted-foreground">
                    Our social media campaigns and online resources reach a wider audience, spreading awareness about
                    the importance of cow protection.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-medium">Educational Materials</p>
                  <p className="text-muted-foreground">
                    We develop and distribute informative brochures, posters, and videos that highlight the benefits of
                    cow protection and sustainable dairy practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-medium">Sanctuary Visits</p>
                  <p className="text-muted-foreground">
                    We organize visits to our cow sanctuaries, allowing people to interact with rescued cows and
                    understand their gentle nature.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Educational Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Cow Welfare Guide</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    A comprehensive guide on cow care, nutrition, and health management.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Benefits of Cow Products</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about the nutritional and medicinal benefits of various cow products.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Sustainable Dairy Practices</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    A guide to ethical and sustainable dairy farming methods.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Educational Videos</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Watch our collection of informative videos on cow welfare and protection.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Watch Videos
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg mb-10">
              <h3 className="text-xl font-bold mb-4">Get Involved</h3>
              <p className="text-muted-foreground mb-4">
                You can play a crucial role in spreading awareness about cow welfare. Here's how you can help:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Share our educational materials with your friends and family</li>
                <li>Organize awareness sessions in your community</li>
                <li>Volunteer for our outreach programs</li>
                <li>Support our awareness campaigns through donations</li>
                <li>Adopt sustainable and ethical practices in your daily life</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/donate">Support Our Cause</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/become-sevak">Volunteer With Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

