import Image from "next/image"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, MapPin, Users } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Transparency",
  description: "View our financial reports, project updates, and learn about our team and leadership.",
}

export default function TransparencyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative h-[40vh] w-full">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Transparency and accountability"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white mb-4">Transparency Portal</h1>
            <p className="max-w-[700px] mx-auto text-white/90 md:text-xl">
              We believe in complete transparency in all our operations
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <Tabs defaultValue="financial" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="financial">Financial Reports</TabsTrigger>
              <TabsTrigger value="projects">Project Updates</TabsTrigger>
              <TabsTrigger value="locations">Our Locations</TabsTrigger>
              <TabsTrigger value="team">Team & Leadership</TabsTrigger>
            </TabsList>

            {/* Financial Reports Tab */}
            <TabsContent value="financial" className="space-y-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Financial Transparency</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We are committed to financial transparency and accountability. Below, you can access our financial
                  reports, audit information, and donation allocation details.
                </p>

                <h3 className="text-xl font-semibold mb-4">Donation Allocation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Cow Care & Nutrition</span>
                          <span className="font-medium">40%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "40%" }}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Medical & Veterinary Care</span>
                          <span className="font-medium">30%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Sanctuary Maintenance</span>
                          <span className="font-medium">20%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Education & Awareness</span>
                          <span className="font-medium">10%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-semibold mb-4">Annual Reports</h3>
                <div className="space-y-4 mb-8">
                  <Card>
                    <CardContent className="p-6 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">Annual Report 2023</h4>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive overview of our activities and finances
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="#">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">Annual Report 2022</h4>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive overview of our activities and finances
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="#">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">Annual Report 2021</h4>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive overview of our activities and finances
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="#">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Project Updates Tab */}
            <TabsContent value="projects" className="space-y-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Project Updates</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Stay informed about our ongoing projects and initiatives. We regularly update this section with
                  progress reports and milestones achieved.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>New Sanctuary in Rajasthan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        We are excited to announce that construction of our new sanctuary in Rajasthan is progressing
                        well. The facility will house up to 200 cows and include state-of-the-art medical facilities.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-medium mb-2">Project Timeline</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Land acquisition: Completed</li>
                            <li>Foundation work: Completed</li>
                            <li>Main structure: In progress (70% complete)</li>
                            <li>Interior facilities: Starting next month</li>
                            <li>Expected completion: December 2023</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Budget Allocation</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Total budget: ₹1.2 Crore</li>
                            <li>Spent to date: ₹80 Lakhs</li>
                            <li>Remaining: ₹40 Lakhs</li>
                          </ul>
                        </div>
                      </div>
                      <div className="relative h-48 rounded-md overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=600"
                          alt="Construction progress of new sanctuary"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Mobile Veterinary Unit</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Our mobile veterinary unit has been operational for six months now, providing medical care to
                        cows in remote areas where access to veterinary services is limited.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-medium mb-2">Impact So Far</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Villages visited: 45</li>
                            <li>Cows treated: 320</li>
                            <li>Emergency rescues: 15</li>
                            <li>Awareness sessions conducted: 30</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Operational Details</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Team: 1 veterinarian, 2 assistants, 1 driver</li>
                            <li>Equipment: Diagnostic tools, medications, surgical supplies</li>
                            <li>Coverage area: 100 km radius</li>
                          </ul>
                        </div>
                      </div>
                      <div className="relative h-48 rounded-md overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=600"
                          alt="Mobile veterinary unit in action"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Locations Tab */}
            <TabsContent value="locations" className="space-y-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Our Locations</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  SevaSrot operates multiple cow sanctuaries and facilities across India. Each location is designed to
                  provide optimal care and comfort for our rescued cows.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Main Sanctuary - Vrindavan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-muted-foreground mb-4">
                            Our flagship sanctuary in Vrindavan houses over 200 cows and includes comprehensive medical
                            facilities, spacious grazing areas, and visitor facilities for educational tours.
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>Vrindavan, Mathura District, Uttar Pradesh</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4 text-primary" />
                            <span>Staff: 25 full-time, 40 volunteers</span>
                          </div>
                        </div>
                        <div className="relative h-48 rounded-md overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Vrindavan Sanctuary"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Rehabilitation Center - Jaipur</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-muted-foreground mb-4">
                            Our specialized rehabilitation center in Jaipur focuses on treating injured and sick cows.
                            The facility is equipped with advanced medical equipment and staffed by experienced
                            veterinarians.
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>Jaipur, Rajasthan</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4 text-primary" />
                            <span>Staff: 15 full-time, 10 volunteers</span>
                          </div>
                        </div>
                        <div className="relative h-48 rounded-md overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Jaipur Rehabilitation Center"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Education Center - Delhi</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-muted-foreground mb-4">
                            Our Delhi center focuses on education and awareness. It includes exhibition spaces, a
                            library, and facilities for workshops and seminars on cow welfare and protection.
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>South Delhi, New Delhi</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4 text-primary" />
                            <span>Staff: 10 full-time, 20 volunteers</span>
                          </div>
                        </div>
                        <div className="relative h-48 rounded-md overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=300&width=400"
                            alt="Delhi Education Center"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Team & Leadership Tab */}
            <TabsContent value="team" className="space-y-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Team & Leadership</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Meet the dedicated individuals who lead our organization. Our team combines expertise in animal
                  welfare, veterinary science, nonprofit management, and community outreach.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Ramesh Kumar"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Ramesh Kumar</h3>
                        <p className="text-primary font-medium mb-2">Founder & Director</p>
                        <p className="text-sm text-muted-foreground mb-4">
                          With over 20 years of experience in animal welfare, Ramesh founded SevaSrot in 2010 with a
                          vision to create a safe haven for cows in need.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Dr. Sunita Sharma"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Dr. Sunita Sharma</h3>
                        <p className="text-primary font-medium mb-2">Chief Veterinarian</p>
                        <p className="text-sm text-muted-foreground mb-4">
                          Dr. Sharma leads our medical team, bringing 15 years of specialized experience in bovine
                          medicine and care.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Vikram Singh"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Vikram Singh</h3>
                        <p className="text-primary font-medium mb-2">Operations Manager</p>
                        <p className="text-sm text-muted-foreground mb-4">
                          Vikram oversees the day-to-day operations of our sanctuaries, ensuring that all cows receive
                          the best possible care.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Priya Agarwal"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Priya Agarwal</h3>
                        <p className="text-primary font-medium mb-2">Outreach Coordinator</p>
                        <p className="text-sm text-muted-foreground mb-4">
                          Priya leads our awareness and education initiatives, connecting with communities and spreading
                          the message of cow welfare.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-semibold mb-4">Board of Trustees</h3>
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Rajendra Prasad</p>
                      <p className="text-sm text-muted-foreground">
                        Retired IAS Officer with extensive experience in public administration and policy.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Dr. Meena Gupta</p>
                      <p className="text-sm text-muted-foreground">
                        Professor of Veterinary Science with research focus on bovine health.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Anand Mehta</p>
                      <p className="text-sm text-muted-foreground">
                        Successful entrepreneur and philanthropist with a passion for animal welfare.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2 mt-1">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Lakshmi Devi</p>
                      <p className="text-sm text-muted-foreground">
                        Renowned social activist with decades of experience in community mobilization.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Join Our Team</h3>
                  <p className="text-muted-foreground mb-4">
                    We are always looking for passionate individuals to join our team. If you share our commitment to
                    cow welfare and protection, we'd love to hear from you.
                  </p>
                  <Button asChild>
                    <Link href="/careers">View Current Openings</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

