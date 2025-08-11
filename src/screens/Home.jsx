import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, CheckCircle, Users, Award, Clock, Shield, ArrowRight, Calculator, FileText, Building, TrendingUp, Target, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Homepage = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const stats = [
    { 
      number: "850+", 
      label: "Projects Completed", 
      icon: <FileText className="h-6 w-6" />
    },
    { 
      number: "8+", 
      label: "Years Experience", 
      icon: <Award className="h-6 w-6" />
    },
    { 
      number: "5-7", 
      label: "Day Turnaround", 
      icon: <Clock className="h-6 w-6" />
    },
    { 
      number: "95%", 
      label: "Client Retention", 
      icon: <Shield className="h-6 w-6" />
    }
  ];

  const services = [
    {
      title: "Public Sector Estimates",
      description: "Comprehensive cost estimation for government and municipal construction projects with compliance-focused documentation.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop",
      features: ["Government Projects", "Federal Compliance", "Municipal Contracts", "Infrastructure Work"],
      icon: <Building className="h-5 w-5" />
    },
    {
      title: "Commercial Construction", 
      description: "Detailed estimates for office buildings, retail spaces, and industrial facilities with market-based pricing analysis.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      features: ["Office Buildings", "Retail Centers", "Industrial Facilities", "Mixed-Use Development"],
      icon: <Building className="h-5 w-5" />
    },
    {
      title: "Residential Projects",
      description: "Accurate cost breakdowns for single-family homes, multi-family developments, and renovation projects.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      features: ["Single Family Homes", "Multi-Family Units", "Home Renovations", "Custom Construction"],
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Specialized Services",
      description: "MEP estimates, civil works, concrete and masonry projects with detailed material and labor breakdowns.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
      features: ["MEP Systems", "Civil Engineering", "Concrete Work", "Material Analysis"],
      icon: <Calculator className="h-5 w-5" />
    }
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Licensed & Insured",
      description: "Fully registered construction estimating firm with comprehensive insurance coverage and professional certifications."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Reliable Turnaround", 
      description: "Consistent 5-7 day delivery schedule with milestone updates and transparent project tracking throughout the process."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Industry Expertise",
      description: "Specialized knowledge across residential, commercial, and public sector construction with current market pricing."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Competitive Advantage",
      description: "Detailed cost analysis and value engineering recommendations to help contractors submit more competitive bids."
    }
  ];

  const industries = [
    "Healthcare Facilities",
    "Educational Buildings", 
    "Government Projects",
    "Retail & Commercial",
    "Industrial Facilities",
    "Residential Development"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Project Submission",
      description: "Submit your construction plans and project specifications through our secure portal."
    },
    {
      step: "02", 
      title: "Analysis & Review",
      description: "Our estimators analyze drawings, specifications, and local market conditions."
    },
    {
      step: "03",
      title: "Detailed Estimation",
      description: "Comprehensive cost breakdown including materials, labor, equipment, and overhead."
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "Final estimate delivery with detailed documentation and ongoing bid support."
    }
  ];

  return (
    <>
      
      <div className="min-h-screen bg-white">
        {/* Enhanced Hero Section */}
      <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/45 to-black/50"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-2 leading-tight -mt-5"
          >
            <span className="text-white">Precision Meets</span>
            <div className="text-orange-500 -mt-4">Innovation</div>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-2 leading-relaxed text-gray-200 max-w-3xl"
          >
            Transform your construction bidding with AI-powered cost estimates. Our certified professionals deliver accuracy, speed, and competitive advantage for every project.
          </motion.p>
          
          
        </div>
      </div>
    </section>
        {/* Stats Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group hover:scale-105 transition-transform"
                >
                  <div className="flex justify-center mb-3 text-orange-500 group-hover:text-orange-600 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Our Estimating Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive cost estimation solutions for all types of construction projects
            </motion.p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image Section */}
                  <motion.div
                    initial={{ 
                      opacity: 0, 
                      x: isEven ? -100 : 100 
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0 
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.2,
                      ease: "easeOut"
                    }}
                    className="lg:w-1/2"
                  >
                    <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Floating Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="absolute top-6 left-6 bg-orange-500/90 backdrop-blur-sm text-white p-3 rounded-full"
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    initial={{ 
                      opacity: 0, 
                      y: isEven ? 50 : -50 
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0 
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.4,
                      ease: "easeOut"
                    }}
                    className="lg:w-1/2 space-y-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                    </motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="text-lg text-gray-600 leading-relaxed"
                    >
                      {service.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex flex-wrap gap-3"
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.span 
                          key={featureIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.9 + featureIndex * 0.1 }}
                          className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium border border-orange-200"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </motion.div>
                    
                 
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Estimation Process</h2>
              <p className="text-lg text-gray-600">A streamlined approach to accurate cost estimation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group hover:scale-105 transition-transform"
                >
                  <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-shadow">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
              <p className="text-lg text-gray-600">Professional expertise you can trust for your construction projects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group hover:scale-105 transition-transform"
                >
                  <div className="flex justify-center mb-4 text-orange-500 group-hover:text-orange-600 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg opacity-90">Specialized estimating expertise across multiple construction sectors</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-orange-500/20 transition-all hover:scale-105"
                >
                  <p className="font-medium">{industry}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
                Contact us today for a free consultation and see how our professional estimating services 
                can help improve your bidding success rate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to='/contact'>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:scale-105">
                  Contact Us
                </button>
                </Link>
               
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    
    </>
  );
};

export default Homepage;