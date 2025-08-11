import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Zap, Settings, Building, Calculator, Clock, Users, Target, Wrench, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const StructuralSteelPage = () => {
  const location = useLocation();
  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Structural Steel Fabrication",
      description: "Complete estimation for beams, columns, trusses, plates, connectors, and structural steel framework systems."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Steel Erection & Installation", 
      description: "Detailed estimates for steel erection, installation labor, equipment, cranes, and site assembly requirements."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Miscellaneous Metals",
      description: "Comprehensive analysis for railings, stairs, gratings, decking, metal studs, and architectural steel elements."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Division 05 Expertise",
      description: "Certified estimators experienced in all Division 05 metals specifications and fabrication processes."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24-48 Hour Delivery",
      description: "Fast turnaround with comprehensive structural steel estimates delivered based on project complexity."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Advanced Software",
      description: "Using professional tools like Tekla, SDS2, PlanSwift, Blue Beam, and eTakeoff for precision."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Complete Cost Analysis",
      description: "Detailed breakdown of materials, fabrication, erection, equipment, and labor costs with accuracy."
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
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80')"
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
                Structural Steel Estimation
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Professional structural steel estimating services for Division 05 work including fabrication, erection, and miscellaneous metals. Our certified estimators provide accurate material takeoffs and cost estimates using advanced digital technology and industry expertise.
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
              Our <span className="text-orange-500">Structural Steel</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive structural steel estimation services for all Division 05 projects with professional expertise
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

      {/* Steel Project Importance Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why <span className="text-orange-500">Steel Estimates</span> Matter
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Structural steel estimating services are critical for construction projects as they provide comprehensive understanding of material, fabrication, and erection costs for Division 05 work. Every steel project requires precise estimates to establish scope, budget, and timeline.
                </p>
                <p>
                  Our expert steel estimators guarantee accurate cost calculations by evaluating all aspects of structural steel including beams, columns, connections, plates, and miscellaneous metals. We analyze technical drawings to determine optimal material specifications and fabrication methods.
                </p>
                <p>
                  Since structural steel provides the backbone of modern construction, we provide clients with detailed technical knowledge needed to make informed decisions about materials, fabrication processes, and erection methods for successful project completion.
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
                <Building className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Estimation Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Accurate material quantities preventing fabrication delays",
                    "Precise labor and equipment calculations for erection", 
                    "Comprehensive cost analysis for competitive bidding",
                    "Quality control ensuring structural integrity standards"
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
                <span className="text-orange-500">Commercial</span> & Industrial Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our structural steel estimates serve all project requirements from commercial buildings to industrial facilities and infrastructure projects. We provide comprehensive estimations covering fabrication, erection, equipment, and specialized installation requirements.
                </p>
                <p>
                  Our steel takeoff covers all Division 05 items including structural steel framing, metal decking, stairs, railings, miscellaneous metals, welding, bolting, and surface treatments with precise material and labor calculations using advanced software tools.
                </p>
                <p>
                  We differentiate ourselves through cutting-edge technologies like Tekla and SDS2, experienced Division 05 estimators, and commitment to accuracy using industry-standard software. FAZICS values client service and produces detailed, itemized steel estimates with structural engineering expertise.
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
              Build Strong <span className="text-orange-500">Structures</span> with Accurate Steel Estimates!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Stop leaving money on the table with inaccurate estimates. Get detailed Division 05 structural steel takeoffs with comprehensive material, fabrication, and erection breakdowns delivered within 24-48 hours by our certified professionals.
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

export default StructuralSteelPage;