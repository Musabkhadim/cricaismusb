"use client"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ArrowRight, Sparkles, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"



const categories = ["All Categories", "Business Tips", "Marketing", "Customer Service", "Finance", "Technology"]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const querySnapshot = await getDocs(collection(db, "bloge"))
        const data2 = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setPosts(data2)
        console.log(data2)
      } catch (error) {
        console.error("Error fetching posts:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Filter posts based on search and category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      !searchQuery ||
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category?.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  // Reset to page 1 when search or filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedCategory])

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  };

 
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
        {/* Smaller Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          <div className="relative py-16 md:py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center text-white">
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 mr-2 text-yellow-300" />
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-3 py-1 text-sm font-medium">
                    Latest Insights
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Business Growth  & Tips
                </h1>
                <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Discover  business growth strategies and stay updated with latest technology trends. And get best Business tips and tech trends to help you succeed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="relative -mt-12 z-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/95 backdrop-blur-xl dark:bg-gray-900/95 shadow-2xl border-0 rounded-3xl overflow-hidden">
                <CardContent className="p-6">
                  {/* Search Bar */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                         
    <Input
      placeholder="Search articles, topics, or keywords..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full pr-12 pl-4 h-12 text-base bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-indigo-500 dark:focus:border-indigo-400 transition-all duration-200"
    />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="flex items-center justify-between">
                    {/* <div className="flex items-center space-x-3">
                      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Category:</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-40 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg">
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
                    </div> */}
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {filteredPosts.length} articles found
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {loading ? (
              /* Nice Loader */
              <div className="flex flex-col items-center justify-center py-20">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-indigo-200 dark:border-indigo-800 rounded-full animate-spin"></div>
                  <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-indigo-600 rounded-full animate-spin"></div>
                </div>
                <p className="mt-6 text-lg font-medium text-gray-600 dark:text-gray-400 animate-pulse">
                  Loading amazing content...
                </p>
              </div>
            ) : (
              <>
                {/* Blog Grid - 3 cards per row, 6 total */}
                {currentPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {currentPosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  /* No Results State */
                  <div className="text-center py-20">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                      <Search className="h-12 w-12 text-indigo-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No articles found</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Try adjusting your search terms or browse all categories
                    </p>
                    <Button
                      onClick={() => {
                        setSearchQuery("")
                        setSelectedCategory("All Categories")
                      }}
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium"
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center space-x-4 mt-12">
                    <Button
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                      variant="outline"
                      className="flex items-center space-x-2 px-4 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span>Previous</span>
                    </Button>

                    <div className="flex items-center space-x-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                        <Button
                          key={pageNumber}
                          onClick={() => handlePageClick(pageNumber)}
                          variant={currentPage === pageNumber ? "default" : "outline"}
                          className={`w-10 h-10 rounded-full ${
                            currentPage === pageNumber
                              ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                              : "hover:bg-indigo-50 dark:hover:bg-indigo-950"
                          }`}
                        >
                          {pageNumber}
                        </Button>
                      ))}
                    </div>

                    <Button
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                      variant="outline"
                      className="flex items-center space-x-2 px-4 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
                    >
                      <span>Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

function BlogCard({ post }: { post: any }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="group hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 border-0 rounded-2xl overflow-hidden hover:-translate-y-2 cursor-pointer">
        <CardContent className="p-0">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={post.imageUrl || "/placeholder.svg?height=250&width=400"}
              alt={post.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="p-6 space-y-4">
            {/* Title */}
            <h3 className="text-lg font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 leading-tight">
              {post.title}
            </h3>

            {/* 5 Star Rating */}
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Read More Button */}
            <Button
              variant="ghost"
              size="sm"
              className="w-full group/btn hover:bg-indigo-50 dark:hover:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-medium py-2 rounded-lg transition-all duration-200 mt-4"
            >
              Read More
              <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
