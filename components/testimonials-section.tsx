"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
   
    rating: 5,
    text: "Cricaismus has been a game-changer for our restaurant. We've seen a 40% increase in new customers since joining the platform.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    
    rating: 5,
    text: "As a small auto repair shop, visibility was our biggest challenge. Cricaismus helped us reach more customers in our area.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,

    rating: 5,
    text: "The platform is easy to use and has helped showcase our services beautifully. Our booking rate increased significantly.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
   
    rating: 5,
    text: "Professional, reliable, and effective. Cricaismus has helped us connect with clients who need our legal services.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4  ">
       <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            What <span className="text- font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Business Owners</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what real business owners have to say about Cricaismus
          </p>
        </div>

        {/* Desktop Grid - Horizontal cards */}
        <div className="hidden md:flex gap-6 max-w-5xl mx-auto overflow-x-auto pb-4 scrollbar-hide">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-shrink-0 w-[380px]">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative max-w-md mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all size-8"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all size-8"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 w-1.5 rounded-full transition-all ${currentIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 group h-full">
      <CardContent className="p-6">
        <div className="space-y-4">
          <Quote className="h-6 w-6 text-blue-500 opacity-50 group-hover:opacity-80 transition-opacity" />

          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
              />
            ))}
            <span className="ml-1 text-xs font-medium text-gray-500 dark:text-gray-400">
              {testimonial.rating}.0
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 font-medium text-base leading-snug group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            "{testimonial.text}"
          </p>

        
        </div>
      </CardContent>
    </Card>
  )
}