"use client"
import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/app/firebase/config"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  MapPin,
  Phone,
  Globe,
  Clock,
  Share2,
  Heart,
  Camera,
  Play,
  MessageSquare,
  Flag,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
// Removed ReviewSection import as it's no longer used
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Define the type for business data fetched from Firestore
interface BusinessData {
  businessName: string
  category: string
  description: string
  address: string
  city: string
  state: string
  zipCode: string
  phone: string
  email: string
  website?: string
  services: string[]
  hours: {
    monday: { open: string; close: string; closed: boolean }
    tuesday: { open: string; close: string; closed: boolean }
    wednesday: { open: string; close: string; closed: boolean }
    thursday: { open: string; close: string; closed: boolean }
    friday: { open: string; close: string; closed: boolean }
    saturday: { open: string; close: string; closed: boolean }
    sunday: { open: string; close: string; closed: boolean }
  }
  logoUrl?: string
  imageUrls?: string[]
  socialLinks?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
  premiumListing: boolean
  createdAt: string
  updatedAt: string
}

export default function BusinessPage({ params }: { params: { id: string } }) {
  const [business, setBusiness] = useState<BusinessData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false) // State for favorite button

  useEffect(() => {
    const fetchBusiness = async () => {
      if (!params.id) {
        setError("Business ID is missing.")
        setLoading(false)
        return
      }

      try {
        const docRef = doc(db, "directory", params.id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          const data = docSnap.data() as BusinessData
          setBusiness(data)
        } else {
          setError("No such business found!")
        }
      } catch (err) {
        console.error("Error fetching business:", err)
        setError("Failed to load business data.")
      } finally {
        setLoading(false)
      }
    }

    fetchBusiness()
  }, [params.id])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: business?.businessName || "Business Listing",
          text: `Check out ${business?.businessName || "this business"} on our directory!`,
          url: window.location.href,
        })
        console.log("Content shared successfully")
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      // Fallback for browsers that do not support navigator.share
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert("Link copied to clipboard!")
      } catch (err) {
        console.error("Failed to copy: ", err)
        alert("Could not copy link to clipboard.")
      }
    }
  }

  if (loading) {
    return (
     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
  {/* Blurred Overlay */}
  <div className="absolute inset-0 backdrop-blur-sm bg-white/30 dark:bg-black/30 z-0"></div>

  {/* Loader Content */}
  <div className="z-10 flex flex-col items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-6"></div>
    <p className="text-xl text-gray-700 dark:text-gray-300 font-medium animate-pulse">
      Loading.... <span className="text-blue-600 font-bold"></span> 
    </p>
  </div>
</div>

    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    )
  }

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-lg text-gray-700 dark:text-gray-300">Business not found.</p>
      </div>
    )
  }

  // Helper to format hours for display
  const formatHours = (dayHours: { open: string; close: string; closed: boolean }) => {
    if (dayHours.closed) {
      return "Closed"
    }
    if (!dayHours.open || !dayHours.close) {
      return "Hours not specified"
    }
    return `${dayHours.open} - ${dayHours.close}`
  }

  // Combine address fields for display
  const fullAddress = `${business.address}, ${business.city}, ${business.state} ${business.zipCode}`

  // Use business.imageUrls for images, default to placeholder if empty
  const displayImages =
    business.imageUrls && business.imageUrls.length > 0 ? business.imageUrls : ["/placeholder.svg?height=400&width=600"]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Image Gallery */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src={displayImages[selectedImage] || "/placeholder.svg"}
                  alt={business.businessName}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button size="icon" variant="secondary" className="bg-white/80 hover:bg-white">
                    <Camera className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/80 hover:bg-white">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex space-x-2 mt-4 overflow-x-auto">
                {displayImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-blue-500" : "border-transparent"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${business.businessName} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* Business Info */}
            <div className="lg:w-1/2 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold">{business.businessName}</h1>
                    {business.premiumListing && <Badge className="bg-green-600">Premium</Badge>}
                  </div>
                  {/* Category tag should be green */}
                  <Badge variant="default" className="bg-green-600 text-white mb-2">
                    {business.category}
                  </Badge>
                  {/* Rating and reviews - mock for now as not in Firestore data */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(4.5) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">4.5</span>
                    {/* <span className="text-muted-foreground">{" (124 reviews)"}</span> */}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="icon" variant="outline" onClick={() => setIsFavorite(!isFavorite)}>
                    <Heart className={`h-4 w-4 ${isFavorite ? "text-red-500 fill-current" : ""}`} />
                  </Button>
                  <Button size="icon" variant="outline" onClick={handleShare}>
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {/* Description should be bold and larger */}
              <div
                className="text-lg font-bold text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: business.description }}
              />
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>{fullAddress}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>{business.phone}</span>
                </div>
                {business.website && (
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <a
                      href={business.website}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content Tabs */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          {/* Contact section should have 3 tabs: Overview, Photo, Contact */}
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Services */}
                {/* <Card>
                  <CardHeader>
                    <CardTitle>Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {business.services.map((service) => (
                        <Badge key={service} variant="secondary" className="justify-center">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card> */}

                {/* Social Media Links - New Card */}
                {business.socialLinks &&
                  (business.socialLinks.facebook ||
                    business.socialLinks.twitter ||
                    business.socialLinks.instagram ||
                    business.socialLinks.linkedin) && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Social Media</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {business.socialLinks.facebook && (
                            <a
                              href={business.socialLinks.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-3 text-blue-600 hover:underline"
                            >
                              <Facebook className="h-5 w-5" />
                              <span>Facebook</span>
                            </a>
                          )}
                          {business.socialLinks.instagram && (
                            <a
                              href={business.socialLinks.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-3 text-pink-600 hover:underline"
                            >
                              <Instagram className="h-5 w-5" />
                              <span>Instagram</span>
                            </a>
                          )}
                          {business.socialLinks.twitter && (
                            <a
                              href={business.socialLinks.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-3 text-blue-400 hover:underline"
                            >
                              <Twitter className="h-5 w-5" />
                              <span>Twitter</span>
                            </a>
                          )}
                          {business.socialLinks.linkedin && (
                            <a
                              href={business.socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-3 text-blue-700 hover:underline"
                            >
                              <Linkedin className="h-5 w-5" />
                              <span>LinkedIn</span>
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                {/* Amenities - mock for now as not in Firestore data */}
                {/* <Card>
                  <CardHeader>
                    <CardTitle>Amenities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Wheelchair Accessible",
                        "Outdoor Seating",
                        "Free WiFi",
                        "Parking Available",
                        "Accepts Credit Cards",
                        "Reservations Recommended",
                      ].map((amenity) => (
                        <div key={amenity} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card> */}
                {/* Map */}
                <Card>
                  <CardHeader>
                   
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground"> (Google ads)</p>
                    </div>
              
                  </CardContent>
                </Card>
              </div>
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span>Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {Object.entries(business.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between text-sm">
                          <span className="capitalize font-medium">{day}</span>
                          <span className="text-muted-foreground">{formatHours(hours)}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                  <Link href="/contact" className="w-full">
                  <Button className="w-full bg-transparent text-black" variant="outline">
                    <Flag className="h-4 w-4 mr-2" />
                        Claim This Listing
                              </Button>
                              </Link>
                              <Link href="/contact" className="w-full">
                               <Button className="w-full bg-transparent text-black" variant="outline">
                                  Report Issue
                                </Button>
                              </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          {/* Removed ReviewSection TabsContent */}
          <TabsContent value="photos">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {displayImages.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={image || "/placeholder.svg"}
                    
                    alt={`${business.businessName} photo ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">{business.phone}</p>
                    </div>
                  </div>
                  {business.website && (
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Website</p>
                        <a
                          href={business.website}
                          className="text-blue-600 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {business.website}
                        </a>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">{fullAddress}</p>
                    </div>
                  </div>
                  {business.email && (
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">{business.email}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="contactName" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="contactName" type="text" className="w-full mt-1" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="contactEmail" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="contactEmail" type="email" className="w-full mt-1" placeholder="Your email" />
                    </div>
                    <div>
                      <label htmlFor="contactMessage" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="contactMessage"
                        className="flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                        rows={4}
                        placeholder="Your message"
                      />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
