"use client"

import { HeroSection } from "@/components/hero-section"
import { FeaturedBusinesses } from "@/components/featured-businesses"
import { PopularCategories } from "@/components/popular-categories"
import { CallToAction } from "@/components/call-to-action"
import { BlogPreview } from "@/components/blog-preview"
import { TestimonialsSection } from "@/components/testimonials-section"



export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <FeaturedBusinesses /> */}
      <PopularCategories /> 
      
      <BlogPreview />
      <TestimonialsSection />
      <CallToAction />
  
    </>
  )
}
