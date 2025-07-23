"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showSignupPassword, setShowSignupPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      console.log("Login successful")
      router.push("/")
    }, 2000)
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      console.log("Signup successful")
      router.push("/")
    }, 2000)
  }

  const handleGoogleAuth = () => {
    console.log("Google authentication clicked")
    // Handle Google OAuth
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

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Auth Card */}
        <Card className="w-full max-w-md relative z-10 border-0 shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
          <CardContent className="p-8">
            {/* Header */}
            <div className="text-center space-y-3 mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">C</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Welcome to Cricaismus
              </h1>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Your trusted business directory</p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login" className="font-semibold">
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" className="font-semibold">
                  Sign Up
                </TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login" className="space-y-6">
                <form onSubmit={handleLogin} className="space-y-6">
                  {/* Email Field */}
                  <div className="relative">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                      <Input
                        id="login-email"
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        onFocus={() => setFocusedField("login-email")}
                        onBlur={() => setFocusedField(null)}
                        className="pl-12 h-14 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                        placeholder=" "
                        required
                      />
                      <Label
                        htmlFor="login-email"
                        className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                          focusedField === "login-email" || loginData.email
                            ? "top-2 text-xs text-blue-600 font-semibold"
                            : "top-1/2 transform -translate-y-1/2 text-gray-500"
                        }`}
                      >
                        Email Address
                      </Label>
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="relative">
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        onFocus={() => setFocusedField("login-password")}
                        onBlur={() => setFocusedField(null)}
                        className="pl-12 pr-12 h-14 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                        placeholder=" "
                        required
                      />
                      <Label
                        htmlFor="login-password"
                        className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                          focusedField === "login-password" || loginData.password
                            ? "top-2 text-xs text-blue-600 font-semibold"
                            : "top-1/2 transform -translate-y-1/2 text-gray-500"
                        }`}
                      >
                        Password
                      </Label>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Forgot Password */}
                  <div className="text-right">
                    <Link
                      href="/forgot-password"
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      Forgot your password?
                    </Link>
                  </div>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Signing in...
                      </>
                    ) : (
                      <>
                        Login
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative">
                  <Separator className="bg-gray-200 dark:bg-gray-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white dark:bg-gray-900 px-4 text-sm text-gray-500 font-medium">OR</span>
                  </div>
                </div>

                {/* Google Login */}
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGoogleAuth}
                  className="w-full h-14 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Login with Google</span>
                  </div>
                </Button>
              </TabsContent>

              {/* Signup Tab */}
              <TabsContent value="signup" className="space-y-5">
                <form onSubmit={handleSignup} className="space-y-5">
                  {/* Name Field */}
                  <div className="relative">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                      <Input
                        id="signup-name"
                        type="text"
                        value={signupData.name}
                        onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                        onFocus={() => setFocusedField("signup-name")}
                        onBlur={() => setFocusedField(null)}
                        className="pl-12 h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-green-500 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                        placeholder=" "
                        required
                      />
                      <Label
                        htmlFor="signup-name"
                        className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                          focusedField === "signup-name" || signupData.name
                            ? "top-2 text-xs text-green-600 font-semibold"
                            : "top-1/2 transform -translate-y-1/2 text-gray-500"
                        }`}
                      >
                        Full Name
                      </Label>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                      <Input
                        id="signup-email"
                        type="email"
                        value={signupData.email}
                        onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                        onFocus={() => setFocusedField("signup-email")}
                        onBlur={() => setFocusedField(null)}
                        className="pl-12 h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-green-500 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                        placeholder=" "
                        required
                      />
                      <Label
                        htmlFor="signup-email"
                        className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                          focusedField === "signup-email" || signupData.email
                            ? "top-2 text-xs text-green-600 font-semibold"
                            : "top-1/2 transform -translate-y-1/2 text-gray-500"
                        }`}
                      >
                        Email Address
                      </Label>
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="relative">
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                      <Input
                        id="signup-password"
                        type={showSignupPassword ? "text" : "password"}
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                        onFocus={() => setFocusedField("signup-password")}
                        onBlur={() => setFocusedField(null)}
                        className="pl-12 pr-12 h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-green-500 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                        placeholder=" "
                        required
                      />
                      <Label
                        htmlFor="signup-password"
                        className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                          focusedField === "signup-password" || signupData.password
                            ? "top-2 text-xs text-green-600 font-semibold"
                            : "top-1/2 transform -translate-y-1/2 text-gray-500"
                        }`}
                      >
                        Password
                      </Label>
                      <button
                        type="button"
                        onClick={() => setShowSignupPassword(!showSignupPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showSignupPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="relative">
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                      <Input
                        id="signup-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={signupData.confirmPassword}
                        onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                        onFocus={() => setFocusedField("signup-confirm-password")}
                        onBlur={() => setFocusedField(null)}
                        className="pl-12 pr-12 h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-green-500 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                        placeholder=" "
                        required
                      />
                      <Label
                        htmlFor="signup-confirm-password"
                        className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                          focusedField === "signup-confirm-password" || signupData.confirmPassword
                            ? "top-2 text-xs text-green-600 font-semibold"
                            : "top-1/2 transform -translate-y-1/2 text-gray-500"
                        }`}
                      >
                        Confirm Password
                      </Label>
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={signupData.agreeToTerms}
                      onCheckedChange={(checked) => setSignupData({ ...signupData, agreeToTerms: checked as boolean })}
                      className="mt-1"
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      I agree to the{" "}
                      <Link href="/terms" className="text-green-600 hover:text-green-800 font-semibold">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-green-600 hover:text-green-800 font-semibold">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  {/* Signup Button */}
                  <Button
                    type="submit"
                    disabled={isLoading || !signupData.agreeToTerms}
                    className="w-full h-12 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Creating account...
                      </>
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative">
                  <Separator className="bg-gray-200 dark:bg-gray-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white dark:bg-gray-900 px-4 text-sm text-gray-500 font-medium">OR</span>
                  </div>
                </div>

                {/* Google Signup */}
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGoogleAuth}
                  className="w-full h-12 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Sign up with Google</span>
                  </div>
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2025 Cricaismus. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}
