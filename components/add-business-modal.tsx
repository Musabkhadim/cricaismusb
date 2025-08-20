"use client"

import { useState, useRef } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, X, Check, ArrowRight, ArrowLeft } from "lucide-react"
import { SubmissionConfirmationPopup } from "@/components/submission-confirmation-popup"
import dynamic from "next/dynamic"
const Reactquill1 = dynamic(() => import("./reactquill/reactqill"), { ssr: false }) // Assuming this path is correct and Reactquill1 is a valid component
import { doc, setDoc } from "firebase/firestore"
import { db } from "../app/firebase/config" // Assuming this path is correct
import axios from "axios"

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
  "Photography ",
  "Entertainment",
  "other",
]

const steps = [
  { id: 1, title: "Basic Information", description: "Tell us about your business" },
  { id: 2, title: "Location & Contact", description: "Where can customers find you?" },
  { id: 3, title: "Services & Hours", description: "What do you offer and when?" },
  { id: 4, title: "Media & Social", description: "Add photos and social links" },
  { id: 5, title: "Review & Submit", description: "Review your listing" },
]

interface AddBusinessModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddBusinessModal({ open, onOpenChange }: AddBusinessModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: "",
    category: "",
    description: "", // This will now be updated from formData1.description
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    website: "", // Optional
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
    logo: null as File | null,
    images: [] as File[],
    socialLinks: {
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
    },
    premiumListing: false,
  })
  const [formData1, setFormData1] = useState({
    title: "",
    image: null,
    description: "", // This holds the content from Reactquill1
  })
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [validationErrors, setValidationErrors] = useState<Record<string, string | null>>({})
  const logoInputRef = useRef<HTMLInputElement>(null)
  const imagesInputRef = useRef<HTMLInputElement>(null)

  const progress = (currentStep / steps.length) * 100

  // Function to sanitize business name for use as document ID
  const sanitizeDocumentId = (businessName: string): string => {
    return businessName
      .trim()
      .replace(/[^a-zA-Z0-9\s-_]/g, "") // Remove special characters except spaces, hyphens, underscores
      .replace(/\s+/g, "_") // Replace spaces with underscores
      .toLowerCase()
  }

  // Helper to validate email format
  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  // Validation function for each step
  const validateStep = (step: number): boolean => {
    const errors: Record<string, string | null> = {}
    let isValid = true

    if (step === 1) {
      if (!formData.businessName.trim()) {
        errors.businessName = "You must fill this."
        isValid = false
      }
      if (!formData.category) {
        errors.category = "You must fill this."
        isValid = false
      }
      // Check for empty HTML from Quill (e.g., "<p><br></p>")
      if (!formData1.description || formData1.description.trim() === "<p><br></p>") {
        errors.description = "You must fill this."
        isValid = false
      }
    } else if (step === 2) {
      if (!formData.address.trim()) {
        errors.address = "You must fill this."
        isValid = false
      }
      if (!formData.city.trim()) {
        errors.city = "You must fill this."
        isValid = false
      }
      if (!formData.state.trim()) {
        errors.state = "You must fill this."
        isValid = false
      }
      if (!formData.zipCode.trim()) {
        errors.zipCode = "You must fill this."
        isValid = false
      }
      if (!formData.phone.trim()) {
        errors.phone = "You must fill this."
        isValid = false
      }
      if (!formData.email.trim()) {
        errors.email = "You must fill this."
        isValid = false
      } else if (!isValidEmail(formData.email)) {
        errors.email = "Please enter a valid email address."
        isValid = false
      }
    } else if (step === 3) {
      // Business hours are now optional, so skip validation for hours.
    } else if (step === 4) {
      if (!formData.logo) {
        errors.logo = "You must fill this."
        isValid = false
      }
      if (!formData.images || formData.images.length === 0) {
        errors.images = "You must fill this."
        isValid = false
      }
    }
    // Step 4 (Media & Social) fields are marked as optional in the original code.
    // The prompt asks for "all fields" to be required, but typically this refers to input fields.
    // File uploads and social links are often optional. We will keep them optional as per existing labels.

    setValidationErrors(errors)
    return isValid
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1)
        setValidationErrors({}) // Clear errors when moving to next step
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setValidationErrors({}) // Clear errors when moving back
    }
  }

  async function uploadImageToCloudinary(file: File): Promise<string | null> {
    const formData = new FormData()
    formData.append("cloud_name", "dej8fpydt")
    formData.append("upload_preset", "images")
    formData.append("file", file)
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dej8fpydt/image/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      return response.data.secure_url
    } catch (error) {
      console.error("Cloudinary upload error:", error)
      return null
    }
  }

  const handleSubmit = async () => {
    // Perform full validation across all steps before submission
    let allValid = true
    for (let i = 1; i <= steps.length; i++) {
      if (!validateStep(i)) {
        allValid = false
        // Optionally, jump to the first step with errors
        setCurrentStep(i)
        break
      }
    }

    if (!allValid) {
      setSubmitError("Please fill in all required fields before submitting.")
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)
    try {
      // Upload logo
      let logoUrl = ""
      if (formData.logo) {
        const uploadedLogoUrl = await uploadImageToCloudinary(formData.logo)
        if (uploadedLogoUrl) logoUrl = uploadedLogoUrl
      }
      // Upload images
      let imageUrls: string[] = []
      if (formData.images && formData.images.length > 0) {
        for (const img of formData.images) {
          const uploadedImgUrl = await uploadImageToCloudinary(img)
          if (uploadedImgUrl) imageUrls.push(uploadedImgUrl)
        }
      }
      // Prepare data for Firestore
      const documentId = crypto.randomUUID()
      const firestoreData = {
        businessName: formData.businessName,
        category: formData.category,
        description: formData1.description,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        phone: formData.phone,
        email: formData.email,
        website: formData.website,
        services: formData.services,
        hours: formData.hours,
        socialLinks: formData.socialLinks,
        premiumListing: formData.premiumListing,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        logoUrl,
        imageUrls,
      }
      const docRef = doc(db, "directory", documentId)
      await setDoc(docRef, firestoreData)
      console.log("Business saved successfully with ID:", documentId)
      // Success - show confirmation and reset form
      setIsSubmitting(false)
      onOpenChange(false)
      setShowConfirmation(true)
      // Reset form
      setCurrentStep(1)
      setFormData({
        businessName: "",
        category: "",
        description: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        phone: "",
        email: "",
        website: "",
        services: [],
        hours: {
          monday: { open: "", close: "", closed: false },
          tuesday: { open: "", close: "", closed: false },
          wednesday: { open: "", close: "", closed: false },
          thursday: { open: "", close: "", closed: false },
          friday: { open: "", close: "", closed: false },
          saturday: { open: "", close: "", closed: false },
          sunday: { open: "", close: "", closed: false },
        },
        logo: null,
        images: [],
        socialLinks: {
          facebook: "",
          twitter: "",
          instagram: "",
          linkedin: "",
        },
        premiumListing: false,
      })
      setFormData1({
        // Reset formData1 as well
        title: "",
        image: null,
        description: "",
      })
      setValidationErrors({}) // Clear all validation errors
    } catch (error) {
      console.error("Error saving business:", error)
      setSubmitError(error instanceof Error ? error.message : "Failed to save business. Please try again.")
      setIsSubmitting(false)
    }
  }

  // Drag & drop handlers for logo
  const handleLogoDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData({ ...formData, logo: e.dataTransfer.files[0] })
    }
  }
  const handleLogoClick = () => logoInputRef.current?.click()

  // Drag & drop handlers for images
  const handleImagesDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFormData({ ...formData, images: Array.from(e.dataTransfer.files) })
    }
  }
  const handleImagesClick = () => imagesInputRef.current?.click()

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border-0 shadow-2xl p-4 sm:p-6">
          <div className="space-y-4 sm:space-y-6 p-2 sm:p-4">
            {/* Header */}
            <div className="text-center space-y-1 sm:space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Add Your Business
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Join thousands of businesses on Cricaismus and start reaching more customers today
              </p>
            </div>
            {/* Error Message */}
            {submitError && (
              <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-3 sm:p-4">
                <p className="text-red-700 dark:text-red-300 text-sm">{submitError}</p>
              </div>
            )}
            {/* Progress */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Step {currentStep} of {steps.length}
                </span>
                <span className="text-gray-500 dark:text-gray-400">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-1.5 sm:h-2" />
            </div>
            {/* Steps Navigation */}
            <div className="hidden md:flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-all duration-300 text-sm sm:text-base ${
                      currentStep > step.id
                        ? "bg-green-500 border-green-500 text-white"
                        : currentStep === step.id
                          ? "border-blue-500 text-blue-500 bg-blue-50 dark:bg-blue-950"
                          : "border-gray-300 text-gray-300"
                    }`}
                  >
                    {currentStep > step.id ? <Check className="h-4 w-4 sm:h-5 sm:w-5" /> : step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-full h-0.5 mx-2 sm:mx-4 transition-all duration-300 ${currentStep > step.id ? "bg-green-500" : "bg-gray-300"}`}
                    />
                  )}
                </div>
              ))}
            </div>
            {/* Form Content */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-5 space-y-4 sm:space-y-5">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {steps[currentStep - 1].title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{steps[currentStep - 1].description}</p>
              </div>
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="businessName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Business Name *
                    </Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => {
                        setFormData({ ...formData, businessName: e.target.value })
                        setValidationErrors((prev) => ({ ...prev, businessName: null })) // Clear error on change
                      }}
                      placeholder="Enter your business name"
                      className="mt-1"
                    />
                    {validationErrors.businessName && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.businessName}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="category" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Category *
                    </Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => {
                        setFormData({ ...formData, category: value })
                        setValidationErrors((prev) => ({ ...prev, category: null })) // Clear error on change
                      }}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {validationErrors.category && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.category}</p>
                    )}
                  </div>
                  <div>
                    
                    <Reactquill1
                      setFormData1={(data: any) => {
                        setFormData1(data)
                        setValidationErrors((prev) => ({ ...prev, description: null })) // Clear error on change
                        // Also update formData.description for consistency with review step
                        setFormData((prev) => ({ ...prev, description: data.description }))
                      }}
                    />
                    {validationErrors.description && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.description}</p>
                    )}
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => {
                        setFormData({ ...formData, address: e.target.value })
                        setValidationErrors((prev) => ({ ...prev, address: null }))
                      }}
                      placeholder="123 Main Street"
                      className="mt-1"
                    />
                    {validationErrors.address && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.address}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => {
                          setFormData({ ...formData, city: e.target.value })
                          setValidationErrors((prev) => ({ ...prev, city: null }))
                        }}
                        placeholder="City"
                        className="mt-1"
                      />
                      {validationErrors.city && <p className="text-red-500 text-xs mt-1">{validationErrors.city}</p>}
                    </div>
                    <div>
                      <Label htmlFor="state">Provinces *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => {
                          setFormData({ ...formData, state: e.target.value })
                          setValidationErrors((prev) => ({ ...prev, state: null }))
                        }}
                        placeholder="Enter province "
                        className="mt-1"
                      />
                      {validationErrors.state && <p className="text-red-500 text-xs mt-1">{validationErrors.state}</p>}
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => {
                          setFormData({ ...formData, zipCode: e.target.value })
                          setValidationErrors((prev) => ({ ...prev, zipCode: null }))
                        }}
                        placeholder="12345"
                        className="mt-1"
                      />
                      {validationErrors.zipCode && (
                        <p className="text-red-500 text-xs mt-1">{validationErrors.zipCode}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value })
                          setValidationErrors((prev) => ({ ...prev, phone: null }))
                        }}
                        placeholder="+1 (555) 123-4567"
                        className="mt-1"
                      />
                      {validationErrors.phone && <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value })
                          setValidationErrors((prev) => ({ ...prev, email: null }))
                        }}
                        placeholder="info@yourbusiness.com"
                        className="mt-1"
                      />
                      {validationErrors.email && <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="website">Website (Optional)</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://www.yourbusiness.com"
                      className="mt-1"
                    />
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label>Services Offered (optional) 
                      
                    </Label>
                    <div className="mt-2">
                      <Input
                        placeholder="Add a service and press Enter"
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
                      <div className="flex flex-wrap gap-2 mt-3">
                        {formData.services.map((service, index) => (
                          <Badge key={index} variant="secondary" className="flex items-center gap-1">
                            {service}
                            <X
                              className="h-3 w-3 cursor-pointer hover:text-red-500"
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
                    <Label>Business Hours (optional)  </Label>
                    <div className="space-y-3 mt-3">
                      {Object.entries(formData.hours).map(([day, hours]) => (
                        <div
                          key={day}
                          className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4"
                        >
                          <div className="w-24 capitalize font-medium text-sm">{day}</div>
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
                              setValidationErrors((prev) => ({ ...prev, [`${day}Open`]: null, [`${day}Close`]: null })) // Clear errors on change
                            }}
                          />
                          <span className="text-sm">Closed</span>
                          {!hours.closed && (
                            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
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
                                  setValidationErrors((prev) => ({ ...prev, [`${day}Open`]: null }))
                                }}
                                className="w-28 sm:w-32"
                              />
                              <span className="text-sm">to</span>
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
                                  setValidationErrors((prev) => ({ ...prev, [`${day}Close`]: null }))
                                }}
                                className="w-28 sm:w-32"
                              />
                            </div>
                          )}
                          {validationErrors[`${day}Open`] && (
                            <p className="text-red-500 text-xs mt-1 sm:ml-4">{validationErrors[`${day}Open`]}</p>
                          )}
                          {validationErrors[`${day}Close`] && (
                            <p className="text-red-500 text-xs mt-1 sm:ml-4">{validationErrors[`${day}Close`]}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div>
                    <Label>Business Logo</Label>
                    <div
                      className="mt-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
                      onDrop={handleLogoDrop}
                      onDragOver={(e) => e.preventDefault()}
                      onClick={handleLogoClick}
                    >
                      <Upload className="mx-auto h-10 w-10 text-gray-400 sm:h-12 sm:w-12" />
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Click to choose or drag and drop your logo
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                      <input
                        type="file"
                        accept="image/*"
                        ref={logoInputRef}
                        style={{ display: "none" }}
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setFormData({ ...formData, logo: e.target.files[0] })
                          }
                        }}
                      />
                      {formData.logo && (
                        <img
                          src={URL.createObjectURL(formData.logo)}
                          alt="Logo Preview"
                          className="mx-auto mt-4 h-16 w-16 object-contain rounded"
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    <Label>Business Photos</Label>
                    <div
                      className="mt-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
                      onDrop={handleImagesDrop}
                      onDragOver={(e) => e.preventDefault()}
                      onClick={handleImagesClick}
                    >
                      <Upload className="mx-auto h-10 w-10 text-gray-400 sm:h-12 sm:w-12" />
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Click to choose or drag and drop your photos
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG up to 5MB each</p>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        ref={imagesInputRef}
                        style={{ display: "none" }}
                        onChange={(e) => {
                          if (e.target.files && e.target.files.length > 0) {
                            setFormData({ ...formData, images: Array.from(e.target.files) })
                          }
                        }}
                      />
                      {formData.images && formData.images.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4 justify-center">
                          {formData.images.map((img, idx) => (
                            <img
                              key={idx}
                              src={URL.createObjectURL(img)}
                              alt={`Photo ${idx + 1}`}
                              className="h-16 w-16 object-cover rounded"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label>Social Media Links (Optional)</Label>
                    <div className="space-y-3 mt-3">
                      <Input
                        placeholder="Facebook URL"
                        value={formData.socialLinks.facebook}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            socialLinks: { ...formData.socialLinks, facebook: e.target.value },
                          })
                        }
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
                      />
                    </div>
                  </div>
                </div>
              )}
              {currentStep === 5 && (
                <div className="space-y-2">
                  <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg text-sm">
                    <h4 className="font-semibold mb-2">Review Your Details</h4>
                    <ul className="space-y-1">
                      <li><b>Name:</b> {formData.businessName}</li>
                      <li><b>Category:</b> {formData.category}</li>
                      <li><b>Address:</b> {formData.address}, {formData.city}, {formData.state} {formData.zipCode}</li>
                      <li><b>Email:</b> {formData.email}</li>
                      <li><b>Phone:</b> {formData.phone}</li>
                      {/* Add more fields as needed */}
                    </ul>
                    <p className="mt-2 text-xs text-gray-500">Please check your details before submitting.</p>
                  </div>
                </div>
              )}
            </div>
            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2 bg-transparent text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Previous</span>
              </Button>
              {currentStep < steps.length ? (
                <Button
                  onClick={nextStep}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2"
                >
                  <span>Next Step</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-green-600 hover:bg-green-700 flex items-center space-x-2 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Submit Listing</span>
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
        <SubmissionConfirmationPopup open={showConfirmation} onOpenChange={setShowConfirmation} />
      </Dialog>
    </>
  )
}
