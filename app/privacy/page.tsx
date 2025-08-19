import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Cookie, Database, Lock, Globe } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">Last updated: January 8, 2025</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-blue-600" />
                <span>Introduction</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                Cricaismus ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
                how your personal information is collected, used, and disclosed by Cricaismus when you visit our website
                or use our services.
              </p>
              <p>
                This policy applies to all information collected or submitted on the Cricaismus website and services. By
                using our Service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-green-600" />
                <span>Information We Collect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <h3>Information You Provide to Us</h3>
              <ul>
                <li>
                  <strong>Account Information:</strong> Name, email address, phone number, and password when you create
                  an account
                </li>
                <li>
                  <strong>Business Information:</strong> Business name, address, description, hours, services, and
                  photos when you create a business listing
                </li>
                <li>
                  <strong>Communication:</strong> Messages, reviews, and other content you submit through our platform
                </li>
                <li>
                  <strong>Contact Information:</strong> Information you provide when contacting us for support
                </li>
              </ul>

              <h3>Information We Collect Automatically</h3>
              <ul>
                <li>
                  <strong>Usage Information:</strong> Pages visited, time spent, clicks, and other usage statistics
                </li>
                <li>
                  <strong>Device Information:</strong> IP address, browser type, operating system, and device
                  identifiers
                </li>
                <li>
                  <strong>Location Information:</strong> General location based on IP address (with your consent for
                  precise location)
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> Information collected through cookies and similar technologies
                </li>
              </ul>

              <h3>Information from Third Parties</h3>
              <ul>
                <li>
                  <strong>Social Media:</strong> Information from social media platforms when you connect your accounts
                </li>
                <li>
                  <strong>Business Partners:</strong> Information from our business partners and service providers
                </li>
                <li>
                  <strong>Public Sources:</strong> Publicly available information about businesses
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>We use the information we collect to:</p>
              <ul>
                <li>
                  <strong>Provide Services:</strong> Create and manage your account, process business listings, and
                  facilitate reviews
                </li>
                <li>
                  <strong>Improve Our Platform:</strong> Analyze usage patterns and improve our website and services
                </li>
                <li>
                  <strong>Communication:</strong> Send you updates, newsletters, and respond to your inquiries
                </li>
                <li>
                  <strong>Safety and Security:</strong> Detect fraud, abuse, and ensure platform security
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Comply with legal obligations and enforce our terms
                </li>
                <li>
                  <strong>Marketing:</strong> Send promotional materials (with your consent)
                </li>
                <li>
                  <strong>Personalization:</strong> Customize your experience and show relevant content
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>How We Share Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <h3>Public Information</h3>
              <p>
                Business listings, reviews, and ratings are publicly visible on our platform and may be indexed by
                search engines.
              </p>

              <h3>Service Providers</h3>
              <p>
                We share information with third-party service providers who help us operate our platform, including:
              </p>
              <ul>
                <li>Cloud hosting and storage providers</li>
                <li>Email and communication services</li>
                <li>Analytics and advertising services</li>
                <li>Payment processors</li>
                <li>Customer support tools</li>
              </ul>

              <h3>Legal Requirements</h3>
              <p>We may disclose your information when required by law or to:</p>
              <ul>
                <li>Comply with legal processes or government requests</li>
                <li>Enforce our terms and policies</li>
                <li>Protect our rights, property, or safety</li>
                <li>Prevent fraud or illegal activities</li>
              </ul>

              <h3>Business Transfers</h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new
                entity.
              </p>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Cookie className="h-5 w-5 text-orange-600" />
                <span>Cookies and Tracking Technologies</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <h3>What Are Cookies</h3>
              <p>
                Cookies are small text files stored on your device that help us provide and improve our services. We use
                both session cookies (which expire when you close your browser) and persistent cookies (which remain
                until deleted).
              </p>

              <h3>Types of Cookies We Use</h3>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Required for basic website functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
                </li>
                <li>
                  <strong>Advertising Cookies:</strong> Used to show relevant ads and measure campaign effectiveness
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings and preferences
                </li>
              </ul>

              <h3>Managing Cookies</h3>
              <p>
                You can control cookies through your browser settings. However, disabling certain cookies may affect
                website functionality. Most browsers allow you to:
              </p>
              <ul>
                <li>View and delete cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block third-party cookies</li>
                <li>Clear all cookies when closing the browser</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-red-600" />
                <span>Data Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <h3>Security Measures</h3>
              <p>We implement appropriate technical and organizational measures to protect your information:</p>
              <ul>
                <li>
                  <strong>Encryption:</strong> Data is encrypted in transit and at rest using industry-standard
                  protocols
                </li>
                <li>
                  <strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis
                </li>
                <li>
                  <strong>Regular Audits:</strong> Regular security assessments and vulnerability testing
                </li>
                <li>
                  <strong>Secure Infrastructure:</strong> Use of secure cloud providers and hosting services
                </li>
                <li>
                  <strong>Employee Training:</strong> Regular privacy and security training for our team
                </li>
              </ul>

              <h3>Data Breach Response</h3>
              <p>
                In the unlikely event of a data breach, we will notify affected users and relevant authorities as
                required by law, typically within 72 hours of discovery.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <h3>General Rights</h3>
              <p>You have the right to:</p>
              <ul>
                <li>
                  <strong>Access:</strong> Request a copy of the personal information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information (subject to legal
                  requirements)
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to another service
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing communications
                </li>
              </ul>

              <h3>GDPR Rights (EU Residents)</h3>
              <p>If you are in the European Union, you have additional rights under GDPR:</p>
              <ul>
                <li>
                  <strong>Right to Object:</strong> Object to processing based on legitimate interests
                </li>
                <li>
                  <strong>Right to Restrict:</strong> Request restriction of processing in certain circumstances
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Withdraw consent for processing based on consent
                </li>
                <li>
                  <strong>Right to Lodge a Complaint:</strong> File a complaint with your local data protection
                  authority
                </li>
              </ul>

              <h3>CCPA Rights (California Residents)</h3>
              <p>California residents have the right to:</p>
              <ul>
                <li>Know what personal information is collected and how it's used</li>
                <li>Delete personal information (subject to exceptions)</li>
                <li>Opt-out of the sale of personal information</li>
                <li>Non-discrimination for exercising privacy rights</li>
              </ul>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-purple-600" />
                <span>International Data Transfers</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place for international transfers, including:
              </p>
              <ul>
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Adequacy decisions by relevant authorities</li>
                <li>Certification schemes and codes of conduct</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                We retain your information for as long as necessary to provide our services and comply with legal
                obligations:
              </p>
              <ul>
                <li>
                  <strong>Account Information:</strong> Retained while your account is active and for a reasonable
                  period after closure
                </li>
                <li>
                  <strong>Business Listings:</strong> Retained while the listing is active and for historical purposes
                </li>
                <li>
                  <strong>Reviews:</strong> Retained indefinitely to maintain platform integrity
                </li>
                <li>
                  <strong>Usage Data:</strong> Typically retained for 2-3 years for analytics purposes
                </li>
                <li>
                  <strong>Legal Requirements:</strong> Some data may be retained longer to comply with legal obligations
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                Our Service is not intended for children under 18 years of age. We do not knowingly collect personal
                information from children under 18. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Privacy Policy */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p>
                For significant changes, we will provide more prominent notice, such as email notification or a notice
                on our homepage. We encourage you to review this Privacy Policy periodically.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Privacy Officer:</strong> privacy@cricaismus.com
                </p>
                <p>
                  <strong>General Contact:</strong> info@cricaismus.com
                </p>
                <p>
                  <strong>Address:</strong> Offic 3/15,
                              5th Floor,Silkcenter,
                               Rehmanabad,Murree Road,Rawalpindi
                </p>
                <p>
                  <strong>Phone:</strong> +92 (347)0458847 
                </p>
              </div>

              <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold mb-2">For EU Residents:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our EU representative can be contacted at: eu-privacy@cricaismus.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
