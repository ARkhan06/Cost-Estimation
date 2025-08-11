import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Hammer, Home, Building, Calculator, Clock, Users, Target, Trash2, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const DemolitionPage = () => {
  const location = useLocation();
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential Demolition",
      description: "Complete estimation for house demolition, interior gutting, garage removal, and residential structure teardown projects."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Commercial & Industrial", 
      description: "Comprehensive estimates for commercial buildings, warehouses, factories, and large-scale industrial demolition projects."
    },
    {
      icon: <Trash2 className="w-8 h-8" />,
      title: "Site Clearing & Cleanup",
      description: "Detailed analysis for site preparation, debris removal, waste disposal, and environmental compliance requirements."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Comprehensive Assessment",
      description: "Professional evaluation of structure, materials, site conditions, and regulatory requirements."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Estimates",
      description: "Fast delivery of detailed demolition estimates within days based on project complexity."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Safety Compliance",
      description: "Ensuring adherence to safety standards, environmental regulations, and permit requirements."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Accurate Cost Analysis",
      description: "Detailed breakdown of labor, equipment, permits, waste disposal, and project management costs."
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
            backgroundImage: "url('https://www.capitalrecycling.com.au/wp-content/uploads/2023/02/15-Wayeela-Place-City-Beach-Tuesday-060421-24a-scaled.jpg')"
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
                Demolition Estimation
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Professional demolition estimating services for residential, commercial, and industrial projects. Our expert estimators provide accurate cost analysis for safe and effective demolition execution, including permits, equipment, labor, and waste disposal requirements.
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
              Our <span className="text-orange-500">Demolition</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive demolition estimation services for all types of teardown projects with professional expertise
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

      {/* Demolition Project Importance Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why <span className="text-orange-500">Demolition Estimates</span> Matter
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Demolition estimating services are essential for construction projects as they provide comprehensive understanding of teardown costs, safety requirements, and regulatory compliance. Every demolition project requires precise estimates to establish scope, budget, and execution timeline.
                </p>
                <p>
                  Our expert demolition estimators guarantee accurate cost calculations by evaluating structural conditions, material types, site accessibility, equipment needs, and waste disposal requirements. We analyze project specifications to determine optimal demolition methods and safety protocols.
                </p>
                <p>
                  Since demolition work involves significant safety and environmental considerations, we provide clients with detailed knowledge needed to make informed decisions about methods, equipment, permits, and compliance for successful project completion within budget.
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
                <Hammer className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Estimation Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Accurate cost planning preventing budget overruns",
                    "Comprehensive safety assessment and risk management", 
                    "Permit and regulatory compliance guidance",
                    "Efficient project scheduling and resource allocation"
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
                <span className="text-orange-500">Professional</span> & Safe Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our demolition estimates serve all project requirements from residential teardowns to large commercial and industrial demolitions. We provide comprehensive estimations covering structural assessment, equipment needs, safety protocols, and environmental compliance requirements.
                </p>
                <p>
                  Our demolition takeoff covers all aspects including site preparation, structural removal, hazardous material handling, debris disposal, equipment rental, labor costs, permits, and site restoration with precise cost calculations and safety considerations.
                </p>
                <p>
                  We differentiate ourselves through advanced estimation tools, experienced demolition specialists, and commitment to safety and regulatory compliance. FAZICS values client service and produces detailed, itemized demolition estimates with industry expertise and professional standards.
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
              Execute Safe <span className="text-orange-500">Demolition</span> with Accurate Estimates!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're removing a basic structure or planning a massive demolition project, get comprehensive cost estimates with detailed breakdowns for labor, equipment, permits, and waste disposal delivered by our experienced professionals.
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

export default DemolitionPage;