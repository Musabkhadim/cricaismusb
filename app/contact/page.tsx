"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  HelpCircle,
  Building,
  Star,
  CheckCircle,
  Globe,
  Users,
  Zap,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", subject: "", category: "", message: "" })
      }, 3000)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["Office 3/15 5th floor Silkcenter Rehmanabad Rawalpindi Pakistan"],
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+92347 0458847","+92341 0586695"],
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@cricaismus.com", "musabkhadim363@gmail.om"],
      color: "from-purple-500 to-pink-500",
    },
   
  ]


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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

        {/* Hero Section */}
        <div className="relative py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in-0 duration-1000">
              <div className="space-y-6">
                <h1
                  className="text-5xl md:text-7xl font-black tracking-tight leading-none"
                  style={{
                    background: "linear-gradient(135deg, #4CAF50 0%, #3498db 50%, #9b59b6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))",
                  }}
                >
                  Get in Touch
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
                {[
                  { icon: Zap, value: "< 24h", label: "Response Time" },
                  { icon: Users, value: "10K+", label: "Happy Customers" },
                  { icon: Star, value: "4.9/5", label: "Satisfaction Rate" },
                  { icon: Globe, value: "24/7", label: "Support Available" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center animate-in slide-in-from-bottom-4 duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-8"
                  style={{
                    background: "linear-gradient(135deg, #3498db 0%, #4CAF50 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.1))",
                  }}
                >
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-105 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                          >
                            <method.icon className="h-7 w-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                              {method.title}
                            </h3>
                            {method.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

             
              
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                  <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
                  <p className="opacity-90">Fill out the form below and we'll get back to you as soon as possible.</p>
                </CardHeader>
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12 space-y-6 animate-in fade-in-0 duration-500">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-600">Message Sent Successfully!</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Enter your full name"
                            required
                            className="h-12 border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 transition-all duration-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Enter your email"
                            required
                            className="h-12 border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="category" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Category
                          </Label>
                          <Select
                            value={formData.category}
                            onValueChange={(value) => setFormData({ ...formData, category: value })}
                          >
                            <SelectTrigger className="h-12 border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500">
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="business">Business Listing</SelectItem>
                              <SelectItem value="technical">Technical Support</SelectItem>
                              <SelectItem value="partnership">Partnership</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Subject *
                          </Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="Enter subject"
                            required
                            className="h-12 border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          required
                          className="border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 transition-all duration-300 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-14 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-3" />
                            Send Message
                          </>
                        )}
                      </Button>

                      {/* Google AdSense Container */}
                      {/* <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
                        <div className="text-center text-gray-500 dark:text-gray-400">
                          <p className="text-sm font-medium mb-2">Advertisement</p>
                          <div className="bg-white dark:bg-gray-700 h-32 rounded-lg flex items-center justify-center">
                            <p className="text-xs text-gray-400">Google AdSense Ad Container</p>
                          </div>
                        </div>
                      </div> */}
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20">
            <Card className="border-0 shadow-2xl overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <CardTitle className="text-2xl font-bold">Find Us</CardTitle>
                <p className="opacity-90">Visit our office or get directions to our location</p>
              </CardHeader>
             <CardContent className="p-0">
  <div className="h-96 relative">
    <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.3809964049547!2d73.07198441671746!3d33.636315981148705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df958f3de4f005%3A0x761459c139ca3718!2sMars%20bpo%20silk%20center!5e0!3m2!1sen!2s!4v1753182572332!5m2!1sen!2s" 
      width="100%"
      height="100%"
      style={{ border: 0 }}
     
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="absolute top-0 left-0 w-full h-full"
    ></iframe>
  </div>
</CardContent>


            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
