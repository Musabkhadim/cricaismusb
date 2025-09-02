import { Card, CardContent } from "@/components/ui/card"
import {
  Utensils,
  Stethoscope,
  ShoppingBag,
  Wrench,
  Car,
  Scissors,
  Dumbbell,
  GraduationCap,
  Home,
  Briefcase,
  Camera,
  Music,
} from "lucide-react"
import Link from "next/link"

const categories = [
  { name: "Restaurants", icon: Utensils, color: "text-red-500" },
  { name: "Healthcare", icon: Stethoscope, color: "text-blue-500" },
  { name: "Retail", icon: ShoppingBag, color: "text-green-500" },
  { name: "Services", icon: Wrench, color: "text-orange-500" },
  { name: "Automotive", icon: Car, color: "text-purple-500" },
  { name: "Beauty & Spa", icon: Scissors, color: "text-pink-500" },
  { name: "Fitness", icon: Dumbbell, color: "text-indigo-500" },
  { name: "Education", icon: GraduationCap, color: "text-yellow-500" },
  { name: "Real Estate", icon: Home, color: "text-teal-500" },
  { name: "Professional", icon: Briefcase, color: "text-gray-500" },
  { name: "Photography", icon: Camera, color: "text-cyan-500" },
  { name: "Entertainment", icon: Music, color: "text-rose-500" },
]

export function PopularCategories() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
       <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore businesses by category and find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.name} href={`/directory?category=${category.name.toLowerCase()}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-sm hover:scale-105">
                <CardContent className="p-6 text-center space-y-3">
                  <div
                    className={`mx-auto w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-gray-600 transition-colors`}
                  >
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    {/* <p className="text-xs text-muted-foreground">{category.toLocaleString()} businesses</p> */}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
