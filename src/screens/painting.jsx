import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Brush, Home, Building, Calculator, Clock, Users, Target, Palette, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const PaintingPage = () => {
  const location = useLocation();
  const services = [
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Interior & Exterior Painting",
      description: "Complete estimation for interior walls, ceilings, trim, doors, and exterior siding, fascia, shutters, and decorative elements."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential & Commercial", 
      description: "Tailored estimates for both residential homes and commercial buildings with specific coating requirements."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Surface Preparation",
      description: "Comprehensive analysis including surface preparation, primer application, coating systems, and finish work."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Division 09 Expertise",
      description: "Certified estimators experienced in painting and coating specifications for all project types."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "8-16 Hour Delivery",
      description: "Quick turnaround with comprehensive painting estimates delivered based on project complexity."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Software",
      description: "Using approved tools like PlanSwift, Blue Beam, AccuBid, and RSMeans for accuracy."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Detailed Material Lists",
      description: "Complete breakdown of paints, primers, coatings, labor, and equipment with precision."
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
            backgroundImage: "url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
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
                Painting Estimation
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Professional painting estimating services help contractors save time, bid on more projects, and increase contract-winning chances. Our certified Division 09 estimators provide accurate material and labor calculations using advanced digital technology.
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
              Our <span className="text-orange-500">Painting</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive painting estimation services for all coating projects with professional expertise
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

      {/* Painting Project Importance Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why <span className="text-orange-500">Painting Estimates</span> Matter
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Painting estimating services are crucial for construction projects as they provide comprehensive understanding of material, labor, and equipment costs. Every painting project requires accurate estimates to establish project scope, budget, and timeline.
                </p>
                <p>
                  Our certified painting estimators guarantee that clients understand all expenses and materials by providing precise and detailed Division 09 estimates. We evaluate surfaces completely to determine preparation requirements and identify coating specifications.
                </p>
                <p>
                  Since painting and coating work can be a significant investment, we provide our clients with the expertise and knowledge needed to make informed decisions about materials, application methods, and project execution.
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
                <Brush className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Estimation Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Careful planning preventing unexpected cost overruns",
                    "Perfect balance of materials, labor, and equipment guidance", 
                    "Realistic project timelines and smooth coordination",
                    "Quality control ensuring work meets industry standards"
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
                <span className="text-orange-500">Professional</span> & Residential Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our painting estimates serve all project requirements from residential homes to commercial buildings. We provide comprehensive estimations and expert guidance to ensure reliability, quality, and cost-effectiveness from basic touch-ups to complete coating systems.
                </p>
                <p>
                  Our painting takeoff covers interior and exterior painting; surface preparation and primer application; specialty coatings including protective, decorative, and high-performance systems; and commercial facility maintenance including warehouses and industrial spaces.
                </p>
                <p>
                  We differentiate ourselves through advanced digital technologies, experienced Division 09 estimators, and commitment to accuracy and efficiency. FAZICS values client service and produces detailed, itemized project estimates with professional expertise.
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
              Transform Your <span className="text-orange-500">Projects</span> with Professional Painting Estimates!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We deliver accurate estimates and recommend optimal coating solutions for your project needs. Let us provide you with the expertise and knowledge required for successful painting project execution.
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

export default PaintingPage;