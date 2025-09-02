"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Filter, Building, Star, Globe, Grid3X3 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [isLoading, setIsLoading] = useState(false) // Add loading state

  const handleSearch = () => {
    setIsLoading(true) // Set loading to true when search starts
    
    // Build search URL with parameters
    const params = new URLSearchParams()
    if (searchQuery) params.set("q", searchQuery)
    if (location) params.set("location", location)
    if (category) params.set("category", category.toLowerCase())

    // Simulate a small delay for the loader to be visible
    setTimeout(() => {
      // Navigate to directory with search parameters
      window.location.href = `/directory?${params.toString()}`
    }, 500)
  }
  <head>
  <meta name="google-site-verification" content="1578af168b9d05d6" />
  
</head>

  const stats = [
    { icon: Building, value: "10K+", label: "Businesses", color: "text-blue-600" },
    { icon: Star, value: "50K+", label: "Reviews", color: "text-yellow-500" },
    { icon: Globe, value: "100+", label: "Cities", color: "text-green-600" },
    { icon: Grid3X3, value: "25+", label: "Categories", color: "text-purple-600" },
  ]

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-2 mt-[-20px]">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-1000">
                Discover Local
              </span>
              <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-1000 delay-200">
                Businesses
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium animate-in fade-in-0 duration-1000 delay-500">
              You can easily find the best local businesses and read their reviews on our website. We also give high
              quality backlinks to help websites grow.{" "}
              <span className="font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Cricaismus
              </span>
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 animate-in slide-in-from-bottom-4 duration-1000 delay-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative md:col-span-2">
                <Input
                  placeholder="Search businesses, services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  className="pr-12 h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 transition-all duration-300"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
              </div>
              <div className="relative">
                <Input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  className="pr-12 h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 transition-all duration-300"
                />
                <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
              </div>

              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="h-14 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500">
                  <Filter className="h-5 w-5 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="restaurants">Restaurants</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="automotive">Automotive</SelectItem>
                  <SelectItem value="beauty">Fitness</SelectItem>
                  <SelectItem value="beauty">Education</SelectItem>
                  <SelectItem value="beauty">Real Estate</SelectItem>
                  <SelectItem value="beauty">Professional</SelectItem>
                  <SelectItem value="beauty">Photography</SelectItem>
                  <SelectItem value="beauty">Entertainment</SelectItem>
                  <SelectItem value="beauty">other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleSearch}
              disabled={isLoading} // Disable button when loading
              className="w-full md:w-auto mt-6 h-14 px-12 text-lg bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative"
            >
              {isLoading ? (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                  </div>
                  <span className="opacity-0">Search Now</span> {/* Hidden but maintains button size */}
                </>
              ) : (
                <>
                  <Search className="h-5 w-5 mr-3" />
                  Search Now
                </>
              )}
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 animate-in fade-in-0 duration-1000 delay-1000">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-110 transition-all duration-300 animate-in slide-in-from-bottom-4"
                style={{ animationDelay: `${1200 + index * 100}ms` }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300`}
                  >
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div>
                    <div
                      className={`text-4xl md:text-5xl font-black ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}