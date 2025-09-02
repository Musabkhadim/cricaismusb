"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, MapPin, Phone, Filter, Search, Grid, List, Clock, Globe } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/app/firebase/config"
import { metadata } from "@/layout"



// Re-using the BusinessData interface from the business page
interface BusinessData {
  id: string // Added for document ID
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

const categories = [
  "All Categories",
  "Restaurant",
  "Technology",
  "Healthcare",
  "Retail",
  "Services",
  "Automotive",
  "Beauty & Spa",
  "Fitness",
  "Education",
  "Real Estate",
  "Professional",
  "Photography ",
  "Entertainment",
  "other",
]



// Removed ratings filter as per request


export default function DirectoryPage() {
  const [businesses, setBusinesses] = useState<BusinessData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedCity, setSelectedCity] = useState("All Cities")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [premiumOnly, setPremiumOnly] = useState(false) // Renamed from verifiedOnly

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const searchParams = useSearchParams()

  useEffect(() => {
    const fetchBusinesses = async () => {
      setLoading(true)
      setError(null)
      try {
        const querySnapshot = await getDocs(collection(db, "directory"))
        const fetchedBusinesses: BusinessData[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<BusinessData, "id">),
        }))
        setBusinesses(fetchedBusinesses)
      } catch (err) {
        console.error("Error fetching businesses:", err)
        setError("Failed to load businesses. Please check your Firebase configuration and network connection.")
      } finally {
        setLoading(false)
      }
    }

    fetchBusinesses()
  }, [])

  useEffect(() => {
    const query = searchParams.get("q") || ""
    const location = searchParams.get("location") || ""
    const category = searchParams.get("category") || "All Categories"
    setSearchQuery(query)
    setSelectedCity(location ? location : "All Cities")
    setSelectedCategory(category.charAt(0).toUpperCase() + category.slice(1))
  }, [searchParams])

  const filteredBusinesses = businesses.filter((business) => {
    if(business.businessName!=undefined)
    {
      const matchesSearch =
      !searchQuery ||
      business?.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business?.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business?.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "All Categories" || business.category === selectedCategory

    const matchesCity = selectedCity === "All Cities" || business.city === selectedCity

    const matchesPremium = !premiumOnly || business.premiumListing

    return matchesSearch && matchesCategory && matchesCity && matchesPremium
    }
    
  return business
  })

  // Pagination calculations
  const indexOfLastBusiness = currentPage * itemsPerPage
  const indexOfFirstBusiness = indexOfLastBusiness - itemsPerPage
  const currentBusinesses = filteredBusinesses.slice(indexOfFirstBusiness, indexOfLastBusiness)
  const totalPages = Math.ceil(filteredBusinesses.length / itemsPerPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const handleFilterApply = () => {
    setShowFilters(false)
    setCurrentPage(1) // Reset to first page on filter apply
  }

  const clearFilters = () => {
    setSelectedCategory("All Categories")
    setSelectedCity("All Cities")
    // setSelectedRating(null) // Removed as per request
    setPremiumOnly(false)
    setSearchQuery("")
    setCurrentPage(1) // Reset to first page on clear filters
  }

  // Extract unique cities from fetched businesses for the city filter dropdown
  const uniqueCities = ["All Cities", ...new Set(businesses.map((b) => b.city).filter(Boolean))].sort()

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
  {/* Spinner */}
  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-6"></div>

  {/* Loading Text */}
  <p className="text-xl text-gray-700 dark:text-gray-300 font-medium animate-pulse">
    loading....<span className="text-blue-600 font-bold"></span> 
  </p>
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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white pt-[0px]">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Businesses in Your Area</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">Find the best local businesses & Services in Your Area on Cricaismus.  discover restaurants, healthcare, retail & professional services with verified listings and reviews ."</p>
            </div>
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                <Input
                  placeholder="Search businesses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-16 text-lg bg-white/90 backdrop-blur-sm border-0 shadow-lg text-black"
                />
                <Button
                  onClick={handleFilterApply}
                  className="absolute right-2 top-2 h-12 px-6 bg-blue-600 hover:bg-blue-700"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:w-80 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Filters</h3>
                    <Button variant="outline" size="sm" onClick={clearFilters}>
                      Clear All
                    </Button>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-semibold mb-3 block">Business Category</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-3 block">Location</label>
                      <Select value={selectedCity} onValueChange={setSelectedCity}>
                        <SelectTrigger className="h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {uniqueCities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {/* Minimum Rating filter removed as per request */}
                    {/* <div>
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="premium"
                          checked={premiumOnly}
                          onCheckedChange={(checked) => setPremiumOnly(checked as boolean)}
                        />
                        <label htmlFor="premium" className="text-sm font-medium cursor-pointer">
                          Premium Businesses Only
                        </label>
                      </div>
                    </div> */}  
                    <Button
                      onClick={handleFilterApply}
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                    >
                      Apply Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
              {/* New box for Google Ads */}
              <Card className="shadow-lg">
                {/* <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Advertise Here</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Reach more customers by featuring your business.
                  </p>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">Learn More</Button>
                </CardContent> */}
              </Card>
            </div>
            {/* Results */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Showing {filteredBusinesses.length} results
                  </p>
                  {(selectedCategory !== "All Categories" || selectedCity !== "All Cities" || premiumOnly) && (
                    <Badge variant="outline" className="text-sm">
                      Filters Applied
                    </Badge>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={viewMode === "grid" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    {/* <Button
                      variant={viewMode === "list" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                    </Button> */}
                  </div>
                </div>
              </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {currentBusinesses.map((business) => (
    <BusinessCard key={business.id} business={business} viewMode={viewMode} />
  ))}
</div>

              {filteredBusinesses.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <Search className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No businesses found</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear All Filters
                  </Button>
                </div>
              )}
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-8">
                  <Button variant="outline" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <Button
                      key={pageNumber}
                      variant={currentPage === pageNumber ? "default" : "outline"}
                      onClick={() => paginate(pageNumber)}
                    >
                      {pageNumber}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function BusinessCard({
  business,
  viewMode,
}: {
  business: BusinessData
  viewMode: "grid" | "list"
}) {
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

  // Use logoUrl or first imageUrl, fallback to placeholder
  const displayImage =
    business.logoUrl || (business.imageUrls && business.imageUrls[0]) || "/placeholder.svg?height=200&width=300"

  // Mock rating and reviews as they are not in Firestore data
  const mockRating = 4.5
  // const mockReviews = 95 // Keeping mock reviews count for display

  if (viewMode === "list") {
    return (
      <Link href={`/business/${business.id}`} className="block">
        <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-64 h-48 md:h-auto relative">
                <img
                  src={displayImage || "/placeholder.svg"}
                  alt={business.businessName}
                  className="w-full h-full object-cover rounded-l-lg"
                />
                {business.premiumListing && (
                  <Badge className="absolute top-3 left-3 bg-green-600 text-white">Premium</Badge>
                )}
              </div>
              <div className="flex-1 p-6">
                <div className="flex flex-col md:flex-row md:justify-between h-full">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {business.businessName}
                        </h3>
                        {/* Category badge moved to top right for grid, keeping it here for list for now */}
                      </div>
                      <Badge variant="default" className="bg-green-600 text-white text-xs ml-auto">
                        {business.category}
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{business.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>{fullAddress}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 flex-shrink-0" />
                        <span>{business.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 flex-shrink-0" />
                        <span className="line-clamp-1">
                         {
                          business?.hours!=null?
                           Object.entries(business?.hours)
                            .map(([day, hours]) => `${day}: ${formatHours(hours)}`)
                            .join("; ")
                            :null
                         }
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 flex-shrink-0" />
                        <span>{business.website}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 flex flex-col justify-between">
                    <div className="text-right mb-4">
                      <div className="flex items-center space-x-1 mb-1 justify-end">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(mockRating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm font-medium ml-1">{mockRating}</span>
                        <span className="text-sm text-gray-500"></span>
                      </div>
                    </div>
                    {/* Removed "View Details" button as the whole card is a link */}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    )
  }
  return (
    <Link href={`/business/${business.id}`} className="block">
      <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <CardContent className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={displayImage || "/placeholder.svg"}
              alt={business.businessName}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {business.premiumListing && (
              <Badge className="absolute top-3 left-3 bg-green-600 text-white">Premium</Badge>
            )}
            {/* Category badge green, small, right side in top in picture */}
            <Badge variant="default" className="absolute top-3 right-3 bg-green-600 text-white text-xs">
              {business.category}
            </Badge>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <div className="flex items-start justify-between mb-2">
                {/* Business name full show - removed line-clamp-1 */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {business.businessName}
                </h3>
              </div>
              {/* Description is now optional in grid view as per original code, but can be added back */}
              {/* <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{business.description}</p> */}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(mockRating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
                <span className="text-sm font-medium ml-1">{mockRating}</span>
                <span className="text-sm text-gray-500"></span>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="line-clamp-1">{fullAddress}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{business.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span className="line-clamp-1">
                    {
                          business?.hours!=null?
                           Object.entries(business?.hours)
                            .map(([day, hours]) => `${day}: ${formatHours(hours)}`)
                            .join("; ")
                            :null
                         }
                </span>
              </div>
            </div>
            <Button asChild className="w-full">
            <Link href={`/business/${business.id}`}>View Details</Link>
          </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
