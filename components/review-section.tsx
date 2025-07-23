"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star, ThumbsUp, ThumbsDown, Flag } from "lucide-react"

const reviews = [
  {
    id: 1,
    author: "Sarah Johnson",
    rating: 5,
    date: "2024-01-15",
    text: "Absolutely amazing experience! The food was incredible and the service was top-notch. Will definitely be coming back.",
    helpful: 12,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    author: "Mike Chen",
    rating: 4,
    date: "2024-01-10",
    text: "Great atmosphere and delicious food. The pasta was perfectly cooked. Only minor complaint is that it was a bit noisy.",
    helpful: 8,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    author: "Emily Davis",
    rating: 5,
    date: "2024-01-08",
    text: "Best Italian restaurant in the city! The staff was incredibly friendly and accommodating. Highly recommend the tiramisu!",
    helpful: 15,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

interface ReviewSectionProps {
  businessId: number
}

export function ReviewSection({ businessId }: ReviewSectionProps) {
  const [newReview, setNewReview] = useState("")
  const [newRating, setNewRating] = useState(0)
  const [showReviewForm, setShowReviewForm] = useState(false)

  const handleSubmitReview = () => {
    // Handle review submission
    console.log({ rating: newRating, text: newReview, businessId })
    setNewReview("")
    setNewRating(0)
    setShowReviewForm(false)
  }

  return (
    <div className="space-y-6">
      {/* Review Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8</div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                ))}
              </div>
              <p className="text-muted-foreground">Based on 124 reviews</p>
            </div>

            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center space-x-2">
                  <span className="text-sm w-8">{stars}★</span>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : 5}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-8">
                    {stars === 5 ? 87 : stars === 4 ? 25 : stars === 3 ? 8 : stars === 2 ? 3 : 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Write Review */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Write a Review</CardTitle>
            <Button onClick={() => setShowReviewForm(!showReviewForm)} variant={showReviewForm ? "outline" : "default"}>
              {showReviewForm ? "Cancel" : "Write Review"}
            </Button>
          </div>
        </CardHeader>
        {showReviewForm && (
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Rating</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => setNewRating(star)} className="focus:outline-none">
                    <Star
                      className={`h-6 w-6 ${star <= newRating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Your Review</label>
              <Textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder="Share your experience..."
                rows={4}
              />
            </div>

            <Button onClick={handleSubmitReview} disabled={!newRating || !newReview.trim()}>
              Submit Review
            </Button>
          </CardContent>
        )}
      </Card>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <img src={review.avatar || "/placeholder.svg"} alt={review.author} className="w-10 h-10 rounded-full" />

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold">{review.author}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <Button variant="ghost" size="icon">
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>

                  <p className="text-muted-foreground mb-3">{review.text}</p>

                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ThumbsDown className="h-4 w-4 mr-1" />
                      Not Helpful
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
