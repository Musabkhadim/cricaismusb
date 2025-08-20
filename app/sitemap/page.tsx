import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, FileText, Building, Users, MessageSquare, Shield } from "lucide-react"
import Link from "next/link"

const sitemapSections = [
  {
    title: "Main Pages",
    icon: Globe,
    links: [
      { href: "/", label: "Home" },
      { href: "/directory", label: "Business Directory" },
      { href: "/blog", label: "Blog" },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
    ],
  },
 
  {
    title: "User Account",
    icon: Users,
    links: [
    
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  },
 
 
  
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Sitemap
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Navigate through all pages and sections of Cricaismus
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sitemapSections.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <section.icon className="h-5 w-5 text-blue-600" />
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-1"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>XML Sitemap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  For search engines and automated tools, our XML sitemap is available at:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <code className="text-sm">https://cricaismus.com/sitemap.xml</code>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Robots.txt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our robots.txt file provides instructions for web crawlers:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <code className="text-sm">https://cricaismus.com/robots.txt</code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
