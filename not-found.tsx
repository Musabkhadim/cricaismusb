import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-ELRR0GWDL4"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ELRR0GWDL4');
          `,
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-black text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
              
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mb-6"></div>
          </div>

          {/* Error Message */}
          <div className="space-y-6 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Oops! Page Not Found</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
              The page you're looking for doesn't exist or has been moved. Don't worry, let's get you back on track!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
            >
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Go Home
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/directory">
                <Search className="h-5 w-5 mr-2" />
                Browse Directory
              </Link>
            </Button>

            <Button asChild variant="ghost" size="lg">
              <Link href="javascript:history.back()">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Go Back
              </Link>
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Looking for something specific? Try these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/directory" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Business Directory
              </Link>
              <Link href="/add-business" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Add Business
              </Link>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
