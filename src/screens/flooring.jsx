import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Grid3x3, Layers, Calculator, Clock, Users, Target, Building, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const FlooringPage = () => {
  const location = useLocation();
  const services = [
    {
      icon: <Grid3x3 className="w-8 h-8" />,
      title: "All Flooring Types",
      description: "Complete estimation for VCT, LVT, rubber, vinyl, wood, laminate, tile, carpets, and specialized flooring."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential & Commercial", 
      description: "Tailored estimates for both residential projects and commercial spaces with specific requirements."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Subfloor Preparation",
      description: "Comprehensive analysis including subfloor preparation, flooring removal, and material costs."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Location-Based Pricing",
      description: "Accurate pricing based on your specific location and local market conditions."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24-48 Hour Delivery",
      description: "Quick turnaround with comprehensive flooring estimates delivered within 24-48 hours."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Tools",
      description: "Using approved tools like Blue Beam, Plan Fast, OST, and Quick Bids for accuracy."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Detailed Breakdown",
      description: "Complete cost analysis covering materials, labor, preparation, and installation steps."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('https://media.istockphoto.com/id/638727076/photo/installing-wood-flooring.jpg?s=612x612&w=0&k=20&c=l4wcPVlfJ42CbR5U1OYgMdq1wW3HJtqABtz2MepeMpY=')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Flooring Estimation
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Professional flooring cost estimates include all necessary steps, supplies, and work to complete your project. Get accurate estimates based on location and project size with modern technology and expert analysis.
            </p>
            
            
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Flooring</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive flooring estimation services for all types of projects with cutting-edge precision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl w-fit mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flooring Cost Factors Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-orange-500">Flooring Cost</span> Variables
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Flooring cost variables must be understood for accurate budgeting. Our flooring estimate cost takes into account several factors including covered area, flooring type, labor costs, and project complexity.
                </p>
                <p>
                  We evaluate tools, project size, difficulty, and installation methods to ensure accurate reviews. Our expert flooring estimators can estimate material and service costs for both small domestic projects and large commercial spaces.
                </p>
                <p>
                  Modern technology has changed how we estimate flooring costs, and your next flooring cost assessment project can be done professionally with our online resources and advanced estimation tools.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Grid3x3 className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost Factors Include</h3>
                <ul className="space-y-3">
                  {[
                    "Area size and square footage measurements",
                    "Flooring type and material specifications", 
                    "Labor costs based on location and complexity",
                    "Subfloor preparation and removal requirements"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commercial & Professional Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Building className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                  <div className="grid gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-orange-500">Professional</span> Flooring Analysis
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our skilled flooring cost estimator uses approved tools like Blue Beam, Plan Fast, OST, and Quick Bids to estimate quantities while following standards and codes. We guarantee precise estimates with our skilled fieldwork flooring estimators.
                </p>
                <p>
                  Commercial flooring installations have unique requirements. FAZICS provides commercial flooring estimate services for businesses with particular demands, examining specific factors that affect cost and installation complexity.
                </p>
                <p>
                  We provide detailed estimates for residential and commercial flooring projects tailored to their needs, covering all installation steps using modern tools and professional analysis to avoid financial shocks.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Step Up Your <span className="text-orange-500">Flooring Game</span> with Accurate Estimates!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Hire a reliable Flooring Estimate Services provider like us to avoid hassles. Save time and let us focus on accurate bid management while you concentrate on other important tasks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
  );
};

export default FlooringPage;