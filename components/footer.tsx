"use client"
import { useState } from 'react'
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call or form processing
    setTimeout(() => {
      console.log('Subscribed email:', email)
      setSubmitted(true)
      setIsLoading(false)
      setEmail('')
      
      // Reset the thank you message after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    }, 1000)
  }

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
            <div className="h-12 w-12 rounded-lg overflow-hidden">
  <img 
    src="favicons.png" 
    alt="Logo" 
    className="w-full h-full object-contain"
  />
</div>

              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Cricaismus
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted business directory connecting customers with local businesses.
            </p>
            <div className="flex space-x-2">
              {/* Facebook */}
              <Button 
                variant="ghost" 
                size="icon"
                aria-label="Facebook"
                className="text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                asChild
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61577376704267"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>

              {/* Instagram */}
              <Button 
                variant="ghost" 
                size="icon"
                aria-label="Instagram"
                className="text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                asChild
              >
                <a
                  href="https://www.instagram.com/autohunters1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>

              {/* LinkedIn */}
              <Button 
                variant="ghost" 
                size="icon"
                aria-label="LinkedIn"
                className="text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/masab-khadim-934b41284/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>

              {/* YouTube */}
              <Button 
                variant="ghost" 
                size="icon"
                aria-label="YouTube Channel"
                className="text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                asChild
              >
                <a
                  href="https://www.youtube.com/@AutoHunters-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>

              {/* WhatsApp */}
              <Button 
                variant="ghost" 
                size="icon"
                aria-label="Chat on WhatsApp"
                className="text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                asChild
              >
                <a
                  href="https://wa.me/923470458847"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/directory"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Business Directory
              </Link>
              <Link
                href="/blog"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Legal & Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal & Support</h3>
            <div className="space-y-2">
              <Link
                href="/terms"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/sitemap"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4"> 
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for the latest updates.</p>
            
            {submitted ? (
              <div className="text-center py-2 px-4 bg-green-100 text-green-700 rounded-md text-sm">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  size="sm" 
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            )}
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@cricaismus.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+92347 0458847</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Rhmanabad Rawalpindi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}