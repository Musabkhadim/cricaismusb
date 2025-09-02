"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, ArrowRight, Sparkles, Plus, ChevronRight } from "lucide-react"
import Link from "next/link"
import { AddBusinessModal } from "@/components/add-business-modal"
import { LoginModal } from "@/components/login-modal"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const TeamCard = ({ member }: { member: { name: string; role: string; image: string; bio: string } }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <Card className="h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group overflow-hidden">
        <div className="relative pt-8 px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/80 shadow-lg mb-6 group-hover:scale-105 transition-transform duration-500">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">{member.role}</p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full my-4"></div>
          </div>
        </div>
        <CardContent className="px-8 pb-8">
          <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">{member.bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServiceCard = ({ service, index }: { service: { icon: string; title: string; description: string }; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
        <CardHeader className="items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/10 to-green-500/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <CardTitle className="text-xl font-bold text-center text-gray-900 dark:text-white">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center px-6 pb-8">
          <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function AboutPage() {
  const [showAddBusiness, setShowAddBusiness] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const team = [
    {
  name: "Awais Zakir",
  role: "Digital Marketing Head",
  image: "/awais.jpg",
  bio: "Experienced digital marketer with 3+ years in the industry, specializing in SEO, content strategy, and online brand growth. Leads all digital marketing campaigns to ensure maximum visibility and engagement.",
},

   {
  name: "Musab Khadim",
  role: "Lead MERN Stack Developer",
  image: "/musab.jpg",
  bio: "A skilled MERN Stack developer with 3+ years of experience, leading the platform's development and innovation as CEO. Passionate about building modern, scalable, and user-friendly web applications.",
}

 
  ];

  const services = [
    {
      icon: "📊",
      title: "Business Directory",
      description: "List and find businesses to boost online presence.",
    },
    {
      icon: "⭐",
      title: "Review System",
      description: "Build trust with real customer reviews and ratings",
    },
    {
      icon: "📈",
      title: "New Blog tips",
      description: "Get expert insights and business growth strategies",
    },
    {
      icon: "🚀",
      title: "Marketing Tools",
      description: "Powerful features to increase reach and visibility",
    },
  ];

  const stats = [
    { value: "10K+", label: "Businesses Listed", color: "text-blue-500" },
    { value: "1M+", label: "Monthly Visitors", color: "text-green-500" },
    { value: "100+", label: "Cities Covered", color: "text-purple-500" },
    { value: "50K+", label: "Customer Reviews", color: "text-orange-500" },
  ];

  const features = [
    " Free business listings (with upgrade options)",
    "Easy search tools & filtering capabilities",
    "Mobile-responsive design for all devices",
    "24/7 customer support and assistance",
    "SEO optimization for better  rankings",
  
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-purple-600">
                  About Our Company
                </span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto my-8"
            ></motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              We list local businesses and provide high-quality dofollow backlinks to help them grow online and reach more customers and traffic.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
     <section className="relative pt-1 pb-12"> {/* Section 2 */}
        <div className="container mx-auto px-4 sm:px-4 lg:px-8">
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeIn}>
                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Building Stronger Communities
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                 At Cricaismus, we help local businesses grow by connecting them with customers in their area. Our platform makes it easy for businesses to reach new customers and grow online. And  reach new audiences.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Sparkles className="h-6 w-6 text-yellow-500 mr-2" />
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      variants={fadeIn}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className={`text-4xl font-black ${stat.color} mb-2`}>{stat.value}</div>
                        <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600">
                Our Services
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-green-500">
                Meet Our Team
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
              The passionate people behind Cricaismus
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {team.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Join Our Community?</h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Join Cricaismus today! We welcome both business owners and customers to our friendly community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                onClick={() => setShowAddBusiness(true)}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Plus className="h-5 w-5 mr-2" strokeWidth={2.5} />
                Add Your Business
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-bold rounded-full bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <LoginModal open={showLogin} onOpenChange={setShowLogin} />
      <AddBusinessModal open={showAddBusiness} onOpenChange={setShowAddBusiness} />
    </div>
  );
}