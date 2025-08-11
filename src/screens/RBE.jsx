import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Home, Calculator, TrendingUp, Target, Clock, Users, Award, Hammer, Building, PaintBucket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const ResidentialBidsPage = () => {
  const location = useLocation();
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "New Home Construction",
      description: "Complete cost estimation for single-family homes, multi-family units, and custom residential builds from foundation to finish."
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Renovation & Remodeling", 
      description: "Accurate estimates for home renovations, additions, kitchen and bathroom remodels, and residential improvements."
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Material Takeoffs",
      description: "Detailed quantity surveys and material lists organized by CSI divisions for residential contractors and builders."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Estimating",
      description: "Advanced digital tools and zip code-based pricing ensure accurate residential cost estimation."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24-Hour Turnaround",
      description: "Fast and reliable estimates delivered within 24 hours to meet your project deadlines."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experienced Team",
      description: "Skilled estimators with over 10 years of residential construction experience."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Budget Control",
      description: "Detailed cost breakdowns help you maintain budget control and maximize profitability."
    }
  ];

  const residentialProjectTypes = [
    "Single-Family Homes",
    "Multi-Family Residences", 
    "Custom Home Builds",
    "Townhouses & Condominiums",
    "Home Additions & Extensions",
    "Kitchen & Bathroom Remodels",
    "Basement Conversions",
    "Garage Construction"
  ];

  const estimatingServices = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Foundation to Finish",
      description: "Complete cost estimates covering all aspects from site preparation to final finishes."
    },
    {
      icon: <PaintBucket className="w-6 h-6" />,
      title: "Interior Renovations",
      description: "Detailed estimates for kitchen, bathroom, and interior remodeling projects."
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Custom Home Builds",
      description: "Comprehensive cost analysis for luxury and custom residential construction."
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Repair & Restoration",
      description: "Accurate estimates for home repairs, maintenance, and restoration projects."
    }
  ];

  const constructionTrades = [
    "Site Work & Excavation",
    "Concrete & Foundation",
    "Framing & Structural",
    "Roofing & Siding",
    "Electrical Systems",
    "Plumbing Systems",
    "HVAC Installation",
    "Insulation & Drywall",
    "Flooring & Finishes",
    "Painting & Decorating"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black-900 via-black-800 to-black-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/100"></div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
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
                Residential Bidding
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Estimates
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Elevate your residential projects with FAZICS's expertise! Our seasoned team brings forth a wealth of experience, navigating the intricacies of residential construction with precision and accuracy.
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
              Our <span className="text-orange-500">Residential</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive estimation services for all types of residential construction projects and home improvements
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

      {/* Residential Expertise Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                From Foundation to <span className="text-orange-500">Finishing Touches</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  With a proven track record and an unwavering commitment to precision, FAZICS stands as the beacon of excellence in residential project estimation. From the foundation to the finishing touches, we've meticulously estimated countless dream homes.
                </p>
                <p>
                  Our accuracy goes beyond numbers to reflect our passion for your bid success. Whether you need to newly construct, renovate, or remodel your projects, we provide exact estimates to meet your budget and help you win more profitable residential projects.
                </p>
                <p>
                  Our residential construction estimators are magnificent in providing precise outputs. With the help of right calculations, you can accurately allocate budget, obtain financing, quote prices to clients, and negotiate with contractors.
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
                <Home className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Project Types</h3>
                <div className="space-y-3">
                  {residentialProjectTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Estimation Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-orange-500">Home</span> Estimating Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From new construction to renovations, we provide detailed cost analysis for every aspect of residential building
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {estimatingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-xl flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Trades Section */}
      <section className="py-20 px-4 bg-white">
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
                  <Hammer className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">All Construction Trades Covered</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {constructionTrades.map((trade, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {trade}
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
                <span className="text-orange-500">Advanced</span> Estimating Technology
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our cost estimating firm covers all construction trades in residential projects. From drywall to lumber, our cost estimators cover all components by quantifying project items based on sizes, volume, length, area, and number.
                </p>
                <p>
                  We provide the most accurate and error-free calculations using advanced estimating software including BlueBeam, Quest Estimating, On Screen Takeoff, Stack, RS Means, and Plan Swift with all paid plugins to cover all trades.
                </p>
                <p>
                  Our pricing comes from comprehensive construction cost databases updated multiple times per year, with zip code-based pricing to ensure your residential bids are as accurate and competitive as possible.
                </p>
              </div>

              <div className="mt-8 grid gap-4">
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
              Choose FAZICS for Your Residential Projects
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to transform your residential construction vision into reality with precision, efficiency, and cost-effectiveness?
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

export default ResidentialBidsPage;