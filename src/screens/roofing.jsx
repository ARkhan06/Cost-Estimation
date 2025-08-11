import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Home, Wrench, Calculator, Clock, Users, Target, Building, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const RoofingPage = () => {
  const location = useLocation();
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Roof Material Estimation",
      description: "Comprehensive analysis of roofing materials including wood, metal, tiles, and asphalt shingles with accurate calculations."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Installation & Repair Costs", 
      description: "Detailed cost breakdown for roofing installation, repair, replacement, and maintenance services."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Commercial Roofing",
      description: "Specialized estimates for commercial roofing projects including waterproofing and ventilation systems."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Cutting-Edge Technology",
      description: "Using the most recent ideas and programming to ensure accurate and simple calculations."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Turnaround",
      description: "Fast delivery of detailed estimates based on project size and complexity requirements."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Experienced Estimators",
      description: "Seasoned estimators experienced in providing exact and detailed roofing estimations."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Complete Cost Analysis",
      description: "Breakdown of costs for materials, labor, and additional treatments with precision."
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
            backgroundImage: "url('https://thearchitectsdiary.com/wp-content/uploads/2021/03/5-Reasons-You-May-Need-To-Hire-A-Metal-Roofing-Contractor-1-1024x683.jpeg')"
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
                Roofing Estimation
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Roofing estimate is the most popular approach to calculating roof materials and project costs. Our calculations are exact and simple with breakdowns of materials, labor, and additional treatments using the latest technology and programming.
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
              Our <span className="text-orange-500">Roofing</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              First-rate roofing estimating services to help businesses and homeowners make informed decisions
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

      {/* Roofing Project Importance Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why <span className="text-orange-500">Roofing Estimates</span> Matter
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Roofing estimating services are important for building projects as they enable a full understanding of material, labor, and equipment expenses. Any roofing project starts with a roof estimate since it frames the work's degree, cost, and schedule.
                </p>
                <p>
                  Our roofing estimators guarantee that clients understand the expenses and materials included by being experienced in providing exact and detailed roofing estimations. We evaluate the rooftop completely to determine its condition and identify any damage or pain points.
                </p>
                <p>
                  Since additional rooftops or fixes can be a major responsibility, we provide our customers with the tools and knowledge they need to make informed decisions about replacement or repair options.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Estimation Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Careful preparation avoiding unexpected financial problems",
                    "Perfect ratio of tools, materials, and effort guidance", 
                    "Reasonable task timelines and seamless coordination",
                    "Quality control ensuring development follows standards"
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

      {/* Why Choose FAZICS Section */}
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
                  <Shield className="w-12 h-12 text-orange-500 mb-4" />
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
                <span className="text-orange-500">Commercial</span> & Residential Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our commercial roofing estimates meet all of your company's needs. We provide complete estimations and skilled installation guidance to ensure our clients' dependability, safety, and security from basic repairs to waterproofing.
                </p>
                <p>
                  Our roof takeoff covers roofing repair, replacement, and maintenance; roofing materials installation including wood, metal, and tiles; roof ventilation systems installation and repair; and business chimney cleaning, repair, and maintenance.
                </p>
                <p>
                  We differentiate ourselves from competitors by using cutting-edge technologies, seasoned estimators, and dedication to accuracy and efficiency. FAZICS highly appreciates client service and produces accurate, itemized development quotes.
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
              Protect Your <span className="text-orange-500">Investment</span> with Accurate Roofing Estimates!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We directly respond to client inquiries and recommend our group's best solutions and material needs. Let us provide you with the tools and knowledge needed for informed roofing decisions.
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

export default RoofingPage;