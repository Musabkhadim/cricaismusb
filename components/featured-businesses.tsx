"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const featuredBusinesses = [
  {
    id: 1,
    name: "Bella Vista Restaurant",
    category: "Restaurant",
    rating: 4.8,
    reviews: 124,
    location: "Downtown, New York",
    phone: "+1 (555) 123-4567",
    image: "/placeholder.svg?height=200&width=300",
    description: "Authentic Italian cuisine with a modern twist",
    featured: true,
  },
  {
    id: 2,
    name: "TechFix Solutions",
    category: "Technology",
    rating: 4.9,
    reviews: 89,
    location: "Tech District, San Francisco",
    phone: "+1 (555) 987-6543",
    image: "/placeholder.svg?height=200&width=300",
    description: "Professional computer and mobile device repair",
    featured: true,
  },
  {
    id: 3,
    name: "Green Leaf Spa",
    category: "Beauty & Wellness",
    rating: 4.7,
    reviews: 156,
    location: "Wellness Center, Los Angeles",
    phone: "+1 (555) 456-7890",
    image: "/placeholder.svg?height=200&width=300",
    description: "Relaxing spa treatments and wellness services",
    featured: true,
  },
  {
    id: 4,
    name: "Urban Fitness Hub",
    category: "Fitness",
    rating: 4.6,
    reviews: 203,
    location: "Sports Complex, Chicago",
    phone: "+1 (555) 321-0987",
    image: "/placeholder.svg?height=200&width=300",
    description: "Modern gym with personal training services",
    featured: true,
  },
]

export function FeaturedBusinesses() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredBusinesses.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredBusinesses.length) % featuredBusinesses.length)
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Businesses</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover top-rated businesses in your area, handpicked for their excellent service and customer satisfaction
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredBusinesses.map((business) => (
                <div key={business.id} className="w-full flex-shrink-0 px-2">
                  <BusinessCard business={business} />
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/directory">View All Businesses</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function BusinessCard({ business }: { business: (typeof featuredBusinesses)[0] }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={business.image || "/placeholder.svg"}
            alt={business.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-3 left-3 bg-blue-600">Featured</Badge>
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{business.name}</h3>
            <p className="text-sm text-muted-foreground">{business.description}</p>
          </div>

          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(business.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{business.rating}</span>
            <span className="text-sm text-muted-foreground">({business.reviews})</span>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{business.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{business.phone}</span>
            </div>
          </div>

          <Button asChild className="w-full">
            <Link href={`/business/${business.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
