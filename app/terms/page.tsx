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
                <Shield className="h-5 w-5 text-blue-600" />
                <span>Agreement to Terms</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with Cricaismus
                website (the "Service") operated by Cricaismus ("us", "we", or "our").
              </p>
              <p>
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these
                Terms. These Terms apply to all visitors, users and others who access or use the Service.
              </p>
              <p>
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of
                these terms then you may not access the Service.
              </p>
            </CardContent>
          </Card>

          {/* User Accounts */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-600" />
                <span>User Accounts</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <h3>Account Creation</h3>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current
                at all times. You are responsible for safeguarding the password and for all activities that occur under
                your account.
              </p>

              <h3>Account Responsibilities</h3>
              <ul>
                <li>You must be at least 18 years old to create an account</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>You may not use another person's account without permission</li>
              </ul>

              <h3>Account Termination</h3>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms.
              </p>
            </CardContent>
          </Card>

          {/* Business Listings */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Business Listings</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <h3>Listing Requirements</h3>
              <p>
                Business listings must be accurate, truthful, and represent legitimate businesses. We reserve the right
                to review, modify, or remove any listing that violates our guidelines.
              </p>

              <h3>Prohibited Content</h3>
              <ul>
                <li>False, misleading, or deceptive information</li>
                <li>Illegal products or services</li>
                <li>Adult content or services</li>
                <li>Discriminatory practices</li>
                <li>Spam or duplicate listings</li>
                <li>Copyrighted material without permission</li>
              </ul>

              <h3>Listing Ownership</h3>
              <p>
                You retain ownership of the content you submit, but grant us a license to use, display, and distribute
                your content on our platform. You represent that you have the right to submit all content in your
                listing.
              </p>
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
              <h3>Acceptable Use</h3>
              <p>You agree not to use the Service:</p>
              <ul>
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>
                  To violate any international, federal, provincial, or state regulations, rules, laws, or local
                  ordinances
                </li>
                <li>
                  To infringe upon or violate our intellectual property rights or the intellectual property rights of
                  others
                </li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
                <li>To interfere with or circumvent the security features of the Service</li>
              </ul>
            </CardContent>
          </Card>

          {/* Reviews and Ratings */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Reviews and Ratings</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <h3>Review Guidelines</h3>
              <p>
                Reviews must be based on genuine experiences and must not contain offensive language, personal attacks,
                or discriminatory content. We reserve the right to remove reviews that violate our guidelines.
              </p>

              <h3>Review Authenticity</h3>
              <ul>
                <li>Reviews must be written by actual customers</li>
                <li>Fake reviews or review manipulation is prohibited</li>
                <li>Business owners may not review their own businesses</li>
                <li>Incentivized reviews must be disclosed</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                The Service and its original content, features and functionality are and will remain the exclusive
                property of Cricaismus and its licensors. The Service is protected by copyright, trademark, and other
                laws.
              </p>

              <h3>User Content License</h3>
              <p>
                By posting content to the Service, you grant us a worldwide, non-exclusive, royalty-free license to use,
                reproduce, modify, adapt, publish, translate, distribute, and display such content.
              </p>
            </CardContent>
          </Card>

          {/* Privacy and Data */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
                Service, to understand our practices.
              </p>

              <h3>Data Collection</h3>
              <p>
                We collect information you provide directly to us, information we obtain automatically when you use our
                Service, and information from third parties.
              </p>
            </CardContent>
          </Card>

          {/* Disclaimers */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Disclaimers and Limitations</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <h3>Service Availability</h3>
              <p>
                We do not guarantee that the Service will be available at all times. We may experience hardware,
                software, or other problems or need to perform maintenance related to the Service.
              </p>

              <h3>Third-Party Content</h3>
              <p>
                We are not responsible for the accuracy, completeness, or usefulness of any information provided by
                third parties, including business listings and user reviews.
              </p>

              <h3>Limitation of Liability</h3>
              <p>
                In no event shall Cricaismus, nor its directors, employees, partners, agents, suppliers, or affiliates,
                be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms.
              </p>

              <p>
                Upon termination, your right to use the Service will cease immediately. If you wish to terminate your
                account, you may simply discontinue using the Service.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                These Terms shall be interpreted and governed by the laws of the State of New York, United States,
                without regard to its conflict of law provisions.
              </p>

              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none dark:prose-invert">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will try to provide at least 30 days notice prior to any new terms taking
                effect.
              </p>

              <p>
                What constitutes a material change will be determined at our sole discretion. By continuing to access or
                use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <strong>Email:</strong> legal@cricaismus.com
                </p>
                <p>
                  <strong>Address:</strong> 123 Business Street, Suite 100, New York, NY 10001
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
