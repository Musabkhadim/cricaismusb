"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, Plus } from "lucide-react"
import { useTheme } from "next-themes"
import { LoginModal } from "@/components/login-modal"
import { AddBusinessModal } from "@/components/add-business-modal"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showAddBusiness, setShowAddBusiness] = useState(false)
  const { theme, setTheme } = useTheme()
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      setLastScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/directory", label: "Directory" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 `}
      >
        <div className="container mx-auto px-6">
          {" "}
          {/* Changed px-4 to px-6 */}
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
           <Link href="/" className="flex items-center space-x-1group no-underline">
  <img 
    src="/favicons.png" 
    alt="Logo" 
 className="w-12 h-12 object-contain md:w-16 md:h-16 lg:w-20 lg:h-20"
  />

  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
    Cricaismus
  </span>
</Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 justify-center mx-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="no-underline text-[15px] font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative group" // Changed font-semibold to font-bold
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
            {/* Actions */}
            <div className="flex items-center space-x-3">
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hidden md:flex hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button> */}
              {/* <Button
                onClick={() => setShowLogin(true)}
                variant="ghost"
                size="sm"
                className="hidden md:flex hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <User className="h-4 w-4 mr-2" />
                Login
              </Button> */}
              <Button
                onClick={() => setShowAddBusiness(true)}
                size="sm"
                className="hidden md:flex bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Business
              </Button>
              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[400px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-l border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col space-y-6 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="no-underline text-lg font-bold transition-all duration-300 hover:text-blue-600 hover:translate-x-2 flex items-center space-x-2" // Changed font-medium to font-bold
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{item.label}</span>
                      </Link>
                    ))}
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                      {/* <Button
                        onClick={() => {
                          setShowLogin(true)
                          setIsOpen(false)
                        }}
                        variant="outline"
                        className="w-full hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Login
                      </Button> */}
                      <Button
                        onClick={() => {
                          setShowAddBusiness(true)
                          setIsOpen(false)
                        }}
                        className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg text-white"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Business
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16">
        <LoginModal open={showLogin} onOpenChange={setShowLogin} />
        <AddBusinessModal open={showAddBusiness} onOpenChange={setShowAddBusiness} />
      </div>
    </>
  )
}
