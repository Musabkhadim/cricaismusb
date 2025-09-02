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
                Cricaismus ("we", "our", or "us") is committed to protecting your 
                  privacy. This Privacy Policy explains how your personal information 
                   is collected, used, and disclosed by Cricaismus when you visit our 
                    website or use our services.
              </p>
              <p>
                This policy applies to all information collected or submitted on the  
                Cricaismus platform, including our business directory listings,  
                 do-follow backlinks services, customer reviews, blog tips,
                  and marketing tools. By using our Service, you agree to the collection 
                  and use of information in accordance with this policy.
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
                  <strong>Account Information:</strong>Name, email address, phone number, and password when you create an account.  
                </li>
                <li>
                  <strong>Business Information:</strong>Business name, address, description, hours, services, and photos when you create a business listing.
                </li>
                <li>
                  <strong>Communication:</strong>Messages, reviews, feedback, and other content you submit through our platform.
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
                  <strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.
                </li>
                <li>
                  <strong>Location Information:</strong> General location based on IP address (with your consent for precise location).
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> Information collected through cookies and similar technologies
                </li>
              </ul>

              <h3>Information from Third Parties</h3>
              <ul>
                <li>
                  <strong>Social Media:</strong> Information when you connect your social media accounts with Cricaismus.
                </li>
                <li>
                  <strong>Business Partners:</strong> Information shared by our partners or service providers to enhance listings and services
                </li>
                <li>
                  <strong>Public Sources:</strong> Publicly available information about businesses for directory purposes.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* How We Use Information */}
        

          {/* Information Sharing */}
         

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
               Cookies are small text files stored on your device 
               that help Cricaismus provide, personalize, and improve 
               our services. We use both session cookies (which expire when you
                close your browser) and persistent cookies (which remain until you 
                delete them)..
              </p>

              <h3>Types of Cookies We Use</h3>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Required for secure login, account management, and core website functionality such as business listings and reviews.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors use Cricaismus (e.g., most visited business listings, blog interactions) so we can improve user experience
                </li>
                <li>
                  <strong>Advertising Cookies:</strong> Used by Google AdSense and other partners to show relevant ads, track ad performance, and support our free business directory service.
                </li>
                <li>
                  <strong>Preference Cookies:</strong>Remember your settings (such as language, display mode, and saved searches) to make your experience smoother.
                </li>
              </ul>

              <h3>Managing Cookies</h3>
              <p>
                You can control cookies through your browser settings. However, disabling certain cookies may affect
                website functionality. Most browsers allow you to:You can
                 manage or disable cookies anytime through your browser settings. 
                 Please note that disabling certain cookies may affect the functionality of 
                 Cricaismus, including access to business directory listings, reviews, and
                  personalized recommendations.
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
              <p>At Cricaismus, we take the security of your personal and business information very seriously. We implement industry-standard technical and organizational measures to keep your data safe, including::</p>
              <ul>
                <li>
                  <strong>Encryption:</strong> All personal data, including business listings and user reviews, is encrypted in transit and at rest using secure protocols (HTTPS, SSL, TLS)
                </li>
                <li>
                  <strong>Access Controls:</strong> Only authorized personnel with a legitimate business need can access sensitive data.
                </li>
                <li>
                  <strong>Regular Audits:</strong> We conduct frequent security audits and vulnerability testing to protect against unauthorized access.
                </li>
                <li>
                  <strong>Secure Infrastructure:</strong> Cricaismus is hosted on trusted, secure cloud providers with robust firewalls and monitoring systems
                </li>
                <li>
                  <strong>Employee Training:</strong> Our team undergoes continuous training on data privacy and security best practices to protect your information.
                </li>
              </ul>

              <h3>Data Breach Response</h3>
              <p>
                In the unlikely event of a data breach:

We will immediately investigate the incident and take corrective measures.

Affected users and businesses will be notified promptly.

Relevant authorities will be informed as required by applicable law, typically within 72 hours of discovery.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="border-0 shadow-lg">
  <CardHeader>
    <CardTitle>Your Privacy Rights</CardTitle>
  </CardHeader>
  <CardContent className="prose max-w-none dark:prose-invert">
    <h3>General Rights (All Users)</h3>
    <p>
      At <strong>Cricaismus</strong>, we respect your privacy and give you full control
      over your personal and business information. You can request to:
    </p>
    <ul>
      <li>
        <strong>Access:</strong> Obtain a copy of the personal or business information
        (e.g., your directory listings, reviews, backlinks data) we hold about you.
      </li>
      <li>
        <strong>Correction:</strong> Request correction of inaccurate or incomplete
        details.
      </li>
      <li>
        <strong>Deletion:</strong> Request deletion of your account, business listings,
        or reviews (subject to legal or operational requirements).
      </li>
      <li>
        <strong>Portability:</strong> Request transfer of your data (e.g., listings,
        backlinks) to another service provider.
      </li>
      <li>
        <strong>Opt-out:</strong> Unsubscribe from marketing emails or promotional
        updates anytime.
      </li>
    </ul>

    <h3>GDPR Rights (EU Residents)</h3>
    <p>
      If you are in the <strong>European Union</strong>, you also have additional
      rights under GDPR:
    </p>
    <ul>
      <li>
        <strong>Right to Object:</strong> Object to processing of your business or
        personal data based on our legitimate interests (e.g., directory promotion).
      </li>
      <li>
        <strong>Right to Restrict:</strong> Request temporary restriction of processing
        in specific cases.
      </li>
      <li>
        <strong>Right to Withdraw Consent:</strong> Withdraw consent where we rely on
        your permission (e.g., newsletters or marketing).
      </li>
      <li>
        <strong>Right to Lodge a Complaint:</strong> File a complaint with your local
        Data Protection Authority if you believe your rights are violated.
      </li>
    </ul>

    <h3>CCPA Rights (California Residents)</h3>
    <p>
      If you are a <strong>California resident</strong>, you may exercise these rights
      under the California Consumer Privacy Act (CCPA):
    </p>
    <ul>
      <li>
        <strong>Know:</strong> Request details on what personal or business information
        we collect and how we use it (e.g., directory listings, backlinks, or reviews).
      </li>
      <li>
        <strong>Delete:</strong> Request deletion of your personal or business data
        (with certain legal exceptions).
      </li>
      <li>
        <strong>Opt-out:</strong> Choose to opt-out of the “sale” of personal
        information (Cricaismus does not sell personal data).
      </li>
      <li>
        <strong>Non-Discrimination:</strong> You will not face discrimination for
        exercising your privacy rights.
      </li>
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
      We retain your information only for as long as necessary to provide our services, ensure SEO value for
      business listings and backlinks, comply with legal obligations, and maintain the integrity of our platform:
    </p>
    <ul>
      <li>
        <strong>Account Information:</strong> Retained while your account is active and for a reasonable period
        after closure for reactivation or dispute resolution.
      </li>
      <li>
        <strong>Business Listings & Backlinks:</strong> Retained as long as the listing remains active. Archived
        listings may be preserved for historical and SEO purposes.
      </li>
      <li>
        <strong>Reviews & Ratings:</strong> Retained indefinitely to maintain platform transparency, trust, and
        directory accuracy.
      </li>
      <li>
        <strong>Usage Data (Analytics, Cookies, IP logs):</strong> Typically retained for 24–36 months to improve
        user experience and detect fraudulent activity.
      </li>
      <li>
        <strong>Marketing & Communication Data:</strong> Retained until you opt-out or unsubscribe from
        promotional emails and notifications.
      </li>
      <li>
        <strong>Security & Fraud Prevention Data:</strong> Retained for up to 12 months to investigate, monitor,
        and prevent abuse.
      </li>
      <li>
        <strong>Legal Requirements:</strong> Some data may be retained longer where required by applicable law
        (e.g., tax, regulatory, or security obligations).
      </li>
      <li>
        <strong>Anonymized/Archived Data:</strong> Certain information may be anonymized and stored for research,
        reporting, and SEO optimization purposes.
      </li>
    </ul>
  </CardContent>
</Card>

          {/* Children's Privacy */}
        

          {/* Changes to Privacy Policy */}
          {/* <Card className="border-0 shadow-lg">
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
          </Card> */}

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
                  <strong>Privacy Officer:</strong>info@cricaismus.com
                </p>
                <p>
                  <strong>General Contact:</strong> musabkhadim363@gmail.com
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
