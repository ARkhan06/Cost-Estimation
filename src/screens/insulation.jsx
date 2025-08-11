import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Thermometer, Home, Building, Calculator, Clock, Users, Target, Layers, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const InsulationPage = () => {
  const location = useLocation();
  const services = [
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Thermal Insulation",
      description: "Complete estimation for spray foam, batt insulation, rigid fiberboard, cellulose, and thermal protection systems."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Mechanical Insulation", 
      description: "Comprehensive estimates for HVAC duct, piping insulation, industrial equipment, and fire-stopping systems."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Specialty Insulation",
      description: "Detailed analysis for soundproofing, moisture protection, vapor barriers, and radiant barrier systems."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "R-Value Optimization",
      description: "Professional evaluation considering climate conditions, building codes, and energy efficiency requirements."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24-48 Hour Delivery",
      description: "Fast turnaround with comprehensive insulation estimates based on project complexity and specifications."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Advanced Software",
      description: "Using professional tools like PlanSwift, FastWRAP, and Blue Beam with RSMeans pricing databases."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Complete Cost Analysis",
      description: "Detailed breakdown of materials, installation, labor, equipment, and energy savings calculations."
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
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1682148122586-f164be1822db?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
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
                Insulation Estimation
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Professional insulation estimation services for thermal protection, mechanical systems, and energy efficiency projects. Our expert estimators provide accurate cost analysis for all insulation types using advanced technology and industry expertise to ensure optimal R-values and energy savings.
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
              Our <span className="text-orange-500">Insulation</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive insulation estimation services for all thermal protection projects with professional expertise
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

      {/* Insulation Project Importance Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why <span className="text-orange-500">Insulation Estimates</span> Matter
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Insulation estimation services are essential for construction projects as they provide comprehensive understanding of thermal protection costs, energy efficiency benefits, and regulatory compliance requirements. Every insulation project requires precise estimates to establish R-values, materials, and installation methods.
                </p>
                <p>
                  Our expert insulation estimators guarantee accurate cost calculations by evaluating building envelope conditions, climate factors, energy codes, and insulation specifications. We analyze project requirements to determine optimal insulation systems and installation techniques for maximum efficiency.
                </p>
                <p>
                  Since insulation significantly impacts energy costs and building comfort, we provide detailed knowledge needed to make informed decisions about materials, R-values, installation methods, and long-term energy savings for successful project outcomes.
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
                <Thermometer className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Estimation Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Accurate material quantities preventing waste and cost overruns",
                    "Optimal R-value calculations for energy efficiency requirements", 
                    "Comprehensive cost analysis for thermal protection systems",
                    "Energy savings projections and payback period calculations"
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
                <span className="text-orange-500">Residential</span> & Commercial Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our insulation estimates serve all project requirements from residential homes to large commercial and industrial facilities. We provide comprehensive estimations covering spray foam, batt insulation, rigid board, blown-in cellulose, and mechanical system insulation requirements.
                </p>
                <p>
                  Our insulation takeoff covers all elements including thermal barriers, vapor retarders, air sealing, duct insulation, pipe insulation, equipment wrapping, and fire-stopping with precise material and labor calculations using advanced estimation software and industry databases.
                </p>
                <p>
                  We differentiate ourselves through cutting-edge technologies like PlanSwift and FastWRAP, experienced insulation estimators, and commitment to accuracy using zip code-based pricing. FAZICS values client service and produces detailed, itemized insulation estimates with energy efficiency expertise.
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
              Maximize <span className="text-orange-500">Energy Efficiency</span> with Accurate Insulation Estimates!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We consider the pitch and contour of your project, climate conditions, and building requirements to provide accurate insulation estimates. Get comprehensive cost analysis that helps you bid confidently and achieve optimal energy performance.
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

export default InsulationPage;