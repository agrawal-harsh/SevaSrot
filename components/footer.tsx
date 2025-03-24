"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

const newsletterFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

type NewsletterFormValues = z.infer<typeof newsletterFormSchema>

export default function Footer() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(data: NewsletterFormValues) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Newsletter subscription:", data)
      setIsSubmitting(false)
      form.reset()
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      })
    }, 1000)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-J5UWPRuSFamClLZ1gdW98aOS9s43yB.jpeg"
                alt="SevaSrot Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-primary">SevaSrot</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Dedicated to the welfare and protection of cows through compassion, care, and community action.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">{t("quickLinks")}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-sm text-muted-foreground hover:text-primary">
                  {t("donate")}
                </Link>
              </li>
              <li>
                <Link href="/become-sevak" className="text-sm text-muted-foreground hover:text-primary">
                  {t("becomeSevak")}
                </Link>
              </li>
              <li>
                <Link href="/awareness" className="text-sm text-muted-foreground hover:text-primary">
                  {t("awareness")}
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="text-sm text-muted-foreground hover:text-primary">
                  {t("transparency")}
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-sm text-muted-foreground hover:text-primary">
                  {t("impact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">{t("contact")}</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">123 Charity Lane, Compassion City</li>
              <li className="text-sm text-muted-foreground">info@sevasrot.org</li>
              <li className="text-sm text-muted-foreground">+91 98765 43210</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">{t("newsletter")}</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for updates on our initiatives and impact.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 sm:flex sm:max-w-md">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t("email")}
                          className="w-full min-w-0 appearance-none rounded-md border border-input bg-background py-2 px-4 text-base placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-primary"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? "..." : t("subscribe")}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {currentYear} SevaSrot. All rights reserved.
            <Link href="/privacy-policy" className="ml-4 text-muted-foreground hover:text-primary">
              {t("privacyPolicy")}
            </Link>
            <Link href="/terms-of-service" className="ml-4 text-muted-foreground hover:text-primary">
              {t("termsOfService")}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

