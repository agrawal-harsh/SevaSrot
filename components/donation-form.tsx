"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { CreditCard, IndianRupee, Check } from "lucide-react"
import { useSearchParams } from "next/navigation"
import DonationCertificate from "@/components/donation-certificate"

const formSchema = z.object({
  amount: z.string().min(1, "Please select or enter an amount"),
  customAmount: z.string().optional(),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().optional(),
  message: z.string().optional(),
  donationType: z.enum(["one-time", "monthly"]),
  paymentMethod: z.enum(["card", "upi", "netbanking"]),
})

export default function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [donationData, setDonationData] = useState<z.infer<typeof formSchema> | null>(null)
  const [showCertificate, setShowCertificate] = useState(false)
  const searchParams = useSearchParams()
  const campaign = searchParams.get("campaign")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: campaign === "emergency" ? "5000" : "1000",
      customAmount: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      message: "",
      donationType: "one-time",
      paymentMethod: "card",
    },
  })

  const selectedAmount = form.watch("amount")
  const donationType = form.watch("donationType")
  const customAmount = form.watch("customAmount")

  // Set emergency campaign amount if applicable
  useEffect(() => {
    if (campaign === "emergency") {
      form.setValue("amount", "5000")
    }
  }, [campaign, form])

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setDonationData(values)
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 2000)
  }

  const handleViewCertificate = () => {
    setShowCertificate(true)
  }

  const handleBackToDonation = () => {
    setShowCertificate(false)
  }

  const getActualAmount = () => {
    if (selectedAmount === "custom" && customAmount) {
      return Number.parseInt(customAmount)
    }
    return Number.parseInt(selectedAmount)
  }

  if (showCertificate && donationData) {
    return (
      <div className="space-y-6">
        <DonationCertificate
          name={`${donationData.firstName} ${donationData.lastName}`}
          amount={getActualAmount()}
          date={new Date().toISOString()}
        />
        <Button onClick={handleBackToDonation} className="w-full">
          Back to Donation Confirmation
        </Button>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <Card className="border shadow-sm">
        <CardHeader className="bg-primary/10 rounded-t-lg">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary p-3">
              <Check className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-center">Thank You for Your Donation!</CardTitle>
          <CardDescription className="text-center">
            Your contribution will make a real difference in the lives of cows.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground mb-6">
            We have sent a confirmation email with the details of your donation. You will receive a tax receipt shortly.
          </p>
          <div className="flex flex-col gap-4">
            <Button onClick={handleViewCertificate}>View Donation Certificate</Button>
            <Button variant="outline" onClick={() => setIsSuccess(false)}>
              Make Another Donation
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border shadow-sm">
      <CardHeader className="bg-primary/10 rounded-t-lg">
        <CardTitle>Donation Form</CardTitle>
        <CardDescription>Support our mission to protect and care for cows</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="donationType"
              render={({ field }) => (
                <FormItem>
                  <Tabs defaultValue={field.value} onValueChange={field.onChange} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="one-time">One-time Donation</TabsTrigger>
                      <TabsTrigger value="monthly">Monthly Donation</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <FormLabel>Select Amount</FormLabel>
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 gap-4"
                      >
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem value="500" className="peer sr-only" />
                          </FormControl>
                          <FormLabel className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                            <span className="text-sm font-medium">₹500</span>
                            {donationType === "monthly" && (
                              <span className="text-xs text-muted-foreground">Monthly</span>
                            )}
                          </FormLabel>
                        </FormItem>
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem value="1000" className="peer sr-only" />
                          </FormControl>
                          <FormLabel className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                            <div className="flex items-center gap-1">
                              <span className="text-sm font-medium">₹1,000</span>
                              <span className="text-xs bg-secondary/20 text-secondary-foreground px-1.5 py-0.5 rounded-full">
                                Recommended
                              </span>
                            </div>
                            {donationType === "monthly" && (
                              <span className="text-xs text-muted-foreground">Monthly</span>
                            )}
                          </FormLabel>
                        </FormItem>
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem value="2000" className="peer sr-only" />
                          </FormControl>
                          <FormLabel className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                            <span className="text-sm font-medium">₹2,000</span>
                            {donationType === "monthly" && (
                              <span className="text-xs text-muted-foreground">Monthly</span>
                            )}
                          </FormLabel>
                        </FormItem>
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem value="5000" className="peer sr-only" />
                          </FormControl>
                          <FormLabel className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                            <span className="text-sm font-medium">₹5,000</span>
                            {donationType === "monthly" && (
                              <span className="text-xs text-muted-foreground">Monthly</span>
                            )}
                          </FormLabel>
                        </FormItem>
                        <FormItem>
                          <FormControl>
                            <RadioGroupItem value="custom" className="peer sr-only" />
                          </FormControl>
                          <FormLabel className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary col-span-2">
                            <span className="text-sm font-medium">Custom Amount</span>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {selectedAmount === "custom" && (
                <FormField
                  control={form.control}
                  name="customAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <IndianRupee className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input placeholder="Enter amount" className="pl-10" type="number" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Share why you're supporting our cause" className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Method</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-3 gap-4"
                    >
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="card" className="peer sr-only" />
                        </FormControl>
                        <FormLabel className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                          <CreditCard className="mb-2 h-6 w-6" />
                          <span className="text-sm font-medium">Card</span>
                        </FormLabel>
                      </FormItem>
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="upi" className="peer sr-only" />
                        </FormControl>
                        <FormLabel className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                          <span className="mb-2 text-lg font-bold">UPI</span>
                          <span className="text-sm font-medium">UPI</span>
                        </FormLabel>
                      </FormItem>
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="netbanking" className="peer sr-only" />
                        </FormControl>
                        <FormLabel className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                          <span className="mb-2 text-lg font-bold">Net</span>
                          <span className="text-sm font-medium">Net Banking</span>
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting
                ? "Processing..."
                : `Donate ${selectedAmount === "custom" ? "₹" + customAmount : "₹" + selectedAmount}`}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By donating, you agree to our terms and conditions. All donations are secure and encrypted.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

