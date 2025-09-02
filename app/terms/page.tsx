import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileText, Users, AlertTriangle } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Terms & Conditions
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Please read these terms and conditions carefully before using Cricaismus
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">Last updated: August 31, 2025</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span>Agreement to Terms</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                These Terms and Conditions ("Terms") govern your use of the Cricaismus website (the "Service") operated by
                Cricaismus ("we", "us", or "our"). By accessing or using our Service, you agree to comply with these Terms.
              </p>
              <p>
                Our platform provides services including business listings, customer reviews, blogs, digital marketing tools,
                and backlinks for businesses. All users must follow these Terms to ensure a safe and compliant community.
              </p>
            </CardContent>
          </Card>

          {/* Business Listings */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Business Listings & Backlinks</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                Users may submit business listings, blogs, and request backlinks. All submitted information must be accurate,
                lawful, and not misleading. We reserve the right to edit, reject, or remove content that violates our policies.
              </p>

              <h3>Prohibited Content</h3>
              <ul>
                <li>Illegal, harmful, or fraudulent activities</li>
                <li>Adult, violent, or hateful content</li>
                <li>False or misleading business information</li>
                <li>Spammy or duplicate listings/backlinks</li>
                <li>Copyrighted content without permission</li>
              </ul>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Reviews & Ratings</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                Reviews must reflect genuine customer experiences. Fake, incentivized (without disclosure), or offensive
                reviews are prohibited and will be removed.
              </p>
              <ul>
                <li>Reviews must be written by actual customers</li>
                <li>Business owners cannot review their own services</li>
                <li>Personal attacks or offensive language are not allowed</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Conduct */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <span>User Conduct</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>When using our Service, you agree not to:</p>
              <ul>
                <li>Violate any laws or regulations</li>
                <li>Upload viruses, spam, or harmful code</li>
                <li>Harass, abuse, or discriminate against others</li>
                <li>Manipulate backlinks, reviews, or rankings unfairly</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                All content on Cricaismus, including text, images, and logos, is protected by copyright and intellectual
                property laws. You may not copy, distribute, or use our content without permission.
              </p>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Privacy & Data</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                Your privacy is important to us. Please refer to our Privacy Policy to understand how we collect, use, and
                protect your personal data. We comply with Google AdSense policies and respect user privacy at all times.
              </p>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Disclaimer & Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                Our Service is provided on an \"as-is\" basis. We do not guarantee uninterrupted availability or accuracy of
                content. Cricaismus is not liable for any damages resulting from misuse of the platform, listings, backlinks,
                or reviews.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          {/* <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                These Terms are governed by the laws of Pakistan. By using our platform, you agree to submit to the exclusive
                jurisdiction of courts in Rawalpindi, Pakistan.
              </p>
            </CardContent>
          </Card> */}

          {/* Contact */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <p><strong>Email:</strong> musabkhadim363@gmail.com</p>
                <p><strong>Address:</strong> Office 3/15, 5th Floor, Silk Center, Rehmanabad, Murree Road, Rawalpindi, Pakistan</p>
                <p><strong>Phone:</strong> +92 (347) 0458847</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
