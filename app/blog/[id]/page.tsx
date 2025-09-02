"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/app/firebase/config"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, ArrowLeft, Share2, BookmarkPlus, ThumbsUp, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isLiked, setIsLiked] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "bloge", params.id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setPost(docSnap.data())
        } else {
          router.push("/not-found")
        }
      } catch (error) {
        console.error("Error fetching post:", error)
        router.push("/not-found")
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.id, router])

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 flex items-center justify-center">
  <div className="text-center pt-[100px]"> {/* 👈 Adjust spacing here */}
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Loading post...</p>
  </div>
</div>

    )
  }

  if (!post) return null

  return (
   <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
  {/* Modern Header Section */}
  <div className="relative">
    {/* Back Button - Fixed Position */}
    <div className="absolute top-6 left-6 z-20">
      <Button
        asChild
        variant="secondary"
        className="bg-white/90 backdrop-blur-md hover:bg-white shadow-lg border-0 text-gray-900"
      >
        <Link href="/blog">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Link>
      </Button>
    </div>

    {/* Hero Image */}
    <div className="relative h-[60vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
      <img src={post.imageUrl || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
    </div>
  </div>

  {/* Main Content Container */}
  <div className="relative -mt-20 z-20"> {/* 👈 changed from -mt-32 to -mt-20 */}
    <div className="container mx-auto px-6 max-w-4xl">
      {/* Main Content Card */}
      <Card className="bg-white/95 backdrop-blur-xl dark:bg-gray-900/95 shadow-2xl border-0 rounded-3xl overflow-hidden">
        <CardContent className="p-0">
          {/* Article Header */}
          <div className="p-8 pb-6">
            <div className="flex items-center justify-between mb-6">
              <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 text-sm font-medium">
                {post.category}
              </Badge>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime || "Informational"}</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              {post.title}
            </h1>

            {/* Author Section */}
            <div className="flex items-center space-x-4 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{post.author}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Published by cricaismus team
                </p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="px-8 pb-8">
            {/* Description */}
            <div
              className="mb-8 text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light"
              dangerouslySetInnerHTML={{ __html: post.description }}
            />

            {/* Main Content */}
            <div
              className="prose prose-xl dark:prose-invert max-w-none prose-headings:font-bold prose-headings:bg-gradient-to-r prose-headings:from-indigo-600 prose-headings:to-purple-600 prose-headings:bg-clip-text prose-headings:text-transparent prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-indigo-50 prose-blockquote:to-purple-50 dark:prose-blockquote:from-indigo-950/30 dark:prose-blockquote:to-purple-950/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:my-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags Section */}
            {post.tags && (
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Related Topics</h4>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag: string) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-200 hover:scale-105 rounded-full"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons - Moved to Bottom */}
          <div className="bg-gray-50 dark:bg-gray-800/50 px-8 py-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center space-x-4">
              <Button
                onClick={handleLike}
                variant="ghost"
                size="lg"
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-200 ${
                  isLiked
                    ? "bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <ThumbsUp className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                <span className="font-medium">{isLiked ? "Liked" : "Like"}</span>
              </Button>

              <Button
                onClick={handleShare}
                variant="ghost"
                size="lg"
                className="flex items-center space-x-2 px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <Share2 className="h-5 w-5" />
                <span className="font-medium">Share</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Spacing */}
      <div className="h-16"></div>
    </div>
  </div>
</div>

  )
}
