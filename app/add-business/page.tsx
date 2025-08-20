"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, X, Check, Building, MapPin, Phone, Mail, Globe, Camera, Star } from "lucide-react"
import { CKEditorWrapper } from "@/components/ckeditor-wrapper"
import { SubmissionConfirmationPopup } from "@/components/submission-confirmation-popup"
import Reactquill1 from "../../components/reactquill/reactqill"
const categories = [
  "Restaurant",
  "Healthcare",
  "Retail",
  "Services",
  "Automotive",
  "Beauty & Spa",
  "Fitness",
  "Education",
  "Real Estate",
  "Professional",
  "Technology",
  "Entertainment",
  "Travel & Tourism",
  "Home & Garden",
  "Legal Services",
]

const steps = [
  { id: 1, title: "Basic Information", description: "Tell us about your business", icon: Building },
  { id: 2, title: "Location & Contact", description: "Where can customers find you?", icon: MapPin },
  { id: 3, title: "Services & Hours", description: "What do you offer and when?", icon: Star },
  { id: 4, title: "Media & Social", description: "Add photos and social links", icon: Camera },
  { id: 5, title: "Review & Submit", description: "Review your listing", icon: Check },
]

export default function AddBusinessPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Basic Information
    businessName: "",
    category: "",
    description: "",

    // Location & Contact
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    website: "",

    // Services & Hours
    services: [] as string[],
    hours: {
      monday: { open: "", close: "", closed: false },
      tuesday: { open: "", close: "", closed: false },
      wednesday: { open: "", close: "", closed: false },
      thursday: { open: "", close: "", closed: false },
      friday: { open: "", close: "", closed: false },
      saturday: { open: "", close: "", closed: false },
      sunday: { open: "", close: "", closed: false },
    },

    // Media & Social
    logo: null as File | null,
    images: [] as File[],
    socialLinks: {
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
    },

    // Premium options
    premiumListing: false,
  })

  const [showConfirmation, setShowConfirmation] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const progress = (currentStep / steps.length) * 100

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Submitting business:", formData)
    // Simulate API call
    setTimeout(() => {
      setShowConfirmation(true)
    }, 1000)
  }

  const currentStepData = steps[currentStep - 1]

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

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent">
              Add Your Business musab
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses on Cricaismus and start reaching more customers today. It's free to get
              started!
            </p>
          </div>

          {/* Progress */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Step {currentStep} of {steps.length}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-3 bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* Steps Navigation */}
          <div className="hidden md:flex items-center justify-between mb-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-2xl border-2 transition-all duration-300 ${
                      currentStep > step.id
                        ? "bg-green-500 border-green-500 text-white shadow-lg"
                        : currentStep === step.id
                          ? "border-blue-500 text-blue-500 bg-blue-50 dark:bg-blue-950 shadow-lg"
                          : "border-gray-300 text-gray-300 bg-gray-50 dark:bg-gray-700"
                    }`}
                  >
                    {currentStep > step.id ? <Check className="h-8 w-8" /> : <step.icon className="h-8 w-8" />}
                  </div>
                  <div className="mt-3 text-center">
                    <p
                      className={`font-semibold text-sm ${currentStep >= step.id ? "text-gray-900 dark:text-white" : "text-gray-500"}`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-20 h-1 mx-6 rounded-full transition-all duration-300 ${
                      currentStep > step.id ? "bg-green-500" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Content */}
          <Card className="border-0 shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold flex items-center">
                {currentStepData.icon && <currentStepData.icon className="h-8 w-8 mr-3" />}
                {currentStepData.title}
              </CardTitle>
              <p className="opacity-90 text-lg">{currentStepData.description}</p>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                     
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      onFocus={() => setFocusedField("businessName")}
                      onBlur={() => setFocusedField(null)}
                      className="pl-12 h-14 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 transition-all duration-300 bg-white/50 dark:bg-gray-800/50"
                      placeholder=" "
                      required
                    />
                    <Label
                      htmlFor="businessName"
                      className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                        focusedField === "businessName" || formData.businessName
                          ? "top-2 text-xs text-blue-600 font-semibold"
                          : "top-1/2 transform -translate-y-1/2 text-gray-500"
                      }`}
                    >
                      Business Name *adasdasdasd
                    </Label>
                     
                  </div>

                  <div>
                    <Label
                      htmlFor="category"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block"
                    >
                      Business Category *
                    </Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger className="h-14 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500">
                        <SelectValue placeholder="Select your business category" />
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
                    <Label
                      htmlFor="description"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block"
                    >
                      Business Description *
                    </Label>
                    <CKEditorWrapper
                      value={formData.description}
                      onChange={(data) => setFormData({ ...formData, description: data })}
                      placeholder="Describe your business, services, and what makes you unique. You can include links to your website or social media..."
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      You can add links to your website, social media, or other relevant pages in your description.
                    </p>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      onFocus={() => setFocusedField("address")}
                      onBlur={() => setFocusedField(null)}
                      className="pl-12 h-14 border-2 border-gray-200 dark:border-gray-700 focus:border-green-500 transition-all duration-300 bg-white/50 dark:bg-gray-800/50"
                      placeholder=" "
                      required
                    />
                    <Label
                      htmlFor="address"
                      className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                        focusedField === "address" || formData.address
                          ? "top-2 text-xs text-green-600 font-semibold"
                          : "top-1/2 transform -translate-y-1/2 text-gray-500"
                      }`}
                    >
                      Street Address *
                    </Label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative">
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        onFocus={() => setFocusedField("city")}
                        onBlur={() => setFocusedField(null)}
                        className="h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-green-500 transition-all duration-300"
                        placeholder=" "
                        required
                      />
                      <Label
                        htmlFor="city"
                        className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                          focusedField === "city" || formData.city
                            ? "top-1 text-xs text-green-600 font-semibold"
                            : "top-1/2 transform -translate-y-1/2 text-gray-500"
                        }`}
                      >
                        City *
                      </Label>
                    </div>
                    <div className="relative">
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        onFocus={() => setFocusedField("state")}
                        onBlur={() => setFocusedField(null)}
                        className="h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-green-500 transition-all duration-300"
                        placeholder=" "
                        required
                      />
                      <Label
                        htmlFor="state"
                        className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                          focusedField === "state" || formData.state
                            ? "top-1 text-xs text-green-600 font-semibold"
                            : "top-1/2 transform -translate-y-1/2 text-gray-500"
                        }`}
                      >
                        province *
                      </Label>
                    </div>
                    <div className="relative">
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        onFocus={() => setFocusedField("zipCode")}
                        onBlur={() => setFocusedField(null)}
                        className="h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-green-500 transition-all duration-300"
                        placeholder=" "
                        required
                      />
                      <Label
                        htmlFor="zipCode"
                        className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                          focusedField === "zipCode" || formData.zipCode
                            ? "top-1 text-xs text-green-600 font-semibold"
                            : "top-1/2 transform -translate-y-1/2 text-gray-500"
                        }`}
                      >
                        ZIP Code *
                      </Label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className="pl-12 h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-green-500 transition-all duration-300"
                        placeholder=" "
                        required
                      />
                      <Label
                        htmlFor="phone"
                        className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                          focusedField === "phone" || formData.phone
                            ? "top-1 text-xs text-green-600 font-semibold"
                            : "top-1/2 transform -translate-y-1/2 text-gray-500"
                        }`}
                      >
                        Phone Number *
                      </Label>
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className="pl-12 h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-green-500 transition-all duration-300"
                        placeholder=" "
                        required
                      />
                      <Label
                        htmlFor="email"
                        className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                          focusedField === "email" || formData.email
                            ? "top-1 text-xs text-green-600 font-semibold"
                            : "top-1/2 transform -translate-y-1/2 text-gray-500"
                        }`}
                      >
                        Email Address *
                      </Label>
                    </div>
                  </div>

                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      onFocus={() => setFocusedField("website")}
                      onBlur={() => setFocusedField(null)}
                      className="pl-12 h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-green-500 transition-all duration-300"
                      placeholder=" "
                    />
                    <Label
                      htmlFor="website"
                      className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                        focusedField === "website" || formData.website
                          ? "top-1 text-xs text-green-600 font-semibold"
                          : "top-1/2 transform -translate-y-1/2 text-gray-500"
                      }`}
                    >
                      Website (Optional)
                    </Label>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <Label className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 block">
                      Services Offered
                    </Label>
                    <div className="mt-2">
                      <Input
                        placeholder="Add a service and press Enter"
                        className="h-12 border-2 border-gray-200 dark:border-gray-700 focus:border-purple-500"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            const value = e.currentTarget.value.trim()
                            if (value && !formData.services.includes(value)) {
                              setFormData({
                                ...formData,
                                services: [...formData.services, value],
                              })
                              e.currentTarget.value = ""
                            }
                          }
                        }}
                      />
                      <div className="flex flex-wrap gap-3 mt-4">
                        {formData.services.map((service, index) => (
                          <Badge key={index} variant="secondary" className="flex items-center gap-2 px-3 py-2 text-sm">
                            {service}
                            <X
                              className="h-4 w-4 cursor-pointer hover:text-red-500 transition-colors"
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  services: formData.services.filter((_, i) => i !== index),
                                })
                              }}
                            />
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 block">
                      Business Hours
                    </Label>
                    <div className="space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                      {Object.entries(formData.hours).map(([day, hours]) => (
                        <div key={day} className="flex items-center space-x-4">
                          <div className="w-28 capitalize font-semibold text-gray-700 dark:text-gray-300">{day}</div>
                          <Checkbox
                            checked={hours.closed}
                            onCheckedChange={(checked) => {
                              setFormData({
                                ...formData,
                                hours: {
                                  ...formData.hours,
                                  [day]: { ...hours, closed: checked as boolean },
                                },
                              })
                            }}
                            className="border-2"
                          />
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Closed</span>
                          {!hours.closed && (
                            <>
                              <Input
                                type="time"
                                value={hours.open}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    hours: {
                                      ...formData.hours,
                                      [day]: { ...hours, open: e.target.value },
                                    },
                                  })
                                }}
                                className="w-36 h-10 border-2 border-gray-200 dark:border-gray-600"
                              />
                              <span className="text-gray-500 font-medium">to</span>
                              <Input
                                type="time"
                                value={hours.close}
                                onChange={(e) => {
                                  setFormData({
                                    ...formData,
                                    hours: {
                                      ...formData.hours,
                                      [day]: { ...hours, close: e.target.value },
                                    },
                                  })
                                }}
                                className="w-36 h-10 border-2 border-gray-200 dark:border-gray-600"
                              />
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-8">
                  <div>
                    <Label className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 block">
                      Business Logo
                    </Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-blue-500 transition-colors">
                      <Upload className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                      <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                        Click to upload or drag and drop your logo
                      </p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 2MB</p>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 block">
                      Business Photos
                    </Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-green-500 transition-colors">
                      <Camera className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                      <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                        Add photos of your business, products, or services
                      </p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 5MB each</p>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 block">
                      Social Media Links (Optional)
                    </Label>
                    <div className="space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                      <Input
                        placeholder="Facebook URL"
                        value={formData.socialLinks.facebook}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            socialLinks: { ...formData.socialLinks, facebook: e.target.value },
                          })
                        }
                        className="h-12 border-2 border-gray-200 dark:border-gray-600"
                      />
                      <Input
                        placeholder="Instagram URL"
                        value={formData.socialLinks.instagram}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            socialLinks: { ...formData.socialLinks, instagram: e.target.value },
                          })
                        }
                        className="h-12 border-2 border-gray-200 dark:border-gray-600"
                      />
                      <Input
                        placeholder="Twitter URL"
                        value={formData.socialLinks.twitter}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            socialLinks: { ...formData.socialLinks, twitter: e.target.value },
                          })
                        }
                        className="h-12 border-2 border-gray-200 dark:border-gray-600"
                      />
                      <Input
                        placeholder="LinkedIn URL"
                        value={formData.socialLinks.linkedin}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            socialLinks: { ...formData.socialLinks, linkedin: e.target.value },
                          })
                        }
                        className="h-12 border-2 border-gray-200 dark:border-gray-600"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 p-8 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Review Your Listing</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Please review all the information below before submitting your business listing.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Basic Information</h4>
                        <div className="space-y-2">
                          <p className="text-sm">
                            <span className="font-medium">Name:</span> {formData.businessName}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Category:</span> {formData.category}
                          </p>
                          <div className="text-sm">
                            <span className="font-medium">Description:</span>
                            <div
                              className="mt-1 text-gray-600 dark:text-gray-400 line-clamp-3"
                              dangerouslySetInnerHTML={{ __html: formData.description }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Contact Information</h4>
                        <div className="space-y-2">
                          <p className="text-sm">
                            <span className="font-medium">Address:</span> {formData.address}, {formData.city},{" "}
                            {formData.state} {formData.zipCode}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Phone:</span> {formData.phone}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium">Email:</span> {formData.email}
                          </p>
                          {formData.website && (
                            <p className="text-sm">
                              <span className="font-medium">Website:</span> {formData.website}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Services</h4>
                        <div className="flex flex-wrap gap-2">
                          {formData.services.map((service, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Business Hours</h4>
                        <div className="space-y-1">
                          {Object.entries(formData.hours).map(([day, hours]) => (
                            <div key={day} className="flex justify-between text-sm">
                              <span className="capitalize font-medium">{day}:</span>
                              <span className="text-gray-600 dark:text-gray-400">
                                {hours.closed ? "Closed" : `${hours.open} - ${hours.close}`}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <div className="flex items-center space-x-3 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 rounded-xl border-2 border-yellow-200 dark:border-yellow-800">
                      <Checkbox
                        id="premium"
                        checked={formData.premiumListing}
                        onCheckedChange={(checked) => setFormData({ ...formData, premiumListing: checked as boolean })}
                        className="border-2"
                      />
                      {/* <Label htmlFor="premium" className="text-sm font-medium">
                        <span className="text-lg font-bold text-yellow-600">Upgrade to Premium Listing</span>
                        <br />
                        <span className="text-gray-600 dark:text-gray-400">
                          $29/month - Get featured placement, priority support, and advanced analytics
                        </span>
                      </Label> */}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-8 py-3 text-lg font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
            >
              Previous
            </Button>

            {currentStep < steps.length ? (
              <Button
                onClick={nextStep}
                className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Next Step
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Submit Listing
              </Button>
            )}
          </div>
        </div>
        <SubmissionConfirmationPopup open={showConfirmation} onOpenChange={setShowConfirmation} />
      </div>
    </>
  )
}
