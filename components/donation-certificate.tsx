"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Download, Printer } from "lucide-react"

interface DonationCertificateProps {
  name: string
  amount: number
  date: string
}

export default function DonationCertificate({ name, amount, date }: DonationCertificateProps) {
  const certificateRef = useRef<HTMLDivElement>(null)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handlePrint = () => {
    const content = certificateRef.current
    if (!content) return

    const printWindow = window.open("", "_blank")
    if (!printWindow) return

    const printDocument = printWindow.document
    printDocument.write(`
      <html>
        <head>
          <title>Donation Certificate - SevaSrot</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
            }
            .certificate {
              border: 2px solid #48BB78;
              padding: 40px;
              text-align: center;
              max-width: 800px;
              margin: 0 auto;
              background-color: #fff;
            }
            .certificate-header {
              margin-bottom: 30px;
            }
            .certificate-title {
              font-size: 28px;
              color: #48BB78;
              margin-bottom: 10px;
            }
            .certificate-subtitle {
              font-size: 18px;
              color: #666;
            }
            .certificate-content {
              margin: 30px 0;
              font-size: 16px;
              line-height: 1.6;
            }
            .certificate-amount {
              font-size: 24px;
              font-weight: bold;
              color: #48BB78;
              margin: 20px 0;
            }
            .certificate-footer {
              margin-top: 40px;
              display: flex;
              justify-content: space-between;
            }
            .certificate-signature {
              text-align: center;
              width: 200px;
            }
            .certificate-date {
              margin-top: 30px;
              font-size: 14px;
              color: #666;
            }
            .certificate-id {
              margin-top: 20px;
              font-size: 12px;
              color: #999;
            }
            .certificate-border {
              border: 5px solid #F9D423;
              padding: 20px;
            }
            @media print {
              body {
                padding: 0;
              }
              .certificate {
                border: none;
              }
            }
          </style>
        </head>
        <body>
          ${content.outerHTML}
        </body>
      </html>
    `)
    printDocument.close()

    setTimeout(() => {
      printWindow.print()
    }, 500)
  }

  const handleDownload = () => {
    // In a real implementation, this would generate a PDF
    alert("In a production environment, this would download a PDF of your certificate.")
  }

  const certificateId = `SV-${Date.now().toString().slice(-6)}`

  return (
    <div className="space-y-4">
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm" onClick={handlePrint}>
          <Printer className="mr-2 h-4 w-4" />
          Print
        </Button>
        <Button variant="outline" size="sm" onClick={handleDownload}>
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>

      <Card className="border-2 border-primary">
        <CardContent className="p-8 border-4 border-secondary m-4" ref={certificateRef}>
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-J5UWPRuSFamClLZ1gdW98aOS9s43yB.jpeg"
                alt="SevaSrot Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">Certificate of Donation</h2>
            <p className="text-muted-foreground">SevaSrot - The Source of Charity</p>
          </div>

          <div className="text-center my-8">
            <p className="text-lg mb-4">This is to certify that</p>
            <p className="text-2xl font-bold mb-4">{name}</p>
            <p className="text-lg mb-4">has generously donated</p>
            <p className="text-2xl font-bold text-primary mb-4">{formatAmount(amount)}</p>
            <p className="text-lg">to support our mission of cow welfare and protection</p>
          </div>

          <div className="flex justify-between mt-12 pt-8 border-t">
            <div className="text-center">
              <p className="font-bold">Date</p>
              <p className="text-muted-foreground">{formatDate(date)}</p>
            </div>
            <div className="text-center">
              <p className="font-bold">Authorized Signature</p>
              <p className="text-muted-foreground">Ramesh Kumar</p>
              <p className="text-muted-foreground">Director, SevaSrot</p>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>This donation is eligible for tax exemption under Section 80G of the Income Tax Act.</p>
            <p className="mt-2">Certificate ID: {certificateId}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

